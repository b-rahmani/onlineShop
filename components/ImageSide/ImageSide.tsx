import classes from "./imageSide.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import { PropsSingleProductType } from "../SingleProduct/SingleProduct";

const ImageSide = (props: PropsSingleProductType) => {
  const [imagesNavSlider, setImagesNavSlider] = useState(
    props?.product?.images !== undefined && props?.product?.images[0]
  );

  return (
    <div className={classes.imageSide}>
      <div className={classes.swipperOnPhone}>
        <Swiper
          direction="horizontal"
          slidesPerView={1}
          spaceBetween={0}
          pagination
          className="swiper-onlyPhone"
          modules={[Pagination]}
        >
          {props.product?.images?.map((slide) => (
            <SwiperSlide key={slide}>
              <div className="onlyPhoneSlider">
                <Image
                  src={slide}
                  alt={props.product?.title}
                  className={classes.image}
                  layout="responsive"
                  width={250}
                  height={250}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={classes.tumbnails}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          loop
          direction="vertical"
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
