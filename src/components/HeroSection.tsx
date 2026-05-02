import { DollarSign, ShoppingCart, BarChart3 } from "lucide-react";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import fotoPessoal from "@/assets/foto-pessoal.jpg";

const HeroSection = () => {
  return (
    <HeroGeometric
      badge="Especialista em Tráfego Pago"
      title1="Seu concorrente já"
      title2="rouba seus clientes"
      description="Seus clientes estão comprando do concorrente que investe em tráfego pago."
    >

      {/* Photo + Stats */}
      <div className="mt-12 flex flex-col items-center gap-8">
        <div className="relative">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/40 to-primary/10 blur-lg" />
          <img
            src={fotoPessoal}
            alt="Gestor de Tráfego"
            className="relative w-40 h-40 md:w-48 md:h-48 object-cover rounded-2xl glow-border"
          />
        </div>

        <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-lg">
          {[
            { icon: DollarSign, label: "Em vendas geradas", value: "R$3.4M+" },
            { icon: BarChart3, label: "Investidos em anúncios", value: "R$1.8M+" },
            { icon: ShoppingCart, label: "Vendas na internet", value: "5.638+" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
              <div className="font-display text-lg md:text-xl font-bold">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </HeroGeometric>
  );
};

export default HeroSection;
