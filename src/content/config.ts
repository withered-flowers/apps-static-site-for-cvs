import { z, defineCollection } from "astro:content";

const cvSchema = {
  schema: z.object({
    template: z.string(),
    generation: z.enum([
      "HCK-52 (Zigzag Fox)",
      "HCK-53 (Arsenic Fox)",
      "RMT-31 (Eustoma Fox)",
      "TMP-01 (Template)",
    ]),
    avatarUrl: z.string(),
    name: z.string(),
    pronouns: z.string(),
    location: z.string(),
    aboutMe: z.string().optional(),
    contacts: z.array(
      z.object({
        protocol: z.enum([
          "discord",
          "email",
          "line",
          "linkedin",
          "phone",
          "telegram",
          "whatsapp",
        ]),
        value: z.string(),
      })
    ),
    workExperiences: z
      .array(
        z.object({
          title: z.string(),
          company: z.string(),
          startDate: z.string(),
          endDate: z.string(),
          description: z.array(z.string()),
        })
      )
      .optional(),
    educations: z.array(
      z.object({
        title: z.string(),
        school: z.string(),
        startYear: z.string(),
        endYear: z.string(),
        description: z.array(z.string()).optional(),
      })
    ),
    certifications: z
      .array(
        z.object({
          title: z.string(),
          issuer: z.string(),
          startDate: z.string(),
          expirationDate: z.string(),
          certificateUrl: z.string().optional(),
          description: z.array(z.string()).optional(),
        })
      )
      .optional(),
    skills: z.array(
      z.object({
        name: z.string(),
        description: z.array(z.string()),
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
