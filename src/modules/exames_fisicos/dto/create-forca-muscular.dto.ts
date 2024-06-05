import { Injectable } from '@nestjs/common';
import { IsOptional, IsString } from 'class-validator';

@Injectable()
export class CreateForcaMuscularDto {
  @IsOptional()
  @IsString({
    message: 'O campo "musculo" é obrigatório e deve ser uma string.',
  })
  musculo?: string;

  @IsOptional({
    message: 'O campo "grupo" é obrigatório e deve ser uma string.',
  })
  grupo?: string;

  @IsOptional({
    message: 'O campo "gray" é obrigatório e deve ser uma string.',
  })
  grau?: string;
}
