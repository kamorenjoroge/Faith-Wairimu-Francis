"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";

interface Flower {
  emoji: string;
  message: string;
  color: string;
}

const flowers: Flower[] = [
  { emoji: "🌹", message: "Every rose reminds me of your beauty, Faith.", color: "from-red-400 to-pink-400" },
  { emoji: "🌷", message: "You bloom with grace in every season of life.", color: "from-pink-400 to-rose-400" },
  { emoji: "🌸", message: "Your smile is the sweetest blossom I've ever known.", color: "from-pink-300 to-pink-400" },
  { emoji: "🌺", message: "You are rare and precious, just like a perfect flower.", color: "from-rose-400 to-pink-500" },
  { emoji: "💐", message: "A garden of love grows wherever you walk.", color: "from-pink-400 to-purple-400" },
  { emoji: "🌻", message: "You turn toward the light and bring warmth to all.", color: "from-yellow-400 to-orange-400" },
  { emoji: "🪷", message: "In stillness and grace, you are breathtaking.", color: "from-pink-300 to-rose-300" },
  { emoji: "🌼", message: "Your kindness scatters beauty like wildflowers.", color: "from-yellow-300 to-pink-300" },
];

const FlowerGarden: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-pink-50/30 to-background" />
      
      {/* Decorative garden elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 text-6xl opacity-20"
        >
          🦋
        </motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-32 right-16 text-5xl opacity-20"
        >
          🦋
        </motion.div>
        <motion.div
          animate={{
            x: [-20, 20, -20],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 right-20 text-4xl opacity-20"
        >
          ✨
        </motion.div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2, bounce: 0.6 }}
            className="text-6xl mb-4"
          >
            🌿
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">A Garden of </span>
            <span className="text-primary">Love</span>
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 w-40 bg-linear-to-b from-green-300 via-pink-400 to-rose-400 mx-auto rounded-full mb-6"
          />

          <p className="text-lg text-muted-foreground italic font-medium">
            Click each flower to discover a message for you 💝
          </p>
        </motion.div>

        {/* Flower Grid */}
        <div className="relative">
          <div className="grid grid-cols-4 gap-6 md:gap-8 max-w-2xl mx-auto mb-8">
            {flowers.map((flower, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: i * 0.1, 
                  type: "spring",
                  bounce: 0.5,
                }}
                className="relative"
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelected(selected === i ? null : i)}
                  className={`relative text-5xl md:text-6xl p-4 md:p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                    selected === i 
                      ? "bg-linear-to-b " + flower.color + " shadow-2xl scale-110" 
                      : "bg-card/60 backdrop-blur-sm hover:bg-card shadow-lg hover:shadow-xl border-2 border-border/50 hover:border-accent/50"
                  }`}
                >
                  {flower.emoji}
                  
                  {/* Glow effect */}
                  {selected === i && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 rounded-2xl bg-linear-to-b from-pink-400/30 to-rose-400/30 blur-xl -z-10"
                    />
                  )}
                </motion.button>

                {/* Sparkle on hover */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute -top-2 -right-2 text-xl"
                >
                  ✨
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Decorative grass */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-4xl overflow-hidden whitespace-nowrap opacity-30"
          >
            🌿🌱🌿🌱🌿🌱🌿🌱🌿🌱🌿🌱🌿🌱🌿
          </motion.div>
        </div>

        {/* Flower Message Card */}
        <AnimatePresence mode="wait">
          {selected !== null && (
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ type: "spring", bounce: 0.4 }}
              className="mt-12 max-w-xl mx-auto relative"
            >
              <Card className="relative rounded-3xl p-8 shadow-2xl border-2 border-accent/30 bg-card/90 backdrop-blur-md card-glow overflow-hidden">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-linear-to-b ${flowers[selected].color} opacity-10`} />
                
                {/* Close button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <X className="w-5 h-5 text-primary" />
                </motion.button>

                {/* Flower emoji */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", delay: 0.1 }}
                  className="text-6xl mb-6"
                >
                  {flowers[selected].emoji}
                </motion.div>

                <CardContent className="relative text-foreground/90 font-medium text-lg md:text-xl leading-relaxed">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-accent text-4xl font-serif">&ldquo;</span>
                    <span className="italic">{flowers[selected].message}</span>
                    <span className="text-accent text-4xl font-serif">&rdquo;</span>
                  </motion.div>
                </CardContent>

                {/* Decorative hearts */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex justify-center gap-2 mt-6"
                >
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                      className="text-2xl"
                    >
                      💕
                    </motion.span>
                  ))}
                </motion.div>
              </Card>

              {/* Floating sparkles around card */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    y: [-20, -40],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  className="absolute text-2xl pointer-events-none"
                  style={{
                    left: `${15 + i * 15}%`,
                    top: i % 2 === 0 ? '-5%' : '105%',
                  }}
                >
                  ✨
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FlowerGarden;