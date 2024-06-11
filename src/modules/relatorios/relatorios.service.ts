import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateRelatorioDto } from './dto/create-relatorio.dto';
import { RelatoriosRepository } from './relatorios.repository';
import { AgendamentosService } from '../agendamentos/agendamentos.service';

@Injectable()
export class RelatoriosService {
  constructor(
    private readonly relatoriosRepository: RelatoriosRepository,
    private readonly agendamentoService: AgendamentosService,
  ) {}

  async create(
    createRelatorioDto: CreateRelatorioDto,
  ): Promise<CreateRelatorioDto> {
    const lastAppointment =
      await this.agendamentoService.getAgendamentoPaciente(
        createRelatorioDto.id_paciente,
      );

    if (!lastAppointment.primeira_consulta) {
      return await this.relatoriosRepository.create(createRelatorioDto);
    } else {
      throw new BadRequestException(
        'O paciente só pode criar o relatorio se não for a primeira consulta',
      );
    }
  }

  async findMany(): Promise<CreateRelatorioDto[]> {
    const relatorios = await this.relatoriosRepository.findMany();
    if (relatorios.length === 0)
      throw new NotFoundException('Nenhum relatorio encontrado');
    return relatorios;
  }

  async findByPaciente(id_paciente: number): Promise<CreateRelatorioDto[]> {
    const relatorio =
      await this.relatoriosRepository.findByPaciente(id_paciente);
    if (relatorio.length === 0)
      throw new NotFoundException('Nenhum relatorio encontrado');
    return relatorio;
  }

  async delete(
    id_relatorio: number,
  ): Promise<NotFoundException | { message: string }> {
    const relatorioExists =
      await this.relatoriosRepository.findByRelatorio(id_relatorio);
    if (!relatorioExists)
      throw new NotFoundException('Relatorio não encontrado');

    await this.relatoriosRepository.delete(id_relatorio);
    return { message: 'Relatorio deletado com sucesso' };
  }
}
