import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, FreeMode } from "swiper";
import classes from "./swipBanner.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import Link from "next/link";
import Image from "next/image";
import {Fragment} from "react";
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
        {[1,2,3,4,5,6,7,8,9,10].map(sw=>(<Fragment key={sw}><SwiperSlide >
          <Link href="/xx">
            <a className={classes.imageContainer}>
              <Image
                src={`/images/sliders/s${sw}.jpg`}
                alt="slider"
                layout="fill"
                // width={300}
                // height={100}
              />
            </a>
          </Link>
        </SwiperSlide></Fragment>))}
        {/* <SwiperSlide>
          <Link href="/xx">
            <a className={classes.imageContainer}>
              <Image
                src="/images/sliders/s1.jpg"
                alt="slider"
                layout="fill"
                // width={300}
                // height={100}
              />
            </a>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href="/xx">
            <a className={classes.imageContainer}>
              <Image
                src="/images/sliders/s2.jpg"
                alt="slider"
                layout="fill"
                // width={300}
                // height={100}
              />
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/xx">
            <a className={classes.imageContainer}>
              <Image
                src="/images/sliders/s3.jpg"
                alt="slider"
                layout="fill"
                // width={300}
                // height={100}
              />
            </a>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/xx">
            <a className={classes.imageContainer}>
              <Image
                src="/images/sliders/s4.jpg"
                alt="slider"
                layout="fill"
                // width={300}
                // height={100}
              />
            </a>
          </Link>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};
export default SwipBanner;
