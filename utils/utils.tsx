export const conver_to_persian_digits = (text: string) => {
  const id = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return text.replace(/[0-9]/g, (w) => id[+w]);
};

export const conver_to_en_digits = (text: string): string => {
  return text.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString());
};
