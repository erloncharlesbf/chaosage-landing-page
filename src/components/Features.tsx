import { useState } from "react";
import iconPvp from "@/assets/icon_pvp.png";
import iconEventos from "@/assets/icon_eventos.png";
import iconSemLimites from "@/assets/icon_sem_limites.png";
import iconPvpRed from "@/assets/icon_pvp_red.png";
import iconEventosRed from "@/assets/icon_eventos_red.png";
import iconSemLimitesRed from "@/assets/icon_sem_limites_red.png";

const features = [
  {
    icon: iconPvp,
    iconHover: iconPvpRed,
    title: "PvE e PvP Intenso",
    description: "Explore dungeons épicas e batalhas inesquecíveis.",
  },
  {
    icon: iconEventos,
    iconHover: iconEventosRed,
    title: "Eventos Épicos",
    description: "Participe de eventos exclusivos com grandes recompensas.",
  },
  {
    icon: iconSemLimites,
    iconHover: iconSemLimitesRed,
    title: "Sem Limites",
    description: "Evolua, crie alianças e conquiste o topo do ranking.",
  },
];

const Features = () => {
  return (
    <section id="recursos" className="relative py-24 px-4">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "rgba(0,0,0,0.3)",
        }}
      />
      <div className="relative z-10 mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8" style={{ maxWidth: "var(--content-max)" }}>
        {features.map((f, i) => (
          <FeatureCard
            key={f.title}
            feature={f}
            index={i}
          />
        ))}
      </div>
    </section>
  );
};

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center text-center opacity-0 animate-fade-in-up group cursor-default"
      style={{ animationDelay: `${index * 0.15}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={isHovered ? feature.iconHover : feature.icon}
        alt={feature.title}
        loading="lazy"
        decoding="async"
        className="w-16 h-16 mb-3 object-contain transition-transform duration-300 group-hover:scale-110"
        loading="lazy"
      />
      <h3 className="font-cinzel text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
      <p className="text-muted-foreground text-base leading-relaxed max-w-[260px]">{feature.description}</p>
    </div>
  );
};

export default Features;
