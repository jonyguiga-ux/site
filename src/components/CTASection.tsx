import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contato" className="hidden md:block py-12 md:py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass glow-border rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
              Pronto para <span className="text-gradient">escalar?</span>
            </h2>
            <p className="text-muted-foreground max-w-md">
              Agende uma análise gratuita do seu negócio e descubra como multiplicar seus resultados.
            </p>
          </div>

          <a
            href="https://wa.me/5511919098614"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-display font-semibold px-8 py-4 rounded-lg hover:brightness-110 transition-all glow-box"
          >
            <ArrowRight className="w-5 h-5" />
            Quero mais clientes
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
