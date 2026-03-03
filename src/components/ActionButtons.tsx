import btnDownload from "@/assets/btn_download.png";
import btnDiscord from "@/assets/btn_discord.png";

const ActionButtons = () => {
  return (
    <section id="download" className="py-24 px-4">
      <div
        className="mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center"
        style={{ maxWidth: "var(--content-max)", maxInlineSize: "640px" }}
      >
        <a href="#" className="hover:scale-105 transition-transform">
          <img src={btnDownload} alt="Download Client" className="h-[56px] sm:h-[64px] md:h-[72px]" />
        </a>
        <a href="https://discord.gg/GGuNsf8G" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
          <img src={btnDiscord} alt="Entre no Discord" className="h-[56px] sm:h-[64px] md:h-[72px]" />
        </a>
      </div>
    </section>
  );
};

export default ActionButtons;
