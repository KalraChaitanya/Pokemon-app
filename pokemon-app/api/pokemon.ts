// api/pokemon.ts
import { createRouter } from 'trpc';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const pokemonRouter = createRouter()
  .query('getPokemon', {
    input: z.string(),
    resolve: async ({ input }) => {
      const pokemon = await prisma.pokemon.findUnique({
        where: { name: input },
      });
      return pokemon;
    },
  });
