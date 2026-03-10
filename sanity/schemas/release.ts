import { defineType } from 'sanity'
export const release = defineType({
  name: 'release',
  title: 'Release',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'releaseType', type: 'string',
      options: { list: ['EP', 'Single', 'LP', 'Compilation', 'Remix', 'Appearance'] } },
    { name: 'year', type: 'number' },
    { name: 'label', type: 'string' },
    { name: 'coverUrl', title: 'Cover URL (Bandcamp)', type: 'url' },
    { name: 'discogsUrl', title: 'Discogs URL', type: 'url' },
    { name: 'beatportUrl', type: 'url' },
    { name: 'soundcloudUrl', type: 'url' },
    { name: 'bandcampUrl', type: 'url' },
    { name: 'artist', title: 'Artist (if not Julian Perez)', type: 'string' },
  ],
})
