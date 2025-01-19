import { defineField, defineType } from 'sanity';


export const wineType = defineType({
  name: 'wine',
  title: 'Cave',
  type: 'document',
  fields: [
    defineField({
      name: 'file',
      title: 'Fichier PDF',
      type: 'file',
      validation: (rule) => rule.required(),
      options: {
        accept: '.pdf' // This restricts uploads to PDF files only
      },
    }),
  ],
})
