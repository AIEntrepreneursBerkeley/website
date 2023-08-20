import { makeSource, defineDatabase } from 'contentlayer-source-notion';
import * as notion from '@notionhq/client';

const client = new notion.Client({ auth: process.env.NOTION_TOKEN });

export const Post = defineDatabase(() => ({
  name: 'Post',
  databaseId: '52eeaca6c811484fbeb4ee6a9e2090d5',
  query: {
    filter: {
      property: 'Status',
      status: {
        equals: 'Published',
      },
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => post.url,
    },
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post.url!}`,
    },
  },
}));

export const Member = defineDatabase(() => ({
  name: 'Member',
  databaseId: '7e1f3c999e9a4eec9f673e5edf722b1b',
}));

export const Event = defineDatabase(() => ({
  name: 'Event',
  databaseId: '032f6d66ba294df399c01499bab51cf9',
}));

export const FrontPage = defineDatabase(() => ({
  name: 'FrontPage',
  databaseId: '3232e67617dd47859b2fc810c7dd2ba4',
}));

export default makeSource({
  client,
  databaseTypes: [Post, Member, Event, FrontPage],
});
