import { defineDatabase, makeSource } from 'contentlayer-source-notion';

import * as notion from '@notionhq/client';

const client = new notion.Client({ auth: process.env.NOTION_TOKEN });

export const Post = defineDatabase(() => ({
  name: 'Post',
  databaseId: 'd5023acd563d45f294dba4e38e4d7748',
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
  databaseId: '1ee64024306a4714af57320fc8ca6834',
}));

export const Event = defineDatabase(() => ({
  name: 'Event',
  databaseId: '4be071d698344d49b476f1134dd33fd2',
}));

export const Timeline = defineDatabase(() => ({
  name: 'Timeline',
  databaseId: 'a09ca00c83b7412c8547493cbd03653f',
}));

export const FrontPage = defineDatabase(() => ({
  name: 'FrontPage',
  databaseId: '886cc9f862fe4935a8b12bcac8600cc3',
}));

export const Company = defineDatabase(() => ({
  name: 'Company',
  databaseId: '993c74ec71f142938b21a9364a378a1f',
}));

export const Links = defineDatabase(() => ({
  name: 'Links',
  databaseId: '9bd60bbcd8804541b468cb2585c97f51',
}));

export default makeSource({
  client,
  databaseTypes: [Post, Member, Event, Timeline, FrontPage, Company, Links],
});
