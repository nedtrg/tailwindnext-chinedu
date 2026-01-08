import Image from "next/image";
import marbella from "../../public/home/testimonial-1.jpg";
import { IconQuote } from "@tabler/icons-react";

export default function PersonalMessage() {
  return (
    <div
      id="testimonial"
      className="
        flex flex-col lg:flex-row
        items-center
        gap-8 sm:gap-12 lg:gap-40
        px-4 sm:px-8 md:px-16 lg:px-28
        mb-10
      "
    >
      {/* Image */}
      <div className="flex-shrink-0">
        <Image
          src={marbella}
          width={450}
          height={450}
          alt="client picture"
          className="
            rounded-full
            w-40 h-40
            sm:w-56 sm:h-56
            md:w-72 md:h-72
            lg:w-[350px] lg:h-[350px]
            object-cover
          "
        />
      </div>

      {/* Text Content */}
      <div className="service-boxthree text-center lg:text-left max-w-2xl">
        <h1 className="text-white text-xl sm:text-2xl font-bold capitalize pb-2">
          Marcella Leonard
        </h1>

        <h1 className="text-white uppercase pb-4 font-semibold text-sm sm:text-base">
          Creative Director
        </h1>

        <div className="relative flex justify-center lg:justify-start">
          <h1 className="text-gray-400 italic text-base sm:text-lg md:text-xl lg:text-2xl pb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
            inventore dolore qui. Aliquam, odio pariatur.
          </h1>

          {/* Quote Icon */}
          <span
            className="
              absolute
              -top-10 sm:-top-14 md:-top-20
              right-0 lg:-right-10
            "
          >
            <IconQuote className="text-gray-700/50" stroke={3} size={80} />
          </span>
        </div>
      </div>
    </div>
  );
}
