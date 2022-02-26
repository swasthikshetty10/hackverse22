-- CreateTable
CREATE TABLE "Places" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "data" JSONB[],

    CONSTRAINT "Places_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Places_name_key" ON "Places"("name");
