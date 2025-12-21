const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function test() {
  const user = await prisma.user.create({
    data: {
      email: "govind@test.com",
      name: "Govind",
      password: "secret123",
    },
  });

  console.log("Created user:", user);

  const users = await prisma.user.findMany();
  console.log("All users:", users);
}

test()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
