import Link from "next/link";
import Image from "next/image";
import arthur from "@public/home/hero-avatar.jpg";
import { IconBrandInstagramFilled, IconPoint } from "@tabler/icons-react";
import { IconBrandFacebook } from "@tabler/icons-react";
import { IconBrandTwitter } from "@tabler/icons-react";
import { IconBrandInstagram } from "@tabler/icons-react";

export default function Header() {
  return (
    <div className="flex flex-row justify-around items-center">
      <div className="basis-1/4">
        <h1 className="text-white text-left uppercase font-bold pb-3">
          Biography
        </h1>
        <p className="text-white text-left pb-12">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          veritatis eos quos dolor quidem minima recusandae illum nulla
          assumenda aliquid?
        </p>
        <h1 className="text-white text-left uppercase font-bold pb-3">
          Skills
        </h1>
        <p className="text-white text-left pb-12">
          <span className="inline-flex">
            Web Development{" "}
            <IconPoint className="text-white pl-3" stroke={5} width={20} />
          </span>
          <span className="inline-flex pl-3">
            UI & UX Design
            <IconPoint className="text-white pl-3" stroke={5} width={20} />
          </span>
          <span className="inline-flex pl-3">
            Marketing{" "}
            <IconPoint className="text-white pl-3" stroke={5} width={20} />
          </span>
          <span className="inline-flex pl-3">
            SEO <IconPoint className="text-white pl-3" stroke={5} width={20} />
          </span>
          <span className="pl-3 text-left">Management</span>
        </p>
        <h1 className="text-white text-left uppercase font-bold pb-3">
          Connect
        </h1>
        <div className="flex space-x-3 text-white text-left pb-12">
          <Link href="/">
            <button className="p-3 rounded-full border-2 border-transparent text-white bg-gray-800/50 border-gray-700 hover:border-purple-900/10 hover:bg-gradient-to-r hover:from-purple-800/10 hover:via-purple-700/10 hover:to-purple-500/10 transition duration-300">
              <IconBrandFacebook stroke={2} width={20} height={20} />
            </button>
          </Link>
          <Link href="/">
            <button className="p-3 rounded-full border-2 border-transparent text-white bg-gray-800/50 border-gray-700 hover:border-purple-900/10 hover:bg-gradient-to-r hover:from-purple-800/10 hover:via-purple-700/10 hover:to-purple-500/10 transition duration-300">
              <IconBrandTwitter stroke={2} width={20} height={20} />
            </button>
          </Link>
          <Link href="/">
            <button className="p-3 rounded-full border-2 border-transparent text-white bg-gray-800/50 border-gray-700 hover:border-purple-900/10 hover:bg-gradient-to-r hover:from-purple-800/10 hover:via-purple-700/10 hover:to-purple-500/10 transition duration-300">
              <IconBrandInstagram stroke={2} width={20} height={20} />
            </button>
          </Link>
        </div>
      </div>
      <div className="basis-1/4">
        <Image
          className="rounded-full"
          src={arthur}
          alt="picture of the author"
          width={500}
          height={500}
        />
      </div>
      <div className="basis-1/4">
        <h1 className="text-white text-right font-bold uppercase">
          Projects Done
        </h1>
        <h2 className="text-white text-right text-6xl pb-12">142</h2>
        <h1 className="text-white text-right font-bold uppercase">
          Years of Experience
        </h1>
        <h2 className="text-white text-right text-6xl pb-12">13+</h2>
        <h1 className="text-white text-right font-bold uppercase">
          Worldwide Clients
        </h1>
        <h2 className="text-white text-right text-6xl pb-12">900</h2>
      </div>
    </div>
  );
}
