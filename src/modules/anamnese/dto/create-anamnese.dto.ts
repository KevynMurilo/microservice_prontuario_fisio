import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateCirurgiaDto } from './create-cirurgia.dto';
import { CreateDoencaDto } from './create-doenca.dto';

export class CreateAnamneseDto {
  @ApiProperty({ example: 'Dor nas costas' })
  @IsString()
  queixa_principal: string;

  @ApiProperty({ example: 'História da Moléstia Atual' })
  @IsString()
  hma: string;

  @ApiProperty({ example: 'História Médica Pregressa' })
  @IsString()
  hmp: string;

  @ApiProperty({ example: 'Atividades da Vida Diária' })
  @IsString()
  avd: string;

  @ApiProperty({ type: [CreateCirurgiaDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateCirurgiaDto)
  @ArrayMinSize(1)
  cirurgias: CreateCirurgiaDto[];

  @ApiProperty({ type: [CreateDoencaDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateDoencaDto)
  @ArrayMinSize(1)
  doencas_concomitantes: CreateDoencaDto[];
}
