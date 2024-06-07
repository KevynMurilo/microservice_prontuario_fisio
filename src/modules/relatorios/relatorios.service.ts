import { Injectable } from '@nestjs/common';
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
}
