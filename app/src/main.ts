import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import { FieldMiddleware, MiddlewareContext, NextFn } from '@nestjs/graphql';

const loggerMiddleware: FieldMiddleware = async (
  ctx: MiddlewareContext,
  next: NextFn,
) => {
  console.log(ctx)
  const value = await next();
  console.log(value);
  return value;
};
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if (process.env.NODE_ENV == 'development') {
    app.enableCors();
  }
  await app.listen(2333);
}
bootstrap();
