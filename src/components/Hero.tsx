import heroImage from "@/assets/hero.png";

const Hero = () => {
  return (
    <section className="relative pt-[var(--nav-height)]">
      {/* 10px spacing between nav and content */}
      <div style={{ height: "10px" }} />

      <div className="relative w-full overflow-hidden">
        <img
          src={heroImage}
          alt="ChaosAge - Dragões em batalha épica"
          className="w-full h-auto object-cover"
          style={{ maxHeight: "600px", objectPosition: "top center" }}
        />
        {/* Gradient overlay bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      {/* CTA over/below the image */}
      <div className="relative -mt-32 sm:-mt-40 z-10 flex flex-col items-center text-center px-4 pb-8">
        <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-3 text-glow">
          ENTRE NO CAOS!
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-md">
          O MMORPG mais épico como você nunca viu!
        </p>
        <a href="#" className="btn-play animate-pulse-glow">
          JOGAR AGORA
        </a>
      </div>
    </section>
  );
};

export default Hero;
