import chaosAgeLogo from "@/assets/chaos_age.png";

const Hero = () => {
  return (
    <section className="relative pt-[var(--nav-height)]">
      {/* 10px spacing between nav and content */}
      <div style={{ height: "10px" }} />

      {/* Spacer to push CTA below the dragon area */}
      <div className="h-[350px] sm:h-[450px] md:h-[500px]" />

      {/* CTA over/below the image */}
      <div className="relative -mt-32 sm:-mt-40 z-10 flex flex-col items-center text-center px-4 pb-8">
        <img
          src={chaosAgeLogo}
          alt="ChaosAge - MMORPG Server"
          className="w-[280px] sm:w-[350px] md:w-[420px]"
          style={{ marginTop: "-350px" }}
        />
        <div style={{ height: "200px" }} />
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
