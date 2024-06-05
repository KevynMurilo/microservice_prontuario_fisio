import { Module } from '@nestjs/common';
import { ExamesFisicosService } from './exames_fisicos.service';
import { PrismaService } from '../database/prisma.service';
import { ExamesFisicosRepository } from './exames-fisicos.repository';

@Module({
  imports: [],
  providers: [ExamesFisicosService, ExamesFisicosRepository, PrismaService],
  exports: [ExamesFisicosService],
})
export class ExamesFisicosModule {}
