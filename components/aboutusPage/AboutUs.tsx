import Image from "next/image";
import classes from "./aboutus.module.scss";
import CounterUp from "./counterUp/CounterUp";
const AboutUs = () => {
  return (
    <section className={classes.aboutus}>
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

      <article>
        <h4>آنلاین شاپ در یک نگاه </h4>

        <CounterUp diuration={500} start={100} end={500} />
      </article>
    </section>
  );
};
export default AboutUs;
