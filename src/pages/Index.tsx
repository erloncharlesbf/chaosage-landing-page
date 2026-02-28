import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ActionButtons from "@/components/ActionButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <ActionButtons />
      <footer className="py-6 text-center border-t border-border">
        <p className="font-cinzel text-xs text-muted-foreground tracking-wider">
          © 2026 ChaosAge. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Index;
