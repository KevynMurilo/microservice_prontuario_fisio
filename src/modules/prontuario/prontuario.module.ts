import { Module } from '@nestjs/common';
import { ProntuarioService } from './prontuario.service';
import { ProntuarioController } from './prontuario.controller';
import { PrismaService } from '../database/prisma.service';
import { ProntuarioRepository } from './prontuario.repository';
import { AnamneseModule } from '../anamnese/anamnese.module';
import { ExamesFisicosModule } from '../exames_fisicos/exames_fisicos.module';
import { ObjetivoModule } from '../objetivo/objetivo.module';
import { CondutasModule } from '../condutas/condutas.module';
import { AgendamentosModule } from '../agendamentos/agendamentos.module';

@Module({
  imports: [
    AnamneseModule,
    ExamesFisicosModule,
    ObjetivoModule,
    CondutasModule,
    AgendamentosModule,
  ],
  controllers: [ProntuarioController],
  providers: [ProntuarioService, ProntuarioRepository, PrismaService],
})
export class ProntuarioModule {}
