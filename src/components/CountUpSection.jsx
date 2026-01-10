"use client";

import { useEffect, useRef, useState } from "react";

const CountUpSection = () => {
  const ref = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  const [projects, setProjects] = useState(0);
  const [experience, setExperience] = useState(0);
  const [clients, setClients] = useState(0);

  const animateCount = (setValue, target, duration = 2000) => {
    const startTime = performance.now();

    const update = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setValue(Math.floor(progress * target));

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);

          animateCount(setProjects, 18, 1500);
          animateCount(setExperience, 3, 1000);
          animateCount(setClients, 22, 2000);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [hasStarted]);

  return (
    <div ref={ref} className="w-full lg:basis-1/3 text-center lg:text-right">
      <div data-aos="fade-left" data-aos-delay="400" data-aos-duration="800">
        <h1 className="text-white font-bold uppercase">Projects Done</h1>
        <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl pb-8">
          {projects}
        </h2>
      </div>

      <div data-aos="fade-left" data-aos-delay="400" data-aos-duration="1200">
        <h1 className="text-white font-bold uppercase">Years of Experience</h1>
        <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl pb-8">
          {experience}+
        </h2>
      </div>

      <div data-aos="fade-left" data-aos-delay="400" data-aos-duration="1600">
        <h1 className="text-white font-bold uppercase">Worldwide Clients</h1>
        <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl">
          {clients}
        </h2>
      </div>
    </div>
  );
};

export default CountUpSection;
