import {defineType} from 'sanity'

export default defineType({
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (rule) => rule.required(),
    },
    {
      name: 'featuredImage',
      type: 'image',
      title: 'Featured Image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'year',
      type: 'number',
      title: 'Year',
      validation: (rule) => rule.required().min(1900).max(2100),
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      validation: (rule) => rule.required(),
    },
  ],
})
