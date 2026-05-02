import { motion } from "framer-motion";
import { Target, BarChart3, Megaphone, Search, LineChart, Users } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Meta Ads",
    description: "Campanhas estratégicas no Facebook e Instagram para alcançar seu público ideal com precisão.",
  },
  {
    icon: Search,
    title: "Google Ads",
    description: "Apareça no topo do Google quando seus clientes estão buscando pelo seu serviço ou produto.",
  },
  {
    icon: Target,
    title: "TikTok Ads",
    description: "Alcance novas audiências com conteúdo criativo e campanhas otimizadas no TikTok.",
  },
  {
    icon: BarChart3,
    title: "Análise de Dados",
    description: "Relatórios detalhados e dashboards em tempo real para tomada de decisão estratégica.",
  },
  {
    icon: LineChart,
    title: "Otimização de Conversão",
    description: "Testes A/B, páginas otimizadas e funis de venda que maximizam seu retorno.",
  },
  {
    icon: Users,
    title: "Remarketing Inteligente",
    description: "Recupere visitantes que não converteram com campanhas personalizadas de retargeting.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="pt-0 pb-2 md:py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm font-semibold tracking-wider uppercase">Serviços</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            Tudo que seu negócio <span className="text-gradient">precisa para crescer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estratégias completas de tráfego pago, da criação à otimização contínua.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover:glow-border transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
