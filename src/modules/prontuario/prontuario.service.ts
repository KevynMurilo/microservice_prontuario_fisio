import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ProntuarioRepository } from './prontuario.repository';
import { CreateProntuarioDto } from './dto/create-prontuario.dto';

@Injectable()
export class ProntuarioService {
  constructor(private readonly prontuarioRepository: ProntuarioRepository) {}

  async create(createProntuarioDto: CreateProntuarioDto) {
    const verify = await this.prontuarioRepository.verificarPaciente(
      createProntuarioDto.id_paciente,
    );
    if (verify)
      throw new BadRequestException('Paciente já possui um prontuário');

    const createProntuario =
      await this.prontuarioRepository.create(createProntuarioDto);
    return createProntuario;
  }

  async findall() {
    const prontuarios = await this.prontuarioRepository.findAll();
    if (prontuarios.length === 0)
      throw new NotFoundException('Nenhum prontuário encontrado');
    return prontuarios;
  }

  async findByIdPacient(id: number) {
    const prontuario = await this.prontuarioRepository.findByIdPacient(id);
    if (!prontuario)
      throw new NotFoundException('Nenhum prontuário encontrado');
    return prontuario;
  }
}
