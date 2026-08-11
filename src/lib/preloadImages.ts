import heroBg from "@/assets/hero-wide.png";
import cloudTile from "@/assets/cloud-tile.png";
import chaosAgeLogo from "@/assets/chaos_age.png";
import btnJogar from "@/assets/btn_jogar.png";
import btnDownload from "@/assets/btn_download.png";
import btnDiscord from "@/assets/btn_discord.png";
import iconPvp from "@/assets/icon_pvp.png";
import iconEventos from "@/assets/icon_eventos.png";
import iconSemLimites from "@/assets/icon_sem_limites.png";
import iconPvpRed from "@/assets/icon_pvp_red.png";
import iconEventosRed from "@/assets/icon_eventos_red.png";
import iconSemLimitesRed from "@/assets/icon_sem_limites_red.png";
import registroBg from "@/assets/registro-bg.png";
import btnCriarConta from "@/assets/criarconta.png";

/** Imagens críticas (above the fold) — preload com alta prioridade */
const critical = [heroBg, chaosAgeLogo, btnJogar];

/** Demais imagens — pré-carregadas em segundo plano após o first paint */
const deferred = [
  btnDownload,
  btnDiscord,
  iconPvp,
  iconEventos,
  iconSemLimites,
  iconPvpRed,
  iconEventosRed,
  iconSemLimitesRed,
  registroBg,
  btnCriarConta,
];

function addPreloadLink(href: string, priority: "high" | "low") {
  if (document.head.querySelector(`link[rel="preload"][href="${href}"]`)) return;
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = href;
  link.setAttribute("fetchpriority", priority);
  document.head.appendChild(link);
}

export function preloadImages() {
  critical.forEach((src) => addPreloadLink(src, "high"));

  const loadDeferred = () => deferred.forEach((src) => addPreloadLink(src, "low"));

  if (typeof window.requestIdleCallback === "function") {
    window.requestIdleCallback(loadDeferred, { timeout: 3000 });
  } else {
    window.setTimeout(loadDeferred, 1200);
  }
}

export { heroBg, registroBg };
