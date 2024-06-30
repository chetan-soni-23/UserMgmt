import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { schemas } from '../schemas';
import { MongoDBProvider } from './mongodb.provider';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongoDBProvider,
    MongooseModule.forFeature(schemas),
  ],
  exports: [MongooseModule, MongoDBProvider],
})
export class DatabaseModule {}
