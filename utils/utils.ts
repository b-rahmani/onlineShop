import { productType } from "../components/SingleProduct/SingleProduct";
import {basketProductType} from "../store/basketProductsSlice"

export const convert_to_persian_digits = (text: string | number) => {
  const id = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  if (typeof text === "string") {
    return text.replace(/[0-9]/g, (w) => id[+w]);
  } else {
    return text.toString().replace(/[0-9]/g, (w) => id[+w]);
  }
};

export const convert_to_en_digits = (text: string): string => {
  return text.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString());
};

export const ellispedText = (text: string, max: number = 30) => {
  return text.substring(0, max) + (text.length > max ? "..." : "");
};

export const priceDiscounted = (price: number, discount: number) => {
  return price - (price * discount) / 100;
};

export const joinClassModules = (...modules: string[]) => {
  return modules.join(" ");
};

export const RoundPrice = (number: number, digitRoundLength: number) => {
  return number - (number % digitRoundLength);
};

export const SumPriceCart = (cart: basketProductType[]) => {
  const price = cart.reduce((sum, product) => {
    return sum + priceDiscounted(product.selectedAttribute.price, product.selectedAttribute.discount);
  }, 0);

  return price;
};
export const SumPriceWithoutDiscountCart = (cart: basketProductType[]) => {
  const price = cart.reduce((sum, product) => {
    return sum + product.selectedAttribute.price;
  }, 0);

  return price;
};

export const your_benefit_buy = (
  product_products: basketProductType | basketProductType[]
): number => {
  let benefit;
  if (Array.isArray(product_products)) {
    benefit = product_products.reduce((sum, product: basketProductType) => {
      return sum + your_benefit_buy(product);
    }, 0);
  } else {
    benefit = ((product_products.selectedAttribute.price * product_products.selectedAttribute.discount) / 100)*product_products.quantity;
  }

  return benefit;
};

// export const copyToClipBoard = (text: string) => {
//   text.select();
//   text.setSelectionRange(0, 99999);
//   navigator.clipboard.writeText(text);

//   navigator.clipboard.readText().then((res) => {
//     alert(res);
//   });
// };
