import classes from "./related.module.scss";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import { productType } from "../SingleProduct/SingleProduct";
import ProductCard from "../productCard/ProductCard";

export interface RelatedProductType {
  related?: productType[];
  text?: string;
}

const RelatedSlider = (props: RelatedProductType) => {
  return (
    <section className={classes.relatedProduct}>
      <p className={classes.title}>{props.text}</p>
      {/*  */}
      <div className={classes.related}>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={7}
          navigation
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          direction="horizontal"
          className="relatedCustomClass"
          breakpoints={{
            100: {
              slidesPerView: 2,
            },
            600: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 4,
            },
            1400: {
              slidesPerView: 7,
            },
          }}
        >
          {/* {props.related?.map((product, ind) => (
            <SwiperSlide key={product.id}>
              <div className={classes.productCard}>
                <ProductCard
                  data={product}
                  key={product.id}
                  break={false}
                  rateOff
                  hoverOff
                />
              </div>
            </SwiperSlide>
          ))} */}
        </Swiper>
      </div>
      {/*  */}
    </section>
  );
};

RelatedSlider.defaultProps = {
  text: "کالاهای مشابه",
};
export default RelatedSlider;
