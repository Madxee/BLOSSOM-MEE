import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { CATEGORIES } from "../constants";

export default function Categories() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Shop by Category</h2>
          <p className="text-gray-600 dark:text-gray-400">Explore our curated collections of premium items</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {CATEGORIES.map((cat, i) => {
            const Icon = (Icons as any)[cat.icon];
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-[2rem] text-center cursor-pointer border border-rose-100 hover:border-rose-400 group transition-all shadow-sm"
              >
                <div className="w-16 h-16 rounded-2xl bg-rose-50 dark:bg-slate-800 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <Icon className="w-8 h-8 text-rose-500" />
                </div>
                <h3 className="font-bold text-sm mb-2">{cat.name}</h3>
                <p className="text-[10px] opacity-60 uppercase tracking-tighter">{cat.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
