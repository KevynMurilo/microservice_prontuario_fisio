<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" />
  </a>
</p>

# Microservice_prontuario_fisio

## Resumo
O código fornecido implementa um módulo abrangente de gerenciamento de prontuários fisioterapêuticos em uma aplicação NestJS. A API lida com a gestão de prontuários de pacientes e integra vários submódulos, como Anamnese, Exames Físicos, Objetivo e Condutas. Além disso, oferece funcionalidades para gerenciamento de relatórios e fichas de evolução dos pacientes.

## Tecnologias Utilizadas

Aqui estão as principais tecnologias e suas versões utilizadas no projeto:

### Dependências

- **@nestjs/jwt**: ^10.2.0
- **@nestjs/swagger**: ^7.3.1
- **@prisma/client**: ^5.14.0
- **class-transformer**: ^0.5.1
- **class-validator**: ^0.14.1

### Dependências de Desenvolvimento

- **@nestjs/axios**: ^3.0.2
- **@nestjs/schematics**: ^10.0.0
- **axios**: ^1.7.2
- **eslint-config-prettier**: ^9.0.0
- **eslint-plugin-prettier**: ^5.0.0
- **jest**: ^29.5.0
- **prettier**: ^3.0.0
- **prisma**: ^5.14.0
- **supertest**: ^6.3.3
- **ts-jest**: ^29.1.0
- **ts-loader**: ^9.4.3
- **ts-node**: ^10.9.1
- **tsconfig-paths**: ^4.2.0
- **typescript**: ^5.1.3

## Instalação

```bash
$ yarn install
```

### Execução do Prisma

```
$ npx prisma migrate dev
```

> Execute esse comando para rodar as migrations

### Execução

Modo de Inicialização

```bash
$ yarn start
```

Modo de Observação

```bash
$ yarn start:dev
```

Modo de Produção

```bash
$ yarn start:prod
```

## Configuração do Ambiente

Antes de iniciar a aplicação, é crucial configurar corretamente o arquivo `.env` na raiz do projeto. Certifique-se de adicionar as seguintes variáveis de ambiente:

```plaintext
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_HOST=seu_host
DB_PORT=sua_porta
DB_DATABASE_NAME=nome_do_banco
DB_SCHEMA=seu_schema
PORT=porta_da_aplicacao
SECRET_KEY=sua_chave_secreta
PACIENTE_URL=http://url_do_servidor_autenticacao

DATABASE_URL="postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE_NAME}?schema=${DB_SCHEMA}"
```
> Essas variáveis são essenciais para conectar e configurar seu banco de dados PostgreSQL, bem como definir configurações importantes para a aplicação.

## Autenticação
Todas as rotas requerem o envio de um Authorization Bearer Token de fisioterapeuta para acessar os endpoints.

## Endpoints

### Rota GET para listar todos os prontuários

```
http://localhost:3000/prontuario
```

### Rota GET para listar o prontuario pelo o ID do paciente

```
http://localhost:3000/prontuario/paciente/:id
```

### Rota POST para prontuário

> Utilize o body no formato json para enviar cadastrar o prontuário.

<strong>Corpo da requisição:</strong>

