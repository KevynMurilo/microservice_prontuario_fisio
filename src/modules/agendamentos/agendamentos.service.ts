import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { HttpService } from 'src/common/http/http.service';
import { Agendamento } from './interfaces/agendamento.interface';

@Injectable()
export class AgendamentosService {
  constructor(
    private readonly httpService: HttpService,
    @Inject('AGENDAMENTOS_URL') private readonly agendamentosUrl: string,
  ) {}

  async getAgendamentoPaciente(id_paciente: number): Promise<Agendamento> {
    const url = `${this.agendamentosUrl}/agendamentos/paciente/${id_paciente}`;
    const response = await lastValueFrom(
      this.httpService.get<Agendamento[]>(url),
    );

    if (!Array.isArray(response.data) || response.data.length === 0) {
      throw new BadRequestException(
        'Nenhum agendamento encontrado para o paciente',
      );
    }

    return response.data[response.data.length - 1];
  }
}
