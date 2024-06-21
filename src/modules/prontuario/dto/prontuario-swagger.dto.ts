import { ApiProperty } from '@nestjs/swagger';
import { ValidateNested, IsArray } from 'class-validator';
import { CreateAnamneseDto } from 'src/modules/anamnese/dto/create-anamnese.dto';
import { CreateExamesFisicosDto } from 'src/modules/exames-fisicos/dto/create-exames-fisicos.dto';
import { CreateObjetivoDto } from 'src/modules/objetivo/dto/create-objetivo.dto';
import { CreateCondutaDto } from 'src/modules/condutas/dto/create-conduta.dto';
import { CreateProntuarioDto } from './create-prontuario.dto';
import { Type } from 'class-transformer';

export class ProntuarioSwaggerDto {
  @ApiProperty({ type: CreateProntuarioDto })
  @ValidateNested()
  @Type(() => CreateProntuarioDto)
  prontuario: CreateProntuarioDto;

  @ApiProperty({ type: CreateAnamneseDto })
  @ValidateNested()
  @Type(() => CreateAnamneseDto)
  anamnese: CreateAnamneseDto;

  @ApiProperty({ type: CreateExamesFisicosDto })
  @ValidateNested()
  @Type(() => CreateExamesFisicosDto)
  examesFisicos: CreateExamesFisicosDto;

  @ApiProperty({ type: [CreateObjetivoDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateObjetivoDto)
  objetivos: CreateObjetivoDto[];

  @ApiProperty({ type: [CreateCondutaDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCondutaDto)
  condutas: CreateCondutaDto[];
}
