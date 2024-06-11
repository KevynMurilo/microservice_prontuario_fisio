import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProntuarioService } from './prontuario.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProntuarioSwaggerDto } from './dto/prontuario-swagger.dto';

@ApiTags('Prontuario')
@Controller('prontuario')
export class ProntuarioController {
  constructor(private readonly prontuarioService: ProntuarioService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo prontuário' })
  @ApiResponse({
    status: 201,
    description: 'Retorna o json do prontuário criado',
  })
  @ApiResponse({
    status: 400,
    description: 'Paciente já possui um prontuário',
  })
  @ApiBody({ type: ProntuarioSwaggerDto })
  async create(@Body() data: any) {
    const prontuario = await this.prontuarioService.createFull(
      data.prontuario,
      data.anamnese,
      data.examesFisicos,
      data.objetivos,
      data.condutas,
    );
    return prontuario;
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os prontuários' })
  @ApiResponse({
    status: 200,
    description: 'Retorna o json dos prontuários criados',
  })
  @ApiResponse({
    status: 404,
    description: 'Nenhum prontuário encontrado',
  })
  async findAll() {
    const prontuarios = await this.prontuarioService.findall();
    return prontuarios;
  }

  @Get('paciente/:id')
  @ApiOperation({ summary: 'Listar prontuário por paciente' })
  @ApiResponse({
    status: 200,
    description: 'Retorna o json do prontuário do paciente',
  })
  @ApiResponse({
    status: 404,
    description: 'Prontuário não encontrado',
  })
  async getByPaciente(@Param('id') id: number) {
    const prontuario = await this.prontuarioService.findByPaciente(+id);
    return prontuario;
  }

  @Delete('/paciente/delete/:id')
  @ApiOperation({ summary: 'Deletar prontuário de um paciente especifico' })
  @ApiResponse({
    status: 200,
    description: 'Retorna a mensagem de sucesso',
  })
  @ApiResponse({
    status: 404,
    description: 'Prontuário não encontrado',
  })
  async delete(@Param('id') id_paciente: number) {
    const prontuario = await this.prontuarioService.delete(+id_paciente);
    return prontuario;
  }
}
