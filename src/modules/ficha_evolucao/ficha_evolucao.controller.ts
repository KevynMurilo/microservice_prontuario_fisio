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
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';

@ApiTags('ficha-evolucao')
@Controller('fichaEvolucao')
export class FichaEvolucaoController {
  constructor(private readonly fichaEvolucaoService: FichaEvolucaoService) {}

  @Post()
  create(
    @Body() createFichaEvolucaoDto: CreateFichaEvolucaoDto,
    @Req() req: Request,
  ): Promise<CreateFichaEvolucaoDto> {
    return this.fichaEvolucaoService.create(createFichaEvolucaoDto, req);
  }

  @Get()
  findMany(): Promise<CreateFichaEvolucaoDto[]> {
    return this.fichaEvolucaoService.findMany();
  }

  @Get('paciente/:id')
  findByPaciente(
    @Param('id') id_paciente: number,
  ): Promise<CreateFichaEvolucaoDto[]> {
    return this.fichaEvolucaoService.findByPaciente(+id_paciente);
  }

  @Delete('delete/:id')
  delete(
    @Param('id') id_ficha_de_evolucao: number,
  ): Promise<NotFoundException | { message: string }> {
    return this.fichaEvolucaoService.delete(+id_ficha_de_evolucao);
  }
}
