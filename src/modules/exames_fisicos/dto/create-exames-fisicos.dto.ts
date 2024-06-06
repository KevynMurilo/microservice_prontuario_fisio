import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsEnum,
  IsArray,
  ValidateNested,
  ArrayMinSize,
} from 'class-validator';
import { StatusTonus } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { CreateForcaMuscularDto } from './create-forca-muscular.dto';
import { Type } from 'class-transformer';
import { CreateAdmDto } from './create-adm.dto';
import { CreateComplementoDto } from './create-complemento.dto';
import { ApiProperty } from '@nestjs/swagger';

@Injectable()
export class CreateExamesFisicosDto {
  @ApiProperty({ example: '120/80' })
  @IsString({ message: 'O campo "pa" é obrigatório e deve ser uma string.' })
  @IsNotEmpty({ message: 'O campo "pa" não pode ser vazio.' })
  pa: string;

  @ApiProperty({ example: '75' })
  @IsString({ message: 'O campo "fc" é obrigatório e deve ser uma string.' })
  @IsNotEmpty({ message: 'O campo "fc" não pode ser vazio.' })
  fc: string;

  @ApiProperty({ example: '16' })
  @IsString({ message: 'O campo "fr" é obrigatório e deve ser uma string.' })
  @IsNotEmpty({ message: 'O campo "fr" não pode ser vazio.' })
  fr: string;

  @ApiProperty({ example: 'Normal' })
  @IsString({ message: 'O campo "ap" é obrigatório e deve ser uma string.' })
  @IsNotEmpty({ message: 'O campo "ap" não pode ser vazio.' })
  ap: string;

  @ApiProperty({ example: '98%' })
  @IsString({ message: 'O campo "spo2" é obrigatório e deve ser uma string.' })
  @IsNotEmpty({ message: 'O campo "spo2" não pode ser vazio.' })
  spo2: string;

  @ApiProperty({ example: '37°C' })
  @IsString({ message: 'O campo "temp" é obrigatório e deve ser uma string.' })
  @IsNotEmpty({ message: 'O campo "temp" não pode ser vazio.' })
  temp: string;

  @ApiProperty({ example: 'Exames específicos' })
  @IsString({
    message:
      'O campo "exames_especificos" é obrigatório e deve ser uma string.',
  })
  @IsNotEmpty({ message: 'O campo "exames_especificos" não pode ser vazio.' })
  exames_especificos: string;

  @ApiProperty({ enum: StatusTonus, example: StatusTonus.NORMAL })
  @IsEnum(StatusTonus, {
    message:
      'O campo "tonus_muscular" é obrigatório e deve ser um valor válido de StatusTonus.',
  })
  @IsNotEmpty({ message: 'O campo "tonus_muscular" não pode ser vazio.' })
  tonus_muscular: StatusTonus;

  @ApiProperty({ example: 'Hiperativo', required: false })
  @IsOptional()
  @IsString({ message: 'O campo "tipo_tonus" deve ser uma string.' })
  tipo_tonus?: string;

  @ApiProperty({ example: '2+', required: false })
  @IsOptional()
  @IsString({ message: 'O campo "grau_tonus" deve ser uma string.' })
  grau_tonus?: string;

  @ApiProperty({ example: 'Membros superiores', required: false })
  @IsOptional()
  @IsString({ message: 'O campo "local_tonus" deve ser uma string.' })
  local_tonus?: string;

  @ApiProperty({ example: 'Normal', required: false })
  @IsString({
    message:
      'O campo "distribuicao_topografica" é obrigatório e deve ser uma string.',
  })
  @IsNotEmpty({
    message: 'O campo "distribuicao_topografica" não pode ser vazio.',
  })
  distribuicao_topografica: string;

  @ApiProperty({ example: 'Normal', required: false })
  @IsOptional()
  @IsString({ message: 'O campo "percepcao" deve ser uma string.' })
  percepcao?: string;

  @ApiProperty({ example: 'Normal' })
  @IsString({
    message:
      'O campo "coordenacao_dinamica_e_estatica" é obrigatório e deve ser uma string.',
  })
  @IsNotEmpty({
    message: 'O campo "coordenacao_dinamica_e_estatica" não pode ser vazio.',
  })
  coordenacao_dinamica_e_estatica: string;

  @ApiProperty({ example: 'true' })
  @IsBoolean({
    message: 'O campo "triciptal" é obrigatório e deve ser um booleano.',
  })
  triciptal: boolean;

  @ApiProperty({ example: 'true' })
  @IsBoolean({
    message: 'O campo "biciptal" é obrigatório e deve ser um booleano.',
  })
  biciptal: boolean;

  @ApiProperty({ example: 'true' })
  @IsBoolean({
    message: 'O campo "radial" é obrigatório e deve ser um booleano.',
  })
  radial: boolean;

  @ApiProperty({ example: 'true' })
  @IsBoolean({
    message: 'O campo "patelar" é obrigatório e deve ser um booleano.',
  })
  patelar: boolean;

  @ApiProperty({ example: 'true' })
  @IsBoolean({
    message: 'O campo "calcanear" é obrigatório e deve ser um booleano.',
  })
  calcanear: boolean;

  @ApiProperty({ example: 'true' })
  @IsBoolean({
    message:
      'O campo "cutaneo_abdominal" é obrigatório e deve ser um booleano.',
  })
  cutaneo_abdominal: boolean;

  @ApiProperty({ example: 'true' })
  @IsBoolean({
    message: 'O campo "cutaneo_plantar" é obrigatório e deve ser um booleano.',
  })
  cutaneo_plantar: boolean;

  @ApiProperty({ example: 'true' })
  @IsBoolean({
    message:
      'O campo "contraturas_deformidades" é obrigatório e deve ser um booleano.',
  })
  contraturas_deformidades: boolean;

  @ApiProperty({ example: 'true' })
  @IsBoolean({
    message: 'O campo "ulceras" é obrigatório e deve ser um booleano.',
  })
  ulceras: boolean;

  @ApiProperty({ example: 'Local da úlcera', required: false })
  @IsOptional()
  @IsString({ message: 'O campo "local_ulceras" deve ser uma string.' })
  local_ulceras?: string;

  @ApiProperty({ example: 'true' })
  @IsBoolean({
    message: 'O campo "deambula" é obrigatório e deve ser um booleano.',
  })
  deambula: boolean;

  @ApiProperty({ example: 'Deambulação normal', required: false })
  @IsOptional()
  @IsString({ message: 'O campo "descricao_deambula" deve ser uma string.' })
  descricao_deambula?: string;

  @ApiProperty({ example: 'Normal', required: false })
  @IsOptional()
  @IsString({ message: 'O campo "inspecao" deve ser uma string.' })
  inspecao?: string;

  @ApiProperty({ example: 'Normal', required: false })
  @IsOptional()
  @IsString({ message: 'O campo "palpacao" deve ser uma string.' })
  palpacao?: string;

  @ApiProperty({ example: 'Normal', required: false })
  @IsOptional()
  @IsString({ message: 'O campo "mensuracao" deve ser uma string.' })
  mensuracao?: string;

  @ApiProperty({ type: [CreateForcaMuscularDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateForcaMuscularDto)
  @ArrayMinSize(1)
  forca_muscular: CreateForcaMuscularDto[];

  @ApiProperty({ type: [CreateAdmDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAdmDto)
  @ArrayMinSize(1)
  adm: CreateAdmDto[];

  @ApiProperty({ type: CreateComplementoDto })
  @ValidateNested()
  @Type(() => CreateComplementoDto)
  complemento: CreateComplementoDto;
}
