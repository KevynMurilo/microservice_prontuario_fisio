import { Injectable } from '@nestjs/common';
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
}
