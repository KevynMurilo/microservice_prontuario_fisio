import {
  BadRequestException,
  Inject,
  Injectable,
  ServiceUnavailableException,
} from '@nestjs/common';
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
    try {
      const response = await lastValueFrom(
        this.httpService.get<Agendamento[]>(url),
      );

      if (
        !Array.isArray(response.data) ||
        response.data.length === 0 ||
        !response
      ) {
        throw new BadRequestException(
          'Nenhum agendamento encontrado para o paciente',
        );
      }

      return response.data[response.data.length - 1];
    } catch (error) {
      if (error.code === 'ECONNREFUSED') {
        throw new ServiceUnavailableException(
          'O serviço de agendamentos está indisponível no momento. Por favor, tente novamente mais tarde.',
        );
      }
      throw error;
    }
  }
}
