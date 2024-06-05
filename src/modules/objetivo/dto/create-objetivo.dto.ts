import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateObjetivoDto {
  @IsString()
  @IsNotEmpty({ message: 'descricao objetivo fisioterapeutico é obrigatório' })
  descricao_objetivo_fisioterapeutico: string;

  @IsInt()
  @IsNotEmpty({ message: 'Id do prontuario é obrigatório' })
  id_prontuario: number;
}
