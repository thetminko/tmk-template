import { Module } from '@nestjs/common';
import { PrismaClient } from './PrismaClient';

@Module({})
export class PrismaModule {
  static forRoot() {
    return {
      module: PrismaModule,
      global: true,
      providers: [PrismaClient],
      exports: [PrismaClient]
    };
  }
}
