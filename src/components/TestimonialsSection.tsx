import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "CEO, TechStore",
    text: "Em 3 meses triplicamos nosso faturamento com e-commerce. O ROAS passou de 2x para 6x. Resultado impressionante.",
  },
  {
    name: "Ana Silva",
    role: "Dona, Studio Beleza",
    text: "Antes eu gastava dinheiro sem saber se voltava. Agora cada real investido em tráfego traz retorno claro e mensurável.",
  },
  {
    name: "Roberto Lima",
    role: "Diretor, Construtora Horizonte",
    text: "Conseguimos reduzir o custo por lead em 60% e aumentar a qualidade dos contatos. Vendas nunca estiveram tão altas.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm font-semibold tracking-wider uppercase">Depoimentos</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            O que dizem os <span className="text-gradient">clientes</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 mb-6 leading-relaxed">"{t.text}"</p>
              <div>
                <div className="font-display font-semibold text-sm">{t.name}</div>
                <div className="text-muted-foreground text-xs">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
