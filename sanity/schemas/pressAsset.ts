import { defineType } from 'sanity'
export const pressAsset = defineType({
  name: 'pressAsset',
  title: 'Press Asset',
  type: 'document',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'description', type: 'string' },
    { name: 'file', type: 'file' },
    { name: 'fileSize', type: 'string' },
    { name: 'fileType', type: 'string' },
  ],
})
