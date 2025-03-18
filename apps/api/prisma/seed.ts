import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.reservation.deleteMany();
  await prisma.organization.deleteMany();
  await prisma.user.deleteMany();

  const thee = await prisma.user.upsert({
    where: {
      studentId: "6538106021",
    },
    update: {},
    create: {
      studentId: "6538106021",
      firstName: "Panithi",
      lastName: "Makthiengtrong",
    },
  });

  const alice = await prisma.user.upsert({
    where: {
      studentId: "6538106022",
    },
    update: {},
    create: {
      studentId: "6538106022",
      firstName: "Alice",
      lastName: "Wonderland",
    },
  });

  const bob = await prisma.user.upsert({
    where: {
      studentId: "6538106023",
    },
    update: {},
    create: {
      studentId: "6538106023",
      firstName: "Bob",
      lastName: "Builder",
    },
  });

  console.info("Created Users: ", { thee, alice, bob });

  // make organization
  const esc = await prisma.organization.create({
    data: {
      name: "ESC",
    },
  });

  const thinc = await prisma.organization.create({
    data: {
      name: "Thinc.",
    },
  });

  console.info("Created Organizations: ", { esc, thinc });

  // make reservation
  const reservation1 = await prisma.reservation.create({
    data: {
      topic: "ESC Meeting",
      userId: thee.id,
      organizationId: esc.id,
      startAt: new Date("2021-09-01T09:00:00"),
      endAt: new Date("2021-09-01T10:00:00"),
    },
  });

  const reservation2 = await prisma.reservation.create({
    data: {
      topic: "Thinc. Meeting",
      userId: alice.id,
      organizationId: thinc.id,
      startAt: new Date("2021-09-01T10:00:00"),
      endAt: new Date("2021-09-01T11:00:00"),
    },
  });

  console.info("Created Reservations: ", { reservation1, reservation2 });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
