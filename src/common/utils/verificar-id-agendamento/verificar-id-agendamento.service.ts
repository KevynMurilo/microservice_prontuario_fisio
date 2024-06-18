import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/database/prisma.service';

@Injectable()
export class VerificarIdAgendamentoService {
  constructor(private readonly prisma: PrismaService) {}

  async verify(id: number): Promise<void> {
    const prontuario = await this.getByAgendamentoProntuario(id);
    const relatorio = await this.getByAgendamentoRelatorio(id);
    const fichaEvolucao = await this.getByAgendamentoFichaEvolucao(id);

    if (prontuario || relatorio || fichaEvolucao) {
      throw new ConflictException('Id do agendamento já está em uso');
    }
  }

  private async getByAgendamentoProntuario(id: number): Promise<boolean> {
    const result = await this.prisma.prontuario.findUnique({
      where: {
        id_agendamento: id,
        deleted_at: null,
      },
      select: {
        id_agendamento: true,
      },
    });
    return !!result;
  }

  private async getByAgendamentoRelatorio(id: number): Promise<boolean> {
    const result = await this.prisma.relatorio.findUnique({
      where: {
        id_agendamento: id,
        deleted_at: null,
      },
      select: {
        id_agendamento: true,
      },
    });
    return !!result;
  }

  private async getByAgendamentoFichaEvolucao(id: number): Promise<boolean> {
    const result = await this.prisma.fichaEvolucao.findUnique({
      where: {
        id_agendamento: id,
        deleted_at: null,
      },
      select: {
        id_agendamento: true,
      },
    });
    return !!result;
  }
}
