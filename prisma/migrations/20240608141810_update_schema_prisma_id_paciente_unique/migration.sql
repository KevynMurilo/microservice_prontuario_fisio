/*
  Warnings:

  - A unique constraint covering the columns `[id_paciente]` on the table `prontuarios` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "prontuarios_id_paciente_key" ON "prontuarios"("id_paciente");
