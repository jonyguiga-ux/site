import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="md:fixed top-0 left-0 right-0 z-50 glass">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="OneAds" className="h-8 w-auto" />
          <span className="font-display font-bold text-xl text-gradient">OneAds</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="bg-primary text-primary-foreground font-display font-semibold text-sm px-5 py-2.5 rounded-lg hover:brightness-110 transition-all"
          >
            Começar agora
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-border">
          <div className="container py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="bg-primary text-primary-foreground font-display font-semibold text-sm px-5 py-2.5 rounded-lg text-center"
            >
              Começar agora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
