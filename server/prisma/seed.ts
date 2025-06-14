import { PrismaClient } from '@prisma/client';
import { generateInvoiceList } from './invoice.data';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'admin@company.com',
      password: '$2b$10$RcKVkB6YOrIG1mb2BUi0k.fYsZFLZ2CR0mEk51NQs6vwudpmh3Zr.',
      name: 'Admin',
    },
  });

  await prisma.invoice.createMany({
    data: generateInvoiceList(user.id),
  });
}

main()
  .then(() => {
    console.log('✅ Seed complete');
    return prisma.$disconnect();
  })
  .catch((err) => {
    console.error('❌ Seed failed', err);
    return prisma.$disconnect();
  });
