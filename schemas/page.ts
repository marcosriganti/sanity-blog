import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
        name: 'description',
        title: 'Meta Description',
        type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Meta Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'reference',
      to: {type: 'layout'},
    }),
    defineField({
      name: 'content',
      title: 'Content Blocks',
      type: 'content'

    })
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      media: 'image',
    },
    prepare(selection) {
      const {slug} = selection
      return {...selection, subtitle: `${slug.current}`}
    },
  },
})
