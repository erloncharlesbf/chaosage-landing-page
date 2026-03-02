import chaosAgeLogo from "@/assets/chaos_age.png";
import btnJogar from "@/assets/btn_jogar.png";

const Hero = () => {
  return (
    <section className="relative pt-[var(--nav-height)]">
      {/* 10px spacing between nav and content */}
      <div style={{ height: "10px" }} />

      {/* Logo isolated, positioned above dragon heads */}
      <div className="relative z-20 flex justify-center" style={{ marginTop: "20px" }}>
        <img
          src={chaosAgeLogo}
          alt="ChaosAge - MMORPG Server"
          className="w-[280px] sm:w-[350px] md:w-[420px]"
        />
      </div>

      {/* Spacer to push CTA below the dragon area */}
      <div className="h-[250px] sm:h-[350px] md:h-[400px]" />

      {/* CTA content, pushed 100px lower */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pb-8" style={{ marginTop: "100px" }}>
        <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-3 text-glow">
          ENTRE NO CAOS!
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-md">
          O MMORPG mais épico como você nunca viu!
        </p>
        <a href="#" className="hover:scale-105 transition-transform">
          <img src={btnJogar} alt="Jogar Agora" className="h-[56px] sm:h-[64px] md:h-[72px]" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
