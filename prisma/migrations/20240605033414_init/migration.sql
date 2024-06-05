-- CreateEnum
CREATE TYPE "StatusTonus" AS ENUM ('NORMAL', 'ALTERADO');

-- CreateTable
CREATE TABLE "prontuarios" (
    "id_prontuario" SERIAL NOT NULL,
    "id_paciente" INTEGER NOT NULL,
    "id_fisioterapeuta" INTEGER NOT NULL,
    "id_coordenador" INTEGER NOT NULL,
    "unidade" TEXT NOT NULL,
    "setor_atendimento" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "responsavel" TEXT,
    "caso_emergencia_avisar" TEXT,
    "telefone_emergencia" TEXT,
    "diagnostico_clinico" TEXT NOT NULL,
    "medico_responsavel" TEXT NOT NULL,
    "diagnostico_fisoterapeuta" TEXT NOT NULL,
    "antecendentes_familiar" TEXT,
    "patologias_associadas" TEXT,
    "peso" DECIMAL(65,30) NOT NULL,
    "altura" DECIMAL(65,30) NOT NULL,
    "estado_geral" TEXT NOT NULL,
    "independencia_de_locomocao" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "prontuarios_pkey" PRIMARY KEY ("id_prontuario")
);

-- CreateTable
CREATE TABLE "anamnese" (
    "id_anamnese" SERIAL NOT NULL,
    "id_prontuario" INTEGER NOT NULL,
    "queixa_principal" TEXT NOT NULL,
    "hma" TEXT NOT NULL,
    "hmp" TEXT NOT NULL,
    "avd" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "anamnese_pkey" PRIMARY KEY ("id_anamnese")
);

-- CreateTable
CREATE TABLE "cirurgias" (
    "id_cirurgia" SERIAL NOT NULL,
    "id_anamnese" INTEGER NOT NULL,
    "realizou" BOOLEAN NOT NULL,
    "quais" TEXT,
    "resultados_exames" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "cirurgias_pkey" PRIMARY KEY ("id_cirurgia")
);

-- CreateTable
CREATE TABLE "doencas_concomitantes" (
    "id_doencas_concomitantes" SERIAL NOT NULL,
    "id_anamnese" INTEGER NOT NULL,
    "dm" BOOLEAN NOT NULL,
    "has" BOOLEAN NOT NULL,
    "outros" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "doencas_concomitantes_pkey" PRIMARY KEY ("id_doencas_concomitantes")
);

-- CreateTable
CREATE TABLE "exames_fisicos" (
    "id_exames_fisicos" SERIAL NOT NULL,
    "id_prontuario" INTEGER NOT NULL,
    "pa" TEXT NOT NULL,
    "fc" TEXT NOT NULL,
    "fr" TEXT NOT NULL,
    "ap" TEXT NOT NULL,
    "spo2" TEXT NOT NULL,
    "temp" TEXT NOT NULL,
    "exames_especificos" TEXT NOT NULL,
    "tonus_muscular" "StatusTonus" NOT NULL,
    "tipo_tonus" TEXT,
    "grau_tonus" TEXT,
    "local_tonus" TEXT,
    "distrubuicao_topografica" TEXT NOT NULL,
    "percepcao" TEXT,
    "coordenacao_dinamica_e_estatica" TEXT NOT NULL,
    "triciptal" BOOLEAN NOT NULL,
    "biciptal" BOOLEAN NOT NULL,
    "radial" BOOLEAN NOT NULL,
    "patelar" BOOLEAN NOT NULL,
    "calcanear" BOOLEAN NOT NULL,
    "cutaneo_abdominal" BOOLEAN NOT NULL,
    "cutaneo_plantar" BOOLEAN NOT NULL,
    "contraturas_deformidades" BOOLEAN NOT NULL,
    "ulceras" BOOLEAN NOT NULL,
    "local_ulceras" TEXT,
    "deambula" BOOLEAN NOT NULL,
    "descricao_deambula" TEXT,
    "inspecao" TEXT,
    "palpacao" TEXT,
    "mensuracao" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "exames_fisicos_pkey" PRIMARY KEY ("id_exames_fisicos")
);

