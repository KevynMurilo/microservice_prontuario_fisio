import { Module } from '@nestjs/common';
import { RelatoriosService } from './relatorios.service';
import { RelatoriosController } from './relatorios.controller';
import { RelatoriosRepository } from './relatorios.repository';
import { PrismaService } from '../database/prisma.service';
import { AgendamentosModule } from '../agendamentos/agendamentos.module';
import { JwtModule } from 'src/common/jwt/jwt.module';
import { PacienteModule } from '../paciente/paciente.module';

@Module({
  imports: [AgendamentosModule, PacienteModule, JwtModule],
  controllers: [RelatoriosController],
  providers: [RelatoriosService, RelatoriosRepository, PrismaService],
})
export class RelatoriosModule {}
