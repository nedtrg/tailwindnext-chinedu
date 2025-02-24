"use client";
import React, { useEffect, useCallback } from "react";
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
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((slide, index) => (
            <div className={styles.embla__slide} key={index}>
              <div className={styles.embla__slide__inner}>
                <Link href="/">
                  <Image
                    src={slide}
                    alt={`Slide ${index}`}
                    width={100}
                    height={100}
                    className={styles.embla__slide__img}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <button className={styles.embla__button} onClick={scrollPrev}>
        <span className="text-white">Prev</span>
      </button>
      <button className={styles.embla__button} onClick={scrollNext}>
        <span className="text-white">Next</span>
      </button> */}
    </div>
  );
};

export default Carousel;
