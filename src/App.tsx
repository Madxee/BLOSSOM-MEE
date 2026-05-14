/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import WhyChooseUs from "./components/WhyChooseUs";
import CEOProfile from "./components/CEOProfile";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import Logo from "./components/Logo";

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[100] bg-white dark:bg-zinc-950 flex flex-col items-center justify-center"
    >
      <Logo className="scale-150 mb-8" />
      <div className="w-48 h-1 bg-rose-100 dark:bg-rose-900/20 rounded-full overflow-hidden relative">
        <motion.div 
          animate={{ x: [-200, 200] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 w-1/2 bg-rose-500 rounded-full" 
        />
      </div>
      <p className="mt-4 text-[10px] uppercase font-bold tracking-[0.3em] text-rose-500/40 animate-pulse">
        Crafting Luxury Experience
      </p>
    </motion.div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen selection:bg-brand-accent/30">
      <div className="mesh-bg" />
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <ScrollProgress />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Categories />
        <FeaturedProducts />
        <WhyChooseUs />
        <CEOProfile />
        <Contact />
      </main>

      <Footer />
      
      {/* Floating Elements */}
      <ChatBot />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
