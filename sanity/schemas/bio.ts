import { defineType } from 'sanity'
export const bio = defineType({
  name: 'bio',
  title: 'Bio',
  type: 'document',
  fields: [
    { name: 'content', title: 'Bio Text (HTML)', type: 'text' },
    { name: 'excerpt', title: 'Short Excerpt', type: 'string' },
  ],
})
