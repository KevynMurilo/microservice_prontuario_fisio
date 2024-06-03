import { Module } from '@nestjs/common';
import { CirurgiaService } from './cirurgia.service';
import { PrismaService } from '../database/prisma.service';
import { CirurgiaRepository } from './cirurgia.repository';

@Module({
  providers: [CirurgiaService, CirurgiaRepository, PrismaService],
  exports: [CirurgiaService],
})
export class CirurgiaModule {}
