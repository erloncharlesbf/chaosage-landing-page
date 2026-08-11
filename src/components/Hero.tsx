import chaosAgeLogo from "@/assets/chaos_age.png";
import btnJogar from "@/assets/btn_jogar.png";

const Hero = () => {
  return (
    <section className="absolute inset-0 flex flex-col items-center justify-between pt-[calc(var(--nav-height)+2%)] pb-[8%]">
      {/* Logo no topo da arte */}
      <img
        src={chaosAgeLogo}
        alt="ChaosAge - MMORPG Server"
        fetchPriority="high"
        decoding="async"
        className="w-[220px] sm:w-[300px] md:w-[380px] lg:w-[420px]"
      />

      {/* CTA na parte inferior da arte */}
      <div className="flex flex-col items-center text-center px-4">
        <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 text-glow">
          ENTRE NO CAOS!
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 max-w-md">
          O MMORPG mais épico como você nunca viu!
        </p>
        <a
          href="/registro"
          className="hover:scale-105 transition-transform animate-[pulse-red-glow_2s_ease-in-out_infinite]"
        >
          <img
            src={btnJogar}
            alt="Jogar Agora"
            fetchPriority="high"
            decoding="async"
            className="h-[48px] sm:h-[60px] md:h-[68px] lg:h-[72px]"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
