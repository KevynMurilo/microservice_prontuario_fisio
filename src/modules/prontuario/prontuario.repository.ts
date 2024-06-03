import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class ProntuarioRepository {
  constructor(private readonly prisma: PrismaService) {}

  async verificarPaciente(id: number) {
    return await this.prisma.prontuario.findFirst({
      where: {
        id_paciente: id,
      },
    });
  }

  async create(data: any) {
    return await this.prisma.prontuario.create({
      data,
    });
  }

  async findAll() {
    return await this.prisma.prontuario.findMany();
  }

  async findByIdPacient(id: number) {
    return await this.prisma.prontuario.findFirst({
      where: { id_paciente: id },
    });
  }
}
