"use client";
import React from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { IconPoint } from "@tabler/icons-react";
import { motion } from "motion/react";
import Link from "next/link";

const EmblaCarouselTwo = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section
      id="blog"
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-easing="ease-out-cubic"
      className="
        embla bg-neutral-900/90 rounded-lg
        p-6 sm:p-10 md:p-14 lg:p-20
      "
    >
      {/* Header */}
      <div
        data-aos="fade-up"
        data-aos-delay="150"
        className="mb-12 text-center lg:text-left px-0 lg:px-48"
      >
        <span className="inline-flex justify-center lg:justify-start uppercase font-bold tracking-wider text-gray-400 mb-2">
          <IconPoint className="text-white mr-2" stroke={1} width={20} />
          Journal
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          <span className="text-white">Blog</span> Posts
        </h1>

        <p className="text-white text-sm sm:text-base max-w-3xl mx-auto lg:mx-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquam
          rem possimus similique beatae dolores commodi quam, harum quas.
        </p>
      </div>

      {/* Carousel */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="embla__viewport"
        ref={emblaRef}
      >
        <div className="embla__container gap-6">
          {/* SLIDE 1 */}
          <motion.div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="800"
            className="embla__slide relative cursor-pointer"
          >
            <Image
              src="/home/portfolio-1.jpg"
              alt="portfolio"
              width={500}
              height={300}
              className="rounded-xl w-full h-auto pb-5 hover:scale-105 transition-transform duration-300"
            />

            <div className="absolute top-7 right-7 p-2 text-xs sm:text-sm uppercase font-semibold text-white rounded-full bg-gray-800/60 hover:rotate-x-360 transition duration-300">
              <Link className="hover:rotate-x-360" href="/">
                Tips & Tricks
              </Link>
            </div>

            <span className="inline-flex flex-wrap items-center gap-2 uppercase text-xs font-bold text-gray-300 mb-2">
              <h1>Visual Art</h1>
              <IconPoint stroke={1} width={16} />
              <h1>Concept</h1>
            </span>

            <h1 className="text-white text-xl sm:text-2xl font-bold hover:rotate-x-360 transition duration-300">
              Fold Twist Abstract
            </h1>
          </motion.div>

          {/* SLIDE 2 */}
          <motion.div
            data-aos="fade-up"
            data-aos-delay="550"
            data-aos-duration="800"
            className="embla__slide relative cursor-pointer"
          >
            <Image
              src="/home/portfolio-2.jpg"
              alt="portfolio-two"
              width={500}
              height={300}
              className="rounded-xl w-full h-auto pb-5 hover:scale-105 transition-transform duration-300"
            />

            <div className="absolute top-7 right-7 p-2 text-xs sm:text-sm uppercase font-semibold text-white rounded-full bg-gray-800/60 hover:rotate-x-360 transition duration-300">
              <Link href="/">Tips & Tricks</Link>
            </div>

            <span className="inline-flex flex-wrap items-center gap-2 uppercase text-xs font-bold text-gray-300 mb-2">
              <h1>3D Modeling</h1>
              <IconPoint stroke={1} width={16} />
              <h1>Visual Art</h1>
              <IconPoint stroke={1} width={16} />
              <h1>Concept</h1>
            </span>

            <h1 className="text-white text-xl sm:text-2xl font-bold hover:rotate-x-360 transition duration-300">
              Colors of Circle
            </h1>
          </motion.div>

          {/* SLIDE 3 */}
          <motion.div
            data-aos="fade-up"
            data-aos-delay="700"
            data-aos-duration="800"
            className="embla__slide relative cursor-pointer"
          >
            <Image
              src="/home/portfolio-1.jpg"
              alt="portfolio"
              width={500}
              height={300}
              className="rounded-xl w-full h-auto pb-5 hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-7 right-7 p-2 text-xs sm:text-sm uppercase font-semibold text-white rounded-full bg-gray-800/60 hover:rotate-x-360 transition duration-300">
              <Link href="/">Tips & Tricks</Link>
            </div>

            <span className="inline-flex flex-wrap items-center gap-2 uppercase text-xs font-bold text-gray-300 mb-2">
              <h1>3D Modeling</h1>
              <IconPoint stroke={1} width={16} />
              <h1>Visual Art</h1>
              <IconPoint stroke={1} width={16} />
              <h1>Concept</h1>
            </span>

            <h1 className="text-white text-xl sm:text-2xl font-bold hover:rotate-x-360 transition duration-300">
              Colors of Circle
            </h1>
          </motion.div>

          {/* SLIDE 4 */}
          <motion.div
            data-aos="fade-up"
            data-aos-delay="850"
            data-aos-duration="800"
            className="embla__slide relative cursor-pointer"
          >
            <Image
              src="/home/portfolio-2.jpg"
              alt="portfolio-two"
              width={500}
              height={300}
              className="rounded-xl w-full h-auto pb-5 hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-7 right-7 p-2 text-xs sm:text-sm uppercase font-semibold text-white rounded-full bg-gray-800/60 hover:rotate-x-360 transition duration-300">
              <Link href="/">Tips & Tricks</Link>
            </div>

            <span className="inline-flex flex-wrap items-center gap-2 uppercase text-xs font-bold text-gray-300 mb-2">
              <h1>3D Modeling</h1>
              <IconPoint stroke={1} width={16} />
              <h1>Visual Art</h1>
              <IconPoint stroke={1} width={16} />
              <h1>Concept</h1>
            </span>

            <h1 className="text-white text-xl sm:text-2xl font-bold hover:rotate-x-360 transition duration-300">
              Colors of Circle
            </h1>
          </motion.div>

          {/* SLIDE 5 */}
          <motion.div
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="800"
            className="embla__slide relative cursor-pointer"
          >
            <Image
              src="/home/portfolio-1.jpg"
              alt="portfolio"
              width={500}
              height={300}
              className="rounded-xl w-full h-auto pb-5 hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-7 right-7 p-2 text-xs sm:text-sm uppercase font-semibold text-white rounded-full bg-gray-800/60 hover:rotate-x-360 transition duration-300">
              <Link href="/">Tips & Tricks</Link>
            </div>

            <span className="inline-flex flex-wrap items-center gap-2 uppercase text-xs font-bold text-gray-300 mb-2">
              <h1>3D Modeling</h1>
              <IconPoint stroke={1} width={16} />
              <h1>Visual Art</h1>
              <IconPoint stroke={1} width={16} />
              <h1>Concept</h1>
            </span>

            <h1 className="text-white text-xl sm:text-2xl font-bold hover:rotate-x-360 transition duration-300">
              Colors of Circle
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Controls */}
      <div
        data-aos="fade-up"
        data-aos-delay="1150"
        className="embla__controls mt-8 flex justify-center lg:justify-end"
      >
        <div className="embla__buttons flex gap-4">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarouselTwo;
