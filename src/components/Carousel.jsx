"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./css/Carousel.module.css";
import Image from "next/image";
import Link from "next/link";

const Carousel = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={`${styles.embla} pb-12 sm:pb-16 lg:pb-20 px-4`}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`
                ${styles.embla__slide}
                flex
                justify-center
                flex-[0_0_100%]
                sm:flex-[0_0_auto]
              `}
            >
              <div
                className={`
                  ${styles.embla__slide__inner}
                  relative
                  group
                  overflow-hidden
                  w-24 h-24
                  sm:w-24 sm:h-24
                  md:w-28 md:h-28
                  lg:w-[100px] lg:h-[100px]
                `}
              >
                <Link href="/">
                  <Image
                    src={slide}
                    alt={`Slide ${index}`}
                    width={100}
                    height={100}
                    className={`
                      ${styles.embla__slide__img}
                      w-full
                      h-full
                      object-cover
                      transition
                      duration-500
                      group-hover:brightness-150
                      group-hover:drop-shadow-[0_0_1px_white]
                    `}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons intentionally untouched */}
    </div>
  );
};

export default Carousel;
