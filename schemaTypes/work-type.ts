import { defineField, defineType } from 'sanity';


export const workType = defineType({
  name: 'work',
  title: 'Horaire de travail',
  type: 'document',
  fields: [
    defineField({
      name: 'starting_work',
      title: "Horaire d'ouverture premier service",
      type: 'string',
      options: {
        list: ALLOWED_TIMES(),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ending_work',
      title: 'Horaire de fermeture premier service',
      type: 'string',
      options: {
        list: ALLOWED_TIMES(),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'starting_work_2',
      title: "Horaire d'ouverture deuxième service",
      type: 'string',
      options: {
        list: ALLOWED_TIMES(),
      },
    }),
    defineField({
      name: 'ending_work_2',
      title: 'Horaire de fermeture deuxième service',
      type: 'string',
      options: {
        list: ALLOWED_TIMES(),
      },
    }),
    defineField({
      name: 'days_of_work',
      title: "Jours d'ouverture",
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Lundi', value: 'Lundi'},
          {title: 'Mardi', value: 'Mardi'},
          {title: 'Mercredi', value: 'Mercredi'},
          {title: 'Jeudi', value: 'Jeudi'},
          {title: 'Vendredi', value: 'Vendredi'},
          {title: 'Samedi', value: 'Samedi'},
          {title: 'Dimanche', value: 'Dimanche'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
  ],
})

export function ALLOWED_TIMES() {
  const times = []
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 30) {
      times.push(`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`)
    }
  }
  return times
}
