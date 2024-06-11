import { Injectable } from '@nestjs/common';
import { ObjetivoRepository } from './objetivo.repository';
import { CreateObjetivoDto } from './dto/create-objetivo.dto';
import { Objetivo, Prisma } from '@prisma/client';

@Injectable()
export class ObjetivoService {
  constructor(private readonly objetivoRepository: ObjetivoRepository) {}

  async create(
    trx: Prisma.TransactionClient,
    createObjetivoDto: CreateObjetivoDto[],
    id_prontuario: number,
  ): Promise<Objetivo[]> {
    const results = [];
    for (const objetivo of createObjetivoDto) {
      const result = await this.objetivoRepository.create(
        trx,
        objetivo,
        id_prontuario,
      );
      results.push(result);
    }
    return results;
  }
}
