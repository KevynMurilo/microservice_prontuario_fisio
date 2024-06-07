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
}
