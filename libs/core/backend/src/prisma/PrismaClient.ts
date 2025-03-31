import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient as PrismaClientBase } from '@prisma/client';

@Injectable()
export class PrismaClient extends PrismaClientBase implements OnModuleInit {
  async onModuleInit() {
    await this.$connect().catch((err: unknown) => {
      // TODO change to logger
      console.error('Error connecting to the database:', err);
    });
  }

  async enableShutdownHooks(app: any) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
