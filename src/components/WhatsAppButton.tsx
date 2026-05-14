import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { PHONE_NUMBER } from "../constants";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${PHONE_NUMBER.replace(/\+/g, '')}`}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-[#25D366]/40 transition-shadow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </motion.a>
  );
}
