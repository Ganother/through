import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { ArticleResolver} from './article.resolver'
import { MongooseModule } from '@nestjs/mongoose';
import {Article, ArticleSchema} from '../schemas/article.schema'
@Module({
  imports: [MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }])],
  controllers: [ArticleController],
  providers: [ArticleService,ArticleResolver]
})
export class ArticleModule {}
