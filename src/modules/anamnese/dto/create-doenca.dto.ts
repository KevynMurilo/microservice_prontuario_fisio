import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateDoencaDto {
  @IsOptional()
  @IsBoolean()
  dm: boolean;

  @IsOptional()
  @IsBoolean()
  has: boolean;

  @IsOptional()
  @IsString()
  outros?: string;
}
