export const isValidYear = (year: number) =>
  year >= new Date().getFullYear() - 100 && year <= new Date().getFullYear();

export const isValidUsername = (username: string) =>
  /^([a-zA-Z0-9]+\s)*[a-zA-Z0-9]+$/g.test(username);

export const onlyEnglishLetters = (value: string) => {
  const regex = /^[a-zA-Z\s]*$/g;

  return regex.test(value);
};
