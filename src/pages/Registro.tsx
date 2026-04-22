import { useState, FormEvent } from "react";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import chaosAgeLogo from "@/assets/chaos_age.png";

const Registro = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (password !== confirm) {
      e.preventDefault();
      setError("As senhas não coincidem.");
      return;
    }
    setError(null);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-[var(--nav-height)] flex flex-col items-center px-4 py-12">
        <img
          src={chaosAgeLogo}
          alt="ChaosAge"
          className="w-[220px] sm:w-[280px] mb-6"
        />
        <h1 className="font-cinzel text-3xl sm:text-4xl font-bold text-primary text-glow mb-8 text-center">
          Registro ChaosAge
        </h1>

        <form
          action="/registro.php"
          method="POST"
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-card border border-border rounded-md p-6 sm:p-8 shadow-[0_0_30px_hsl(25_80%_50%/0.15)] space-y-5"
        >
          <div className="space-y-2">
            <Label htmlFor="username" className="font-cinzel tracking-wider uppercase text-sm">
              Login
            </Label>
            <Input id="username" name="username" type="text" required maxLength={32} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="font-cinzel tracking-wider uppercase text-sm">
              Email
            </Label>
            <Input id="email" name="email" type="email" required maxLength={255} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="font-cinzel tracking-wider uppercase text-sm">
              Senha
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password_confirm" className="font-cinzel tracking-wider uppercase text-sm">
              Confirmar senha
            </Label>
            <Input
              id="password_confirm"
              name="password_confirm"
              type="password"
              required
              minLength={6}
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>

          {error && (
            <p className="text-sm font-medium text-destructive text-center">{error}</p>
          )}

          <button type="submit" className="btn-play w-full text-center">
            Criar conta
          </button>
        </form>
      </main>
    </div>
  );
};

export default Registro;
