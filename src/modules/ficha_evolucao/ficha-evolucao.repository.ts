import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateFichaEvolucaoDto } from './dto/create-ficha_evolucao.dto';

@Injectable()
export class FichaEvolucaoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createFichaEvolucaoDto: CreateFichaEvolucaoDto) {
    return this.prisma.fichaEvolucao.create({
      data: {
        id_paciente: createFichaEvolucaoDto.id_paciente,
        id_fisioterapeuta: createFichaEvolucaoDto.id_fisioterapeuta,
        descricao: createFichaEvolucaoDto.descricao,
      },
    });
  }

  async findMany() {
    const fichaEvolucao = this.prisma.fichaEvolucao.findMany();
    return fichaEvolucao;
  }

  async findByPaciente(id_paciente: number) {
    const fichaEvolucao = await this.prisma.fichaEvolucao.findMany({
      where: {
        id_paciente: id_paciente,
      },
    });
    return fichaEvolucao;
  }
}
