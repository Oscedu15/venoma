"use client";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar } from "swiper/modules";

import Image from "next/image";

//data
const products = [
  {
    image: "/assets/img/latest/p1.png",
    name: "Lorem ipsum Dolor",
    description: "Description",
    price: 120,
  },
  {
    image: "/assets/img/latest/p2.png",
    name: "Lorem ipsum Dolor",
    description: "Description",
    price: 120,
  },
  {
    image: "/assets/img/latest/p3.png",
    name: "Lorem ipsum Dolor",
    description: "Description",
    price: 120,
  },
  {
    image: "/assets/img/latest/p4.png",
    name: "Lorem ipsum Dolor",
    description: "Description",
    price: 120,
  },
  {
    image: "/assets/img/latest/p1.png",
    name: "Lorem ipsum Dolor",
    description: "Description",
    price: 120,
  },
  {
    image: "/assets/img/latest/p2.png",
    name: "Lorem ipsum Dolor",
    description: "Description",
    price: 120,
  },
  {
    image: "/assets/img/latest/p3.png",
    name: "Lorem ipsum Dolor",
    description: "Description",
    price: 120,
  },
  {
    image: "/assets/img/latest/p4.png",
    name: "Lorem ipsum Dolor",
    description: "Description",
    price: 120,
  },
];

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={40}
        scrollbar={{ hide: false }}
        modules={[Scrollbar]}
        className="h-[530px]"
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1170: { slidesPerView: 4 },
        }}
      >
        {products?.map((product, i) => {
          const { image, description, name, price } = product;
          return (
            <SwiperSlide key={i} className="select-none w-full cursor-pointer">
              {/* Product Image */}
              <div
                className="bg-gray-50 
            flex items-center justify-center
            h-[360px]"
              >
                <Image
                  src={image}
                  alt={name}
                  width={240}
                  height={240}
                  quality={100}
                />
              </div>
              {/* Product description */}
              <div className="w-full pt-4 flex flex-col gap-4">
                <div className="">
                  <h6 className="font-semibold text-primary mb-1">{name}</h6>
                  <p>{description}</p>
                </div>
                <p className="font-semibold text-accent2">{price}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider;
