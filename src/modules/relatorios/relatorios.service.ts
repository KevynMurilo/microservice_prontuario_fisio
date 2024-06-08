import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRelatorioDto } from './dto/create-relatorio.dto';
import { RelatoriosRepository } from './relatorios.repository';

@Injectable()
export class RelatoriosService {
  constructor(private readonly relatoriosRepository: RelatoriosRepository) {}

  async create(createRelatorioDto: CreateRelatorioDto) {
    const relatorio =
      await this.relatoriosRepository.create(createRelatorioDto);
    return relatorio;
  }

  async findMany() {
    const relatorios = await this.relatoriosRepository.findMany();
    if (relatorios.length === 0)
      throw new NotFoundException('Nenhum relatorio encontrado');
    return relatorios;
  }

  async findByPaciente(id_paciente: number) {
    const relatorio =
      await this.relatoriosRepository.findByPaciente(id_paciente);
    if (relatorio.length === 0)
      throw new NotFoundException('Nenhum relatorio encontrado');
    return relatorio;
  }
}
