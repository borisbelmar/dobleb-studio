import {defineType} from 'sanity'

export default defineType({
  name: 'technology',
  type: 'document',
  title: 'Technology',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (rule) => rule.required(),
    },
    {
      name: 'img',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    },
  ],
})
