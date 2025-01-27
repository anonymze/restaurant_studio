import { defineField, defineType } from 'sanity';


export const workType = defineType({
  name: 'work',
  title: 'Horaire de travail',
  type: 'document',
  fields: [
    defineField({
      name: 'first_day_work',
      title: "Jours d'ouverture",
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'hours_first_day_work',
      title: 'Horaires d\'ouverture et fermeture',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'second_day_work',
      title: "Autres jours d'ouverture",
      type: 'string',
    }),
    defineField({
      name: 'hours_second_day_work',
      title: 'Autres horaires d\'ouverture et fermeture',
      type: 'string',
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
