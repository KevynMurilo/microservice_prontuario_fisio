import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFichaEvolucaoDto } from './dto/create-ficha_evolucao.dto';
import { FichaEvolucaoRepository } from './ficha-evolucao.repository';

@Injectable()
export class FichaEvolucaoService {
  constructor(
    private readonly fichaEvolucaoRepository: FichaEvolucaoRepository,
  ) {}

  async create(createFichaEvolucaoDto: CreateFichaEvolucaoDto) {
    const fichaEvolucao = await this.fichaEvolucaoRepository.create(
      createFichaEvolucaoDto,
    );
    return fichaEvolucao;
  }

  async findMany() {
    const fichaEvolucao = await this.fichaEvolucaoRepository.findMany();
    if (fichaEvolucao.length === 0)
      throw new NotFoundException('Nenhum relatorio encontrado');
    return fichaEvolucao;
  }

  async findByPaciente(id_paciente: number) {
    const fichaEvolucao =
      await this.fichaEvolucaoRepository.findByPaciente(id_paciente);
    if (fichaEvolucao.length === 0)
      throw new NotFoundException('Nenhuma ficha de evolução encontrada');
    return fichaEvolucao;
  }
}
