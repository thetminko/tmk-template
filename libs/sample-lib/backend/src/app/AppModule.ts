import { DynamicModule, Module } from '@nestjs/common';
import { PrismaModule } from '@core/backend';
import { AppController } from './AppController';

@Module({})
export class AppModule {
  static forRoot(): DynamicModule {
    return {
      module: AppModule,
      controllers: [AppController],
      imports: [PrismaModule.forRoot()]
    };
  }
}
