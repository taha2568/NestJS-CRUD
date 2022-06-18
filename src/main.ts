import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Knex from 'knex';
import {Model} from 'objection';
import {config} from 'knexfile';

async function bootstrap() {
  const database = Knex(config);
  Model.knex(database);
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
