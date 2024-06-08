import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { RelatoriosService } from './relatorios.service';
import { CreateRelatorioDto } from './dto/create-relatorio.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('relatorios')
@Controller('relatorios')
export class RelatoriosController {
  constructor(private readonly relatoriosService: RelatoriosService) {}

  @Post()
  create(@Body() createRelatorioDto: CreateRelatorioDto) {
    return this.relatoriosService.create(createRelatorioDto);
  }

  @Get()
  findMany() {
    return this.relatoriosService.findMany();
  }

  @Get('paciente/:id')
  findByPaciente(@Param('id') id_paciente: number) {
    return this.relatoriosService.findByPaciente(+id_paciente);
  }
}
