import { Data } from "../shared";

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function addRecord(data: Data) {
  try {
    const newComputerRecord = await prisma.computer.create({
      data: {
        manufacturer: data.manufacturer,
        processor_type: data.processor_type,
        clock_frequency: data.clock_frequency,
        ram: data.ram,
        hdd: data.hdd,
      },
    });

    console.log('Added Computer Record:', newComputerRecord);
    return newComputerRecord;
  } catch (error) {
    console.error('Error adding Computer Record:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
