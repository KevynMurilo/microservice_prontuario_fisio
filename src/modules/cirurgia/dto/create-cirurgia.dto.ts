import { IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';

export class CreateCirurgiaDto {
  id_anamnese: number;

  @IsBoolean()
  @IsNotEmpty({ message: 'Campo realizou é obrigatório' })
  realizou: boolean;

  @IsOptional()
  quais?: string;

  @IsOptional()
  resultados_exames?: string;
}
