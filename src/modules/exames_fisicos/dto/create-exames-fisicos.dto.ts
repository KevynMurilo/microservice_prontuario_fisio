import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsEnum,
  IsArray,
  ValidateNested,
  ArrayMinSize,
  IsInt,
} from 'class-validator';
import { StatusTonus } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { CreateForcaMuscularDto } from './create-forca-muscular.dto';
import { Type } from 'class-transformer';
import { CreateAdmDto } from './create-adm.dto';
import { CreateComplementoDto } from './create-complemento.dto';

@Injectable()
export class CreateExamesFisicosDto {
  @IsNotEmpty({ message: 'Id do prontuario é obrigatório' })
  @IsInt()
  id_prontuario: number;

  @IsString({ message: 'O campo "pa" é obrigatório e deve ser uma string.' })
  @IsNotEmpty({ message: 'O campo "pa" não pode ser vazio.' })
  pa: string;

  @IsString({ message: 'O campo "fc" é obrigatório e deve ser uma string.' })
  @IsNotEmpty({ message: 'O campo "fc" não pode ser vazio.' })
  fc: string;

  @IsString({ message: 'O campo "fr" é obrigatório e deve ser uma string.' })
  @IsNotEmpty({ message: 'O campo "fr" não pode ser vazio.' })
  fr: string;

  @IsString({ message: 'O campo "ap" é obrigatório e deve ser uma string.' })
  @IsNotEmpty({ message: 'O campo "ap" não pode ser vazio.' })
  ap: string;

  @IsString({ message: 'O campo "spo2" é obrigatório e deve ser uma string.' })
  @IsNotEmpty({ message: 'O campo "spo2" não pode ser vazio.' })
  spo2: string;

  @IsString({ message: 'O campo "temp" é obrigatório e deve ser uma string.' })
  @IsNotEmpty({ message: 'O campo "temp" não pode ser vazio.' })
  temp: string;

  @IsString({
    message:
      'O campo "exames_especificos" é obrigatório e deve ser uma string.',
  })
  @IsNotEmpty({ message: 'O campo "exames_especificos" não pode ser vazio.' })
  exames_especificos: string;

  @IsEnum(StatusTonus, {
    message:
      'O campo "tonus_muscular" é obrigatório e deve ser um valor válido de StatusTonus.',
  })
  @IsNotEmpty({ message: 'O campo "tonus_muscular" não pode ser vazio.' })
  tonus_muscular: StatusTonus;

  @IsOptional()
  @IsString({ message: 'O campo "tipo_tonus" deve ser uma string.' })
  tipo_tonus?: string;

  @IsOptional()
  @IsString({ message: 'O campo "grau_tonus" deve ser uma string.' })
  grau_tonus?: string;

  @IsOptional()
  @IsString({ message: 'O campo "local_tonus" deve ser uma string.' })
  local_tonus?: string;

  @IsString({
    message:
      'O campo "distribuicao_topografica" é obrigatório e deve ser uma string.',
  })
  @IsNotEmpty({
    message: 'O campo "distribuicao_topografica" não pode ser vazio.',
  })
  distribuicao_topografica: string;

  @IsOptional()
  @IsString({ message: 'O campo "percepcao" deve ser uma string.' })
  percepcao?: string;

  @IsString({
    message:
      'O campo "coordenacao_dinamica_e_estatica" é obrigatório e deve ser uma string.',
  })
  @IsNotEmpty({
    message: 'O campo "coordenacao_dinamica_e_estatica" não pode ser vazio.',
  })
  coordenacao_dinamica_e_estatica: string;

  @IsBoolean({
    message: 'O campo "triciptal" é obrigatório e deve ser um booleano.',
  })
  triciptal: boolean;

  @IsBoolean({
    message: 'O campo "biciptal" é obrigatório e deve ser um booleano.',
  })
  biciptal: boolean;

  @IsBoolean({
    message: 'O campo "radial" é obrigatório e deve ser um booleano.',
  })
  radial: boolean;

  @IsBoolean({
    message: 'O campo "patelar" é obrigatório e deve ser um booleano.',
  })
  patelar: boolean;

  @IsBoolean({
    message: 'O campo "calcanear" é obrigatório e deve ser um booleano.',
  })
  calcanear: boolean;

  @IsBoolean({
    message:
      'O campo "cutaneo_abdominal" é obrigatório e deve ser um booleano.',
  })
  cutaneo_abdominal: boolean;

  @IsBoolean({
    message: 'O campo "cutaneo_plantar" é obrigatório e deve ser um booleano.',
  })
  cutaneo_plantar: boolean;

  @IsBoolean({
    message:
      'O campo "contraturas_deformidades" é obrigatório e deve ser um booleano.',
  })
  contraturas_deformidades: boolean;

  @IsBoolean({
    message: 'O campo "ulceras" é obrigatório e deve ser um booleano.',
  })
  ulceras: boolean;

  @IsOptional()
  @IsString({ message: 'O campo "local_ulceras" deve ser uma string.' })
  local_ulceras?: string;

  @IsBoolean({
    message: 'O campo "deambula" é obrigatório e deve ser um booleano.',
  })
  deambula: boolean;

  @IsOptional()
  @IsString({ message: 'O campo "descricao_deambula" deve ser uma string.' })
  descricao_deambula?: string;

  @IsOptional()
  @IsString({ message: 'O campo "inspecao" deve ser uma string.' })
  inspecao?: string;

  @IsOptional()
  @IsString({ message: 'O campo "palpacao" deve ser uma string.' })
  palpacao?: string;

  @IsOptional()
  @IsString({ message: 'O campo "mensuracao" deve ser uma string.' })
  mensuracao?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateForcaMuscularDto)
  @ArrayMinSize(1)
  forca_muscular: CreateForcaMuscularDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAdmDto)
  @ArrayMinSize(1)
  adm: CreateAdmDto[];

  @ValidateNested()
  @Type(() => CreateComplementoDto)
  complemento: CreateComplementoDto;
}
