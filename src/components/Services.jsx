import { IconCodeCircle2 } from "@tabler/icons-react";
import { IconDeviceImac } from "@tabler/icons-react";
import { IconPaint } from "@tabler/icons-react";

export default function Services() {
  return (
    <div className="text-white min-h-screen flex justify-between items-top px-6 py-10">
      <div className="basis-1/4 text-center mb-12">
        <p className="uppercase text-left font-bold tracking-wider text-gray-400 mb-2">
          Services
        </p>
        <h1 className="text-6xl text-left font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          What I Do
        </h1>
      </div>
      <div className="block basis-2/3 w-full max-w-5xl">
        <div className="service-box mb-10 bg-gray-800 rounded-lg border border-gray-700 hover:border-purple-900 hover:bg-gradient-to-r hover:from-purple-800 hover:via-purple-700 hover:to-purple-500 transition duration-300">
          <div className="service-order relative left-4 text-gray-200 text-3xl font-bold">
            01/
          </div>
          <div className="service-title gap-4">
            <span className="text-3xl">
              <IconPaint stroke={1} width={50} height={70} />
            </span>
            <h2 className="text-3xl font-semibold">Design</h2>
          </div>
          <p className="service-text text-gray-300 text-m">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit ut,
            dignissimos tempore nemo sunt magnam delectus perspiciatis? Maxime,
            accusamus incidunt?
          </p>
        </div>
        <div className="service-box mb-10 bg-gray-800 rounded-lg border border-gray-700 hover:border-purple-900 hover:bg-gradient-to-r hover:from-purple-800 hover:via-purple-700 hover:to-purple-500 transition duration-300">
          <div className="service-order relative left-4 text-gray-200 text-3xl font-bold">
            02/
          </div>
          <div className="service-title gap-4">
            <span className="text-3xl">
              <IconCodeCircle2 stroke={1} width={50} height={70} />
            </span>
            <h2 className="text-3xl font-semibold">Development</h2>
          </div>
          <p className="service-text text-gray-300 text-m">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit ut,
            dignissimos tempore nemo sunt magnam delectus perspiciatis? Maxime,
            accusamus incidunt?
          </p>
        </div>
        <div className="service-box mb-10 bg-gray-800 rounded-lg border border-gray-700 hover:border-purple-900 hover:bg-gradient-to-r hover:from-purple-800 hover:via-purple-700 hover:to-purple-500 transition duration-300">
          <div className="service-order relative left-4 text-gray-200 text-3xl font-bold">
            03/
          </div>
          <div className="service-title gap-4">
            <span className="text-3xl">
              <IconDeviceImac stroke={1} width={50} height={70} />
            </span>
            <h2 className="text-3xl font-semibold">Marketing</h2>
          </div>
          <p className="service-text text-gray-300 text-m">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit ut,
            dignissimos tempore nemo sunt magnam delectus perspiciatis? Maxime,
            accusamus incidunt?
          </p>
        </div>
      </div>
    </div>
  );
}
