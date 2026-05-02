import { Instagram } from "lucide-react";

const Footer = () => (
  <footer className="py-3 md:py-4">
    <div className="container flex items-center justify-center gap-3">
      <span className="text-xs text-muted-foreground/40">© {new Date().getFullYear()} OneAds</span>
      <a
        href="https://www.instagram.com/eujoaoguiga/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground/40 hover:text-muted-foreground transition-colors"
      >
        <Instagram className="w-3.5 h-3.5" />
      </a>
    </div>
  </footer>
);

export default Footer;
