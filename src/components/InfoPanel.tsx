const InfoPanel = () => {
  return (
    <section id="status" className="pt-16 px-4">
      <div
        className="mx-auto grid grid-cols-1 md:grid-cols-[70%_30%] bg-black rounded overflow-hidden"
        style={{ maxWidth: "var(--content-max)" }}
      >
        {/* Notícias */}
        <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-border">
          <h2 className="font-cinzel text-lg md:text-xl text-foreground mb-4 tracking-wider">
            Notícias &amp; Atualizações
          </h2>
          <ul className="space-y-2 text-sm md:text-base text-muted-foreground list-disc list-inside">
            <li>Novo evento de arena liberado</li>
            <li>Ajustes de balanceamento e correções</li>
            <li>Drop raro nas dungeons noturnas</li>
          </ul>
        </div>

        {/* Status */}
        <div className="p-6 md:p-8">
          <h2 className="font-cinzel text-lg md:text-xl text-foreground mb-4 tracking-wider">
            Status do Servidor
          </h2>
          <span className="inline-block px-3 py-1 rounded text-xs font-bold tracking-widest uppercase bg-green-600/20 text-green-400 border border-green-500/30 mb-4">
            ONLINE
          </span>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>Jogadores online: <span className="text-foreground">1.235</span></li>
            <li>IP: <span className="text-foreground">play.chaosage.gg</span></li>
            <li>Região: <span className="text-foreground">BR</span></li>
          </ul>
          <p className="mt-4 text-xs text-muted-foreground italic">
            Anti-cheat, moderação ativa e regras claras.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoPanel;
