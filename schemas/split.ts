import {defineField, defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'split',
  title: 'Split Block',
  type: 'document',
  fields: [
    defineField({
        name: 'name',
        title: 'Name',
        type: 'string',
      }),
      defineField({
      name: 'header',
      title: 'Header',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Background Image',
      description: 'Use Optimized JPEG Images 2400x1000. To optimize use: https://ezgif.com/optimize',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
          name: 'inverted',
          title: 'Inverted',
          description: 'Display order, default Image + Content, Inverted Content + Image',
        type: 'boolean',
        options: {
            layout: 'switch'    
          }
          
    }),
    defineField({
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [{type: 'simpleContent'}],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
    prepare(selection) {
      return {...selection}
    },
  },
})
