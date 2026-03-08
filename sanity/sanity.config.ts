import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemas } from './schemas'

export default defineConfig({
  name: 'julianperez',
  title: 'Julian Perez CMS',
  projectId: 'YOUR_PROJECT_ID',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: { types: schemas },
})
