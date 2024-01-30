-- CreateTable
CREATE TABLE "Computer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "manufacturer" TEXT NOT NULL,
    "processor_type" TEXT NOT NULL,
    "clock_frequency" REAL NOT NULL,
    "ram" REAL NOT NULL,
    "hdd" REAL NOT NULL,
    "date" DATETIME NOT NULL
);
