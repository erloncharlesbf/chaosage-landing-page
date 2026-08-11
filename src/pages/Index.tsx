import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ActionButtons from "@/components/ActionButtons";
import InfoPanel from "@/components/InfoPanel";
import bgImage from "@/assets/hero-2.png";
import bodyTile from "@/assets/body-tile.png";

const Index = () => {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Navbar />
      <div
        className="w-full hero-bg bg-top bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Hero />
      </div>
      <div
        className="w-full body-tile"
        style={{ backgroundImage: `url(${bodyTile})` }}
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
