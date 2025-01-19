import { defineField, defineType } from 'sanity';


export const teamType = defineType({
  name: 'team',
  title: 'Equipe',
  type: 'document',
  fields: [
    defineField({
      name: 'lastname',
      title: 'Nom',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'firstname',
      title: 'Prénom',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'role',
      title: 'Rôle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
  ],
})
