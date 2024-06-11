import { Module } from '@nestjs/common';
import { RelatoriosService } from './relatorios.service';
import { RelatoriosController } from './relatorios.controller';
import { RelatoriosRepository } from './relatorios.repository';
import { PrismaService } from '../database/prisma.service';
import { AgendamentosModule } from '../agendamentos/agendamentos.module';

@Module({
  imports: [AgendamentosModule],
  controllers: [RelatoriosController],
  providers: [RelatoriosService, RelatoriosRepository, PrismaService],
})
export class RelatoriosModule {}
