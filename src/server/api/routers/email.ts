import { z } from 'zod';

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from '~/server/api/trpc';
import MailerLite from '@mailerlite/mailerlite-nodejs';
import { TRPCError } from '@trpc/server';
import axios from 'axios';

export const emailRouter = createTRPCRouter({
  addSubscriber: publicProcedure
    .input(z.object({ name: z.string(), email: z.string().email() }))
    .mutation(async ({ input }) => {
      if (!process.env.MAILERLITE_API_KEY) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'MailerLite API key not found',
        });
      }

      const apiUrl = 'https://connect.mailerlite.com/api/subscribers';
      const apiKey = process.env.MAILERLITE_API_KEY;
      const config = {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json', // Specifying the content type
        },
      };
      const mailerlite = new MailerLite({
        api_key: process.env.MAILERLITE_API_KEY,
      });
      const groupId = '112391380779665245';
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
      const subscriber = await axios.post(apiUrl, params, config);

      if (subscriber.status !== 200) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to add subscriber',
        });
      }

      // mailerlite.subscribers
      //   .createOrUpdate(params)
      //   .then((response) => {
      //     console.log(response.data);
      //   })
      //   .catch((error) => {
      //     if (error.response) console.log(error.response.data);
      //     throw new TRPCError({
      //       code: 'INTERNAL_SERVER_ERROR',
      //       message: 'Failed to add subscriber',
      //     });
      //   });
    }),
});
