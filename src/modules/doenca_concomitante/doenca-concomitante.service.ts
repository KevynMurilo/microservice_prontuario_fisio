import { Injectable } from '@nestjs/common';
import { DoencaConcomitanteRepository } from './doenca-concomitante.repository';
import { CreateDoencaConcomitanteDto } from './dto/create-doenca-concomitante.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class DoencaConcomitanteService {
  constructor(
    private readonly doencaConcomitanteRepository: DoencaConcomitanteRepository,
  ) {}

  async create(
    createDoencaConcomitanteDto: CreateDoencaConcomitanteDto,
    prisma: Prisma.TransactionClient,
  ) {
    return this.doencaConcomitanteRepository.create(
      createDoencaConcomitanteDto,
      prisma,
    );
  }
}
