import { Module } from '@nestjs/common';
import { FichaEvolucaoService } from './ficha_evolucao.service';
import { FichaEvolucaoController } from './ficha_evolucao.controller';
import { FichaEvolucaoRepository } from './ficha-evolucao.repository';
import { PrismaService } from '../database/prisma.service';

@Module({
  controllers: [FichaEvolucaoController],
  providers: [FichaEvolucaoService, FichaEvolucaoRepository, PrismaService],
})
export class FichaEvolucaoModule {}
