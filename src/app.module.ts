import { Module } from '@nestjs/common';
import {ProductModule} from '../Product/Product.module';

@Module({
  imports: [ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
