import { Data } from "../shared";

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function updateComputerRecordById(data: Data) {
  try {
    const updatedComputerRecord = await prisma.computer.update({
      where: {
        id: data.id,
      },
      data: data,
    });

    console.log('Updated Computer Record:', updatedComputerRecord);
    return updatedComputerRecord;
  } catch (error) {
    console.error('Error updating Computer Record:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}