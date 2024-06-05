import { Injectable } from '@nestjs/common';
import {
  IsNotEmpty,
  IsInt,
  IsOptional,
  IsString,
  Min,
  Max,
} from 'class-validator';

@Injectable()
export class CreateComplementoDto {
  @IsNotEmpty({ message: 'Sensibilidade é obrigatório' })
  @IsString({
    message: 'O campo "sensibilidade" é obrigatório e deve ser uma string.',
  })
  sensibilidade: string;

  @IsNotEmpty({ message: 'A escala de dor é obrigatória' })
  @Min(0, { message: 'O campo "grau" deve ter de 0 à 10.' })
  @Max(10, { message: 'O campo "grau" deve ter de 0 à 10.' })
  @IsInt({ message: 'O campo "grau" deve ser um número inteiro.' })
  dor: number;

  @IsNotEmpty({ message: 'Clonus é obrigatório' })
  @IsString({
    message: 'O campo "clonus" é obrigatório e deve ser uma string.',
  })
  clonus: string;

  @IsNotEmpty({ message: 'Reflexo ou Reacoes é obrigatório' })
  @IsString({
    message:
      'O campo "reflexo ou Reacoes" é obrigatório e deve ser uma string.',
  })
  reflexo_ou_reacoes: string;

  @IsNotEmpty({ message: 'Ausculta cardiaca é obrigatório' })
  @IsString({
    message: 'O campo "ausculta cardiaca" é obrigatório e deve ser uma string.',
  })
  ausculta_cardiaca: string;

  @IsNotEmpty({ message: 'Testes especiais é obrigatório' })
  @IsString({
    message: 'O campo "testes especiais" é obrigatório e deve ser uma string.',
  })
  testes_especiais: string;

  @IsNotEmpty({ message: 'Avaliacao funcional é obrigatório' })
  @IsString({
    message:
      'O campo "avaliacao funcional" é obrigatório e deve ser uma string.',
  })
  avaliacao_funcional: string;

  @IsOptional()
  @IsString({
    message: 'O campo "observacoes" é obrigatório e deve ser uma string.',
  })
  observacoes?: string;

  @IsOptional()
  @IsString({
    message:
      'O campo "exames complementares ou laudos" é obrigatório e deve ser uma string.',
  })
  exames_complementares_ou_laudos?: string;
}
