import { Module } from '@nestjs/common';
import { ProntuarioService } from './prontuario.service';
import { ProntuarioController } from './prontuario.controller';
import { PrismaService } from '../database/prisma.service';
import { ProntuarioRepository } from './prontuario.repository';

@Module({
  controllers: [ProntuarioController],
  providers: [ProntuarioService, ProntuarioRepository, PrismaService],
})
export class ProntuarioModule {}
