import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const STATS = [
  { label: "Happy Customers", value: "10k+", icon: "Users" },
  { label: "Products Available", value: "500+", icon: "ShoppingBag" },
  { label: "Fast Delivery", value: "24/7", icon: "Truck" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white/30 dark:bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1549463591-147c211183e7?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Warehouse" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-brand-accent/10 mix-blend-overlay rounded-[3rem]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-rose-500 font-bold uppercase tracking-widest text-xs mb-4 inline-block">Since 2020</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 italic">Excellence in <br /> Every Detail</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-lg">
              At BLOSSOM MEE, we deal on all kinds of quality stuff like gadgets, men/women accessories, kitchen items and more. Our philosophy is simple: Luxury quality at affordable pricing.
            </p>
            
            <ul className="space-y-4 mb-12">
              {["Trusted quality products exclusively", "Affordable pricing for premium feel", "Unmatched customer satisfaction"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-rose-400" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-3 gap-8">
              {STATS.map((stat, i) => (
                <div key={i} className="text-center">
                  <motion.p 
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    className="text-3xl font-bold font-serif text-rose-500 mb-1"
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
