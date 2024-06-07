import { Module } from '@nestjs/common';
import { RelatoriosService } from './relatorios.service';
import { RelatoriosController } from './relatorios.controller';
import { RelatoriosRepository } from './relatorios.repository';
import { PrismaService } from '../database/prisma.service';

@Module({
  controllers: [RelatoriosController],
  providers: [RelatoriosService, RelatoriosRepository, PrismaService],
})
export class RelatoriosModule {}
