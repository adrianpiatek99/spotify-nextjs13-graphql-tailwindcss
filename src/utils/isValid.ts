export const isValidYear = (year: number) =>
  year >= new Date().getFullYear() - 100 && year <= new Date().getFullYear();
