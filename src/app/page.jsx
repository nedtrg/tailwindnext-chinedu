import Nav from "@/components/Nav";
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import Services from "@/components/Services";
import Carousel from "@/components/Carousel";
import Achievements from "@/components/Achievements";
import EmblaCarousel from "@/components/EmblaCarousel";
import PersonalMessage from "@/components/PersonalMessage";
import EmblaCarouselTwo from "@/components/EmblaCarouselTwo";
import LetsTalk from "@/components/LetsTalk";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

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
      <PersonalMessage />
      <EmblaCarouselTwo slides={SLIDES} options={OPTIONS} />
      <LetsTalk />
      <MapSection />
      <Footer />
      <BackToTop />
    </>
  );
}
