import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, FreeMode } from "swiper";
import classes from "./swipBanner.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import Link from "next/link";
import Image from "next/image";
const SwipBanner = () => {
  return (
    <div className={classes.bannerContainer}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, FreeMode]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        // followFinger={false}
        // draggable
        loop
        freeMode={true}
        // simulateTouch={true}

        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          type: "bullets",
          bulletActiveClass: "activebullet",
        }}
        breakpoints={{
          100: {
            // freeMode: false,
          },
          600: {
            // freeMode: true,
            slidesPerView: 1,
          },
        }}
        className="mySwipper"
      >
        <SwiperSlide>
          <Link href="/xx">
            <a className={classes.imageContainer}>
              <Image
                src="/s1.jpg"
                alt="slider"
                layout="fill"
                width={300}
                height={200}
              />
            </a>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href="/xx">
            <a className={classes.imageContainer}>
              <Image
                src="/s2.jpg"
                alt="slider"
                layout="fill"
                width={300}
                height={200}
              />
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/xx">
            <a className={classes.imageContainer}>
              <Image
                src="/s3.jpg"
                alt="slider"
                layout="fill"
                width={300}
                height={200}
              />
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/xx">
            <a className={classes.imageContainer}>
              <Image
                src="/s4.jpg"
                alt="slider"
                layout="fill"
                width={300}
                height={200}
              />
            </a>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default SwipBanner;
