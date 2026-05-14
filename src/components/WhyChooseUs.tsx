import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { FEATURES } from "../constants";

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 dark:text-gray-400">We set the standard for quality and trust</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {FEATURES.map((feature, i) => {
            const Icon = (Icons as any)[feature.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-6 p-6 rounded-3xl hover:bg-white/40 dark:hover:bg-zinc-800/40 transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-rose-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-rose-500 group-hover:text-white transition-all duration-500">
                  <Icon className="w-7 h-7 text-rose-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
