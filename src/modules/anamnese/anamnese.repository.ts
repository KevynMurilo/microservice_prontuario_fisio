import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AnamneseRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    data: Prisma.AnamneseCreateInput,
    prisma: Prisma.TransactionClient,
  ) {
    return prisma.anamnese.create({ data });
  }
}
