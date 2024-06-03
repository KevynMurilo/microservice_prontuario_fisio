import { Module } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { DoencaConcomitanteService } from './doenca-concomitante.service';
import { DoencaConcomitanteRepository } from './doenca-concomitante.repository';

@Module({
  providers: [
    DoencaConcomitanteService,
    DoencaConcomitanteRepository,
    PrismaService,
  ],
  exports: [DoencaConcomitanteService],
})
export class DoencaConcomitanteModule {}
