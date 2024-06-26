import { Module } from '@nestjs/common';
import { RelatoriosService } from './relatorios.service';
import { RelatoriosController } from './relatorios.controller';
import { RelatoriosRepository } from './relatorios.repository';
import { PrismaService } from '../database/prisma.service';
import { JwtModule } from 'src/common/jwt/jwt.module';
import { PacienteModule } from '../paciente/paciente.module';
import { VerificarIdAgendamentoModule } from 'src/common/utils/verificar-id-agendamento/verificar-id-agendamento.module';

@Module({
  imports: [PacienteModule, JwtModule, VerificarIdAgendamentoModule],
  controllers: [RelatoriosController],
  providers: [RelatoriosService, RelatoriosRepository, PrismaService],
})
export class RelatoriosModule {}
