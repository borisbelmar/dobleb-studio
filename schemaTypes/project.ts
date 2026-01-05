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
      options: {
        list: [
          {title: 'Web Development', value: 'web'},
          {title: 'Branding', value: 'branding'},
          {title: 'Marketing', value: 'marketing'},
          {title: 'UI/UX Design', value: 'uiux'},
          {title: 'Product Design', value: 'product'},
          {title: 'Other', value: 'other'},
        ],
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'areas',
      type: 'array',
      title: 'Areas',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'UX', value: 'ux'},
          {title: 'Development', value: 'development'},
          {title: 'Creativity', value: 'creativity'},
          {title: 'Design', value: 'design'},
          {title: 'Product Design', value: 'product-design'},
          {title: 'Integrations', value: 'integrations'},
          {title: 'CX', value: 'cx'},
        ],
        layout: 'tags',
      },
    },
  ],
})
