import Link from "next/link";
import Image from "next/image";
import trg from "@public/home/face-trg.jpg";
import { IconPoint } from "@tabler/icons-react";
import { IconBrandFacebook } from "@tabler/icons-react";
import { IconBrandTwitter } from "@tabler/icons-react";
import { IconBrandInstagram } from "@tabler/icons-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import CountUpSection from "./CountUpSection";

export default function Header() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-16 px-4 lg:px-16">
      {/* LEFT SECTION */}
      <div className="w-full lg:basis-1/3 text-center lg:text-left">
        <div data-aos="fade-right" data-aos-delay="400" data-aos-duration="800">
          <h1 className="text-white uppercase font-bold pb-3">Biography</h1>
          <p className="text-white pb-8">
            Passionate software developer with a strong background in electrical
            and electronics engineering, specializing in modern web and
            application development. Experienced in building responsive,
            scalable solutions with a focus on clean design, performance, and
            continuous learning.
          </p>
        </div>

        <div
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-duration="1200"
        >
          <h1 className="text-white uppercase font-bold pb-3">Skills</h1>
          <p className="text-white pb-8 flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2">
            <span className="inline-flex items-center">
              UI / UX Design
              <IconPoint className="text-white ml-2" stroke={5} width={18} />
            </span>
            <span className="inline-flex items-center">
              Frontend Development
              <IconPoint className="text-white ml-2" stroke={5} width={18} />
            </span>
            <span className="inline-flex items-center">
              API Integration
              <IconPoint className="text-white ml-2" stroke={5} width={18} />
            </span>
            <span className="inline-flex items-center">
              Backend Development
              <IconPoint className="text-white ml-2" stroke={5} width={18} />
            </span>
            <span className="inline-flex items-center">
              Database Management
              <IconPoint className="text-white ml-2" stroke={5} width={18} />
            </span>
            <span>Project Collaboration</span>
          </p>
        </div>

        <div>
          <h1
            className="text-white uppercase font-bold pb-3"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="1600"
          >
            Connect
          </h1>
          <div className="flex justify-center lg:justify-start gap-3 pb-8">
            <Link href="/">
              <button
                className="p-3 rounded-full text-white bg-gray-800/50 border border-gray-700 hover:border-purple-900/10 hover:bg-gradient-to-r hover:from-purple-800/10 hover:via-purple-700/10 hover:to-purple-500/10 transition duration-300"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="800"
              >
                <IconBrandFacebook width={20} height={20} />
              </button>
            </Link>
            <Link
              href="https://x.com/nedtrg?s=21&t=F9ge4xwGfk4S7XYaG73p5Q"
              target="_blank"
            >
              <button
                className="p-3 rounded-full text-white bg-gray-800/50 border border-gray-700 hover:border-purple-900/10 hover:bg-gradient-to-r hover:from-purple-800/10 hover:via-purple-700/10 hover:to-purple-500/10 transition duration-300"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1200"
              >
                <IconBrandTwitter width={20} height={20} />
              </button>
            </Link>
            <Link
              href="https://www.instagram.com/nedtrg?igsh=dGE1Y2RoaWR0bHJ5&utm_source=qr"
              target="_blank"
            >
              <button
                className="p-3 rounded-full text-white bg-gray-800/50 border border-gray-700 hover:border-purple-900/10 hover:bg-gradient-to-r hover:from-purple-800/10 hover:via-purple-700/10 hover:to-purple-500/10 transition duration-300"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1600"
              >
                <IconBrandInstagram width={20} height={20} />
              </button>
            </Link>
            <Link href="https://github.com/nedtrg" target="_blank">
              <button
                className="p-3 rounded-full text-white bg-gray-800/50 border border-gray-700 hover:border-purple-900/10 hover:bg-gradient-to-r hover:from-purple-800/10 hover:via-purple-700/10 hover:to-purple-500/10 transition duration-300"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="2000"
              >
                <IconBrandGithub width={20} height={20} />
              </button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/ned-adigwu-31a730312/"
              target="_blank"
            >
              <button
                className="p-3 rounded-full text-white bg-gray-800/50 border border-gray-700 hover:border-purple-900/10 hover:bg-gradient-to-r hover:from-purple-800/10 hover:via-purple-700/10 hover:to-purple-500/10 transition duration-300"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="2400"
              >
                <IconBrandLinkedin width={20} height={20} />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* CENTER IMAGE */}
      <div
        className="w-full lg:basis-1/3 flex justify-center"
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-duration="1600"
      >
        <Image
          className="rounded-full w-64 h-64 sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px] object-cover"
          src={trg}
          alt="picture of the author"
          width={500}
          height={500}
        />
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full lg:basis-1/3 text-center lg:text-right">
        <CountUpSection />
      </div>
    </div>
  );
}
