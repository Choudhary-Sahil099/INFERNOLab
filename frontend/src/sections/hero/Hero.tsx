import HeroBackground from "./Herobackground";
import HeroScene from "./HeroScene";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
      "
      id="hero"
    >
      <HeroBackground />

      <div
        className="
          relative
          z-10
          grid
          min-h-screen
          items-center
          gap-10
          px-12
          pt-5
          grid-cols-[0.8fr_2fr]
        "
      >
        <HeroContent />

        <HeroScene />
      </div>
    </section>
  );
};

export default Hero;