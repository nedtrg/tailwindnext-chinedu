import React from "react";

export default function MapSection() {
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="400"
      data-aos-duration="1400"
      className="w-full bg-black px-4 sm:px-10 lg:px-24 py-16"
    >
      <div className="relative w-full h-[320px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.930267119566!2d3.2836587747064674!3d6.6555653216151835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9733ab26ce9b%3A0x270eb555cd782363!2s41%20Bode%20Williams%20St%2C%20Abule%20Egba%2C%20Lagos%20102213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1767887476955!5m2!1sen!2sng"
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
