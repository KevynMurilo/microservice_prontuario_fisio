import { Module } from '@nestjs/common';
import { AnamneseService } from './anamnese.service';
import { PrismaService } from '../database/prisma.service';
import { AnamneseRepository } from './anamnese.repository';

@Module({
  imports: [],
  providers: [AnamneseService, AnamneseRepository, PrismaService],
  exports: [AnamneseService],
})
export class AnamneseModule {}
