"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

const FinalSection: React.FC = () => {
  return (
    <section className="relative py-28 md:py-36 px-4 overflow-hidden">
      {/* Background with romantic gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-pink-50/50 to-rose-100/30" />
      
      {/* Decorative floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            className="absolute text-4xl opacity-20"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
          >
            {['💕', '🌹', '💖', '✨'][i % 4]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header with animated envelope */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0, rotateY: -180 }}
            whileInView={{ scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring", 
              delay: 0.2, 
              bounce: 0.6,
              duration: 1
            }}
            className="inline-block mb-6 relative"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-7xl md:text-8xl"
            >
              💌
            </motion.div>
            
            {/* Hearts floating from envelope */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  y: [-10, -40],
                  x: [(i - 1) * 10, (i - 1) * 20],
                  opacity: [1, 0],
                  scale: [0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeOut"
                }}
                className="absolute top-0 left-1/2 -translate-x-1/2 text-2xl"
              >
                💕
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-primary">Forever </span>
              <span className="text-gradient">&amp; Always</span>
            </h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="h-1 w-40 bg-linear-to-r from-pink-400 via-rose-400 to-pink-400 mx-auto rounded-full"
            />
          </motion.div>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute -inset-2 bg-linear-to-r from-pink-400/20 via-rose-400/30 to-pink-400/20 rounded-3xl blur-3xl" />
          
          <Card className="relative bg-card/95 backdrop-blur-md shadow-2xl border-2 border-accent/30 rounded-3xl overflow-hidden">
            {/* Decorative top border */}
            <div className="h-2 bg-linear-to-r from-pink-400 via-rose-400 to-pink-400" />
            
            {/* Decorative pattern overlay */}
            <div className="absolute inset-0 opacity-5">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />
            </div>

            <CardContent className="relative p-8 md:p-12 space-y-8">
              {/* Quote with decorative elements */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="relative"
              >
                <div className="absolute -left-4 -top-2 text-6xl text-accent/20 font-serif">&ldquo;</div>
                <p className="text-lg md:text-xl text-foreground/90 font-medium leading-relaxed pl-6">
                  In a world full of temporary things, you are my forever. Thank you for being you,
                  <span className="text-gradient font-bold"> Faith Wairimu Wangai</span>. Thank you for every lesson, every smile, every moment.
                  I carry your love with me always.
                </p>
                <div className="absolute -right-4 -bottom-2 text-6xl text-accent/20 font-serif">&rdquo;</div>
              </motion.div>

              {/* Decorative divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="flex items-center gap-4 py-6"
              >
                <div className="flex-1 h-px bg-linear-to-r from-transparent via-pink-300 to-transparent" />
                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity
                  }}
                >
                  <Heart className="w-6 h-6 text-rose-400 fill-rose-400" />
                </motion.div>
                <div className="flex-1 h-px bg-linear-to-r from-transparent via-pink-300 to-transparent" />
              </motion.div>

              {/* Signature section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 }}
                className="bg-linear-to-br from-pink-50 to-rose-50 rounded-2xl p-6 md:p-8 relative overflow-hidden"
              >
                {/* Decorative corner hearts */}
                <div className="absolute top-2 right-2 text-4xl opacity-20">💕</div>
                <div className="absolute bottom-2 left-2 text-4xl opacity-20">💕</div>

                <p className="text-muted-foreground font-medium text-base mb-3 italic">
                  With all my love,
                </p>
                <motion.p
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.3, type: "spring" }}
                  className="text-3xl md:text-4xl font-bold"
                >
                  <span className="text-gradient">Francis</span>{" "}
                  <motion.span
                    animate={{ 
                      scale: [1, 1.3, 1],
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity
                    }}
                    className="inline-block mx-2"
                  >
                    ❤️
                  </motion.span>{" "}
                  <span className="text-gradient">K Njoroge</span>
                </motion.p>

                {/* Date */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.5 }}
                  className="text-muted-foreground text-sm mt-4 italic"
                >
                  Valentine&apos;s Day 2026
                </motion.p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Bottom decorative elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4 }}
          className="mt-12 flex justify-center items-center gap-4"
        >
          {['🌹', '💕', '✨', '💕', '🌹'].map((emoji, i) => (
            <motion.span
              key={i}
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, i % 2 === 0 ? 10 : -10, 0]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
              className="text-4xl md:text-5xl"
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>

        {/* Final message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.8 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground italic text-sm md:text-base">
            Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block text-rose-500"
            >
              ❤️
            </motion.span>
            {" "}and code
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalSection;