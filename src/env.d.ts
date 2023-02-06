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
  description: string[];
}

interface Certification {
  title: string;
  startDate: string;
  expirationDate: string;
  url: string;
  description: string[];
}

interface Skills {
  name: string;
  description: string[];
}

interface CV {
  template: string;
  generation: string;
  avatarUrl: string;
  name: string;
  aboutMe?: string;
  location: string;
  contacts: Contact[];
  workExperience?: WorkExperience[];
  education?: Education[];
  certification?: Certification[];
  skills?: Skills[];
}
