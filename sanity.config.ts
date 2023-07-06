import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { defaultDocumentNode} from './src/defaultDocumentNode'
const baseURL = 'http://localhost:4000';

export default defineConfig({
  name: 'default',
  title: 'SurfairSanity',
  projectId: 'h69ejqml',
  dataset: 'production',
  plugins: [deskTool({
    defaultDocumentNode
  }), visionTool()],
  document: {
    productionUrl: async (prev, context) => {
      // context includes the client and other details
      const {getClient, dataset, document} = context
      const client = getClient({apiVersion: '2023-07-03'})
      
      if (document._type === 'page') { 
        const slug = document?.slug?.current;
        // console.log('slug', slug)
        return `${baseURL}${slug}`
      }
      if (document._type === 'post') {
        const slug = await client.fetch(
          `*[_type == 'routeInfo' && post._ref == $postId][0].slug.current`,
          {postId: document._id}
        )
        
        
        console.log('slug', slug)
        const params = new URLSearchParams()
        params.set('preview', 'true')
        params.set('dataset', dataset)

        return `${baseURL}/surf-report/${slug}?${params}`
      }

      return prev
    },
  },
  schema: {
    types: schemaTypes,
  },
})
