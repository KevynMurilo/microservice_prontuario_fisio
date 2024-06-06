/*
  Warnings:

  - You are about to drop the column `id_prontuario` on the `anamnese` table. All the data in the column will be lost.
  - You are about to drop the column `id_exames_fisicos` on the `complementos` table. All the data in the column will be lost.
  - You are about to drop the column `id_prontuario` on the `exames_fisicos` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id_anamnese]` on the table `anamnese` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_complementos]` on the table `complementos` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_exames_fisicos]` on the table `exames_fisicos` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "anamnese" DROP CONSTRAINT "anamnese_id_prontuario_fkey";

-- DropForeignKey
ALTER TABLE "complementos" DROP CONSTRAINT "complementos_id_exames_fisicos_fkey";

-- DropForeignKey
ALTER TABLE "exames_fisicos" DROP CONSTRAINT "exames_fisicos_id_prontuario_fkey";

-- DropIndex
DROP INDEX "anamnese_id_prontuario_key";

-- DropIndex
DROP INDEX "complementos_id_exames_fisicos_key";

-- DropIndex
DROP INDEX "exames_fisicos_id_prontuario_key";

-- AlterTable
ALTER TABLE "anamnese" DROP COLUMN "id_prontuario";

-- AlterTable
ALTER TABLE "complementos" DROP COLUMN "id_exames_fisicos";

-- AlterTable
ALTER TABLE "exames_fisicos" DROP COLUMN "id_prontuario";

-- CreateIndex
CREATE UNIQUE INDEX "anamnese_id_anamnese_key" ON "anamnese"("id_anamnese");

-- CreateIndex
CREATE UNIQUE INDEX "complementos_id_complementos_key" ON "complementos"("id_complementos");

-- CreateIndex
CREATE UNIQUE INDEX "exames_fisicos_id_exames_fisicos_key" ON "exames_fisicos"("id_exames_fisicos");

-- AddForeignKey
ALTER TABLE "anamnese" ADD CONSTRAINT "anamnese_id_anamnese_fkey" FOREIGN KEY ("id_anamnese") REFERENCES "prontuarios"("id_prontuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exames_fisicos" ADD CONSTRAINT "exames_fisicos_id_exames_fisicos_fkey" FOREIGN KEY ("id_exames_fisicos") REFERENCES "prontuarios"("id_prontuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "complementos" ADD CONSTRAINT "complementos_id_complementos_fkey" FOREIGN KEY ("id_complementos") REFERENCES "exames_fisicos"("id_exames_fisicos") ON DELETE RESTRICT ON UPDATE CASCADE;
