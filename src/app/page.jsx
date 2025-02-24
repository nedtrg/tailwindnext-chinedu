import Nav from "@/components/Nav";
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import Services from "@/components/Services";
import Carousel from "@/components/Carousel";
import Achievements from "@/components/Achievements";
import EmblaCarousel from "@/components/EmblaCarousel";
import Table from "@/components/Table";

export default function Home() {
  const slides = [
    "/client-1-light.png",
    "/client-2-light.png",
    "/client-4-light.png",
    "/client-5-light.png",
    "/client-6-light.png",
  ];

  const OPTIONS = { slidesToScroll: "auto" };
  const SLIDE_COUNT = 10;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <Nav />
      <Logo />
      <Header />
      <Services />
      <Carousel slides={slides} />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <Achievements />
      <Table />
    </>
  );
}
