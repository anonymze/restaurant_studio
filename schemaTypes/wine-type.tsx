import { defineField, defineType } from 'sanity';


export const wineType = defineType({
  name: 'wine',
  title: 'Caves',
  type: 'document',
  fields: [
    defineField({
      name: 'caveItems',
      title: 'Cave Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'category',
              title: 'Category',
              type: 'string',
              options: {
                list: [
                  {title: 'Blanc', value: 'blanc'},
                  {title: 'Rouge', value: 'rouge'},
                  {title: 'Rosé', value: 'rose'},
                ],
              },
              validation: (rule) => rule.required(),
            },
            {
              name: 'name',
              title: 'Nom',
              type: 'string',
              validation: (rule) => rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
              validation: (rule) => rule.required(),
            },
            {
              name: 'price',
              title: 'Prix',
              type: 'number',
              validation: (rule) => rule.required().min(1),
            },
						{
              name: 'bio',
              title: 'Bio',
              type: 'boolean',
              initialValue: false,
            },
          ],
        },
      ],
    }),
  ],
})
