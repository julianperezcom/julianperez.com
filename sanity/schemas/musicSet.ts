import { defineType } from 'sanity'
export const musicSet = defineType({
  name: 'musicSet',
  title: 'Music Set',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'venue', type: 'string' },
    { name: 'date', type: 'date' },
    { name: 'soundcloudUrl', type: 'url' },
    { name: 'youtubeUrl', type: 'url' },
    { name: 'duration', type: 'string' },
    { name: 'order', type: 'number' },
  ],
})
