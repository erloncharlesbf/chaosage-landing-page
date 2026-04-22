import { useState, FormEvent, useMemo } from "react";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import chaosAgeLogo from "@/assets/chaos_age.png";
import registroBg from "@/assets/registro-bg.png";
import btnCriarConta from "@/assets/criarconta.png";

const loginRegex = /^[A-Za-z]{5,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/;

const Registro = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const validation = useMemo(() => {
    const usernameValid = loginRegex.test(username);
    const emailValid = emailRegex.test(email);
    const passwordValid = passwordRegex.test(password);
    const confirmValid = confirm.length > 0 && confirm === password;
    return {
      usernameValid,
      emailValid,
      passwordValid,
      confirmValid,
      allValid: usernameValid && emailValid && passwordValid && confirmValid,
    };
  }, [username, email, password, confirm]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (!validation.allValid) {
      e.preventDefault();
    }
  };

  const fieldError = (touched: boolean, valid: boolean, message: string) =>
    touched && !valid ? (
      <p className="text-xs text-destructive mt-1">{message}</p>
    ) : null;

  return (
    <div
      className="min-h-screen text-foreground bg-background"
      style={{
        backgroundImage: `url(${registroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar />
      <main className="pt-[var(--nav-height)] flex flex-col items-center px-4 py-12">
        <img
          src={chaosAgeLogo}
          alt="ChaosAge"
          className="w-[220px] sm:w-[280px] mb-6"
        />
        <form
          action="/registro.php"
          method="POST"
          onSubmit={handleSubmit}
          noValidate
          className="w-full max-w-md bg-card border border-border rounded-md p-6 sm:p-8 shadow-[0_0_30px_hsl(25_80%_50%/0.15)] space-y-5"
        >
          <h1 className="font-cinzel text-3xl sm:text-4xl font-bold text-primary text-glow text-center mb-2">
            Registro
          </h1>

          <div className="space-y-2">
            <Label htmlFor="username" className="font-cinzel tracking-wider uppercase text-sm">
              Login
            </Label>
            <Input
              id="username"
              name="username"
              type="text"
              maxLength={32}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {fieldError(
              username.length > 0,
              validation.usernameValid,
              "Mínimo 5 letras, sem números, espaços ou caracteres especiais."
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="font-cinzel tracking-wider uppercase text-sm">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              maxLength={255}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {fieldError(email.length > 0, validation.emailValid, "Email inválido.")}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="font-cinzel tracking-wider uppercase text-sm">
              Senha
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {fieldError(
              password.length > 0,
              validation.passwordValid,
              "Mínimo 8 caracteres, com maiúscula, minúscula e caractere especial."
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password_confirm" className="font-cinzel tracking-wider uppercase text-sm">
              Confirmar senha
            </Label>
            <Input
              id="password_confirm"
              name="password_confirm"
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
            {fieldError(confirm.length > 0, validation.confirmValid, "As senhas não coincidem.")}
          </div>

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              disabled={!validation.allValid}
              aria-label="Criar conta"
              className={`bg-transparent border-0 p-0 transition-transform ${
                validation.allValid
                  ? "cursor-pointer hover:scale-105 animate-[pulse-red-glow_2s_ease-in-out_infinite]"
                  : "cursor-not-allowed grayscale opacity-60"
              }`}
            >
              <img
                src={btnCriarConta}
                alt="Criar conta"
                className="h-[56px] sm:h-[64px] md:h-[72px]"
              />
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Registro;
