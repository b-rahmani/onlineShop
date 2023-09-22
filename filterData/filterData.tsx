export const filters = [
  {
    name: "category_id",
    type: "list",
    faName: "دسته بندی",
    items: [
      { name: "clothes", faName: "لباس و پوشاک", value: "clothes" },
      { name: "ornaments", faName: "زیور آلات", value: "ornaments" },
      { name: "digital", faName: "کالای دیجیتال", value: "digital" },
    ],
  },
  {
    name: "stock",
    type: "radio",
    faName: "فقط کالاهای موجود",
    items: [
      { name: "exist", faName: "موجود", value: "1" },
      { name: "notExist", faName: "ناموجود", value: "0" },
    ],
  },
  {
    name: "color",
    type: "select",
    faName: "رنگ",
    items: [
      { name: "silver", faName: "نقره ای", value: "#c0c0c0" },
      { name: "yellow", faName: "زرد", value: "#ffea4f" },
      { name: "red", faName: "قرمز", value: "#ff0000" },
      { name: "black", faName: "مشکی", value: "#000000" },
      { name: "gold", faName: "طلایی", value: "#ffd700" },
    ],
  },
  {
    name: "isDiscount",
    type: "radio",
    faName: "فقط کالای تخفیف دار",
    items: [
      { name: "discount", faName: "تخفیف", value: "1" },
      { name: "notDiscount", faName: "بدون تخفیف", value: "0" },
    ],
  },
  {
    name: "customHead",
    type: "select",
    faName: "جشنواره ها",
    items: [
      { name: "yearSell", faName: "فروش سال", value: "yearSell" },
      { name: "customSell", faName: "فروش ویژه ", value: "customSell" },
    ],
  },
  {
    name: "price",
    type: "range",
    faName: "محدوده قیمت",
    items: [
      { name: "min-price", faName: "حداقل", value: 0 },
      { name: "max-price", faName: "حداکثر", value: 50000000 },
    ],
  },
];

