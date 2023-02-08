/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type ContactProtocol =
  | "discord"
  | "email"
  | "line"
  | "phone"
  | "telegram"
  | "whatsapp"
  | "linkedin";

interface Contact {
  protocol: ContactProtocol;
  value: string;
}

interface WorkExperience {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string[];
}

interface Education {
  title: string;
  school: string;
  startYear: string;
  endYear: string;
  description?: string[] | undefined;
}

interface Certification {
  title: string;
  issuer: string;
  startDate: string;
  expirationDate: string;
  certificateUrl?: string | undefined;
  description?: string[] | undefined;
}

interface Skill {
  name: string;
  description: string[];
}

interface CV {
  template: string;
  // WARNING: generation is enum of string in zod (config.ts)
  generation: string;
  avatarUrl: string;
  name: string;
  pronouns: string;
  aboutMe?: string | undefined;
  location: string;
  contacts: Contact[];
  workExperiences?: WorkExperience[] | undefined;
  educations?: Education[];
  certifications?: Certification[] | undefined;
  skills?: Skill[];
}
