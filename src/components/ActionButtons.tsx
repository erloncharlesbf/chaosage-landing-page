import { Download } from "lucide-react";

const ActionButtons = () => {
  return (
    <section id="download" className="pb-16 px-4">
      <div
        className="mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4"
        style={{ maxWidth: "var(--content-max)", maxInlineSize: "640px" }}
      >
        <a href="#" className="btn-download justify-center">
          <Download size={20} />
          DOWNLOAD CLIENT
        </a>
        <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer" className="btn-discord justify-center">
          <svg width="20" height="16" viewBox="0 0 71 55" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M60.1 4.9A58.5 58.5 0 0045.4.2a.2.2 0 00-.2.1 40.7 40.7 0 00-1.8 3.7 54 54 0 00-16.2 0A37.3 37.3 0 0025.4.3a.2.2 0 00-.2-.1A58.4 58.4 0 0010.5 5a.2.2 0 00-.1 0A59.7 59.7 0 00.4 45.2a.3.3 0 000 .2A58.8 58.8 0 0018.1 55a.2.2 0 00.3-.1 42 42 0 003.6-5.9.2.2 0 00-.1-.3 38.8 38.8 0 01-5.5-2.6.2.2 0 01 0-.4c.4-.3.7-.6 1.1-.9a.2.2 0 01.2 0 42 42 0 0035.6 0 .2.2 0 01.2 0l1.1.9a.2.2 0 010 .4 36.4 36.4 0 01-5.5 2.6.2.2 0 00-.1.3 47.2 47.2 0 003.6 5.9.2.2 0 00.3.1A58.6 58.6 0 0070.6 45.4a.2.2 0 000-.2A59.2 59.2 0 0060.1 5a.2.2 0 000 0zM23.7 37.1c-3.5 0-6.4-3.2-6.4-7.1s2.8-7.1 6.4-7.1 6.5 3.2 6.4 7.1c0 3.9-2.8 7.1-6.4 7.1zm23.6 0c-3.5 0-6.4-3.2-6.4-7.1s2.8-7.1 6.4-7.1 6.5 3.2 6.4 7.1c0 3.9-2.8 7.1-6.4 7.1z"/>
          </svg>
          ENTRE NO DISCORD
        </a>
      </div>
    </section>
  );
};

export default ActionButtons;
