import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ActionButtons from "@/components/ActionButtons";
import InfoPanel from "@/components/InfoPanel";
import bgImage from "@/assets/hero-wide.png";
import cloudTile from "@/assets/cloud-tile.png";

const Index = () => {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Navbar />
      <div
        className="w-full hero-bg"
        style={{ backgroundImage: `url(${bgImage}), url(${cloudTile})` }}
      >
        <Hero />
      </div>
      <div
        className="w-full cloud-tile"
        style={{ backgroundImage: `url(${cloudTile})` }}
      >
        <Features />
        <ActionButtons />
        <InfoPanel />
      </div>
      <footer className="py-6 text-center border-t border-border">
        <p className="font-cinzel text-xs text-muted-foreground tracking-wider">
          © 2026 ChaosAge. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Index;
