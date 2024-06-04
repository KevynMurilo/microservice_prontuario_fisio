import { Module } from '@nestjs/common';
import { ProntuarioService } from './prontuario.service';
import { ProntuarioController } from './prontuario.controller';
import { PrismaService } from '../database/prisma.service';
import { ProntuarioRepository } from './prontuario.repository';
import { AnamneseModule } from '../anamnese/anamnese.module';

@Module({
  imports: [AnamneseModule],
  controllers: [ProntuarioController],
  providers: [ProntuarioService, ProntuarioRepository, PrismaService],
})
export class ProntuarioModule {}
