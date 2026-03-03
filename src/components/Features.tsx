import iconPvp from "@/assets/icon_pvp.png";
import iconEventos from "@/assets/icon_eventos.png";
import iconSemLimites from "@/assets/icon_sem_limites.png";

const features = [
  {
    icon: iconPvp,
    title: "PvE e PvP Intenso",
    description: "Explore dungeons épicas e batalhas inesquecíveis.",
  },
  {
    icon: iconEventos,
    title: "Eventos Épicos",
    description: "Participe de eventos exclusivos com grandes recompensas.",
  },
  {
    icon: iconSemLimites,
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
          <div
            key={f.title}
            className="flex flex-col items-center text-center opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <img src={f.icon} alt={f.title} className="w-16 h-16 mb-3 object-contain" />
            <h3 className="font-cinzel text-lg font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-base leading-relaxed max-w-[260px]">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
