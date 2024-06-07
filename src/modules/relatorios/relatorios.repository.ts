import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateRelatorioDto } from './dto/create-relatorio.dto';

@Injectable()
export class RelatoriosRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createRelatorioDto: CreateRelatorioDto) {
    return this.prisma.relatorio.create({
      data: {
        id_paciente: createRelatorioDto.id_paciente,
        id_fisioterapeuta: createRelatorioDto.id_fisioterapeuta,
        descricao: createRelatorioDto.descricao,
      },
    });
  }
}
