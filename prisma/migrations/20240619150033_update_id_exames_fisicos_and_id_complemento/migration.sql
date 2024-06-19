-- AlterTable
ALTER TABLE "complementos" ALTER COLUMN "id_complementos" DROP DEFAULT;
DROP SEQUENCE "complementos_id_complementos_seq";

-- AlterTable
ALTER TABLE "exames_fisicos" ALTER COLUMN "id_exames_fisicos" DROP DEFAULT;
DROP SEQUENCE "exames_fisicos_id_exames_fisicos_seq";
