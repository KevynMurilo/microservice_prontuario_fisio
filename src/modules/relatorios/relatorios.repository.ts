import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Prisma, Relatorio } from '@prisma/client';

@Injectable()
export class RelatoriosRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByRelatorio(id_relatorio): Promise<Relatorio> {
    return await this.prisma.relatorio.findUnique({
      where: {
        id_relatorio: id_relatorio,
        deleted_at: null,
      },
    });
  }

  async create(data: Prisma.RelatorioCreateInput): Promise<Relatorio> {
    return await this.prisma.relatorio.create({
      data: data,
    });
  }

  async findMany(): Promise<Relatorio[]> {
    return await this.prisma.relatorio.findMany({
      where: {
        deleted_at: null,
      },
    });
  }

  async findByPaciente(id_paciente: number): Promise<Relatorio[]> {
    return await this.prisma.relatorio.findMany({
      where: {
        id_paciente: id_paciente,
        deleted_at: null,
      },
    });
  }

  async delete(id_relatorio: number): Promise<Relatorio> {
    return await this.prisma.relatorio.update({
      where: {
        id_relatorio: id_relatorio,
      },
      data: {
        deleted_at: new Date(),
      },
    });
  }
}
