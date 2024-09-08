import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { transactionSchema } from './schemaTypes/transactionSchema'

export default defineConfig({
  name: 'default',
  title: 'defiApp',

  projectId: 'o3czjbeg',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes.concat(
      transactionSchema
    )
  },
})
