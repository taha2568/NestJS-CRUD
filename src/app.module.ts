import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ProductService],
})
export class AppModule {}
