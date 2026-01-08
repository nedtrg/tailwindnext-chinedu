import { IconPoint } from "@tabler/icons-react";

export default function LetsTalk() {
  return (
    <section
      id="contact"
      className="w-full bg-black text-white py-16 sm:py-20 lg:py-24 px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
        {/* HEADER / LEFT SIDE */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="flex items-center gap-2 text-gray-400 uppercase tracking-widest font-bold mb-4">
            <IconPoint stroke={1} size={20} />
            <h1>Contact</h1>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Talk
            </span>
          </h2>
        </div>

        {/* FORM / RIGHT SIDE */}
        <div className="w-full">
          {/* CONTACT INFO */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 lg:gap-24 mb-12 text-center sm:text-left">
            <div>
              <h1 className="font-bold uppercase tracking-widest text-gray-400 mb-2">
                Email:
              </h1>
              <h1 className="text-xl sm:text-2xl font-bold">
                contact@flattheme.net
              </h1>
            </div>

            <div>
              <h1 className="font-bold uppercase tracking-widest text-gray-400 mb-2">
                Call:
              </h1>
              <h1 className="text-xl sm:text-2xl font-bold">+123 456 7890</h1>
            </div>
          </div>

          {/* FORM */}
          <form className="space-y-6 max-w-5xl mx-auto lg:mx-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-neutral-900 text-white placeholder-gray-500 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-purple-500"
              />

              <input
                type="email"
                placeholder="E-Mail"
                className="w-full bg-neutral-900 text-white placeholder-gray-500 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-neutral-900 text-white placeholder-gray-500 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-purple-500"
            />

            <textarea
              placeholder="Message"
              rows={6}
              className="w-full bg-neutral-900 text-white placeholder-gray-500 rounded-xl px-5 py-4 outline-none resize-none focus:ring-2 focus:ring-purple-500"
            />

            <div className="flex justify-center lg:justify-end">
              <button className="px-4 py-2 text-white rounded-full bg-gray-800/50 border-gray-700 hover:border-purple-900/10 hover:bg-gradient-to-r hover:from-purple-800/10 hover:via-purple-700/10 hover:to-purple-500/10 transition duration-300">
                <span className="inline-flex items-center gap-2 uppercase font-semibold">
                  <IconPoint stroke={2} />
                  <h1>Send Message</h1>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
