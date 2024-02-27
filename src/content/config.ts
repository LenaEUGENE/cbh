// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define a schema for each collection you'd like to validate.
const coachings = defineCollection({
  schema: z.object({
    titre: z.string(),
    description: z.string(),
    img: z.string(),
    img_alt: z.string().optional(),
  }),
});

const pricing = defineCollection({
  schema: z.object({
    type: z.enum(["présentiel", "visio"]),
    catégorie: z.string(),
    fréquence: z.enum(["la séance", "mois", ""]),
    tarif: z.string(),
    rythme: z.string().optional(),
    description: z.string(),
    engagement: z.enum([
      "sans engagement",
      "engagement de 1 mois renouvelable",
      "sur demande",
      "avec ou sans engagement",
    ]),
    populaire: z.boolean(),
  }),
});

const testimonials = defineCollection({
  schema: z.object({
    auteur: z.string(),
    âge: z.string().optional(),
    job: z.string(),
    témoignage: z.string(),
    img: z.string(),
    img_alt: z.string().optional(),
    preview: z.boolean(),
  }),
});

const gallery = defineCollection({
  schema: z.object({
    img: z.string(),
    alt_img: z.string().optional(),
  }),
});

export const collections = {
  coachings, pricing, gallery,

};
// 3. Export a single `collections` object to register your collection(s)
