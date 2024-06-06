# Documentação do Módulo de Prontuário
## Resumo
O código fornecido implementa um módulo abrangente de gerenciamento de prontuários médicos (ProntuarioModule) em uma aplicação NestJS. O módulo lida com operações relacionadas à criação, recuperação e gestão de prontuários de pacientes. Ele integra vários submódulos como Anamnese, ExamesFisicos, Objetivo e Condutas.

## Visão Geral do Módulo
ProntuarioService
O ProntuarioService gerencia a lógica de negócios relacionada aos prontuários médicos. Ele utiliza diversos serviços e repositórios para realizar operações de criação, atualização e recuperação de dados.

## Métodos:
### createFull:

-  Cria um prontuário completo, incluindo anamnese, exames físicos, objetivos e condutas.
-  Valida se o paciente já possui um prontuário antes de criar um novo.
-  Utiliza transações do Prisma para garantir a atomicidade das operações.

### findall:
 - Recupera todos os prontuários disponíveis.
 - Lança uma exceção se nenhum prontuário for encontrado.

### findByPaciente:
  - Recupera o prontuário de um paciente específico com base no ID do paciente.
  - Lança uma exceção se o prontuário não for encontrado.

## ProntuarioRepository
  - O ProntuarioRepository interage diretamente com o banco de dados através do Prisma para realizar operações CRUD nos prontuários.

## Métodos:

### getByPaciente:
  - Recupera o prontuário de um paciente específico com base no ID.
  - Seleciona e retorna diversas informações detalhadas sobre o prontuário, incluindo anamnese, exames físicos, objetivos e condutas.

### createProntuario:
  - Cria um novo prontuário utilizando uma transação do Prisma.
  - Define os dados do prontuário com base no DTO (CreateProntuarioDto).

### findAll:

  - Recupera todos os prontuários do banco de dados.
  - Seleciona e retorna diversas informações detalhadas sobre cada prontuário.

## ProntuarioController
  - O ProntuarioController gerencia as rotas HTTP relacionadas aos prontuários.

## Rotas:

### POST /prontuario:
  - Cria um novo prontuário.
  - Requisição deve conter dados de prontuário, anamnese, exames físicos, objetivos e condutas.
  - Retorna o prontuário criado ou um erro se o paciente já possui um prontuário.

### GET /prontuario:
  - Lista todos os prontuários.
  - Retorna um erro se nenhum prontuário for encontrado.

### GET /prontuario/paciente/:id
  - Recupera o prontuário de um paciente específico pelo ID.
  - Retorna um erro se o prontuário não for encontrado.

## ProntuarioModule
  - O ProntuarioModule agrupa todos os componentes relacionados ao prontuário.

## Conclusão
O módulo de prontuário é uma parte essencial do sistema de gestão de informações de saúde, permitindo a criação, atualização e recuperação de prontuários médicos de forma eficiente e segura. A documentação fornecida aqui deve ajudar desenvolvedores a entenderem a estrutura e funcionamento do módulo, facilitando sua manutenção e extensão.