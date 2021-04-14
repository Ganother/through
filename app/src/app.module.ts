import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ArticleController } from './article/article.controller';
import { DialogController } from './dialog/dialog.controller';
import { ArticleModule } from './article/article.module';
import { DialogModule } from './dialog/dialog.module';
import { TopicController } from './topic/topic.controller';
import { TopicModule } from './topic/topic.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      exclude: ['/api*', '/graphql*'],
    }),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(__dirname, '../../../../graphql.ts'),
      },
      formatError: (err) => {
        console.log(err)
        // Don't give the specific errors to the client.
        if (err.message.startsWith('Database Error: ')) {
          return new Error('Internal server error');
        }
        // Otherwise return the original error. The error can also
        // be manipulated in other ways, as long as it's returned.
        return err;
      },
      path: '/api'
    }),
    UserModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          uri: `mongodb://localhost:27017`,
          dbName: 'transparent',
          user: configService.get<string>('DATABASE_USER'),
          pass: configService.get<string>('DATABASE_PASSWORD'),
          useNewUrlParser: true,
          useFindAndModify: false
        }
      },
      inject: [ConfigService],
    }),
    ConfigModule.forRoot(),
    ArticleModule,
    DialogModule,
    TopicModule
  ],
  controllers: [AppController, ArticleController, DialogController, TopicController],
  providers: [AppService],
})
export class AppModule {
  constructor(private configService: ConfigService) {
  }
}
