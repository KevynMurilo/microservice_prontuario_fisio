import { Module } from '@nestjs/common';
import { ObjetivoService } from './objetivo.service';
import { PrismaService } from '../database/prisma.service';
import { ObjetivoRepository } from './objetivo.repository';

@Module({
  controllers: [],
  providers: [ObjetivoService, ObjetivoRepository, PrismaService],
  exports: [ObjetivoService],
})
export class ObjetivoModule {}
