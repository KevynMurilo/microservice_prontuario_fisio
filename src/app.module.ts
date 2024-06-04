import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/database/prisma.module';
import { ProntuarioModule } from './modules/prontuario/prontuario.module';
import { AnamneseModule } from './modules/anamnese/anamnese.module';

@Module({
  imports: [PrismaModule, ProntuarioModule, AnamneseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