export const digikala_filters = {
  brands: {
    type: "checkbox",
    title: "برند",
    options: [
      {
        id: 18,
        code: "samsung",
        title_fa: "سامسونگ",
        title_en: "Samsung",
        url: {
          uri: "/brand-landing/samsung/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/3960.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: true,
      },
      {
        id: 1662,
        code: "xiaomi",
        title_fa: "شیائومی",
        title_en: "Xiaomi",
        url: {
          uri: "/brand/xiaomi/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/2994.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 10,
        code: "apple",
        title_fa: "اپل",
        title_en: "Apple",
        url: {
          uri: "/brand/apple/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/4039.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 82,
        code: "huawei",
        title_fa: "هوآوی",
        title_en: "Huawei",
        url: {
          uri: "/brand-landing/huawei/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/af664f0bcf9bc412b741c618e6e52fc2d090198f_1619269008.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: true,
      },
      {
        id: 20,
        code: "nokia",
        title_fa: "نوکیا",
        title_en: "Nokia",
        url: {
          uri: "/brand-landing/nokia/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/4038.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: true,
      },
      {
        id: 23,
        code: "motorola",
        title_fa: "موتورولا",
        title_en: "Motorola",
        url: {
          uri: "/brand-landing/motorola/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/3524.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: true,
      },
      {
        id: 7186,
        code: "honor",
        title_fa: "آنر",
        title_en: "Honor",
        url: {
          uri: "/brand/honor/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/6842.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 11349,
        code: "g-plus",
        title_fa: "جی پلاس",
        title_en: "G Plus",
        url: {
          uri: "/brand/g-plus/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/d1706f65d063b973d899285d45a111e4f33dc73d_1635590502.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 1990,
        code: "oneplus",
        title_fa: "وان پلاس",
        title_en: "OnePlus",
        url: {
          uri: "/brand/oneplus/",
        },
        visibility: true,
        is_premium: false,
      },
      {
        id: 121,
        code: "glx",
        title_fa: "جی ال ایکس",
        title_en: "GLX",
        url: {
          uri: "/brand/glx/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/5598.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 704,
        code: "energizer",
        title_fa: "انرجایزر",
        title_en: "Energizer",
        url: {
          uri: "/brand/energizer/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/5716.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 1919,
        code: "orod",
        title_fa: "ارد",
        title_en: "Orod",
        url: {
          uri: "/brand/orod/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/3456.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 1075,
        code: "cat",
        title_fa: "کاترپیلار",
        title_en: "CAT",
        url: {
          uri: "/brand/cat/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/5932.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 6859,
        code: "doogee",
        title_fa: "دوجی",
        title_en: "DOOGEE",
        url: {
          uri: "/brand/doogee/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/343.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 22,
        code: "lg",
        title_fa: "ال جی",
        title_en: "LG",
        url: {
          uri: "/brand/lg/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/3022.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 33752,
        code: "vivo",
        title_fa: "ویوو",
        title_en: "Vivo",
        url: {
          uri: "/brand/vivo/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/5443a4de4369a8df8ef7e83ad9ebe57a5cc5fafe_1652711245.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 3936,
        code: "hisense",
        title_fa: "هایسنس",
        title_en: "Hisense",
        url: {
          uri: "/brand/hisense/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/2096.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 78,
        code: "blackberry",
        title_fa: "بلک بری",
        title_en: "BlackBerry",
        url: {
          uri: "/brand/blackberry/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/3948.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 4150,
        code: "ruggear",
        title_fa: "راگ گیر",
        title_en: "RugGear",
        url: {
          uri: "/brand/ruggear/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/3532.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 4273,
        code: "blu",
        title_fa: "بلو",
        title_en: "Blu",
        url: {
          uri: "/brand/blu/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/2823.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 33672,
        code: "wiko",
        title_fa: "ویکو",
        title_en: "Wiko",
        url: {
          uri: "/brand/wiko/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/fae9d9d77ebfb8b97bbf89bd385e27fd8dc2c8d7_1652518892.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 1,
        code: "sony",
        title_fa: "سونی",
        title_en: "Sony",
        url: {
          uri: "/brand/sony/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/1812.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 3837,
        code: "techno",
        title_fa: "تکنو",
        title_en: "Techno",
        url: {
          uri: "/brand/techno/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/3284.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 28486,
        code: "gionee",
        title_fa: "جیونی",
        title_en: "GIONEE",
        url: {
          uri: "/brand/gionee/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/1ce4c2653bca609d26321d4637173bd1d7a49c75_1626093241.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 4,
        code: "asus",
        title_fa: "ایسوس",
        title_en: "ASUS",
        url: {
          uri: "/brand/asus/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/100014979.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 51,
        code: "microsoft",
        title_fa: "مایکروسافت",
        title_en: "Microsoft",
        url: {
          uri: "/brand/microsoft/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/1803.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 94,
        code: "lenovo",
        title_fa: "لنوو",
        title_en: "Lenovo",
        url: {
          uri: "/brand/lenovo/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/4001.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 26,
        code: "htc",
        title_fa: "اچ تی سی",
        title_en: "HTC",
        url: {
          uri: "/brand/htc/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/2445.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 21,
        code: "sony-ericsson",
        title_fa: "سونی اریکسون",
        title_en: "Sony Ericsson",
        url: {
          uri: "/brand/sony-ericsson/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/1807.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 1612,
        code: "google",
        title_fa: "گوگل",
        title_en: "Google",
        url: {
          uri: "/brand/google/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/2996.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 80,
        code: "alcatel",
        title_fa: "آلکاتل",
        title_en: "Alcatel",
        url: {
          uri: "/brand/alcatel/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/5531.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 7143,
        code: "mi",
        title_fa: "می",
        title_en: "Mi",
        url: {
          uri: "/brand/mi/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/93.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 79,
        code: "hyundai",
        title_fa: "هیوندای",
        title_en: "Hyundai",
        url: {
          uri: "/brand/hyundai/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/5530.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 2730,
        code: "tonino-lamborghini",
        title_fa: "تونینو لامبورگینی",
        title_en: "Tonino Lamborghini",
        url: {
          uri: "/brand/tonino-lamborghini/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/4014.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 252,
        code: "smartt",
        title_fa: "اسمارت",
        title_en: "Smart",
        url: {
          uri: "/brand/smartt/",
        },
        visibility: true,
        is_premium: false,
      },
      {
        id: 193,
        code: "zte",
        title_fa: "زد تی ای",
        title_en: "ZTE",
        url: {
          uri: "/brand/zte/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/3514.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 122,
        code: "dimo",
        title_fa: "دیمو",
        title_en: "Dimo",
        url: {
          uri: "/brand/dimo/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/5599.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 6401,
        code: "landrover",
        title_fa: "لندروور",
        title_en: "LANDROVER",
        url: {
          uri: "/brand/landrover/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/653.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 3918,
        code: "kenxinda",
        title_fa: "کن شین دا",
        title_en: "Ken Xin Da",
        url: {
          uri: "/brand/kenxinda/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/3761.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 3,
        code: "acer",
        title_fa: "ایسر",
        title_en: "Acer",
        url: {
          uri: "/brand/acer/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/3528.gif?x-oss-process=image/resize,m_lfit,h_160,w_160",
          ],
        },
        is_premium: false,
      },
      {
        id: 24,
        code: "i-mate",
        title_fa: "آی میت",
        title_en: "i-mate",
        url: {
          uri: "/brand/i-mate/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/4002.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 1928,
        code: "fly",
        title_fa: "فلای",
        title_en: "Fly",
        url: {
          uri: "/brand/fly/",
        },
        visibility: true,
        is_premium: false,
      },
      {
        id: 7380,
        code: "jimo",
        title_fa: "جیمو",
        title_en: "Jimo",
        url: {
          uri: "/brand/jimo/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/4131.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 2356,
        code: "gfive",
        title_fa: "جی فایو",
        title_en: "GFive",
        url: {
          uri: "/brand/gfive/",
        },
        visibility: true,
        is_premium: false,
      },
      {
        id: 106,
        code: "amazon",
        title_fa: "آمازون",
        title_en: "Amazon",
        url: {
          uri: "/brand/amazon/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/5549.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 708,
        code: "prestigio",
        title_fa: "پرستیژیو",
        title_en: "Prestigio",
        url: {
          uri: "/brand/prestigio/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/5700.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 89,
        code: "marshal",
        title_fa: "مارشال",
        title_en: "Marshal",
        url: {
          uri: "/brand/marshal/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/5533.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 53,
        code: "meizu",
        title_fa: "میزو",
        title_en: "Meizu",
        url: {
          uri: "/brand/meizu/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/5517.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 59,
        code: "x-vision",
        title_fa: "ایکس ویژن",
        title_en: "X.Vision",
        url: {
          uri: "/brand-landing/x-vision/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/d23e8875d5f7a9735e433f1fd86a1513902efc8b_1604470597.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: true,
      },
      {
        id: 5714,
        code: "elephone",
        title_fa: "الفون",
        title_en: "ELEPHONE",
        url: {
          uri: "/brand/elephone/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/1613.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 34,
        code: "gigabyte",
        title_fa: "گیگابایت",
        title_en: "GIGABYTE",
        url: {
          uri: "/brand/gigabyte/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/5502.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 383,
        code: "gigaset",
        title_fa: "گیگاست",
        title_en: "Gigaset",
        url: {
          uri: "/brand/gigaset/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/5688.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 4474,
        code: "smartronics",
        title_fa: "اسمارترونیکس",
        title_en: "Smartronics",
        url: {
          uri: "/brand/smartronics/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/2727.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 72,
        code: "tp-link",
        title_fa: "تی پی-لینک",
        title_en: "TP-LINK",
        url: {
          uri: "/brand/tp-link/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/3018.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 2889,
        code: "blue",
        title_fa: "بلو",
        title_en: "Blue",
        url: {
          uri: "/brand/blue/",
        },
        visibility: true,
        is_premium: false,
      },
      {
        id: 17,
        code: "kodak",
        title_fa: "کداک",
        title_en: "Kodak",
        url: {
          uri: "/brand/kodak/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/3998.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 716,
        code: "miniyator",
        title_fa: "مینیاتور",
        title_en: "Miniyator",
        url: {
          uri: "/brand/miniyator/",
        },
        visibility: true,
        is_premium: false,
      },
      {
        id: 1421,
        code: "vsun",
        title_fa: "ویسان",
        title_en: "Vsun",
        url: {
          uri: "/brand/vsun/",
        },
        visibility: true,
        is_premium: false,
      },
      {
        id: 3836,
        code: "innjoo",
        title_fa: "اینجو",
        title_en: "Innjoo",
        url: {
          uri: "/brand/innjoo/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/2144.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 6012,
        code: "enet",
        title_fa: "ای نت",
        title_en: "enet",
        url: {
          uri: "/brand/enet/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/1494.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 2105,
        code: "wileyfox",
        title_fa: "ویلی فاکس",
        title_en: "Wileyfox",
        url: {
          uri: "/brand/wileyfox/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/3924.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 987,
        code: "haier",
        title_fa: "هایر",
        title_en: "Haier",
        url: {
          uri: "/brand/haier/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/5927.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 986,
        code: "mercury",
        title_fa: "مرکوری",
        title_en: "Mercury",
        url: {
          uri: "/brand/mercury/",
        },
        visibility: true,
        is_premium: false,
      },
      {
        id: 34046,
        code: "iiif150",
        title_fa: "IIIF150",
        title_en: "IIIF150",
        url: {
          uri: "/brand/iiif150/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/707d2648b759d2cf5d5fff42c99737a263b1936c_1655123263.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 62,
        code: "archos",
        title_fa: "آرکاس",
        title_en: "Archos",
        url: {
          uri: "/brand/archos/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/3019.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 3523,
        code: "microdia",
        title_fa: "مایکرودیا",
        title_en: "Microdia",
        url: {
          uri: "/brand/microdia/",
        },
        visibility: true,
        is_premium: false,
      },
      {
        id: 2,
        code: "dell",
        title_fa: "دل",
        title_en: "Dell",
        url: {
          uri: "/brand/dell/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/3026.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 992,
        code: "i-life",
        title_fa: "آی لایف",
        title_en: "i-Life",
        url: {
          uri: "/brand/i-life/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/5761.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 3513,
        code: "pantech",
        title_fa: "پنتک",
        title_en: "Pantech",
        url: {
          uri: "/brand/pantech/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/3321.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 30581,
        code: "vira-mobile",
        title_fa: "ویرا",
        title_en: "VIRA",
        url: {
          uri: "/brand/vira-mobile/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/c626e19ca44434ee40ef6c3da11c3c4de931798c_1634630551.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 23025,
        code: "infinix",
        title_fa: " اینفینیکس",
        title_en: "Infinix",
        url: {
          uri: "/brand/infinix/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/8ec810b76cb9379310adb490db5074bfd8cc099f_1618818214.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 18387,
        code: "realme",
        title_fa: "ریلمی",
        title_en: "realme",
        url: {
          uri: "/brand/realme/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/f94892fcfb11874331872c644db1715ef8466d0c_1595341020.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 13974,
        code: "kgtel",
        title_fa: "کاجیتل",
        title_en: "kgtel",
        url: {
          uri: "/brand/kgtel/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/100011043.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 17347,
        code: "oppo-it",
        title_fa: "اوپو",
        title_en: "OPPO",
        url: {
          uri: "/brand/oppo-it/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/100014647.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 12979,
        code: "zoom-me",
        title_fa: "زوم می",
        title_en: "zoom me",
        url: {
          uri: "/brand/zoom-me/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/100009983.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 719,
        code: "miscellaneous",
        title_fa: "متفرقه",
        title_en: "Miscellaneous",
        url: {
          uri: "/brand/miscellaneous/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/d37a7e939b804659cfc1e6d88092a1b8ea8132d4_1603699076.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 33528,
        code: "general-luxe-it",
        title_fa: "جنرال لوکس",
        title_en: "GENERAL LUXE",
        url: {
          uri: "/brand/general-luxe-it/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/24f6caa613c7e74facd37e143f5cff434db11324_1651322438.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 10920,
        code: "dox",
        title_fa: "داکس",
        title_en: "DOX",
        url: {
          uri: "/brand/dox/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/100007973.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 14164,
        code: "leagoo",
        title_fa: "لیگو",
        title_en: "Leagoo",
        url: {
          uri: "/brand/leagoo/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/100011235.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 11653,
        code: "lava",
        title_fa: "لاوا",
        title_en: "LAVA",
        url: {
          uri: "/brand/lava/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public-2.digikala.com/digikala-brands/100008641.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 10420,
        code: "alpha-mob",
        title_fa: "الفا موب",
        title_en: "ALPHA MOB",
        url: {
          uri: "/brand/alpha-mob/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/7719.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 12302,
        code: "ulefone",
        title_fa: "یولفون",
        title_en: "ulefone",
        url: {
          uri: "/brand/ulefone/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/100009310.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 9269,
        code: "novinsun",
        title_fa: "نوین سان",
        title_en: "NOVINSUN",
        url: {
          uri: "/brand/novinsun/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/6475.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 21414,
        code: "blackview",
        title_fa: "بلک ویو",
        title_en: "BLACKVIEW",
        url: {
          uri: "/brand/blackview/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/cd661fe5ee539e346be47a3017b2b8b1bf4bb07a_1610264258.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
      {
        id: 34089,
        code: "decomas-new",
        title_fa: "دیکوماس",
        title_en: "Decomas",
        url: {
          uri: "/brand/decomas-new/",
        },
        visibility: true,
        logo: {
          url: [
            "https://dkstatics-public.digikala.com/digikala-brands/8e04fc85acedb3c126fa020079dfd30a0bffea53_1655541784.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80",
          ],
        },
        is_premium: false,
      },
    ],
  },
  colors: {
    type: "checkbox",
    title: "رنگ",
    options: [
      {
        id: 1,
        title: "مشکی",
        hex_code: "#212121",
      },
      {
        id: 4,
        title: "آبی",
        hex_code: "#2196f3",
      },
      {
        id: 2,
        title: "سفید",
        hex_code: "#FFFFFF",
      },
      {
        id: 11,
        title: "خاکستری",
        hex_code: "#9E9E9E",
      },
      {
        id: 6,
        title: "سبز",
        hex_code: "#00e676",
      },
      {
        id: 8,
        title: "بنفش",
        hex_code: "#9C27B1",
      },
      {
        id: 12,
        title: "نقره ای",
        hex_code: "#dedede",
      },
      {
        id: 15,
        title: "طلایی",
        hex_code: "#c99212",
      },
      {
        id: 43,
        title: "آبی روشن",
        hex_code: "#40aaff",
      },
      {
        id: 9,
        title: "سرمه ای",
        hex_code: "#002171",
      },
      {
        id: 17,
        title: "نارنجی",
        hex_code: "#ff5722",
      },
      {
        id: 42,
        title: "آبی تیره",
        hex_code: "#4c5e74",
      },
      {
        id: 3,
        title: "قرمز",
        hex_code: "#f44336",
      },
      {
        id: 5,
        title: "زرد",
        hex_code: "#ffeb3b",
      },
      {
        id: 25,
        title: "گل بهی",
        hex_code: "#FF8A81",
      },
      {
        id: 7,
        title: "صورتی",
        hex_code: "#FF80AB",
      },
      {
        id: 45,
        title: "سبز تیره",
        hex_code: "#007e33",
      },
      {
        id: 56,
        title: "مشکی براق",
        hex_code: "#000000",
      },
      {
        id: 64,
        title: "برنز",
        hex_code: "#c77b30",
      },
      {
        id: 55,
        title: "مشکی مات",
        hex_code: "#443c3c",
      },
      {
        id: 14,
        title: "قهوه ای",
        hex_code: "#562e1f",
      },
      {
        id: 13,
        title: "نوک مدادی",
        hex_code: "#424242",
      },
      {
        id: 24,
        title: "یاسی",
        hex_code: "#fce4ec",
      },
      {
        id: 59,
        title: "سفید یخی",
        hex_code: "#E1F5FE",
      },
      {
        id: 67,
        title: "ذغالی",
        hex_code: "#2f2f2f",
      },
      {
        id: 77,
        title: "سبز کله غازی",
        hex_code: "#01554b",
      },
      {
        id: 26,
        title: "سبز آبی",
        hex_code: "#00fff0",
      },
      {
        id: 39,
        title: "طوسی",
        hex_code: "#e0e0e0",
      },
      {
        id: 44,
        title: "سبز روشن",
        hex_code: "#4dff97",
      },
      {
        id: 74,
        title: "بنفش روشن",
        hex_code: "#d05ce3",
      },
      {
        id: 150,
        title: "قرمز تیره",
        hex_code: "#8B0000",
      },
      {
        id: 155,
        title: "آبی کم‌رنگ",
        hex_code: "#AFEEEE",
      },
      {
        id: 18,
        title: "فیروزه ای",
        hex_code: "#4ddcd7",
      },
      {
        id: 21,
        title: "زیتونی",
        hex_code: "#84831c",
      },
      {
        id: 29,
        title: "سفید صدفی",
        hex_code: "#f3f3f3",
      },
      {
        id: 34,
        title: "نقره ای آبی",
        hex_code: "#c2d3da",
      },
      {
        id: 35,
        title: "بی رنگ",
        hex_code: "#FFFFFE",
      },
      {
        id: 50,
        title: "رز گلد",
        hex_code: "#ff9e80",
      },
      {
        id: 54,
        title: "نارنجی کم‌رنگ",
        hex_code: "#ffaf47",
      },
      {
        id: 66,
        title: "صورتی خاکستری",
        hex_code: "#b498a1",
      },
      {
        id: 73,
        title: "صورتی روشن",
        hex_code: "#ff92b7",
      },
      {
        id: 89,
        title: "آبی یخی",
        hex_code: "#d5f2ff",
      },
      {
        id: 93,
        title: "ارغوانی",
        hex_code: "#9966cc",
      },
      {
        id: 101,
        title: "خاکی",
        hex_code: "#cec1b1",
      },
      {
        id: 111,
        title: "قرمز شرابی",
        hex_code: "#722f37",
      },
      {
        id: 131,
        title: "آبی نیلی",
        hex_code: "#4682b4",
      },
      {
        id: 137,
        title: "سبز دریایی",
        hex_code: "#6accab",
      },
    ],
  },
  digiplus: {
    type: "checkbox",
    title: "خدمات دیجی‌پلاس",
    icon: "https://api.digikala.com/static/files/4ad1cb2e.svg",
    options: [
      {
        type: "checkbox",
        title: "ارسال فوری",
        icon: "https://api.digikala.com/static/files/34919c51.png",
        id: "has_jet_delivery",
      },
    ],
  },
  has_ship_by_seller: {
    type: "switch",
    title: "ارسال فروشنده",
    description:
      "با خرید از کالاهایی با امکان ارسال توسط فروشنده می‌توانید سفارش خود را زودتر تحویل بگیرید",
    icon: "https://api.digikala.com/static/files/ab8e1e2a.png",
    options: [
      {
        id: 0,
        title: "فقط در شهر تهران",
      },
    ],
  },
  price: {
    type: "slider",
    title: "محدوده قیمت",
    options: {
      min: 0,
      max: 756000000,
    },
  },
  has_selling_stock: {
    type: "switch",
    title: "فقط کالاهای موجود",
    options: [
      {
        id: 0,
        title: "کالاهای موجود",
      },
    ],
  },
  has_ready_to_shipment: {
    type: "switch",
    title: "فقط کالاهای موجود در انبار دیجی‌کالا",
    options: [
      {
        id: 0,
        title: "کالاهای آماده ارسال",
      },
    ],
  },
  seller_types: {
    type: "checkbox",
    title: "نوع فروشنده",
    options: [
      {
        id: "official",
        title: "فروشنده رسمی",
      },
      {
        id: "trusted",
        title: "فروشنده برگزیده",
      },
      {
        id: "digikala",
        title: "دیجی‌کالا",
      },
    ],
  },
  types: {
    type: "checkbox",
    title: "نوع",
    options: [
      {
        id: 201,
        title: "سیستم عامل اندروید",
      },
      {
        id: 1315,
        title: "سایر سیستم عامل ها",
      },
      {
        id: 202,
        title: "سیستم عامل iOS",
      },
      {
        id: 1314,
        title: "سیستم عامل ویندوز فون",
      },
    ],
  },
  attributes: {
    type: "nested_list",
    title: "ویژگی‌ها",
    options: [
      {
        type: "checkbox",
        title: "شبکه های ارتباطی",
        id: 2255,
        options: [
          {
            id: 19558,
            title_fa: "2G",
            title_en: "2G",
          },
          {
            id: 19559,
            title_fa: "3G",
            title_en: "3G",
          },
          {
            id: 19560,
            title_fa: "4G",
            title_en: "4G",
          },
          {
            id: 19561,
            title_fa: "5G",
            title_en: "5G",
          },
        ],
      },
      {
        type: "checkbox",
        title: "پشتیبانی از کارت حافظه",
        id: 2252,
        options: [
          {
            id: 19520,
            title_fa: "microSD",
            title_en: "microSD",
          },
          {
            id: 31362,
            title_fa: "فاقد پشتیبانی از کارت حافظه",
          },
          {
            id: 19518,
            title_fa: "Memory Stick Micro-M2",
            title_en: "Memory Stick Micro-M2",
          },
          {
            id: 19523,
            title_fa: "Nano Memory",
            title_en: "Nano Memory",
          },
        ],
      },
      {
        type: "checkbox",
        title: "دوربین‌های پشت گوشی",
        id: 6518,
        options: [
          {
            id: 22569,
            title_fa: "1 ماژول دوربین",
            title_en: "1 ماژول دوربین",
          },
          {
            id: 22573,
            title_fa: "4 ماژول دوربین",
            title_en: "4 ماژول دوربین",
          },
          {
            id: 22572,
            title_fa: "3 ماژول دوربین",
            title_en: "3 ماژول دوربین",
          },
          {
            id: 22571,
            title_fa: "2 ماژول دوربین",
            title_en: "2 ماژول دوربین",
          },
          {
            id: 22570,
            title_fa: "بدون دوربین",
            title_en: "بدون دوربین",
          },
        ],
      },
      {
        type: "checkbox",
        title: "تعداد سیم کارت",
        id: 6517,
        options: [
          {
            id: 22567,
            title_fa: "دو عدد",
            title_en: "دو عدد",
          },
          {
            id: 22566,
            title_fa: "یک عدد",
            title_en: "یک عدد",
          },
          {
            id: 22568,
            title_fa: "سه عدد",
            title_en: "سه عدد",
          },
        ],
      },
      {
        type: "checkbox",
        title: "فن‌آوری موبایل",
        id: 6533,
        options: [
          {
            id: 22666,
            title_fa: "A-GPS",
            title_en: "A-GPS",
          },
          {
            id: 22667,
            title_fa: "GLONASS",
            title_en: "GLONASS",
          },
          {
            id: 22668,
            title_fa: "Beidou|BDS",
            title_en: "Beidou|BDS",
          },
          {
            id: 22669,
            title_fa: "GALILEO",
            title_en: "GALILEO",
          },
          {
            id: 22674,
            title_fa: "BDS",
            title_en: "BDS",
          },
          {
            id: 22670,
            title_fa: "Quasi-Zenith|QZSS",
            title_en: "Quasi-Zenith|QZSS",
          },
          {
            id: 22665,
            title_fa: "فن‌آوری مکان‌یابی",
            title_en: "فن‌آوری مکان‌یابی",
          },
          {
            id: 22671,
            title_fa: "Dual-band A-GPS",
            title_en: "Dual-band A-GPS",
          },
          {
            id: 22672,
            title_fa: "LTEPP",
            title_en: "LTEPP",
          },
          {
            id: 22673,
            title_fa: "SUPL",
            title_en: "SUPL",
          },
        ],
      },
      {
        type: "checkbox",
        title: "فناوری فوکوس",
        id: 6519,
        options: [
          {
            id: 22576,
            title_fa: "AutoFocus",
            title_en: "AutoFocus",
          },
          {
            id: 22577,
            title_fa: "Phase Detection",
            title_en: "Phase Detection",
          },
          {
            id: 22580,
            title_fa: "Phase Detection & Laser",
            title_en: "Phase Detection & Laser",
          },
          {
            id: 22581,
            title_fa: "Dual Pixel Phase Detection",
            title_en: "Dual Pixel Phase Detection",
          },
          {
            id: 22578,
            title_fa: "Laser",
            title_en: "Laser",
          },
          {
            id: 34496,
            title_fa: "PDAF",
          },
        ],
      },
      {
        type: "checkbox",
        title: "توضیحات سیم کارت",
        id: 6526,
        options: [
          {
            id: 22619,
            title_fa: "سایز نانو (8.8 × 12.3 میلی‌متر)",
            title_en: "سایز نانو (8.8 × 12.3 میلی‌متر)",
          },
          {
            id: 22617,
            title_fa: "سایز اصلی (15 × 25 میلی‌متر)",
            title_en: "سایز اصلی (15 × 25 میلی‌متر)",
          },
          {
            id: 22618,
            title_fa: "سایز میکرو (12 × 15 میلی‌متر)",
            title_en: "سایز میکرو (12 × 15 میلی‌متر)",
          },
          {
            id: 22620,
            title_fa: "پشتیبانی از eSIM",
            title_en: "پشتیبانی از eSIM",
          },
        ],
      },
      {
        type: "checkbox",
        title: "قابلیت‌های نرم‌افزاری",
        id: 6412,
        options: [
          {
            id: 25267,
            title_fa: "MMS",
            title_en: "MMS",
          },
          {
            id: 25268,
            title_fa: "ایمیل",
            title_en: "ایمیل",
          },
          {
            id: 25276,
            title_fa: "قابلیت استفاده از سرویس شبکه‌های اجتماعی",
            title_en: "قابلیت استفاده از سرویس شبکه‌های اجتماعی",
          },
          {
            id: 25278,
            title_fa: "قابلیت نمایش فایل‌های متنی PDF",
            title_en: "قابلیت نمایش فایل‌های متنی PDF",
          },
          {
            id: 25277,
            title_fa: "قابلیت نمایش اسناد مایکروسافت آفیس",
            title_en: "قابلیت نمایش اسناد مایکروسافت آفیس",
          },
          {
            id: 25270,
            title_fa: "برنامه ویرایش عکس",
            title_en: "برنامه ویرایش عکس",
          },
          {
            id: 25272,
            title_fa:
              "سرویس‌های گوگل شامل Google Search, Google Maps, Gmail و YouTube",
            title_en:
              "سرویس‌های گوگل شامل Google Search, Google Maps, Gmail و YouTube",
          },
          {
            id: 25280,
            title_fa: "مرورگر HTML5",
            title_en: "مرورگر HTML5",
          },
          {
            id: 28770,
            title_fa: "پشتیبانی از زبان فارسی",
          },
          {
            id: 25279,
            title_fa: "مرورگر HTML",
            title_en: "مرورگر HTML",
          },
          {
            id: 25271,
            title_fa: "جاوا",
            title_en: "جاوا",
          },
          {
            id: 25269,
            title_fa: "بازی پیش‌فرض",
            title_en: "بازی پیش‌فرض",
          },
        ],
      },
      {
        type: "checkbox",
        title: "موسیقی",
        id: 6535,
        options: [
          {
            id: 26703,
            title_fa: "MP3",
            title_en: "MP3",
          },
          {
            id: 26706,
            title_fa: "WAV",
            title_en: "WAV",
          },
          {
            id: 26704,
            title_fa: "eAAC",
            title_en: "eAAC",
          },
          {
            id: 26707,
            title_fa: "Flac",
            title_en: "Flac",
          },
          {
            id: 26705,
            title_fa: "WMA",
            title_en: "WMA",
          },
          {
            id: 26708,
            title_fa: "ACC",
            title_en: "ACC",
          },
          {
            id: 26709,
            title_fa: "AC3",
            title_en: "AC3",
          },
          {
            id: 26711,
            title_fa: "AIFF",
            title_en: "AIFF",
          },
          {
            id: 26710,
            title_fa: "AAX+",
            title_en: "AAX+",
          },
        ],
      },
      {
        type: "checkbox",
        title: "ویدیو",
        id: 6536,
        options: [
          {
            id: 22684,
            title_fa: "MP4",
            title_en: "MP4",
          },
          {
            id: 22688,
            title_fa: "H.264",
            title_en: "H.264",
          },
          {
            id: 22686,
            title_fa: "XviD",
            title_en: "XviD",
          },
          {
            id: 22687,
            title_fa: "WMV",
            title_en: "WMV",
          },
          {
            id: 22685,
            title_fa: "DivX",
            title_en: "DivX",
          },
          {
            id: 22690,
            title_fa: "H.265",
            title_en: "H.265",
          },
          {
            id: 22691,
            title_fa: "3gp",
            title_en: "3gp",
          },
          {
            id: 22689,
            title_fa: "H.263",
            title_en: "H.263",
          },
        ],
      },
      {
        type: "checkbox",
        title: "فناوری صفحه‌نمایش",
        id: 6525,
        options: [
          {
            id: 22593,
            title_fa: "IPS",
            title_en: "IPS",
          },
          {
            id: 22595,
            title_fa: "TFT",
            title_en: "TFT",
          },
          {
            id: 22588,
            title_fa: "Super AMOLED",
            title_en: "Super AMOLED",
          },
          {
            id: 22587,
            title_fa: "AMOLED",
            title_en: "AMOLED",
          },
          {
            id: 22586,
            title_fa: "LCD",
            title_en: "LCD",
          },
          {
            id: 22615,
            title_fa: "Super Retina XDR OLED",
            title_en: "Super Retina XDR OLED",
          },
          {
            id: 22601,
            title_fa: "LTPS IPS",
            title_en: "LTPS IPS",
          },
          {
            id: 22614,
            title_fa: "Dynamic AMOLED 2X",
            title_en: "Dynamic AMOLED 2X",
          },
          {
            id: 22616,
            title_fa: "PLS IPS",
            title_en: "PLS IPS",
          },
          {
            id: 22590,
            title_fa: "Super LCD",
            title_en: "Super LCD",
          },
          {
            id: 22609,
            title_fa: "PLS TFT",
            title_en: "PLS TFT",
          },
          {
            id: 22592,
            title_fa: "Super LCD 3",
            title_en: "Super LCD 3",
          },
          {
            id: 22611,
            title_fa: "Dynamic AMOLED",
            title_en: "Dynamic AMOLED",
          },
          {
            id: 22613,
            title_fa: "OLED",
            title_en: "OLED",
          },
          {
            id: 22591,
            title_fa: "Super LCD 2",
            title_en: "Super LCD 2",
          },
          {
            id: 22599,
            title_fa: "TN",
            title_en: "TN",
          },
          {
            id: 22597,
            title_fa: "P-OLED",
            title_en: "P-OLED",
          },
          {
            id: 22594,
            title_fa: "IPS Plus",
            title_en: "IPS Plus",
          },
          {
            id: 22607,
            title_fa: "Super Retina",
            title_en: "Super Retina",
          },
          {
            id: 22589,
            title_fa: "Super AMOLED Plus",
            title_en: "Super AMOLED Plus",
          },
          {
            id: 22602,
            title_fa: "IPS-NEO",
            title_en: "IPS-NEO",
          },
          {
            id: 22603,
            title_fa: "Super LCD 5",
            title_en: "Super LCD 5",
          },
          {
            id: 22612,
            title_fa: "Liquid Retina",
            title_en: "Liquid Retina",
          },
          {
            id: 33798,
            title_fa: "Fluid AMOLED",
          },
          {
            id: 22604,
            title_fa: "Super IPS Plus",
            title_en: "Super IPS Plus",
          },
        ],
      },
      {
        type: "checkbox",
        title: "بازه‌ی اندازه صفحه نمایش",
        id: 2254,
        options: [
          {
            id: 19552,
            title_fa: "6.0 اینچ و بزرگتر",
            title_en: "6.0 اینچ و بزرگتر",
          },
          {
            id: 19550,
            title_fa: "5.0 تا 5.5 اینچ",
            title_en: "5.0 تا 5.5 اینچ",
          },
          {
            id: 19551,
            title_fa: "5.5 تا 6.0 اینچ",
            title_en: "5.5 تا 6.0 اینچ",
          },
          {
            id: 19556,
            title_fa: "تا 2.0 اینچ",
            title_en: "تا 2.0 اینچ",
          },
          {
            id: 19544,
            title_fa: "2.0 تا 2.4 اینچ",
            title_en: "2.0 تا 2.4 اینچ",
          },
          {
            id: 19547,
            title_fa: "3.0 تا 4.0 اینچ",
            title_en: "3.0 تا 4.0 اینچ",
          },
          {
            id: 19549,
            title_fa: "4.5 تا 5.0 اینچ",
            title_en: "4.5 تا 5.0 اینچ",
          },
          {
            id: 19548,
            title_fa: "4.0 تا 4.5 اینچ",
            title_en: "4.0 تا 4.5 اینچ",
          },
          {
            id: 19545,
            title_fa: "2.4 تا 2.8 اینچ",
            title_en: "2.4 تا 2.8 اینچ",
          },
          {
            id: 19546,
            title_fa: "2.8 تا 3.0 اینچ",
            title_en: "2.8 تا 3.0 اینچ",
          },
        ],
      },
      {
        type: "checkbox",
        title: "رزولوشن عکس",
        id: 3828,
        options: [
          {
            id: 24557,
            title_fa: "13 مگاپیکسل",
            title_en: "13 مگاپیکسل",
          },
          {
            id: 24579,
            title_fa: "5 مگاپیکسل",
            title_en: "5 مگاپیکسل",
          },
          {
            id: 24582,
            title_fa: "8 مگاپیکسل",
            title_en: "8 مگاپیکسل",
          },
          {
            id: 24554,
            title_fa: "12 مگاپیکسل",
            title_en: "12 مگاپیکسل",
          },
          {
            id: 24562,
            title_fa: "2 مگاپیکسل",
            title_en: "2 مگاپیکسل",
          },
          {
            id: 24572,
            title_fa: "3.2 مگاپیکسل",
            title_en: "3.2 مگاپیکسل",
          },
          {
            id: 24578,
            title_fa: "48 مگاپیکسل",
            title_en: "48 مگاپیکسل",
          },
          {
            id: 24559,
            title_fa: "16 مگاپیکسل",
            title_en: "16 مگاپیکسل",
          },
          {
            id: 24581,
            title_fa: "64 مگاپیکسل",
            title_en: "64 مگاپیکسل",
          },
          {
            id: 24551,
            title_fa: "1.3 مگاپیکسل",
            title_en: "1.3 مگاپیکسل",
          },
          {
            id: 24584,
            title_fa: "فاقد دوربین",
            title_en: "فاقد دوربین",
          },
          {
            id: 24553,
            title_fa: "108 مگاپیکسل",
            title_en: "108 مگاپیکسل",
          },
          {
            id: 33286,
            title_fa: "50 مگاپیکسل",
          },
          {
            id: 24563,
            title_fa: "20 مگاپیکسل",
            title_en: "20 مگاپیکسل",
          },
          {
            id: 24565,
            title_fa: "21 مگاپیکسل",
            title_en: "21 مگاپیکسل",
          },
          {
            id: 24568,
            title_fa: "23 مگاپیکسل",
            title_en: "23 مگاپیکسل",
          },
          {
            id: 24564,
            title_fa: "20.7 مگاپیکسل",
            title_en: "20.7 مگاپیکسل",
          },
          {
            id: 24575,
            title_fa: "4 مگاپیکسل",
            title_en: "4 مگاپیکسل",
          },
          {
            id: 24576,
            title_fa: "40 مگاپیکسل",
            title_en: "40 مگاپیکسل",
          },
          {
            id: 24570,
            title_fa: "25 مگاپیکسل",
            title_en: "25 مگاپیکسل",
          },
          {
            id: 24569,
            title_fa: "24 مگاپیکسل",
            title_en: "24 مگاپیکسل",
          },
          {
            id: 24583,
            title_fa: "QVGA",
            title_en: "QVGA",
          },
          {
            id: 24555,
            title_fa: "12.2 مگاپیکسل",
            title_en: "12.2 مگاپیکسل",
          },
          {
            id: 24571,
            title_fa: "3 مگاپیکسل",
            title_en: "3 مگاپیکسل",
          },
          {
            id: 24561,
            title_fa: "19 مگاپیکسل",
            title_en: "19 مگاپیکسل",
          },
          {
            id: 33476,
            title_fa: "VGA",
          },
        ],
      },
      {
        type: "checkbox",
        title: "مقدار RAM",
        id: 6531,
        options: [
          {
            id: 22645,
            title_fa: "چهار گیگابایت",
            title_en: "چهار گیگابایت",
          },
          {
            id: 22644,
            title_fa: "دو گیگابایت",
            title_en: "دو گیگابایت",
          },
          {
            id: 22642,
            title_fa: "یک گیگابایت",
            title_en: "یک گیگابایت",
          },
          {
            id: 22646,
            title_fa: "سه گیگابایت",
            title_en: "سه گیگابایت",
          },
          {
            id: 22652,
            title_fa: "شش گیگابایت",
            title_en: "شش گیگابایت",
          },
          {
            id: 22641,
            title_fa: "512 مگابایت",
            title_en: "512 مگابایت",
          },
          {
            id: 22653,
            title_fa: "هشت گیگابایت",
            title_en: "هشت گیگابایت",
          },
          {
            id: 22637,
            title_fa: "32 مگابایت",
            title_en: "32 مگابایت",
          },
          {
            id: 22640,
            title_fa: "256 مگابایت",
            title_en: "256 مگابایت",
          },
          {
            id: 22648,
            title_fa: "چهار مگابایت",
            title_en: "چهار مگابایت",
          },
          {
            id: 22639,
            title_fa: "128 مگابایت",
            title_en: "128 مگابایت",
          },
          {
            id: 22654,
            title_fa: "12 گیگابایت",
            title_en: "12 گیگابایت",
          },
          {
            id: 22643,
            title_fa: "1.5 گیگابایت",
            title_en: "1.5 گیگابایت",
          },
          {
            id: 22638,
            title_fa: "64 مگابایت",
            title_en: "64 مگابایت",
          },
          {
            id: 22649,
            title_fa: "768 مگابایت",
            title_en: "768 مگابایت",
          },
          {
            id: 22650,
            title_fa: "هشت مگابایت",
            title_en: "هشت مگابایت",
          },
          {
            id: 22651,
            title_fa: "24 مگابایت",
            title_en: "24 مگابایت",
          },
          {
            id: 22647,
            title_fa: "16 مگابایت",
            title_en: "16 مگابایت",
          },
          {
            id: 22655,
            title_fa: "384 مگابایت",
            title_en: "384 مگابایت",
          },
          {
            id: 22656,
            title_fa: "290 مگابایت",
            title_en: "290 مگابایت",
          },
          {
            id: 22657,
            title_fa: "96 مگابایت",
            title_en: "96 مگابایت",
          },
          {
            id: 22663,
            title_fa: "16 گیگابایت",
            title_en: "16 گیگابایت",
          },
        ],
      },
      {
        type: "checkbox",
        title: "حافظه داخلی",
        id: 2251,
        options: [
          {
            id: 19460,
            title_fa: "128 گیگابایت",
            title_en: "128 گیگابایت",
          },
          {
            id: 19463,
            title_fa: "16 گیگابایت",
            title_en: "16 گیگابایت",
          },
          {
            id: 19481,
            title_fa: "32 گیگابایت",
            title_en: "32 گیگابایت",
          },
          {
            id: 19500,
            title_fa: "64 گیگابایت",
            title_en: "64 گیگابایت",
          },
          {
            id: 19513,
            title_fa: "هشت گیگابایت",
            title_en: "هشت گیگابایت",
          },
          {
            id: 19507,
            title_fa: "چهار گیگابایت",
            title_en: "چهار گیگابایت",
          },
          {
            id: 19476,
            title_fa: "256 گیگابایت",
            title_en: "256 گیگابایت",
          },
          {
            id: 19482,
            title_fa: "32 مگابایت",
            title_en: "32 مگابایت",
          },
          {
            id: 19498,
            title_fa: "512 مگابایت",
            title_en: "512 مگابایت",
          },
          {
            id: 19461,
            title_fa: "128 مگابایت",
            title_en: "128 مگابایت",
          },
          {
            id: 19508,
            title_fa: "چهار مگابایت",
            title_en: "چهار مگابایت",
          },
          {
            id: 19501,
            title_fa: "64 مگابایت",
            title_en: "64 مگابایت",
          },
          {
            id: 19497,
            title_fa: "512 گیگابایت",
            title_en: "512 گیگابایت",
          },
          {
            id: 19464,
            title_fa: "16 مگابایت",
            title_en: "16 مگابایت",
          },
          {
            id: 19477,
            title_fa: "256 مگابایت",
            title_en: "256 مگابایت",
          },
          {
            id: 19455,
            title_fa: "100 مگابایت",
            title_en: "100 مگابایت",
          },
          {
            id: 19514,
            title_fa: "هشت مگابایت",
            title_en: "هشت مگابایت",
          },
          {
            id: 19516,
            title_fa: "یک گیگابایت",
            title_en: "یک گیگابایت",
          },
          {
            id: 19489,
            title_fa: "40 مگابایت",
            title_en: "40 مگابایت",
          },
          {
            id: 19510,
            title_fa: "دو گیگابایت",
            title_en: "دو گیگابایت",
          },
          {
            id: 19480,
            title_fa: "30 مگابایت",
            title_en: "30 مگابایت",
          },
          {
            id: 19494,
            title_fa: "50 مگابایت",
            title_en: "50 مگابایت",
          },
          {
            id: 19457,
            title_fa: "12 مگابایت",
            title_en: "12 مگابایت",
          },
          {
            id: 19502,
            title_fa: "70 مگابایت",
            title_en: "70 مگابایت",
          },
          {
            id: 19511,
            title_fa: "دو مگابایت",
            title_en: "دو مگابایت",
          },
          {
            id: 19465,
            title_fa: "160 مگابایت",
            title_en: "160 مگابایت",
          },
          {
            id: 19469,
            title_fa: "20 مگابایت",
            title_en: "20 مگابایت",
          },
          {
            id: 19506,
            title_fa: "پنج مگابایت",
            title_en: "پنج مگابایت",
          },
          {
            id: 19462,
            title_fa: "150 مگابایت",
            title_en: "150 مگابایت",
          },
          {
            id: 19505,
            title_fa: "85 مگابایت",
            title_en: "85 مگابایت",
          },
          {
            id: 19515,
            title_fa: "یک ترابایت",
            title_en: "یک ترابایت",
          },
          {
            id: 19479,
            title_fa: "28 مگابایت",
            title_en: "28 مگابایت",
          },
          {
            id: 19484,
            title_fa: "320 مگابایت",
            title_en: "320 مگابایت",
          },
          {
            id: 19452,
            title_fa: "1.5 گیگابایت",
            title_en: "1.5 گیگابایت",
          },
        ],
      },
      {
        type: "checkbox",
        title: "محافظت",
        id: 6530,
        options: [
          {
            id: 22631,
            title_fa: "Corning Gorilla Glass 5",
            title_en: "Corning Gorilla Glass 5",
          },
          {
            id: 22624,
            title_fa: "Corning Gorilla Glass 3",
            title_en: "Corning Gorilla Glass 3",
          },
          {
            id: 22625,
            title_fa: "Corning Gorilla Glass 4",
            title_en: "Corning Gorilla Glass 4",
          },
          {
            id: 22622,
            title_fa: "Corning Gorilla Glass",
            title_en: "Corning Gorilla Glass",
          },
          {
            id: 22626,
            title_fa: "Scratch-Resistant Glass",
            title_en: "Scratch-Resistant Glass",
          },
          {
            id: 22628,
            title_fa: "Ion-Strengthened Glass",
            title_en: "Ion-Strengthened Glass",
          },
          {
            id: 22634,
            title_fa: "Corning Gorilla Glass 6",
            title_en: "Corning Gorilla Glass 6",
          },
          {
            id: 22636,
            title_fa: "Corning Gorilla Glass Victus",
            title_en: "Corning Gorilla Glass Victus",
          },
          {
            id: 22635,
            title_fa: "Scratch-Resistant Ceramic Glass",
            title_en: "Scratch-Resistant Ceramic Glass",
          },
          {
            id: 22623,
            title_fa: "Corning Gorilla Glass 2",
            title_en: "Corning Gorilla Glass 2",
          },
          {
            id: 22630,
            title_fa: "Scratch-proof Glass",
            title_en: "Scratch-proof Glass",
          },
          {
            id: 22633,
            title_fa: "NEG Glass",
            title_en: "NEG Glass",
          },
          {
            id: 22627,
            title_fa: "Shatter Proof Glass",
            title_en: "Shatter Proof Glass",
          },
          {
            id: 34045,
            title_fa: "+Corning Gorilla Glass Victus",
          },
          {
            id: 22629,
            title_fa: "Oleophobic Coating",
            title_en: "Oleophobic Coating",
          },
          {
            id: 22632,
            title_fa: "Asahi Dragontrail Glass",
            title_en: "Asahi Dragontrail Glass",
          },
        ],
      },
      {
        type: "checkbox",
        title: "دسته ‌بندی",
        id: 7805,
        options: [
          {
            id: 34582,
            title_fa: "‌میان‌رده",
          },
        ],
      },
      {
        type: "checkbox",
        title: "رابط‌ها",
        id: 2372,
        options: [
          {
            id: 31274,
            title_fa: "USB Type-C",
          },
        ],
      },
    ],
  },
};
