-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL DEFAULT CONCAT('PRD', LPAD(nextval('product_id_seq')::text, 4, '0')),
    "name" TEXT NOT NULL,
    "price" TEXT,
    "imageUrl" TEXT,
    "category" TEXT NOT NULL,
    "discountActive" BOOLEAN NOT NULL DEFAULT false,
    "discountValue" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
