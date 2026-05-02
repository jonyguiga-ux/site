import { ArrowRight } from "lucide-react";

const InlineCTA = () => {
  return (
    <section className="hidden md:block py-8 md:py-12">
      <div className="container flex justify-center">
        <a
          href="https://wa.me/5511919098614"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-display font-semibold px-8 py-4 rounded-lg hover:brightness-110 transition-all glow-box"
        >
          <ArrowRight className="w-5 h-5" />
          Quero mais clientes
        </a>
      </div>
    </section>
  );
};

export default InlineCTA;
