import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Knex from 'knex';
import {Model} from 'objection';
import {config} from 'knexfile';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const database = Knex(config);
  Model.knex(database);
  const app = await NestFactory.create(AppModule);
  const openAPI_config = new DocumentBuilder()
      .setTitle('Product')
      .setDescription('an api for products')
      .setVersion('1.0')
      .build();
  const document = SwaggerModule.createDocument(app, openAPI_config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
