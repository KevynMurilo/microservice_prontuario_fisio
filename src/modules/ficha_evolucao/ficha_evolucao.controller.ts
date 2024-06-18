import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  NotFoundException,
  Req,
} from '@nestjs/common';
import { FichaEvolucaoService } from './ficha_evolucao.service';
import { CreateFichaEvolucaoDto } from './dto/create-ficha_evolucao.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Request } from 'express';

@ApiTags('ficha-evolucao')
@ApiBearerAuth('access-token')
@Controller('fichaEvolucao')
export class FichaEvolucaoController {
  constructor(private readonly fichaEvolucaoService: FichaEvolucaoService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova ficha de evolução' })
  @ApiResponse({
    status: 201,
    description: 'Retorna o json da ficha de evolução',
  })
  @ApiResponse({
    status: 400,
    description:
      'Paciente só pode ter ficha de evolução após a primeira consulta',
  })
  @ApiResponse({
    status: 401,
    description: 'Token não encontrado ou inválido',
  })
  @ApiResponse({
    status: 404,
    description: '"Paciente não encontrado"',
  })
  @ApiResponse({
    status: 409,
    description: '"Id do agendamento já está em uso"',
  })
  create(
    @Body() createFichaEvolucaoDto: CreateFichaEvolucaoDto,
    @Req() req: Request,
  ): Promise<CreateFichaEvolucaoDto> {
    return this.fichaEvolucaoService.create(createFichaEvolucaoDto, req);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as fichas de evolução' })
  @ApiResponse({
    status: 200,
    description: 'Retorna o json das ficha de evolução criados',
  })
  @ApiResponse({
    status: 401,
    description: 'Token não encontrado ou inválido',
  })
  @ApiResponse({
    status: 404,
    description: 'Nenhuma ficha de evolução encontrada',
  })
  findMany(): Promise<CreateFichaEvolucaoDto[]> {
    return this.fichaEvolucaoService.findMany();
  }

  @Get('paciente/:id')
  @ApiOperation({ summary: 'Listar fichas de evolução por paciente' })
  @ApiResponse({
    status: 200,
    description: 'Retorna o json das fichas de evolução do paciente',
  })
  @ApiResponse({
    status: 401,
    description: 'Token não encontrado ou inválido',
  })
  @ApiResponse({
    status: 404,
    description: 'Fichas de evolução não encontradas',
  })
  findByPaciente(
    @Param('id') id_paciente: number,
  ): Promise<CreateFichaEvolucaoDto[]> {
    return this.fichaEvolucaoService.findByPaciente(+id_paciente);
  }

  @Delete('delete/:id')
  @ApiOperation({
    summary: 'Deletar ficha de evolução de um paciente especifico',
  })
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
    description: 'Ficha de evolução não encontrado',
  })
  delete(
    @Param('id') id_ficha_de_evolucao: number,
  ): Promise<NotFoundException | { message: string }> {
    return this.fichaEvolucaoService.delete(+id_ficha_de_evolucao);
  }
}
