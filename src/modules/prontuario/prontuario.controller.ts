import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { ProntuarioService } from './prontuario.service';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ProntuarioSwaggerDto } from './dto/prontuario-swagger.dto';
import { Request } from 'express';

@ApiTags('Prontuario')
@ApiBearerAuth('access-token')
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
  @ApiResponse({
    status: 401,
    description: 'Token não encontrado ou inválido',
  })
  @ApiResponse({
    status: 404,
    description: '"Paciente não encontrado"',
  })
  @ApiBody({ type: ProntuarioSwaggerDto })
  async create(@Body() data: any, @Req() req: Request) {
    return await this.prontuarioService.createFull(
      data.prontuario,
      data.anamnese,
      data.examesFisicos,
      data.objetivos,
      data.condutas,
      req,
    );
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os prontuários' })
  @ApiResponse({
    status: 200,
    description: 'Retorna o json dos prontuários criados',
  })
  @ApiResponse({
    status: 401,
    description: 'Token não encontrado ou inválido',
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
    status: 401,
    description: 'Token não encontrado ou inválido',
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
    status: 401,
    description: 'Token não encontrado ou inválido',
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
