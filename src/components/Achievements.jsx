import { IconBrandInstagramFilled, IconPoint } from "@tabler/icons-react";

export default function Achievements() {
  return (
    <div
      id="awards"
      className="text-white min-h-screen flex justify-between items-top px-6 py-10"
    >
      <div className="basis-1/4 text-center mb-12">
        <span className="inline-flex uppercase font-bold tracking-wider text-gray-400 mb-2">
          <IconPoint className="text-white -ml-40" stroke={1} width={20} />
          Achievements
        </span>
        <h1 className="text-6xl text-left font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          <span className="text-white">Awa</span>rds
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-10 basis-2/3 w-full max-w-5xl">
        <div className="service-boxtwo max-h-64 bg-gray-800 rounded-lg border border-gray-700 hover:border-purple-900/5 hover:bg-gradient-to-r hover:from-purple-800/5 hover:via-purple-700/5 hover:to-purple-500/5 transition duration-300">
          <div className="service-order relative text-gray-200 text-2xl font-extrabold">
            <h1 className="pb-3">Best Designer of the Month</h1>
          </div>
          <div className="service-title gap-4">
            <h2 className="text-sm font-bold pb-3 text-gray-500">2023</h2>
          </div>
          <p className="service-text text-gray-300 text-m">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit ut,
            dignissimos tempore nemo sunt magnam delectus perspiciatis? Maxime,
            accusamus incidunt?
          </p>
        </div>
        <div className="service-boxtwo max-h-64 bg-gray-800 rounded-lg border border-gray-700 hover:border-purple-900/5 hover:bg-gradient-to-r hover:from-purple-800/5 hover:via-purple-700/5 hover:to-purple-500/5 transition duration-300">
          <div className="service-order relative text-gray-200 text-2xl font-extrabold">
            <h1 className="pb-3">The True Gem</h1>
          </div>
          <div className="service-title gap-4">
            <h2 className="text-sm font-bold pb-3 text-gray-500">2023</h2>
          </div>
          <p className="service-text text-gray-300 text-m">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit ut,
            dignissimos tempore nemo sunt magnam delectus perspiciatis? Maxime,
            accusamus incidunt?
          </p>
        </div>
        <div className="service-boxtwo max-h-64 -mt-20 bg-gray-800 rounded-lg border border-gray-700 hover:border-purple-900/5 hover:bg-gradient-to-r hover:from-purple-800/5 hover:via-purple-700/5 hover:to-purple-500/5 transition duration-300">
          <div className="service-order relative text-gray-200 text-2xl font-extrabold">
            <h1 className="pb-3">First Class Performer</h1>
          </div>
          <div className="service-title gap-4">
            <h2 className="text-sm font-bold pb-3 text-gray-500">2022</h2>
          </div>
          <p className="service-text text-gray-300 text-m">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit ut,
            dignissimos tempore nemo sunt magnam delectus perspiciatis? Maxime,
            accusamus incidunt?
          </p>
        </div>
        <div className="service-boxtwo max-h-64 -mt-20 bg-gray-800 rounded-lg border border-gray-700 hover:border-purple-900/5 hover:bg-gradient-to-r hover:from-purple-800/5 hover:via-purple-700/5 hover:to-purple-500/5 transition duration-300">
          <div className="service-order relative text-gray-200 text-2xl font-extrabold">
            <h1 className="pb-3">Customer's Favorite</h1>
          </div>
          <div className="service-title gap-4">
            <h2 className="text-sm font-bold pb-3 text-gray-500">2021</h2>
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
