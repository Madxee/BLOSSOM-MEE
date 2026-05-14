import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { EMAIL, PHONE_NUMBER, ADDRESS } from "../constants";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Connect with Us</h2>
          <p className="text-gray-600 dark:text-gray-400">We're here to help you style your lifestyle</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <ContactCard 
              icon={Mail} 
              title="Email Us" 
              value={EMAIL} 
              href={`mailto:${EMAIL}`}
            />
            <ContactCard 
              icon={Phone} 
              title="Call / WhatsApp" 
              value={PHONE_NUMBER} 
              href={`https://wa.me/${PHONE_NUMBER.replace(/\+/g, '')}`}
            />
            <ContactCard 
              icon={MapPin} 
              title="Our Hub" 
              value={ADDRESS} 
              href="#"
            />
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass p-10 rounded-[3rem] border border-rose-200"
          >
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest opacity-60 ml-2">Full Name</label>
                <input type="text" className="w-full bg-white/50 dark:bg-slate-900/50 border border-rose-200 rounded-2xl px-6 py-4 outline-none focus:border-rose-500 transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest opacity-60 ml-2">Email Address</label>
                <input type="email" className="w-full bg-white/50 dark:bg-slate-900/50 border border-rose-200 rounded-2xl px-6 py-4 outline-none focus:border-rose-500 transition-colors" placeholder="john@example.com" />
              </div>
              <div className="md:col-span-2 space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest opacity-60 ml-2">Your Message</label>
                <textarea rows={5} className="w-full bg-white/50 dark:bg-slate-900/50 border border-rose-200 rounded-2xl px-6 py-4 outline-none focus:border-rose-500 transition-colors resize-none" placeholder="How can we help you today?"></textarea>
              </div>
              <div className="md:col-span-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-rose-500 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-rose-200 flex items-center justify-center gap-3"
                >
                  Send Message <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 h-[400px] w-full rounded-[3rem] overflow-hidden glass border border-rose-200 relative"
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
            <MapPin className="w-12 h-12 text-rose-500 mb-4 animate-bounce" />
            <h4 className="text-2xl font-serif font-bold mb-2">Our Physical Location</h4>
            <p className="text-slate-500 max-w-md italic tracking-tight">{ADDRESS}</p>
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
              target="_blank"
              className="mt-6 px-8 py-3 bg-rose-500 text-white rounded-full font-bold shadow-lg shadow-rose-200 hover:scale-105 transition-transform"
            >
              Open in Google Maps
            </a>
          </div>
          {/* Subtle grid background to look like a map */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.1] pointer-events-none bg-[radial-gradient(circle,currentColor_1px,transparent_1px)] bg-[size:40px_40px]" />
        </motion.div>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, title, value, href }: any) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? "_blank" : undefined}
      whileHover={{ y: -5 }}
      className="block glass p-8 rounded-[2.5rem] border border-rose-100 hover:border-rose-400 group transition-all"
    >
      <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center mb-6 text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-colors">
        <Icon className="w-6 h-6" />
      </div>
      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 mb-2">{title}</h4>
      <p className="text-lg font-bold break-all text-slate-800 dark:text-white">{value}</p>
    </motion.a>
  );
}
