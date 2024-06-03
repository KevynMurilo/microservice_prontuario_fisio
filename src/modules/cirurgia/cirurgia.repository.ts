import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CirurgiaRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: any, prisma: Prisma.TransactionClient) {
    return prisma.cirurgia.create({ data });
  }
}
