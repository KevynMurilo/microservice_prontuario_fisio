import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateRelatorioDto } from './dto/create-relatorio.dto';
import { RelatoriosRepository } from './relatorios.repository';
import { PacienteService } from '../paciente/paciente.service';
import { Request } from 'express';
import { VerificarIdAgendamentoService } from 'src/common/utils/verificar-id-agendamento/verificar-id-agendamento.service';

@Injectable()
export class RelatoriosService {
  constructor(
    private readonly relatoriosRepository: RelatoriosRepository,
    private readonly pacienteService: PacienteService,
    private readonly verificarIdAgendamento: VerificarIdAgendamentoService,
  ) {}

  async create(
    createRelatorioDto: CreateRelatorioDto,
    req: Request,
  ): Promise<CreateRelatorioDto> {
    const user = req.user;
    const id_fisioterapeuta = Number(user.UserId);

    const paciente = await this.pacienteService.getPacienteId(
      createRelatorioDto.id_paciente,
      req.headers.authorization,
    );

    if (paciente.data.primeiraConsulta) {
      throw new BadRequestException(
        'Paciente só pode ter relatorio após a primeira consulta',
      );
    }

    await this.verificarIdAgendamento.verify(createRelatorioDto.id_agendamento);

    return await this.relatoriosRepository.create({
      ...createRelatorioDto,
      id_fisioterapeuta,
    });
  }

  async findMany(): Promise<CreateRelatorioDto[]> {
    const relatorios = await this.relatoriosRepository.findMany();
    if (relatorios.length === 0)
      throw new NotFoundException('Nenhum relatorio encontrado');
    return relatorios;
  }

  async findByPaciente(id_paciente: number): Promise<CreateRelatorioDto[]> {
    const relatorio =
      await this.relatoriosRepository.findByPaciente(id_paciente);
    if (relatorio.length === 0)
      throw new NotFoundException('Nenhum relatorio encontrado');
    return relatorio;
  }

  async delete(
    id_relatorio: number,
  ): Promise<NotFoundException | { message: string }> {
    const relatorioExists =
      await this.relatoriosRepository.findByRelatorio(id_relatorio);
    if (!relatorioExists)
      throw new NotFoundException('Relatorio não encontrado');

    await this.relatoriosRepository.delete(id_relatorio);
    return { message: 'Relatorio deletado com sucesso' };
  }
}
