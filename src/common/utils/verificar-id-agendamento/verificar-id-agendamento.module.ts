import { Module } from '@nestjs/common';
import { VerificarIdAgendamentoService } from './verificar-id-agendamento.service';
import { PrismaService } from 'src/modules/database/prisma.service';

@Module({
  providers: [VerificarIdAgendamentoService, PrismaService],
  exports: [VerificarIdAgendamentoService],
})
export class VerificarIdAgendamentoModule {}
