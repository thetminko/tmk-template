import { Module } from '@nestjs/common';
import { AppController } from './AppController';
import { AppService } from './AppService';
import { AppModule } from '@sample-lib/backend';

@Module({
  imports: [AppModule],
  controllers: [AppController],
  providers: [AppService]
})
export class SampleApiModule {}
