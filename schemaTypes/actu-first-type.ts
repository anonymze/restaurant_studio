import { defineField, defineType } from 'sanity';


export const actuFirstType = defineType({
  name: 'actuFirst',
  title: 'Actualités première page',
  type: 'document',
  fields: [
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
})
