import { z } from 'zod';

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from '~/server/api/trpc';
import MailerLite from '@mailerlite/mailerlite-nodejs';
import { TRPCError } from '@trpc/server';

const mailerlite = new MailerLite({
  api_key: process.env.MAILERLITE_API_KEY,
});
const groupId = '112391380779665245';

export const emailRouter = createTRPCRouter({
  addSubscriber: publicProcedure
    .input(z.object({ name: z.string(), email: z.string().email() }))
    .mutation(({ input }) => {
      let params = {};
      // Check if inputted name has a space in it, if so, split it into first and last name
      if (input.name.includes(' ')) {
        const nameArray = input.name.split(' ');
        params = {
          email: input.email,
          fields: {
            name: nameArray[0],
            last_name: nameArray[1],
          },
          groups: [groupId],
        };
      } else {
        params = {
          email: input.email,
          fields: {
            name: input.name,
          },
          groups: [groupId],
        };
      }

      mailerlite.subscribers
        .createOrUpdate(params)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          if (error.response) console.log(error.response.data);
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Failed to add subscriber',
          });
        });
    }),
});
