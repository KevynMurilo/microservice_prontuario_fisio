import { Module } from '@nestjs/common';
import { FichaEvolucaoService } from './ficha-evolucao.service';
import { FichaEvolucaoController } from './ficha-evolucao.controller';
import { FichaEvolucaoRepository } from './ficha-evolucao.repository';
import { PrismaService } from '../database/prisma.service';
import { PacienteModule } from '../paciente/paciente.module';
import { VerificarIdAgendamentoModule } from 'src/common/utils/verificar-id-agendamento/verificar-id-agendamento.module';

@Module({
  imports: [PacienteModule, VerificarIdAgendamentoModule],
  controllers: [FichaEvolucaoController],
  providers: [FichaEvolucaoService, FichaEvolucaoRepository, PrismaService],
})
export class FichaEvolucaoModule {}
