import { defineField, defineType } from 'sanity';


export const wineType = defineType({
  name: 'wine',
  title: 'Cave',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
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
  ],
})
