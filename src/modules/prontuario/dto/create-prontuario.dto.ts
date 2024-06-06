import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsInt, IsOptional } from 'class-validator';

export class CreateProntuarioDto {
  @ApiProperty({
    example: 'Unidade X',
    description: 'Nome da unidade de atendimento',
  })
  @IsNotEmpty({ message: 'Unidade é obrigatório' })
  unidade: string;

  @ApiProperty({
    example: 'Setor Y',
    description: 'Nome do setor de atendimento',
  })
  @IsNotEmpty({ message: 'Setor de atendimento é obrigatório' })
  setor_atendimento: string;

  @ApiProperty({ example: 321, description: 'ID do paciente' })
  @IsInt({ message: 'Id do paciente deve ser um número inteiro' })
  @IsNotEmpty({ message: 'Id do paciente é obrigatório' })
  id_paciente: number;

  @ApiProperty({ example: 2, description: 'ID do fisioterapeuta' })
  @IsInt({ message: 'Id do fisioterapeuta deve ser um número inteiro' })
  @IsNotEmpty({ message: 'Id do fisioterapeuta é obrigatório' })
  id_fisioterapeuta: number;

  @ApiProperty({ example: 3, description: 'ID do coordenador' })
  @IsInt({ message: 'Id do coordenador deve ser um número inteiro' })
  @IsNotEmpty({ message: 'Id do coordenador é obrigatório' })
  id_coordenador: number;

  @ApiProperty({ example: 'Responsável X', description: 'Nome do responsável' })
  @IsOptional()
  responsavel?: string;

  @ApiProperty({
    example: 'Contato Y',
    description: 'Contato para emergências',
  })
  @IsOptional()
  caso_emergencia_avisar?: string;

  @ApiProperty({
    example: '123456789',
    description: 'Telefone para emergências',
  })
  @IsOptional()
  telefone_emergencia?: string;

  @ApiProperty({ example: 'Diagnóstico X', description: 'Diagnóstico clínico' })
  @IsNotEmpty({ message: 'Diagnóstico clínico é obrigatório' })
  diagnostico_clinico: string;

  @ApiProperty({ example: 'Dr. Y', description: 'Nome do médico responsável' })
  @IsNotEmpty({ message: 'Médico responsável é obrigatório' })
  medico_responsavel: string;

  @ApiProperty({
    example: 'Diagnóstico F',
    description: 'Diagnóstico do fisioterapeuta',
  })
  @IsNotEmpty({ message: 'Diagnóstico do fisioterapeuta é obrigatório' })
  diagnostico_fisoterapeuta: string;

  @ApiProperty({
    example: 'Histórico familiar',
    description: 'Antecedentes familiares',
  })
  @IsOptional()
  antecendentes_familiar?: string;

  @ApiProperty({
    example: 'Patologias associadas',
    description: 'Patologias associadas',
  })
  @IsOptional()
  patologias_associadas?: string;

  @ApiProperty({ example: 70, description: 'Peso do paciente' })
  @IsNotEmpty({ message: 'Peso é obrigatório' })
  peso: number;

  @ApiProperty({ example: 170, description: 'Altura do paciente' })
  @IsNotEmpty({ message: 'Altura é obrigatório' })
  altura: number;

  @ApiProperty({ example: 'Bom', description: 'Estado geral do paciente' })
  @IsNotEmpty({ message: 'Estado geral é obrigatório' })
  estado_geral: string;

  @ApiProperty({
    example: 'Completa',
    description: 'Nível de independência de locomoção',
  })
  @IsNotEmpty({ message: 'Independência de locomoção é obrigatório' })
  independencia_de_locomocao: string;
}