```json
{
  "prontuario": {
    "unidade": "Unidade X",
    "setor_atendimento": "Setor Y",
    "id_paciente": 321,
    "id_coordenador": 3,
    "responsavel": "Responsável X",
    "caso_emergencia_avisar": "Contato Y",
    "telefone_emergencia": "123456789",
    "diagnostico_clinico": "Diagnóstico X",
    "medico_responsavel": "Dr. Y",
    "diagnostico_fisoterapeuta": "Diagnóstico F",
    "antecendentes_familiar": "Histórico familiar",
    "patologias_associadas": "Patologias associadas",
    "peso": 70,
    "altura": 1.7,
    "estado_geral": "Bom",
    "independencia_de_locomocao": "Completa"
  },
  "anamnese": {
    "queixa_principal": "Dor nas costas",
    "hma": "História da Moléstia Atual",
    "hmp": "História Médica Pregressa",
    "avd": "Atividades da Vida Diária",
    "cirurgias": [
      {
        "realizou": true,
        "quais": "Cirurgia X",
        "resultados_exames": "Resultado X"
      }
    ],
    "doencas_concomitantes": [
      {
        "dm": true,
        "has": true,
        "outros": "Outros problemas"
      }
    ]
  },
  "examesFisicos": {
    "pa": "120/80",
    "fc": "75",
    "fr": "16",
    "ap": "Normal",
    "spo2": "98%",
    "temp": "37°C",
    "exames_especificos": "Exames específicos",
    "tonus_muscular": "NORMAL",
    "tipo_tonus": "Hiperativo",
    "grau_tonus": "2+",
    "local_tonus": "Membros superiores",
    "distribuicao_topografica": "Normal",
    "percepcao": "Normal",
    "coordenacao_dinamica_e_estatica": "Normal",
    "triciptal": true,
    "biciptal": true,
    "radial": true,
    "patelar": true,
    "calcanear": true,
    "cutaneo_abdominal": true,
    "cutaneo_plantar": true,
    "contraturas_deformidades": true,
    "ulceras": true,
    "local_ulceras": "Local da úlcera",
    "deambula": true,
    "descricao_deambula": "Deambulação normal",
    "inspecao": "Normal",
    "palpacao": "Normal",
    "mensuracao": "Normal",
    "forca_muscular": [
      {
        "musculo": "Bíceps",
        "grupo": "Braço",
        "grau": "5"
      }
    ],
    "adm": [
      {
        "movimento": "Flexão",
        "ativa": "true",
        "passiva": "true"
      }
    ],
    "complemento": {
      "sensibilidade": "Normal",
      "dor": 10,
      "clonus": "Nenhum",
      "reflexo_ou_reacoes": "Normais",
      "ausculta_cardiaca": "Normal",
      "testes_especiais": "Nenhum",
      "avaliacao_funcional": "Boa",
      "observacoes": "Nenhuma",
      "exames_complementares_ou_laudos": "Nenhum"
    }
  },
  "objetivos": [
    {
      "descricao_objetivo_fisioterapeutico": "Reduzir a dor"
    }
  ],
  "condutas": [
    {
      "descricao_conduta_fisioterapeutica": "Realizar exercícios de fortalecimento"
    }
  ]
}
```

### Retorno com o codigo 201 (Created)
Vai retornar o json confirmando o registro

### Rota DELETE para deletar o prontuario pelo o ID do paciente

```
http://localhost:3000/prontuario/paciente/delete/:id
```

### Retorno com o codigo 200 (Successful)
Vai retornar uma mensagem de sucesso

----------------------------------------------------

### Rota GET para listar todos os relatórios

```
http://localhost:3000/relatorios
```

### Rota GET para listar os relatórios pelo o ID do paciente

```
http://localhost:3000/relatorios/paciente/:id
```

### Rota POST para relatorios

> Utilize o body no formato json para enviar cadastrar o prontuário.

<strong>Corpo da requisição:</strong>

```json
{
  "id_paciente": 1,
  "descricao": "Descrição detalhada do relatório do paciente."
}
```

### Retorno com o codigo 201 (Created)
Vai retornar o json confirmando o registro

### Rota DELETE para deletar pelo Id do relatório

```
http://localhost:3000/relatorios/delete/:id
```

### Retorno com o codigo 200 (Successful)
Vai retornar uma mensagem de sucesso

----------------------------------------------------

### Rota GET para listar todas as fichas de evolução

```
http://localhost:3000/fichaEvolucao
```

### Rota GET para listar as fichas de evolução pelo o ID do paciente

```
http://localhost:3000/fichaEvolucao/paciente/:id
```

### Rota POST para ficha de evolução

> Utilize o body no formato json para enviar cadastrar o prontuário.

<strong>Corpo da requisição:</strong>

```json
{
  "id_paciente": 1,
  "descricao": "Descrição detalhada da evolução do paciente."
}
```

### Retorno com o codigo 201 (Created)
Vai retornar o json confirmando o registro

### Rota DELETE para deletar pelo Id do relatório

```
http://localhost:3000/fichaEvolucao/delete/:id
```

### Retorno com o codigo 200 (Successful)
Vai retornar uma mensagem de sucesso


### Notas Adicionais:

1. **Banco de Dados**: Certifique-se de que seu banco de dados PostgreSQL esteja configurado corretamente e acessível via a variável de ambiente `DATABASE_URL`.

2. **Migrations**: A API utiliza as migrations geradas pelo Prisma execute o comando `npx prisma migration dev` para gerar as tabelas e colunas.

3. **Variáveis de Ambiente**: Renomear o arquivo `.env-example` para `.env`, Adicione quaisquer outras variáveis de ambiente necessárias ao arquivo `.env`.

<div align="center">
<img src="https://cdn.simpleicons.org/nestjs" height="30" alt="nestjs logo"  />
<img src="https://cdn.simpleicons.org/prisma" height="30" alt="nestjs logo"  />
<img src="https://cdn.simpleicons.org/postgresql/" height="30" alt="nestjs logo"  />
</div>
