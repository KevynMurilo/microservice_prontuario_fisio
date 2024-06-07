import { IsInt, IsString, IsNotEmpty } from 'class-validator';

export class CreateFichaEvolucaoDto {
  @IsInt({ message: 'O id_paciente deve ser um número inteiro.' })
  @IsNotEmpty({ message: 'O id_paciente não pode estar vazio.' })
  id_paciente: number;

  @IsInt({ message: 'O id_fisioterapeuta deve ser um número inteiro.' })
  @IsNotEmpty({ message: 'O id_fisioterapeuta não pode estar vazio.' })
  id_fisioterapeuta: number;

  @IsString({ message: 'A descricao deve ser uma string.' })
  @IsNotEmpty({ message: 'A descricao não pode estar vazia.' })
  descricao: string;
}
