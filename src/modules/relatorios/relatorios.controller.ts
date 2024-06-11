import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { RelatoriosService } from './relatorios.service';
import { CreateRelatorioDto } from './dto/create-relatorio.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('relatorios')
@Controller('relatorios')
export class RelatoriosController {
  constructor(private readonly relatoriosService: RelatoriosService) {}

  @Post()
  create(
    @Body() createRelatorioDto: CreateRelatorioDto,
  ): Promise<CreateRelatorioDto> {
    return this.relatoriosService.create(createRelatorioDto);
  }

  @Get()
  findMany(): Promise<CreateRelatorioDto[]> {
    return this.relatoriosService.findMany();
  }

  @Get('paciente/:id')
  findByPaciente(
    @Param('id') id_paciente: number,
  ): Promise<CreateRelatorioDto[]> {
    return this.relatoriosService.findByPaciente(+id_paciente);
  }

  @Delete('delete/:id')
  delete(
    @Param('id') id_relatorio: number,
  ): Promise<NotFoundException | { message: string }> {
    return this.relatoriosService.delete(+id_relatorio);
  }
}
