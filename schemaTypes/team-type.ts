import { defineField, defineType } from 'sanity';


export const teamType = defineType({
  name: 'team',
  title: 'Equipe',
  type: 'document',
  fields: [
    defineField({
      name: 'position',
      title: 'Position',
      type: 'number',

      validation: (rule) => rule.required().custom((value) => {
        if (!value) return true;
        if (value < 1) return 'Valeur ne peut être en dessous de 1';
        return true;
      }),
    }),
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
    }),
    
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
  ],
})
