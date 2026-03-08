import { defineType } from 'sanity'
export const pressReference = defineType({
  name: 'pressReference',
  title: 'Press Reference',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'source', type: 'string' },
    { name: 'url', type: 'url' },
    { name: 'date', type: 'date' },
    { name: 'category', type: 'string',
      options: { list: ['Media', 'Podcasts & Mixes', 'Más'] } },
  ],
})
