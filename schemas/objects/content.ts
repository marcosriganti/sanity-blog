export default {
  name: 'content',
  title: 'Content Blocks',
  type: 'array',
  of: [
    {
      type: 'reference',
      to: [
        {type: 'hero'},
        {type: 'split'}
      ]
    }
  ]
};