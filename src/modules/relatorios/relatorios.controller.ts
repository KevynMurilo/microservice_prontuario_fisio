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
import { RelatoriosService } from './relatorios.service';
import { CreateRelatorioDto } from './dto/create-relatorio.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtService } from 'src/common/jwt/jwt.service';
import { Request } from 'express';

@ApiTags('relatorios')
@ApiBearerAuth('access-token')
@Controller('relatorios')
export class RelatoriosController {
  constructor(
    private readonly relatoriosService: RelatoriosService,
    private readonly jwtService: JwtService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo relatório' })
  @ApiResponse({
    status: 201,
    description: 'Retorna o json do relatório criado',
  })
  @ApiResponse({
    status: 400,
    description: 'Paciente só pode ter relatorio após a primeira consulta',
  })
  @ApiResponse({
    status: 401,
    description: 'Token não encontrado ou inválido',
  })
  @ApiResponse({
    status: 404,
    description: '"Paciente não encontrado"',
  })
  create(
    @Body() createRelatorioDto: CreateRelatorioDto,
    @Req() req: Request,
  ): Promise<CreateRelatorioDto> {
    return this.relatoriosService.create(createRelatorioDto, req);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os relatórios' })
  @ApiResponse({
    status: 200,
    description: 'Retorna o json dos relatórios criados',
  })
  @ApiResponse({
    status: 401,
    description: 'Token não encontrado ou inválido',
  })
  @ApiResponse({
    status: 404,
    description: 'Nenhum relatório encontrado',
  })
  findMany(): Promise<CreateRelatorioDto[]> {
    return this.relatoriosService.findMany();
  }

  @Get('paciente/:id')
  @ApiOperation({ summary: 'Listar relatórios por paciente' })
  @ApiResponse({
    status: 200,
    description: 'Retorna o json do relatórios do paciente',
  })
  @ApiResponse({
    status: 401,
    description: 'Token não encontrado ou inválido',
  })
  @ApiResponse({
    status: 404,
    description: 'relatórios não encontrado',
  })
  findByPaciente(
    @Param('id') id_paciente: number,
  ): Promise<CreateRelatorioDto[]> {
    return this.relatoriosService.findByPaciente(+id_paciente);
  }

  @Delete('delete/:id')
  @ApiOperation({ summary: 'Deletar pelo Id do relatório' })
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
    description: 'Relatório não encontrado',
  })
  delete(
    @Param('id') id_relatorio: number,
  ): Promise<NotFoundException | { message: string }> {
    return this.relatoriosService.delete(+id_relatorio);
  }
}
