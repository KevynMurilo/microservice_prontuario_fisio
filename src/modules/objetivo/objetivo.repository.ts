import { CreateObjetivoDto } from './dto/create-objetivo.dto';
import { Prisma } from '@prisma/client';

export class ObjetivoRepository {
  async create(
    trx: Prisma.TransactionClient,
    createObjetivoDto: CreateObjetivoDto,
    id_prontuario: number,
  ) {
    const objetivo = await trx.objetivo.create({
      data: {
        descricao_objetivo_fisioterapeutico:
          createObjetivoDto.descricao_objetivo_fisioterapeutico,
        id_prontuario,
      },
    });
    return objetivo;
  }
}
