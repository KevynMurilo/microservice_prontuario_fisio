import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
  UnauthorizedException,
} from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { HttpService } from 'src/common/http/http.service';
import { Paciente } from './interfaces/paciente.interface';

@Injectable()
export class PacienteService {
  constructor(
    private readonly httpService: HttpService,
    @Inject('PACIENTE_URL') private readonly pacienteUrl: string,
  ) {}

  async getPacienteId(id_paciente: number, token: string) {
    const url = `${this.pacienteUrl}/Paciente/${id_paciente}`;
    const headers = {
      Authorization: token,
    };

    try {
      const response = await lastValueFrom(
        this.httpService.get<Paciente>(url, { headers }),
      );

      if (!response)
        throw new BadRequestException('Nenhum paciente encontrado');

      return response;
    } catch (error) {
      if (error.response && error.response.status === 401)
        throw new UnauthorizedException(
          'Token de autenticação inválido ou expirado',
        );

      if (error.code === 'ECONNREFUSED')
        throw new ServiceUnavailableException(
          'O serviço de autenticação está indisponível no momento. Por favor, tente novamente mais tarde.',
        );

      if (error.response.status === 404)
        throw new NotFoundException('Paciente não encontrado');

      throw new BadRequestException('Erro ao buscar paciente');
    }
  }
}
