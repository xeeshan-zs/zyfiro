import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
    return (
        <motion.a
            href="https://wa.me/923109233844"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center group"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40" />
            <MessageCircle size={28} fill="white" className="relative z-10" />
            <span className="sr-only">Chat on WhatsApp</span>
        </motion.a>
    );
}
