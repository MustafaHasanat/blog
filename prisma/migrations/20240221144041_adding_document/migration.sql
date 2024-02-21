-- CreateTable
CREATE TABLE "document" (
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "document_title_key" ON "document"("title");
