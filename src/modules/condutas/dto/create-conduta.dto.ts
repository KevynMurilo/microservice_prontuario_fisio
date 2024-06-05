import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateCondutaDto {
  @IsInt()
  @IsNotEmpty({ message: 'Id do prontuario é obrigatório' })
  id_prontuario: number;

  @IsString()
  @IsNotEmpty({ message: 'Descricao conduta fisioterapeutica é obrigatória' })
  descricao_conduta_fisioterapeutica: string;
}
