import { defineField, defineType } from 'sanity';


export const evenementType = defineType({
  name: 'evenement',
  title: 'Événement',
  type: 'document',
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Concert', value: 'concert'},
          {title: 'Soirée jeu de société', value: 'boardgame'},
          {title: 'Autre', value: 'other'},
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
      name: 'date',
      type: 'date',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
  ],
})
