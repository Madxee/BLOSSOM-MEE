import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Loader2, Minimize2, MessageCircle } from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import { cn } from "../lib/utils";
import { PHONE_NUMBER, BUSINESS_NAME } from "../constants";

const SYSTEM_INSTRUCTION = `You are a helpful AI assistant for ${BUSINESS_NAME}. 
We sell gadgets, men/women accessories, kitchen items, and fashion collections.
Your goal is to:
1. Welcome visitors warmly.
2. Answer questions about our products (gadgets, fashion, kitchen, accessories).
3. Recommend categories.
4. Encourage customers to order via WhatsApp.
5. Always provide this WhatsApp number for orders/support: ${PHONE_NUMBER}.
Be elegant, polite, and slightly feminine (luxurious boutique vibe).
Keep responses concise.`;

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: `Hello 👋 Welcome to ${BUSINESS_NAME}. How can I assist you today?` }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        }
      });

      const aiText = response.text || "I'm sorry, I couldn't process that. Kindly chat with us on WhatsApp for better support.";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "For quick orders and support, kindly chat with us on WhatsApp: " + PHONE_NUMBER }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-[350px] sm:w-[400px] h-[500px] glass rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-rose-500/20"
          >
            {/* Header */}
            <div className="p-4 bg-rose-500/10 flex items-center justify-between border-b border-rose-500/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-rose-500" />
                </div>
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-widest">{BUSINESS_NAME} AI</h3>
                  <span className="text-[10px] text-rose-500 animate-pulse uppercase tracking-[0.2em] font-bold">Online</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors">
                <Minimize2 className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.map((m, i) => (
                <div key={i} className={cn("flex", m.role === 'user' ? "justify-end" : "justify-start")}>
                  <div className={cn(
                    "max-w-[80%] p-3 rounded-2xl text-xs shadow-sm",
                    m.role === 'user' 
                      ? "bg-rose-500 text-white rounded-tr-none" 
                      : "bg-white/70 dark:bg-slate-800/70 rounded-tl-none border border-rose-500/10"
                  )}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/70 dark:bg-slate-800/70 p-3 rounded-2xl rounded-tl-none border border-rose-500/10">
                    <Loader2 className="w-4 h-4 animate-spin text-rose-500" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-rose-500/10 bg-white/30 dark:bg-black/30">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about our products..."
                  className="flex-1 bg-white/50 dark:bg-slate-900/50 border border-rose-500/20 rounded-full px-4 py-2 text-xs focus:outline-none focus:border-rose-500 transition-colors"
                />
                <button 
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center hover:bg-rose-600 transition-colors disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-rose-500 text-white shadow-lg flex items-center justify-center hover:shadow-rose-500/30 transition-shadow relative floating"
      >
        <MessageCircle className="w-7 h-7" />
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-slate-900 shadow-sm" />
        )}
      </motion.button>
    </div>
  );
}
