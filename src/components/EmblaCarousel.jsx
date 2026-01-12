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
    <section
      id="portfolio"
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-easing="ease-out-cubic"
      className="embla bg-neutral-900/90 rounded-lg
                 p-6 sm:p-10 md:p-16 lg:p-20"
    >
      {/* Header */}
      <div
        data-aos="fade-up"
        data-aos-delay="150"
        className="text-center mb-8 sm:mb-10 md:mb-12
                   px-4 sm:px-10 md:px-24 lg:text-left lg:px-48"
      >
        <span className="inline-flex justify-center lg:justify-start uppercase font-bold tracking-wider text-gray-400 mb-2">
          <IconPoint className="text-white mr-2" stroke={1} width={20} />
          Portfolio
        </span>

        <h1
          className="mb-2 font-extrabold
                     text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                     bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600
                     bg-clip-text text-transparent"
        >
          <span className="text-white">Recent</span> Works
        </h1>

        <p className="text-white text-sm sm:text-base max-w-3xl mx-auto lg:mx-0">
          A selection of projects showcasing my experience in full-stack web
          development, responsive UI design, API integration, and scalable
          solutions built for real-world users and business needs.
        </p>
      </div>

      {/* Carousel */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="embla__viewport"
        ref={emblaRef}
      >
        <div className="embla__container flex gap-4 sm:gap-6 md:gap-8">
          {/* Slide 1 */}
          <motion.div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="800"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
            }}
            className="
              embla__slide
              flex-shrink-0
              flex-[0_0_100%]
              sm:flex-[0_0_auto]
              w-full
              sm:w-72
              md:w-[420px]
              lg:w-[500px]
              overflow-hidden
              cursor-pointer
            "
          >
            <Link href="https://www.chgrplus.com" target="_blank">
              <Image
                src="/home/chgrplus-ss.png"
                alt="portfolio"
                width={500}
                height={300}
                layout="responsive"
                className="rounded-xl pb-4 hover:scale-105 transition-transform duration-300"
              />
            </Link>

            <span className="inline-flex flex-wrap items-center gap-2 uppercase font-bold tracking-wider text-gray-300 mb-2 text-xs sm:text-sm">
              <h1>Automated Vehicle Charging Company</h1>
              <IconPoint className="text-white" stroke={1} width={16} />
              <h1>E-Commerce</h1>
            </span>

            <Link href="https://www.chgrplus.com" target="_blank">
              <h1 className="capitalize text-white font-bold text-xl sm:text-2xl md:text-3xl hover:rotate-x-360 transition duration-300">
                CHGR Plus Website
              </h1>
            </Link>
          </motion.div>

          {/* Slide 2 */}
          <motion.div
            data-aos="fade-up"
            data-aos-delay="550"
            data-aos-duration="800"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
            }}
            className="
              embla__slide
              flex-shrink-0
              flex-[0_0_100%]
              sm:flex-[0_0_auto]
              w-full
              sm:w-72
              md:w-[420px]
              lg:w-[500px]
              overflow-hidden
              cursor-pointer
            "
          >
            <Link
              href="https://feb-2025-final-project-and-deployment-nedtrg.vercel.app/"
              target="_blank"
            >
              <Image
                src="/home/blogtrg-ss.png"
                alt="portfolio-two"
                width={500}
                height={300}
                layout="responsive"
                className="rounded-xl pb-4 hover:scale-105 transition-transform duration-300"
              />
            </Link>

            <span className="inline-flex flex-wrap items-center gap-2 uppercase font-bold tracking-wider text-gray-300 mb-2 text-xs sm:text-sm">
              <h1>Blog featuring User Comments</h1>
              <IconPoint className="text-white" stroke={1} width={16} />
              <h1>Blog API</h1>
            </span>

            <Link
              href="https://feb-2025-final-project-and-deployment-nedtrg.vercel.app/"
              target="_blank"
            >
              <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl hover:rotate-x-360 transition duration-300">
                Blog TRG
              </h1>
            </Link>
          </motion.div>

          {/* Slide 3 */}
          <motion.div
            data-aos="fade-up"
            data-aos-delay="700"
            data-aos-duration="800"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
            }}
            className="
              embla__slide
              flex-shrink-0
              flex-[0_0_100%]
              sm:flex-[0_0_auto]
              w-full
              sm:w-72
              md:w-[420px]
              lg:w-[500px]
              overflow-hidden
              cursor-pointer
            "
          >
            <Link
              href="https://cryptoassetsolutions.vercel.app/"
              target="_blank"
            >
              <Image
                src="/home/crypto-assets-ss.png"
                alt="portfolio"
                width={500}
                height={300}
                layout="responsive"
                className="rounded-xl pb-4 hover:scale-105 transition-transform duration-300"
              />
            </Link>

            <span className="inline-flex flex-wrap items-center gap-2 uppercase font-bold tracking-wider text-gray-300 mb-2 text-xs sm:text-sm">
              <h1>Crypto Recovery Website</h1>
              <IconPoint className="text-white" stroke={1} width={16} />
              <h1>Tech / Finance</h1>
            </span>

            <Link
              href="https://cryptoassetsolutions.vercel.app/"
              target="_blank"
            >
              <h1 className="capitalize text-white font-bold text-xl sm:text-2xl md:text-3xl hover:rotate-x-360 transition duration-300">
                Crypto Asset Solutions
              </h1>
            </Link>
          </motion.div>

          {/* Slide 4 */}
          <motion.div
            data-aos="fade-up"
            data-aos-delay="850"
            data-aos-duration="800"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
            }}
            className="
              embla__slide
              flex-shrink-0
              flex-[0_0_100%]
              sm:flex-[0_0_auto]
              w-full
              sm:w-72
              md:w-[420px]
              lg:w-[500px]
              overflow-hidden
              cursor-pointer
            "
          >
            <Link href="https://hta-final-project.vercel.app/" target="_blank">
              <Image
                src="/home/hta-ss.png"
                alt="portfolio-two"
                width={500}
                height={300}
                layout="responsive"
                className="rounded-xl pb-4 hover:scale-105 transition-transform duration-300"
              />
            </Link>

            <span className="inline-flex flex-wrap items-center gap-2 uppercase font-bold tracking-wider text-gray-300 mb-2 text-xs sm:text-sm">
              <h1>School Portal Website </h1>
              <IconPoint className="text-white" stroke={1} width={16} />
              <h1>Academics</h1>
            </span>

            <Link href="https://hta-final-project.vercel.app/" target="_blank">
              <h1 className="capitalize text-white font-bold text-xl sm:text-2xl md:text-3xl hover:rotate-x-360 transition duration-300">
                Honey Treat Academy
              </h1>
            </Link>
          </motion.div>

          {/* Slide 5 */}
          <motion.div
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="800"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
            }}
            className="
              embla__slide
              flex-shrink-0
              flex-[0_0_100%]
              sm:flex-[0_0_auto]
              w-full
              sm:w-72
              md:w-[420px]
              lg:w-[500px]
              overflow-hidden
              cursor-pointer
            "
          >
            <Link
              href="https://project-x-chinedu-porfolio.vercel.app/"
              target="_blank"
            >
              <Image
                src="/home/projectx-ss.png"
                alt="portfolio"
                width={500}
                height={300}
                layout="responsive"
                className="rounded-xl pb-4 hover:scale-105 transition-transform duration-300"
              />
            </Link>

            <span className="inline-flex flex-wrap items-center gap-2 uppercase font-bold tracking-wider text-gray-300 mb-2 text-xs sm:text-sm">
              <h1>Portfolio Website featuring Light/Dark Mode</h1>
              <IconPoint className="text-white" stroke={1} width={16} />
              <h1>Portfolio</h1>
            </span>
            <Link
              href="https://project-x-chinedu-porfolio.vercel.app/"
              target="_blank"
            >
              <h1 className="capitalize text-white font-bold text-xl sm:text-2xl md:text-3xl hover:rotate-x-360 transition duration-300">
                Project X Portfolio
              </h1>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Controls */}
      <div
        data-aos="fade-up"
        data-aos-delay="1150"
        className="embla__controls mt-6 flex justify-center"
      >
        <div className="embla__buttons flex gap-4">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
