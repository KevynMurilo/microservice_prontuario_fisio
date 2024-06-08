import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { FichaEvolucaoService } from './ficha_evolucao.service';
import { CreateFichaEvolucaoDto } from './dto/create-ficha_evolucao.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('ficha-evolucao')
@Controller('fichaEvolucao')
export class FichaEvolucaoController {
  constructor(private readonly fichaEvolucaoService: FichaEvolucaoService) {}

  @Post()
  create(@Body() createFichaEvolucaoDto: CreateFichaEvolucaoDto) {
    return this.fichaEvolucaoService.create(createFichaEvolucaoDto);
  }

  @Get()
  findMany() {
    return this.fichaEvolucaoService.findMany();
  }

  @Get('paciente/:id')
  findByPaciente(@Param('id') id_paciente: number) {
    return this.fichaEvolucaoService.findByPaciente(+id_paciente);
  }
}
