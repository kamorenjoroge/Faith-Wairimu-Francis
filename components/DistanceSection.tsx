"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MapPin, Compass } from "lucide-react";

const DistanceSection: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-rose-50/40 via-pink-50/60 to-rose-50/40" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated path line */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <motion.path
            d="M 0,300 Q 400,100 800,300"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10 5"
            className="text-pink-400"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>

        {/* Floating icons */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 text-pink-300/30 text-6xl"
        >
          ✈️
        </motion.div>

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute top-1/4 right-20 text-rose-300/30 text-5xl"
        >
          💌
        </motion.div>

        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-32 left-16 text-pink-300/30 text-5xl"
        >
          🌍
        </motion.div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2, bounce: 0.6 }}
            className="flex justify-center gap-3 text-5xl md:text-6xl mb-6"
          >
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            >
              🌍
            </motion.span>
            <motion.span
              animate={{ x: [-50, 50], y: [-10, 10] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ✈️
            </motion.span>
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              💌
            </motion.span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Distance Means </span>
            <span className="text-gradient">Nothing</span>
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 w-48 bg-linear-to-r from-pink-400 via-rose-400 to-pink-400 mx-auto rounded-full"
          />
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-linear-to-r from-pink-400/20 via-rose-400/20 to-pink-400/20 rounded-3xl blur-2xl" />
          
          <Card className="relative p-10 md:p-12 shadow-2xl border-2 border-accent/30 bg-card/95 backdrop-blur-md rounded-3xl overflow-hidden">
            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 text-6xl opacity-10 -mt-4 -mr-4">💕</div>
            <div className="absolute bottom-0 left-0 text-6xl opacity-10 -mb-4 -ml-4">💕</div>

            <CardContent className="space-y-8 relative">
              {/* Distance visualization */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-4xl"
                >
                  <MapPin className="w-10 h-10 text-pink-400" />
                </motion.div>
                
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="flex-1 h-0.5 bg-linear-to-r from-pink-400 via-rose-400 to-pink-400 relative origin-left"
                >
                  <motion.div
                    animate={{ x: [0, 200, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-2 left-0"
                  >
                    <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                  </motion.div>
                </motion.div>
                
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="text-4xl"
                >
                  <Compass className="w-10 h-10 text-rose-400" />
                </motion.div>
              </div>

              {/* Quote 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <div className="absolute -left-4 top-0 text-5xl text-accent/20 font-serif">&ldquo;</div>
                <p className="text-lg md:text-xl text-foreground/90 font-medium italic leading-relaxed pl-6">
                  No matter how many miles separate us, my heart always finds its way to you.
                </p>
              </motion.div>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-3 my-6"
              >
                <div className="flex-1 h-px bg-linear-to-r from-transparent via-pink-300 to-transparent" />
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="text-2xl"
                >
                  💫
                </motion.span>
                <div className="flex-1 h-px bg-linear-to-r from-transparent via-pink-300 to-transparent" />
              </motion.div>

              {/* Quote 2 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="relative"
              >
                <div className="absolute -left-4 top-0 text-5xl text-accent/20 font-serif">&ldquo;</div>
                <p className="text-lg md:text-xl text-foreground/90 font-medium italic leading-relaxed pl-6">
                  Every sunrise I see is a promise that we&apos;re under the same sky, sharing the same love.
                </p>
              </motion.div>

              {/* Promise section */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, type: "spring" }}
                className="mt-10 pt-8 border-t-2 border-pink-200/50"
              >
                <div className="bg-linear-to-br from-pink-50 to-rose-50 rounded-2xl p-6 md:p-8 relative overflow-hidden">
                  {/* Decorative hearts */}
                  <div className="absolute top-2 right-2 flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        animate={{ 
                          scale: [1, 1.3, 1],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                        className="text-xl"
                      >
                        💕
                      </motion.span>
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-rose-500 to-pink-500 text-center leading-relaxed">
                    I promise to always love you — today, tomorrow, and forever.
                  </p>

                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-4xl text-center mt-4"
                  >
                    💕
                  </motion.div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-12 flex justify-center gap-4 text-3xl"
        >
          {['🌟', '💖', '✨', '💖', '🌟'].map((emoji, i) => (
            <motion.span
              key={i}
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DistanceSection;