-- DropForeignKey
ALTER TABLE "anamnese" DROP CONSTRAINT "anamnese_id_anamnese_fkey";

-- DropForeignKey
ALTER TABLE "condutas" DROP CONSTRAINT "condutas_id_prontuario_fkey";

-- DropForeignKey
ALTER TABLE "exames_fisicos" DROP CONSTRAINT "exames_fisicos_id_exames_fisicos_fkey";

-- DropForeignKey
ALTER TABLE "objetivos" DROP CONSTRAINT "objetivos_id_prontuario_fkey";

-- AddForeignKey
ALTER TABLE "anamnese" ADD CONSTRAINT "anamnese_id_anamnese_fkey" FOREIGN KEY ("id_anamnese") REFERENCES "prontuarios"("id_prontuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exames_fisicos" ADD CONSTRAINT "exames_fisicos_id_exames_fisicos_fkey" FOREIGN KEY ("id_exames_fisicos") REFERENCES "prontuarios"("id_prontuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "objetivos" ADD CONSTRAINT "objetivos_id_prontuario_fkey" FOREIGN KEY ("id_prontuario") REFERENCES "prontuarios"("id_prontuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "condutas" ADD CONSTRAINT "condutas_id_prontuario_fkey" FOREIGN KEY ("id_prontuario") REFERENCES "prontuarios"("id_prontuario") ON DELETE CASCADE ON UPDATE CASCADE;
