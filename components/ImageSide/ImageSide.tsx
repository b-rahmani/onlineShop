import classes from "./imageSide.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import { PropsSingleProductType } from "../SingleProduct/SingleProduct";

const ImageSide = (props: PropsSingleProductType) => {
  const [imagesNavSlider, setImagesNavSlider] = useState(
    props?.product?.images !== undefined && props?.product?.images[0]
  );

  return (
    <div className={classes.imageSide}>
      <div className={classes.tumbnails}>
        <Swiper
          //   onSwiper={setImagesNavSlider}
          modules={[Navigation, Thumbs]}
          spaceBetween={20}
          slidesPerView={4}
          loop
          // navigation
          breakpoints={{
            100: {
              direction: "horizontal",
            },
            900: {
              // freeMode: true,
              direction: "vertical",
              // slidesPerView: 1,
            },
          }}
          className="thumbnailSwipper"
          // style={{ height: "100%" }}
        >
          {props.product?.images?.map((image, ind) => (
            <SwiperSlide
              key={image}
              onClick={() => {
                setImagesNavSlider(image);
              }}
              className={image === imagesNavSlider ? "active" : ""}
            >
              <div className={classes.imageContainer}>
                <Image
                  src={image}
                  alt={`${image}${ind}`}
                  layout="fill"
                  // width={300}
                  // height={100}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={classes.image}>
        {/* <Swiper
          thumbs={{ swiper: imagesNavSlider }}
          direction="horizontal"
          slidesPerView={1}
          spaceBetween={32}
          navigation
          breakpoints={{
            0: {
              direction: "horizontal",
            },
            768: {
              direction: "horizontal",
            },
          }}
          className="swiper-container2"
          modules={[Navigation, Thumbs]}
        >
          {props.product?.images?.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="slider__image">
                  <img src={slide} alt={slide} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper> */}
        <Image
          src={imagesNavSlider ? imagesNavSlider : props.product?.image!}
          alt={props.product?.title}
          className={classes.image}
          layout="responsive"
          width={250}
          height={250}
        />
      </div>
    </div>
  );
};
export default ImageSide;
