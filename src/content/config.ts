import { z, defineCollection } from "astro:content";

const cvSchema = {
  schema: z.object({
    template: z.string(),
    generation: z.string(),
    avatarUrl: z.string(),
    name: z.string(),
    location: z.string(),
    aboutMe: z.string().optional(),
    contacts: z.array(
      z.object({
        protocol: z.enum([
          "discord",
          "email",
          "line",
          "phone",
          "telegram",
          "whatsapp",
        ]),
        value: z.string(),
      })
    ),
  }),
};

export type cvType = {
  template: string;
};

const cvCollection = defineCollection(cvSchema);

export const collections = {
  cv: cvCollection,
};
