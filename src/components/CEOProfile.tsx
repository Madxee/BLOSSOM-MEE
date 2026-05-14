import { motion } from "motion/react";
import { Instagram, Twitter, Facebook, Linkedin, Camera } from "lucide-react";
import { CEO_NAME } from "../constants";

export default function CEOProfile() {
  return (
    <section id="ceo" className="py-24 bg-zinc-950 text-white overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <span className="text-rose-300 font-semibold uppercase tracking-[0.2em] text-[10px] mb-4 inline-block">Founder & Visionary</span>
            <h2 className="text-5xl font-serif font-bold mb-8 italic">Letter from our <span className="text-rose-400">CEO</span></h2>
            <div className="space-y-6 text-slate-300 text-sm leading-relaxed mb-10 italic">
              <p>
                "Blossom Mee is born from a passion for quality and elegance. We bring you products that add value to your lifestyle."
              </p>
              <p>
                "Our journey started with a simple belief: luxury and quality should be accessible to everyone who appreciates the finer things in life."
              </p>
            </div>
            
            <div className="mb-10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-rose-400 overflow-hidden bg-slate-700">
                <img 
                   src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                   alt="CEO Amina Oyiza"
                   className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">{CEO_NAME}</h4>
                <p className="text-[10px] text-rose-300 uppercase font-semibold">Founder & CEO</p>
              </div>
            </div>

            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: "#ff8fa3" }}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-brand-accent/50 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Glowing animated border */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-accent via-brand-gold to-brand-accent rounded-[3rem] blur opacity-30 group-hover:opacity-60 transition duration-1000 animate-gradient-x" />
              
              <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] rounded-[3rem] overflow-hidden bg-zinc-900 border border-white/10">
                {/* Placeholder for CEO Image */}
                <div className="w-full h-full flex flex-col items-center justify-center p-12 text-center">
                  <div className="w-24 h-24 rounded-full bg-brand-accent/10 flex items-center justify-center mb-6">
                    <Camera className="w-10 h-10 text-brand-accent/40" />
                  </div>
                  <p className="text-zinc-500 text-sm italic font-serif">CEO Portrait Image <br /> to be uploaded</p>
                  <img 
                   src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                   alt="CEO Amina Oyiza"
                   className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-gold/20 rounded-full blur-2xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-accent/20 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
