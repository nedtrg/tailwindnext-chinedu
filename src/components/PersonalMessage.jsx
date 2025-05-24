import Image from "next/image";
import marbella from "../../public/home/testimonial-1.jpg";
import { IconQuote } from "@tabler/icons-react";

export default function PersonalMessage() {
  return (
    <div
      id="testimonial"
      className="flex gap-20 px-28 mb-10 items-center place-items-center"
    >
      <div>
        <Image
          src={marbella}
          width={450}
          height={450}
          alt="client picture"
          className="rounded-full"
        />
      </div>
      <div className="service-boxthree">
        <h1 className="text-white text-2xl font-bold capitalize pb-2">
          Marcella Leonard
        </h1>
        <h1 className="text-white uppercase pb-5 font-semibold">
          Creative Director
        </h1>

        <div className="inline-flex">
          <h1 className="text-gray-700 italic text-2xl pb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
            inventore dolore qui. Aliquam, odio pariatur.
          </h1>
          <span className="-mt-32">
            <IconQuote className="text-gray-700/50" stroke={3} size={100} />
          </span>
        </div>
      </div>
    </div>
  );
}
