import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateRelatorioDto } from './dto/create-relatorio.dto';

@Injectable()
export class RelatoriosRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByRelatorio(id_relatorio) {
    return await this.prisma.relatorio.findUnique({
      where: {
        id_relatorio: id_relatorio,
        deleted_at: null,
      },
    });
  }

  async create(createRelatorioDto: CreateRelatorioDto) {
    return await this.prisma.relatorio.create({
      data: {
        id_paciente: createRelatorioDto.id_paciente,
        id_fisioterapeuta: createRelatorioDto.id_fisioterapeuta,
        descricao: createRelatorioDto.descricao,
      },
    });
  }

  async findMany() {
    return await this.prisma.relatorio.findMany({
      where: {
        deleted_at: null,
      },
    });
  }

  async findByPaciente(id_paciente: number) {
    return await this.prisma.relatorio.findMany({
      where: {
        id_paciente: id_paciente,
        deleted_at: null,
      },
    });
  }

  async delete(id_relatorio: number) {
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
