const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  await prisma.pokemon.createMany({
    data: [
      {
        name: 'Bulbasaur',
        types: 'grass', // Provide types as a single String, not an array
        sprite: 'https://pokemon.com/pictures/bulbasaur.png',
      },
      // Add more Pokémon entries as needed
    ],
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