-- CreateTable
CREATE TABLE "forca_muscular" (
    "id_forca_muscular" SERIAL NOT NULL,
    "id_exames_fisicos" INTEGER NOT NULL,
    "musculo" TEXT,
    "grupo" TEXT,
    "grau" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "forca_muscular_pkey" PRIMARY KEY ("id_forca_muscular")
);

-- CreateTable
CREATE TABLE "adm" (
    "id_adm" SERIAL NOT NULL,
    "id_exames_fisicos" INTEGER NOT NULL,
    "movimento" TEXT,
    "ativa" TEXT,
    "passiva" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "adm_pkey" PRIMARY KEY ("id_adm")
);

-- CreateTable
CREATE TABLE "complementos" (
    "id_complementos" SERIAL NOT NULL,
    "id_exames_fisicos" INTEGER NOT NULL,
    "sensibilidade" TEXT NOT NULL,
    "dor" INTEGER NOT NULL,
    "clonus" TEXT NOT NULL,
    "reflexo_ou_reacoes" TEXT NOT NULL,
    "ausculta_cardiaca" TEXT NOT NULL,
    "testes_especiais" TEXT NOT NULL,
    "avaliacao_funcional" TEXT NOT NULL,
    "observacoes" TEXT,
    "exames_complementares_ou_laudos" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "complementos_pkey" PRIMARY KEY ("id_complementos")
);

-- CreateTable
CREATE TABLE "objetivos" (
    "id_objetivo" SERIAL NOT NULL,
    "id_prontuario" INTEGER NOT NULL,
    "descricao_objetivo_fisioterapeutico" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "objetivos_pkey" PRIMARY KEY ("id_objetivo")
);

-- CreateTable
CREATE TABLE "condutas" (
    "id_conduta" SERIAL NOT NULL,
    "id_prontuario" INTEGER NOT NULL,
    "descricao_conduta_fisioterapeutica" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "condutas_pkey" PRIMARY KEY ("id_conduta")
);

-- CreateIndex
CREATE UNIQUE INDEX "anamnese_id_prontuario_key" ON "anamnese"("id_prontuario");

-- CreateIndex
CREATE UNIQUE INDEX "exames_fisicos_id_prontuario_key" ON "exames_fisicos"("id_prontuario");

-- CreateIndex
CREATE UNIQUE INDEX "complementos_id_exames_fisicos_key" ON "complementos"("id_exames_fisicos");

-- AddForeignKey
ALTER TABLE "anamnese" ADD CONSTRAINT "anamnese_id_prontuario_fkey" FOREIGN KEY ("id_prontuario") REFERENCES "prontuarios"("id_prontuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cirurgias" ADD CONSTRAINT "cirurgias_id_anamnese_fkey" FOREIGN KEY ("id_anamnese") REFERENCES "anamnese"("id_anamnese") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doencas_concomitantes" ADD CONSTRAINT "doencas_concomitantes_id_anamnese_fkey" FOREIGN KEY ("id_anamnese") REFERENCES "anamnese"("id_anamnese") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exames_fisicos" ADD CONSTRAINT "exames_fisicos_id_prontuario_fkey" FOREIGN KEY ("id_prontuario") REFERENCES "prontuarios"("id_prontuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "forca_muscular" ADD CONSTRAINT "forca_muscular_id_exames_fisicos_fkey" FOREIGN KEY ("id_exames_fisicos") REFERENCES "exames_fisicos"("id_exames_fisicos") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adm" ADD CONSTRAINT "adm_id_exames_fisicos_fkey" FOREIGN KEY ("id_exames_fisicos") REFERENCES "exames_fisicos"("id_exames_fisicos") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "complementos" ADD CONSTRAINT "complementos_id_exames_fisicos_fkey" FOREIGN KEY ("id_exames_fisicos") REFERENCES "exames_fisicos"("id_exames_fisicos") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "objetivos" ADD CONSTRAINT "objetivos_id_prontuario_fkey" FOREIGN KEY ("id_prontuario") REFERENCES "prontuarios"("id_prontuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "condutas" ADD CONSTRAINT "condutas_id_prontuario_fkey" FOREIGN KEY ("id_prontuario") REFERENCES "prontuarios"("id_prontuario") ON DELETE RESTRICT ON UPDATE CASCADE;
