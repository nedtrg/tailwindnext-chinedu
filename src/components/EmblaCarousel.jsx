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

const EmblaCarousel = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section id="portfolio" className="embla bg-neutral-900/90 rounded-lg p-20">
      <div className="text-left mb-12 px-48">
        <span className="inline-flex ml-40 uppercase font-bold tracking-wider text-gray-400 mb-2">
          <IconPoint className="text-white -ml-40" stroke={1} width={20} />
          Portfolio
        </span>
        <h1 className="text-6xl mb-2 font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          <span className="text-white">Recent</span> Works
        </h1>
        <p className="text-left text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquam
          rem possimus similique beatae dolores commodi quam, harum quas, velit
          animi autem dignissimos temporibus magnam ipsum quod architecto
          consectetur culpa.
        </p>
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
            }}
            className="embla__slide overflow-hidden cursor-pointer"
          >
            <Image
              src="/home/portfolio-1.jpg"
              alt="portfolio"
              width={500}
              height={300}
              layout="responsive"
              className="rounded-xl pb-5 hover:scale-105 transition-transform duration-300"
            />
            <span className="inline-flex uppercase font-bold tracking-wider text-gray-300 mb-2">
              <span className="transition-transform duration-700 hover:rotate-x-360">
                <h1>Visual Art</h1>
              </span>
              <IconPoint className="text-white" stroke={1} width={20} />
              <span className="transition-transform duration-700 hover:rotate-x-360">
                <h1>Concept</h1>
              </span>
            </span>
            <h1 className="capitalize text-white text-3xl font-bold">
              Fold Twist Abstract
            </h1>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
            }}
            className="embla__slide overflow-hidden cursor-pointer"
          >
            <Image
              src="/home/portfolio-2.jpg"
              alt="portfolio-two"
              width={500}
              height={300}
              layout="responsive"
              className="rounded-xl pb-5 hover:scale-105 transition-transform duration-300"
            />
            <span className="inline-flex uppercase font-bold tracking-wider text-gray-300 mb-2">
              <span className="transition-transform duration-700 hover:rotate-x-360">
                <h1>3D Modeling</h1>
              </span>
              <IconPoint className="text-white" stroke={1} width={20} />
              <span className="transition-transform duration-700 hover:rotate-x-360">
                <h1>Visual Art</h1>
              </span>
              <IconPoint className="text-white" stroke={1} width={20} />
              <span className="transition-transform duration-700 hover:rotate-x-360">
                <h1>Concept</h1>
              </span>
            </span>
            <h1 className="text-white text-3xl font-bold">Colors of Circle</h1>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
            }}
            className="embla__slide overflow-hidden cursor-pointer"
          >
            <Image
              src="/home/portfolio-1.jpg"
              alt="portfolio"
              width={500}
              height={300}
              layout="responsive"
              className="rounded-xl pb-5 hover:scale-105 transition-transform duration-300"
            />
            <span className="inline-flex uppercase font-bold tracking-wider text-gray-300 mb-2">
              <span className="transition-transform duration-700 hover:rotate-x-360">
                <h1>Visual Art</h1>
              </span>
              <IconPoint className="text-white" stroke={1} width={20} />
              <span className="transition-transform duration-700 hover:rotate-x-360">
                <h1>Concept</h1>
              </span>
            </span>
            <h1 className="capitalize text-white text-3xl font-bold">
              Fold Twist Abstract
            </h1>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
            }}
            className="embla__slide overflow-hidden cursor-pointer"
          >
            <Image
              src="/home/portfolio-2.jpg"
              alt="portfolio-two"
              width={500}
              height={300}
              layout="responsive"
              className="rounded-xl pb-5 hover:scale-105 transition-transform duration-300"
            />
            <span className="inline-flex uppercase font-bold tracking-wider text-gray-300 mb-2">
              <span className="transition-transform duration-700 hover:rotate-x-360">
                <h1>Visual Art</h1>
              </span>
              <IconPoint className="text-white" stroke={1} width={20} />
              <span className="transition-transform duration-700 hover:rotate-x-360">
                <h1>Concept</h1>
              </span>
            </span>
            <h1 className="capitalize text-white text-3xl font-bold">
              Fold Twist Abstract
            </h1>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
            }}
            className="embla__slide overflow-hidden cursor-pointer"
          >
            <Image
              src="/home/portfolio-1.jpg"
              alt="portfolio"
              width={500}
              height={300}
              layout="responsive"
              className="rounded-xl pb-5 hover:scale-105 transition-transform duration-300"
            />
            <span className="inline-flex uppercase font-bold tracking-wider text-gray-300 mb-2">
              <span className="transition-transform duration-700 hover:rotate-x-360">
                <h1>Visual Art</h1>
              </span>
              <IconPoint className="text-white" stroke={1} width={20} />
              <span className="transition-transform duration-700 hover:rotate-x-360">
                <h1>Concept</h1>
              </span>
            </span>
            <h1 className="capitalize text-white text-3xl font-bold">
              Visual Art of Cubes
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
