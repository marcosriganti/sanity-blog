import {defineField, defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
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
        name: 'subheader',
        title: '',
        type: 'text',
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
        name: 'button',
        title: 'Buttons CTA',
        type: 'array',
        of: [{type: 'button'}],
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
