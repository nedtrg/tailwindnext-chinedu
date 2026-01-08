import { IconBrandInstagramFilled, IconPoint } from "@tabler/icons-react";

export default function Achievements() {
  return (
    <div
      id="awards"
      className="
        text-white min-h-screen
        flex flex-col lg:flex-row
        items-start
        px-4 sm:px-6 md:px-10 lg:px-10
        py-10 lg:gap-20
      "
    >
      {/* Header Section */}
      <div
        className="
          w-full lg:basis-1/4
          flex flex-col items-center lg:items-start
          text-center lg:text-left
          mb-8 lg:mb-12
        "
      >
        <span className="inline-flex items-center justify-center uppercase font-bold tracking-wider text-gray-400 mb-2">
          <IconPoint className="text-white mr-2" stroke={1} width={20} />
          Achievements
        </span>

        <h1
          className="
            font-extrabold
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600
            bg-clip-text text-transparent
          "
        >
          <span className="text-white">Awa</span>rds
        </h1>
      </div>

      {/* Awards Grid */}
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2
          gap-6 sm:gap-8 md:gap-10
          w-full lg:basis-2/3
          max-w-5xl
        "
      >
        {/* Card 1 */}
        <div
          className="service-boxtwo bg-gray-800 rounded-lg border border-gray-700 p-6
                        hover:border-purple-900/5
                        hover:bg-gradient-to-r hover:from-purple-800/5 hover:via-purple-700/5 hover:to-purple-500/5
                        transition duration-300"
        >
          <h1 className="text-gray-200 text-xl sm:text-2xl font-extrabold pb-3">
            Best Designer of the Month
          </h1>
          <h2 className="text-sm font-bold pb-3 text-gray-500">2023</h2>
          <p className="text-gray-300 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="service-boxtwo bg-gray-800 rounded-lg border border-gray-700 p-6
                        hover:border-purple-900/5
                        hover:bg-gradient-to-r hover:from-purple-800/5 hover:via-purple-700/5 hover:to-purple-500/5
                        transition duration-300"
        >
          <h1 className="text-gray-200 text-xl sm:text-2xl font-extrabold pb-3">
            The True Gem
          </h1>
          <h2 className="text-sm font-bold pb-3 text-gray-500">2023</h2>
          <p className="text-gray-300 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="service-boxtwo bg-gray-800 rounded-lg border border-gray-700 p-6
                        sm:mt-0 lg:mt-8
                        hover:border-purple-900/5
                        hover:bg-gradient-to-r hover:from-purple-800/5 hover:via-purple-700/5 hover:to-purple-500/5
                        transition duration-300"
        >
          <h1 className="text-gray-200 text-xl sm:text-2xl font-extrabold pb-3">
            First Class Performer
          </h1>
          <h2 className="text-sm font-bold pb-3 text-gray-500">2022</h2>
          <p className="text-gray-300 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>

        {/* Card 4 */}
        <div
          className="service-boxtwo bg-gray-800 rounded-lg border border-gray-700 p-6
                        sm:mt-0 lg:mt-8
                        hover:border-purple-900/5
                        hover:bg-gradient-to-r hover:from-purple-800/5 hover:via-purple-700/5 hover:to-purple-500/5
                        transition duration-300"
        >
          <h1 className="text-gray-200 text-xl sm:text-2xl font-extrabold pb-3">
            Customer&apos;s Favorite
          </h1>
          <h2 className="text-sm font-bold pb-3 text-gray-500">2021</h2>
          <p className="text-gray-300 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
}
