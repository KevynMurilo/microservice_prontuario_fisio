import { Module } from '@nestjs/common';
import { ProntuarioService } from './prontuario.service';
import { ProntuarioController } from './prontuario.controller';
import { PrismaService } from '../database/prisma.service';
import { ProntuarioRepository } from './prontuario.repository';
import { AnamneseModule } from '../anamnese/anamnese.module';
import { ExamesFisicosModule } from '../exames-fisicos/exames-fisicos.module';
import { ObjetivoModule } from '../objetivo/objetivo.module';
import { CondutasModule } from '../condutas/condutas.module';
import { PacienteModule } from '../paciente/paciente.module';
import { VerificarIdAgendamentoModule } from 'src/common/utils/verificar-id-agendamento/verificar-id-agendamento.module';

@Module({
  imports: [
    AnamneseModule,
    ExamesFisicosModule,
    ObjetivoModule,
    CondutasModule,
    PacienteModule,
    VerificarIdAgendamentoModule,
  ],
  controllers: [ProntuarioController],
  providers: [ProntuarioService, ProntuarioRepository, PrismaService],
})
export class ProntuarioModule {}
