import { NextApiResponse, NextApiRequest } from "next";

export const allProductsMock = [
  {
    id: 1,
    title:
      "  کیف مسافرتی ضد آب بقیه چیزی که نوشتن چزته و مشخصاتی که میدم هم  جایی نمیتونی پیدا گنی",

    price: 154800,
    discount: 20,
    category: "mobile",
    description:
      " این محصول آزمایشی می باشد و صرفا برای ساخت شکل کامپوننت به کار می رود ",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 100 },
    customHead: "فروش ویژه",
    stock: 2,
    breadCrump: [
      {
        title: "خانه",
        url: {
          uri: "/",
        },
      },
      {
        title: "همه محصولات",
        url: {
          uri: "/#main",
        },
      },

      {
        title: "کالای دیجیتال",
        url: {
          uri: "/search/category-digital/",
        },
      },
      {
        title: "نام کالا",
        url: {
          uri: "/product/1",
        },
      },
    ],
  },
  {
    id: 2,
    title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",

    price: 185400,
    discount: 40,
    category: "mobile",
    description:
      " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: { rate: 3.5, count: 120 },
    // customHead: "فروش ویژه",
    stock: 10,
    breadCrump: [
      {
        title: "خانه",
        url: {
          uri: "/",
        },
      },
      {
        title: "همه محصولات",
        url: {
          uri: "/#main",
        },
      },

      {
        title: "کالای دیجیتال",
        url: {
          uri: "/search/category-digital/",
        },
      },
      {
        title: "نام کالا",
        url: {
          uri: "/product/2",
        },
      },
    ],
  },
  {
    id: 3,
    title:
      "  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    price: 985100,
    discount: 50,
    category: "mobile",
    description:
      " این محصول آزمایشی می باشد و صرفا برای ساخت شکل کامپوننت به کار می رود ",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: { rate: 2, count: 70 },
    customHead: "فروش ویژه",
    stock: 15,
    breadCrump: [
      {
        title: "خانه",
        url: {
          uri: "/",
        },
      },
      {
        title: "همه محصولات",
        url: {
          uri: "/#main",
        },
      },

      {
        title: "کالای دیجیتال",
        url: {
          uri: "/search/category-digital/",
        },
      },
      {
        title: "نام کالا",
        url: {
          uri: "/product/3",
        },
      },
    ],
  },
  {
    id: 4,
    title:
      "  کیف مسافرتی ضد آب بقیه چیزی که نوشتن چزته و مشخصاتی که میدم هم  جایی نمیتونی پیدا گنی",

    price: 20000,
    discount: 50,
    category: "mobile",
    description:
      " این محصول آزمایشی می باشد و صرفا برای ساخت شکل کامپوننت به کار می رود ",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: { rate: 4, count: 150 },
    // customHead: "فروش ویژه",
    stock: 20,
    breadCrump: [
      {
        title: "خانه",
        url: {
          uri: "/",
        },
      },
      {
        title: "همه محصولات",
        url: {
          uri: "/#main",
        },
      },

      {
        title: "کالای دیجیتال",
        url: {
          uri: "/search/category-digital/",
        },
      },
      {
        title: "نام کالا",
        url: {
          uri: "/product/4",
        },
      },
    ],
  },
  {
    id: 5,
    title:
      "  کیف مسافرتی ضد آب بقیه چیزی که نوشتن چزته و مشخصاتی که میدم هم  جایی نمیتونی پیدا گنی",

    price: 10000,
    discount: 90,
    category: "mobile",
    description: " از این تخفیف فوق العاده استفاده کنید ",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 1, count: 100 },
    customHead: "فروش ویژه",
    stock: 50,
    breadCrump: [
      {
        title: "خانه",
        url: {
          uri: "/",
        },
      },
      {
        title: "همه محصولات",
        url: {
          uri: "/#main",
        },
      },

      {
        title: "کالای دیجیتال",
        url: {
          uri: "/search/category-digital/",
        },
      },
      {
        title: "نام کالا",
        url: {
          uri: "/product/5",
        },
      },
    ],
  },
  {
    id: 6,
    title: "   مشخصاتی که میدم هم  جایی نمیتونی پیدا گنی",

    price: 20000,
    discount: 30,
    category: "mobile",
    description: " بیا اینور بازار نرو اونور بازار بیا از زاربق بخر ",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 4, count: 120 },
    customHead: "فروش ویژه",
    stock: 5,
    breadCrump: [
      {
        title: "خانه",
        url: {
          uri: "/",
        },
      },
      {
        title: "همه محصولات",
        url: {
          uri: "/#main",
        },
      },

      {
        title: "کالای دیجیتال",
        url: {
          uri: "/search/category-digital/",
        },
      },
      {
        title: "نام کالا",
        url: {
          uri: "/product/6",
        },
      },
    ],
  },
  {
    id: 7,
    title: "  آقا رامین پا طلا ",

    price: 2000000,
    discount: 50,
    category: "mobile",
    description: " دارای مهارت تمام کنندگی بالا ونگه دارندگی توپ ",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 3.5, count: 120 },
    customHead: "فروش ویژه",
    stock: 5,
    breadCrump: [
      {
        title: "خانه",
        url: {
          uri: "/",
        },
      },
      {
        title: "همه محصولات",
        url: {
          uri: "/#main",
        },
      },

      {
        title: "کالای دیجیتال",
        url: {
          uri: "/search/category-digital/",
        },
      },
      {
        title: "نام کالا",
        url: {
          uri: "/product/7",
        },
      },
    ],
  },
  {
    id: 8,
    title: "  امیرمهدی حرفه ای",

    price: 15000000,
    discount: 20,
    category: "mobile",
    description:
      " دوندگی بالا تمام کنندگی بالا رهبری عالی و قدرت توپ گیری فوق العاده  ",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: { rate: 4, count: 120 },
    customHead: "فروش ویژه",
    stock: 2,
    breadCrump: [
      {
        title: "خانه",
        url: {
          uri: "/",
        },
      },
      {
        title: "همه محصولات",
        url: {
          uri: "/#main",
        },
      },

      {
        title: "کالای دیجیتال",
        url: {
          uri: "/search/category-digital/",
        },
      },
      {
        title: "نام کالا",
        url: {
          uri: "/product/8",
        },
      },
    ],
  },
  {
    id: 9,
    title: "  بهنام فرانسه😎",

    price: 1900000,
    discount: 30,
    category: "mobile",
    description:
      "در هر پستی نیاز به بازیکن داشته باشید نیاز شما مرتفع می شود  ",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: { rate: 3, count: 120 },
    customHead: "فروش ویژه",
    stock: 2,
    breadCrump: [
      {
        title: "خانه",
        url: {
          uri: "/",
        },
      },
      {
        title: "همه محصولات",
        url: {
          uri: "/#main",
        },
      },

      {
        title: "کالای دیجیتال",
        url: {
          uri: "/search/category-digital/",
        },
      },
      {
        title: "نام کالا",
        url: {
          uri: "/product/9",
        },
      },
    ],
  },
  {
    id: 10,
    title: "  رضا سبزه 😂",

    price: 354000,
    discount: 80,
    category: "mobile",
    description: " اگر مشکل اعصاب یا قلب ندارید روی این بازیکن حساب کنید",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: { rate: 3.2, count: 120 },
    customHead: "فروش ویژه",
    stock: 200,
    breadCrump: [
      {
        title: "خانه",
        url: {
          uri: "/",
        },
      },
      {
        title: "همه محصولات",
        url: {
          uri: "/#main",
        },
      },

      {
        title: "کالای دیجیتال",
        url: {
          uri: "/search/category-digital/",
        },
      },
      {
        title: "نام کالا",
        url: {
          uri: "/product/10",
        },
      },
    ],
  },
  {
    id: 11,
    title: "  حسین گلادیاتور",

    price: 254000,
    discount: 50,
    category: "mobile",
    description:
      " اگر بازیکنی با خشونت و جدیت بالا و جنگنده و دونده میخواهید این بازیکن مناسب شماست   ",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    rating: { rate: 3.2, count: 120 },
    customHead: "فروش ویژه",
    stock: 5,
    breadCrump: [
      {
        title: "خانه",
        url: {
          uri: "/",
        },
      },
      {
        title: "همه محصولات",
        url: {
          uri: "/#main",
        },
      },

      {
        title: "کالای دیجیتال",
        url: {
          uri: "/search/category-digital/",
        },
      },
      {
        title: "نام کالا",
        url: {
          uri: "/product/11",
        },
      },
    ],
  },
  {
    id: 12,
    title: "علی لوط",

    price: 5,
    discount: 99,
    category: "mobile",
    description: " تو رو خدا بخر ",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    rating: { rate: 3.2, count: 120 },
    customHead: "فروش فوق ویژه",
    stock: 0,
    breadCrump: [
      {
        title: "خانه",
        url: {
          uri: "/",
        },
      },
      {
        title: "همه محصولات",
        url: {
          uri: "/#main",
        },
      },

      {
        title: "کالای دیجیتال",
        url: {
          uri: "/search/category-digital/",
        },
      },
      {
        title: "نام کالا",
        url: {
          uri: "/product/12",
        },
      },
    ],
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // let data = JSON.stringify(allProductsMock);
  res.status(200).json(allProductsMock);
}
