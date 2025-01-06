import { defineField, defineType } from 'sanity';


export const menuType = defineType({
  name: 'menu',
  title: 'Menu',
  type: 'document',
  fields: [
    defineField({
      name: 'menuItems',
      title: 'Menu Items',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
					{
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
              list: [
                {title: 'Entrée', value: 'entry'},
                {title: 'Plat', value: 'plate'},
                {title: 'Dessert', value: 'dessert'},
              ],
            },
            validation: (rule) => rule.required(),
          },
          {
            name: 'title',
            title: 'Titre',
            type: 'string',
            validation: (rule) => rule.required(),
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text',
          },
					{
            name: 'price',
            title: 'Prix',
            type: 'number',
            validation: (rule) => rule.required().min(1),
          },
          {
            name: 'vegetarian',
            title: 'Végétarien',
            type: 'boolean',
            initialValue: false,
          },
					{
						name: 'allergens',
						title: 'Allergènes',
						type: 'boolean',
						initialValue: false,
					},
        ]
      }]
    }),
    defineField({
      name: 'date',
      type: 'date',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
  ],
})