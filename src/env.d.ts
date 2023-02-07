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
  startYear: number;
  endYear: number;
  description?: string[] | undefined;
}

interface Certification {
  title: string;
  issuer: string;
  startDate: string;
  expirationDate: string;
  certificateUrl: string | undefined;
  description: string[] | undefined;
}

interface Skill {
  name: string;
  description: string[];
}

interface CV {
  template: string;
  generation: string;
  avatarUrl: string;
  name: string;
  aboutMe?: string | undefined;
  location: string;
  contacts: Contact[];
  workExperiences?: WorkExperience[] | undefined;
  educations?: Education[] | undefined;
  certifications?: Certification[] | undefined;
  skills?: Skill[] | undefined;
}
