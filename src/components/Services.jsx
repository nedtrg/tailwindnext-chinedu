import { IconCodeCircle2 } from "@tabler/icons-react";
import { IconDeviceImac } from "@tabler/icons-react";
import { IconPaint } from "@tabler/icons-react";
import { IconPoint } from "@tabler/icons-react";

export default function Services() {
  return (
    <div
      id="services"
      className="
        text-white
        min-h-screen
        flex
        flex-col
        lg:flex-row
        items-start
        gap-16
        px-4
        sm:px-6
        lg:px-16
        py-16
      "
    >
      {/* LEFT TITLE */}
      <div
        className="w-full lg:basis-1/3 text-center lg:text-left"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <span className="inline-flex items-center uppercase font-bold tracking-wider text-gray-400 mb-4">
          <IconPoint className="text-white mr-2" stroke={1} width={18} />
          Services
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent leading-tight">
          <span className="text-white">What I</span> Do
        </h1>
      </div>

      {/* RIGHT SERVICES LIST */}
      <div className="w-full lg:basis-2/3 max-w-5xl">
        {/* SERVICE 01 */}
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="900"
          data-aos-easing="ease-out-cubic"
          data-aos-anchor-placement="top-bottom"
          className="service-boxtwo mb-8 bg-gray-800 rounded-lg border border-gray-700 hover:border-purple-900/5 hover:bg-gradient-to-r hover:from-purple-800/5 hover:via-purple-700/5 hover:to-purple-500/5 transition duration-300 p-6"
        >
          <div className="text-gray-200 text-2xl sm:text-3xl font-bold mb-4">
            01/
          </div>

          <div className="flex items-center gap-4 mb-4">
            <IconPaint stroke={1} width={40} height={40} />
            <h2 className="text-2xl sm:text-3xl font-semibold">Design</h2>
          </div>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            I design clean, intuitive user interfaces with a strong focus on
            usability, accessibility, and visual consistency across web
            applications and digital products.
          </p>
        </div>

        {/* SERVICE 02 */}
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="900"
          data-aos-easing="ease-out-cubic"
          className="service-boxtwo mb-8 bg-gray-800 rounded-lg border border-gray-700 hover:border-purple-900/5 hover:bg-gradient-to-r hover:from-purple-800/5 hover:via-purple-700/5 hover:to-purple-500/5 transition duration-300 p-6"
        >
          <div className="text-gray-200 text-2xl sm:text-3xl font-bold mb-4">
            02/
          </div>

          <div className="flex items-center gap-4 mb-4">
            <IconCodeCircle2 stroke={1} width={40} height={40} />
            <h2 className="text-2xl sm:text-3xl font-semibold">Development</h2>
          </div>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            I build responsive, scalable web applications using modern front-end
            technologies while integrating robust back-end systems, APIs,
            databases, and authentication to deliver complete, production-ready
            solutions.
          </p>
        </div>

        {/* SERVICE 03 */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="900"
          data-aos-easing="ease-out-cubic"
          className="service-boxtwo bg-gray-800 rounded-lg border border-gray-700 hover:border-purple-900/5 hover:bg-gradient-to-r hover:from-purple-800/5 hover:via-purple-700/5 hover:to-purple-500/5 transition duration-300 p-6"
        >
          <div className="text-gray-200 text-2xl sm:text-3xl font-bold mb-4">
            03/
          </div>

          <div className="flex items-center gap-4 mb-4">
            <IconDeviceImac stroke={1} width={40} height={40} />
            <h2 className="text-2xl sm:text-3xl font-semibold">Marketing</h2>
          </div>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            I apply data-driven digital marketing strategies to improve
            visibility, engagement, and brand growth across web platforms and
            online campaigns.
          </p>
        </div>
      </div>
    </div>
  );
}
