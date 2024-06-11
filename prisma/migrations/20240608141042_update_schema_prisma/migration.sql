/*
  Warnings:

  - You are about to drop the column `created_at` on the `adm` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `adm` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `anamnese` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `anamnese` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `cirurgias` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `cirurgias` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `complementos` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `complementos` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `condutas` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `condutas` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `doencas_concomitantes` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `doencas_concomitantes` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `exames_fisicos` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `exames_fisicos` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `forca_muscular` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `forca_muscular` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `objetivos` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `objetivos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "adm" DROP COLUMN "created_at",
DROP COLUMN "deleted_at";

-- AlterTable
ALTER TABLE "anamnese" DROP COLUMN "created_at",
DROP COLUMN "deleted_at";

-- AlterTable
ALTER TABLE "cirurgias" DROP COLUMN "created_at",
DROP COLUMN "deleted_at";

-- AlterTable
ALTER TABLE "complementos" DROP COLUMN "created_at",
DROP COLUMN "deleted_at";

-- AlterTable
ALTER TABLE "condutas" DROP COLUMN "created_at",
DROP COLUMN "deleted_at";

-- AlterTable
ALTER TABLE "doencas_concomitantes" DROP COLUMN "created_at",
DROP COLUMN "deleted_at";

-- AlterTable
ALTER TABLE "exames_fisicos" DROP COLUMN "created_at",
DROP COLUMN "deleted_at";

-- AlterTable
ALTER TABLE "ficha_de_evolução" ADD COLUMN     "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleted_at" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "forca_muscular" DROP COLUMN "created_at",
DROP COLUMN "deleted_at";

-- AlterTable
ALTER TABLE "objetivos" DROP COLUMN "created_at",
DROP COLUMN "deleted_at";

-- AlterTable
ALTER TABLE "relatorios" ADD COLUMN     "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleted_at" TIMESTAMP(3);
