import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProntuarioRepository {
  constructor(private readonly prisma: PrismaService) {}

  async prontuarioExiste(id: number) {
    return await this.prisma.prontuario.findUnique({
      where: {
        id_prontuario: id,
        deleted_at: null,
      },
    });
  }

  async verificarPaciente(id: number) {
    return await this.prisma.prontuario.findFirst({
      where: {
        id_paciente: id,
        deleted_at: null,
      },
    });
  }

  async create(data: Prisma.ProntuarioCreateInput) {
    return await this.prisma.prontuario.create({
      data,
    });
  }

  async findAll() {
    return await this.prisma.prontuario.findMany({
      include: {
        anamnese: {
          include: {
            cirurgia: true,
            doencas_concomitantes: true,
          },
        },
        exampes_fisicos: {
          include: {
            adm: true,
            forca_muscular: true,
            complementos: true,
          },
        },
        objetivo: true,
        conduta: true,
      },
    });
  }

  async findDeleted() {
    return await this.prisma.prontuario.findMany({
      where: {
        deleted_at: {
          not: null,
        },
      },
    });
  }

  async findByIdPacient(id: number) {
    return await this.prisma.prontuario.findFirst({
      where: {
        id_paciente: id,
        deleted_at: null,
      },
      include: {
        anamnese: {
          include: {
            cirurgia: true,
            doencas_concomitantes: true,
          },
        },
        exampes_fisicos: {
          include: {
            adm: true,
            forca_muscular: true,
            complementos: true,
          },
        },
        objetivo: true,
        conduta: true,
      },
    });
  }

  async delete(id: number) {
    return await this.prisma.prontuario.update({
      where: {
        id_prontuario: id,
        deleted_at: null,
      },
      data: {
        deleted_at: new Date(),
      },
    });
  }
}
