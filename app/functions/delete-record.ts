const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function deleteRecord(data: {id: number}) {
  try {
    const deletedComputerRecord = await prisma.computer.delete({
      where: {
        id: data.id,
      },
    });

    console.log('Deleted Computer Record:', deletedComputerRecord);
    return deletedComputerRecord;
  } catch (error) {
    console.error('Error deleting Computer Record:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}