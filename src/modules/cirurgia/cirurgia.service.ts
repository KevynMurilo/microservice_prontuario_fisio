import { Injectable } from '@nestjs/common';
import { CreateCirurgiaDto } from './dto/create-cirurgia.dto';
import { CirurgiaRepository } from './cirurgia.repository';
import { Prisma } from '@prisma/client';

@Injectable()
export class CirurgiaService {
  constructor(private readonly cirurgiaRepository: CirurgiaRepository) {}

  async create(
    createCirurgiaDto: CreateCirurgiaDto,
    prisma: Prisma.TransactionClient,
  ) {
    return this.cirurgiaRepository.create(createCirurgiaDto, prisma);
  }
}
