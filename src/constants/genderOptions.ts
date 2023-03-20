import type { Gender } from "@prisma/client";

type GenderOption = { value: Gender; label: string };

export const genderOptions: GenderOption[] = [
  {
    value: "MALE",
    label: "Male"
  },
  {
    value: "FEMALE",
    label: "Female"
  },
  {
    value: "NONBINARY",
    label: "Non-Binary"
  },
  {
    value: "OTHER",
    label: "Other"
  },
  {
    value: "PREFERNOTTOSAY",
    label: "Prefer not to say"
  }
];
