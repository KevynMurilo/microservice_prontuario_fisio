import { Injectable } from '@nestjs/common';
import { CreateCondutaDto } from './dto/create-conduta.dto';
import { Prisma } from '@prisma/client';
import { CondutasRepository } from './condutas.repository';

@Injectable()
export class CondutasService {
  constructor(private readonly condutasRepository: CondutasRepository) {}

  async create(
    trx: Prisma.TransactionClient,
    createCondutaDto: CreateCondutaDto[],
    id_prontuario: number,
  ) {
    const results = [];
    for (const condutas of createCondutaDto) {
      const result = await this.condutasRepository.create(
        trx,
        condutas,
        id_prontuario,
      );
      results.push(result);
    }

    return results;
  }
}
