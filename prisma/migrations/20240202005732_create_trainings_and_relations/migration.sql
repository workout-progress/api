-- CreateTable
CREATE TABLE "trainings" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "series" INTEGER NOT NULL,
    "series_type" TEXT NOT NULL,
    "training_routines_id" TEXT NOT NULL,

    CONSTRAINT "trainings_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "trainings" ADD CONSTRAINT "trainings_training_routines_id_fkey" FOREIGN KEY ("training_routines_id") REFERENCES "routines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
