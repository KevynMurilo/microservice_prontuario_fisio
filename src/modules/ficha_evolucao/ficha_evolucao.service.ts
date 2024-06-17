import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFichaEvolucaoDto } from './dto/create-ficha_evolucao.dto';
import { FichaEvolucaoRepository } from './ficha-evolucao.repository';
import { Request } from 'express';
import { PacienteService } from '../paciente/paciente.service';

@Injectable()
export class FichaEvolucaoService {
  constructor(
    private readonly fichaEvolucaoRepository: FichaEvolucaoRepository,
    private readonly pacienteService: PacienteService,
  ) {}

  async create(
    createFichaEvolucaoDto: CreateFichaEvolucaoDto,
    req: Request,
  ): Promise<CreateFichaEvolucaoDto> {
    const user = req.user;
    const id_fisioterapeuta = Number(user.UserId);

    await this.pacienteService.getPacienteId(
      createFichaEvolucaoDto.id_paciente,
      req.headers.authorization,
    );

    return await this.fichaEvolucaoRepository.create({
      ...createFichaEvolucaoDto,
      id_fisioterapeuta: id_fisioterapeuta,
    });
  }

  async findMany(): Promise<CreateFichaEvolucaoDto[]> {
    const fichaEvolucao = await this.fichaEvolucaoRepository.findMany();
    if (fichaEvolucao.length === 0)
      throw new NotFoundException('Nenhuma ficha de evolução encontrada');
    return fichaEvolucao;
  }

  async findByPaciente(id_paciente: number): Promise<CreateFichaEvolucaoDto[]> {
    const fichaEvolucao =
      await this.fichaEvolucaoRepository.findByPaciente(id_paciente);
    if (fichaEvolucao.length === 0)
      throw new NotFoundException('Nenhuma ficha de evolução encontrada');
    return fichaEvolucao;
  }

  async delete(
    id_ficha_de_evolucao: number,
  ): Promise<NotFoundException | { message: string }> {
    const fichaDeEvolucaoExists =
      await this.fichaEvolucaoRepository.findByFichaDeEvolucao(
        id_ficha_de_evolucao,
      );
    if (!fichaDeEvolucaoExists) {
      throw new NotFoundException('Ficha de evolução não encontrada');
    }

    await this.fichaEvolucaoRepository.delete(id_ficha_de_evolucao);

    return { message: 'Ficha de evolução deletada com sucesso' };
  }
}
