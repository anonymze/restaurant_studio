import { defineField, defineType } from 'sanity';


export const eventType = defineType({
  name: 'event',
  title: 'Événement',
  type: 'document',
  fields: [
    defineField({
      name: 'date',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Concert', value: 'concert'},
          {title: 'Soirée jeu', value: 'game'},
          {title: 'Dégustation', value: 'degustation'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
		defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',	
      validation: (rule) => rule.required(),
    }),
		defineField({
      name: 'description',
      title: 'Description',
      type: 'string',	
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
})
