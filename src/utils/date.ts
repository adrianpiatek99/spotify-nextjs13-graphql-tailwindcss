export const daysInMonth = (m: number, y: number) => {
  switch (m) {
    case 2:
      return (y % 4 == 0 && y % 100) || y % 400 == 0 ? 29 : 28;
    case 9:
    case 4:
    case 6:
    case 11:
      return 30;
    default:
      return 31;
  }
};

export const isValidDate = (d: number, m: number, y: number) => {
  return m >= 0 && m < 12 && d > 0 && d <= daysInMonth(m, y);
};
