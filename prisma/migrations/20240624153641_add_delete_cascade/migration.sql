-- DropForeignKey
ALTER TABLE "adm" DROP CONSTRAINT "adm_id_exames_fisicos_fkey";

-- DropForeignKey
ALTER TABLE "cirurgias" DROP CONSTRAINT "cirurgias_id_anamnese_fkey";

-- DropForeignKey
ALTER TABLE "complementos" DROP CONSTRAINT "complementos_id_complementos_fkey";

-- DropForeignKey
ALTER TABLE "doencas_concomitantes" DROP CONSTRAINT "doencas_concomitantes_id_anamnese_fkey";

-- DropForeignKey
ALTER TABLE "forca_muscular" DROP CONSTRAINT "forca_muscular_id_exames_fisicos_fkey";

-- AddForeignKey
ALTER TABLE "cirurgias" ADD CONSTRAINT "cirurgias_id_anamnese_fkey" FOREIGN KEY ("id_anamnese") REFERENCES "anamnese"("id_anamnese") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doencas_concomitantes" ADD CONSTRAINT "doencas_concomitantes_id_anamnese_fkey" FOREIGN KEY ("id_anamnese") REFERENCES "anamnese"("id_anamnese") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "forca_muscular" ADD CONSTRAINT "forca_muscular_id_exames_fisicos_fkey" FOREIGN KEY ("id_exames_fisicos") REFERENCES "exames_fisicos"("id_exames_fisicos") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "adm" ADD CONSTRAINT "adm_id_exames_fisicos_fkey" FOREIGN KEY ("id_exames_fisicos") REFERENCES "exames_fisicos"("id_exames_fisicos") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "complementos" ADD CONSTRAINT "complementos_id_complementos_fkey" FOREIGN KEY ("id_complementos") REFERENCES "exames_fisicos"("id_exames_fisicos") ON DELETE CASCADE ON UPDATE CASCADE;
