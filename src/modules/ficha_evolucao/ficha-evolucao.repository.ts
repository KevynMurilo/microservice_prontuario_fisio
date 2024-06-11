import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateFichaEvolucaoDto } from './dto/create-ficha_evolucao.dto';

@Injectable()
export class FichaEvolucaoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByFichaDeEvolucao(id_ficha_de_evolucao) {
    return await this.prisma.fichaEvolucao.findUnique({
      where: {
        id_ficha_evolucao: id_ficha_de_evolucao,
        deleted_at: null,
      },
    });
  }

  async create(createFichaEvolucaoDto: CreateFichaEvolucaoDto) {
    return await this.prisma.fichaEvolucao.create({
      data: {
        id_paciente: createFichaEvolucaoDto.id_paciente,
        id_fisioterapeuta: createFichaEvolucaoDto.id_fisioterapeuta,
        descricao: createFichaEvolucaoDto.descricao,
      },
    });
  }

  async findMany() {
    return await this.prisma.fichaEvolucao.findMany();
  }

  async findByPaciente(id_paciente: number) {
    return await this.prisma.fichaEvolucao.findMany({
      where: {
        id_paciente: id_paciente,
        deleted_at: null,
      },
    });
  }

  async delete(id_ficha_de_evolucao: number) {
    return await this.prisma.fichaEvolucao.delete({
      where: {
        id_ficha_evolucao: id_ficha_de_evolucao,
        deleted_at: null,
      },
    });
  }
}
