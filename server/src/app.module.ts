import { Module } from '@nestjs/common';
import { RegisterModule } from './register/register.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/buy-label'),
    RegisterModule,
  ],
})
export class AppModule {}
