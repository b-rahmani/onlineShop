import Image from "next/image";
import { useRef } from "react";
import useIntersectionObserver from "../hooks/useIsInViewport";
import classes from "./aboutus.module.scss";
import CounterUp from "./counterUp/CounterUp";
import CountUpBox from "./CountupBox/CountUpBox";
const AboutUs = () => {
  const countupRef = useRef(null);
  const entry = useIntersectionObserver(countupRef, {});
  const isVisible = !!entry?.isIntersecting;
  return (
    <section className={classes.aboutus}>
      <div className={classes.container}>
        <h2>که هستیم؟</h2>
        <div className={classes.box}>
          <p>
            ما پلتفرمی مبتنی بر تکنولوژی هستیم که ماموریت خود را ایجاد تجربه‌ای
            خوشایند از خرید و فروش برای تمام مردم ایران می‌دانیم. به عنوان پر
            مخاطب ترین فروشگاه آنلاین ایران و منطقه در مسیر تبدیل شدن به اولین
            مرجع خرید و فروش آنلاین هستیم و برای این هدف، ارائه خدمات منطبق بر
            استانداردهای جهانی، مهمترین وظیفه ماست. هویت آنلاین شاپ بیش از هرچیز
            متأثر از مخاطبانمان است و بر اساس نیازهای آنها گام بر می‌داریم. به
            همین دلیل، مشتری محوری مهمترین ارزش کسب‌وکار ما در گروه آنلاین شاپ
            است.
          </p>
          <div className={classes.imageBox}>
            <Image
              src={
                "https://about.digikala.com/wp-content/uploads/2022/07/who-we-are-tech.jpg"
              }
              alt="about us"
              layout="fill"
            />
          </div>
        </div>
      </div>
      <div className={classes.container}>
        <article className={classes.shopInView}>
          <h4 ref={countupRef}>آنلاین شاپ در یک نگاه </h4>
          <div className={classes.inViewItems}>
            <CountUpBox
              imageAddress="https://about.digikala.com/wp-content/uploads/2021/09/Untitledsss-2.png"
              isVisible={isVisible}
              title="بازدید کننده یکتای ماهانه"
              locale
              diuration={3000}
              start={100}
              end={40000000}
            />
            <CountUpBox
              imageAddress="	https://about.digikala.com/wp-content/uploads/2021/09/Untitled-3.png"
              isVisible={isVisible}
              title="فروشنده"
              locale
              plus
              diuration={3000}
              start={0}
              end={200}
            />
            <CountUpBox
              imageAddress="https://about.digikala.com/wp-content/uploads/2021/09/Untitled-2.png"
              isVisible={isVisible}
              title="تنوع کالایی"
              locale
              plus
              diuration={3000}
              start={100}
              end={7500000}
            />
            <CountUpBox
              imageAddress="https://about.digikala.com/wp-content/uploads/2021/09/1.png"
              isVisible={isVisible}
              title="همکار آنلاین شاپ"
              locale
              plus
              diuration={3000}
              start={100}
              end={8700}
            />
          </div>
        </article>
      </div>
      <article className={classes.whatDoIt}></article>
    </section>
  );
};
export default AboutUs;
