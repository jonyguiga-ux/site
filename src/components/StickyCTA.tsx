import { ArrowRight } from "lucide-react";

const StickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3 bg-background/80 backdrop-blur-lg border-t border-border/50">
      <a
        href="https://wa.me/5511919098614"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground font-display font-semibold py-3.5 rounded-lg hover:brightness-110 transition-all"
      >
        <ArrowRight className="w-5 h-5" />
        Quero mais clientes
      </a>
    </div>
  );
};

export default StickyCTA;
