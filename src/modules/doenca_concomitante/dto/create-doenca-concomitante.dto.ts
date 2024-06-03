import { IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';

export class CreateDoencaConcomitanteDto {
  id_anamnese: number;

  @IsBoolean()
  @IsNotEmpty({ message: 'Campo DM é obrigatório' })
  dm: boolean;

  @IsBoolean()
  @IsNotEmpty({ message: 'Campo HAS é obrigatório' })
  has: boolean;

  @IsOptional()
  outros?: string;
}
