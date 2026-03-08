import { defineType } from 'sanity'
export const track = defineType({
  name: 'track',
  title: 'Track',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'label', type: 'string' },
    { name: 'year', type: 'number' },
    { name: 'youtubeUrl', type: 'url' },
    { name: 'youtubePlaylistId', type: 'string', title: 'YouTube Playlist ID (OLAK5...)' },
    { name: 'thumbnail', type: 'url', title: 'Thumbnail URL' },
    { name: 'videoCount', type: 'number', title: 'Track count' },
    { name: 'soundcloudUrl', type: 'url' },
    { name: 'order', type: 'number' },
  ],
})
