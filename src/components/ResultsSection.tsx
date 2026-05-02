import { motion } from "framer-motion";

const stats = [
  { value: "R$3.4M+", label: "Em vendas geradas para clientes" },
  { value: "R$1.8M+", label: "Investidos em anúncios" },
  { value: "5.638+", label: "Vendas realizadas na internet" },
];

const ResultsSection = () => {
  return (
    <section id="resultados" className="py-12 md:py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm font-semibold tracking-wider uppercase">Resultados</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Números que <span className="text-gradient">falam por si</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-8 text-center glow-border"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
