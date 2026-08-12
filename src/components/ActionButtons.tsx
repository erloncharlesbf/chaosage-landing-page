import btnDownload from "@/assets/btn_download.png";
import btnDiscord from "@/assets/btn_discord.png";

const ActionButtons = () => {
  return (
    <section id="download" className="py-24 px-4">
      <div
        className="mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center"
        style={{ maxWidth: "var(--content-max)", maxInlineSize: "640px" }}
      >
        <a
          href="#"
          className="transition-all duration-300 hover:scale-105 hover:[filter:drop-shadow(0_0_14px_hsl(35_70%_45%/0.65))_drop-shadow(0_0_28px_hsl(35_70%_45%/0.35))]"
        >
          <img src={btnDownload} alt="Download Client" loading="lazy" decoding="async" className="h-[56px] sm:h-[64px] md:h-[72px]" />
        </a>
        <a
          href="https://discord.gg/GGuNsf8G"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:scale-105 hover:[filter:drop-shadow(0_0_14px_hsl(228_70%_55%/0.65))_drop-shadow(0_0_28px_hsl(228_70%_55%/0.35))]"
        >
          <img src={btnDiscord} alt="Entre no Discord" loading="lazy" decoding="async" className="h-[56px] sm:h-[64px] md:h-[72px]" />
        </a>
      </div>
    </section>
  );
};

export default ActionButtons;
