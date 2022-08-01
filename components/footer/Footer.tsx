import Link from "next/link";
import { socialMedia } from "../../filterData/socialMedia";
import {
  LinkedIn,
  TelegramIcon,
  WhatsappIcon,
  Phone,
} from "../icons/socialIcons/SocialIcons";

import classes from "./footer.module.scss";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <h2>ONLINE SHOP</h2>
      {/* <div className={classes.divider}> */}
      <p>
        فروشگاه اینترنتی آنلاین شاپ، راهکاری آسان برای خریدهای آنلاین شماست.
        پرداخت در محل، ارائه درگاه‌های امن، پیگیری سریع سفارشات، تضمین سلامت و
        کیفیت کالا از جمله کلیدی‌ترین ویژگی‌های این فروشگاه اینترنتی است.
        کالاهای آنلاین شاپ در 3 دسته بندی اصلی شامل پوشاک کالای دیجیتال و
        اکسسوری طبقه‌بندی می‌شوند. با خرید از آنلاین شاپ شیک بپوشید، به‌روز
        باشید و همچنین با خرید از اکسسوری‌های آنلاین شاپ یک استایل عالی داشته
        باشید، فراموش نکنید، تفاوت بین خوب و عالی در توجه به جزئیات است! همچنین
        با فیلتر شگفت‌انگیز می‌توانید، یک سبد خرید به‌صرفه انجام دهید و تمام
        محصولات تخفیفی را یک‌جا بررسی کنید.
      </p>
      <div className={classes.icons}>
        {/* <Link href="https://www.linkedin.com/in/b-rahmani"> */}
        <a
          className={classes.icon}
          href="https://www.linkedin.com/in/b-rahmani"
          rel="noreferrer"
          target={"_blank"}
        >
          <LinkedIn />
        </a>
        {/* </Link> */}
        <a
          className={classes.icon}
          href="https://telegram.me/B_rahmani70"
          rel="noreferrer"
          target={"_blank"}
        >
          <TelegramIcon />
        </a>
        <a
          className={classes.icon}
          href="https://wa.me/+989363972527"
          rel="noreferrer"
          target={"_blank"}
        >
          <WhatsappIcon />
        </a>
        <a
          className={classes.icon}
          href="tel:09363972527"
          rel="noreferrer"
          target={"_blank"}
        >
          <Phone />
        </a>
        {/* </div> */}
      </div>

      <div className={classes.copyRight}>
        &copy; طراحی و توسعه توسط بهنام رحمانی
      </div>
    </footer>
  );
};
export default Footer;
