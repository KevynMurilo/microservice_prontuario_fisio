import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/database/prisma.module';
import { ProntuarioModule } from './modules/prontuario/prontuario.module';

@Module({
  imports: [PrismaModule, ProntuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
