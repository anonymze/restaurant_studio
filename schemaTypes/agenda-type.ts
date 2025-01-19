import { defineField, defineType } from 'sanity';


export const agendaType = defineType({
  name: 'agenda',
  title: 'Agenda',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (rule) => rule.required(),
      options: {
        hotspot: true,
      },
    }),
  ],
})
