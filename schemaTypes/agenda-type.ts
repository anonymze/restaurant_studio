import { defineField, defineType } from 'sanity';


export const agendaType = defineType({
  name: 'agenda',
  title: 'Agenda',
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
