"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, Sparkles, Heart } from "lucide-react";

const hearts = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 12 + Math.random() * 24,
  delay: Math.random() * 0.3,
  emoji: ['❤️', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 5)],
}));

const sparkles = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 0.5,
}));

const HiddenSurprise: React.FC = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-10 text-pink-200/30 text-7xl"
        >
          🎁
        </motion.div>
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-10 text-rose-200/30 text-6xl"
        >
          💝
        </motion.div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2, bounce: 0.7 }}
            className="inline-block mb-4"
          >
            <div className="relative">
              <Gift className="w-16 h-16 text-accent" />
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity
                }}
                className="absolute -top-2 -right-2"
              >
                <Sparkles className="w-6 h-6 text-pink-400" />
              </motion.div>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">One More </span>
            <span className="text-gradient">Thing...</span>
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 w-32 bg-linear-to-r from-pink-400 via-rose-400 to-pink-400 mx-auto rounded-full"
          />
        </motion.div>

        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.div
              key="button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-center"
            >
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Button
                  size="lg"
                  className="relative group text-lg px-8 py-6 bg-linear-to-r from-pink-400 via-rose-400 to-pink-400 hover:from-pink-500 hover:via-rose-500 hover:to-pink-500 text-white font-bold rounded-2xl shadow-2xl overflow-hidden"
                  onClick={() => setRevealed(true)}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                  />
                  
                  {/* Button content */}
                  <span className="relative flex items-center gap-3">
                    <Heart className="w-6 h-6" />
                    Click for something special
                    <Gift className="w-6 h-6" />
                  </span>

                  {/* Glow effect */}
                  <div className="absolute inset-0 -z-10 bg-linear-to-r from-pink-400 via-rose-400 to-pink-400 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                </Button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-muted-foreground italic flex items-center justify-center gap-2"
              >
                <motion.span
                  animate={{ rotate: [0, 20, -20, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  👆
                </motion.span>
                I promise it&apos;s worth it
                <motion.span
                  animate={{ rotate: [0, -20, 20, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  💝
                </motion.span>
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 0.8, bounce: 0.4 }}
              className="relative"
            >
              {/* Heart burst animation */}
              <div className="absolute inset-0 pointer-events-none">
                {hearts.map((heart) => (
                  <motion.div
                    key={heart.id}
                    initial={{ opacity: 0, scale: 0, x: '0%', y: '0%' }}
                    animate={{
                      opacity: [0, 1, 1, 0],
                      scale: [0, 1.2, 1, 0.8],
                      x: `${(heart.x - 50) * 5}%`,
                      y: `${(heart.y - 50) * 5}%`,
                      rotate: [0, 360],
                    }}
                    transition={{ 
                      duration: 2, 
                      delay: heart.delay,
                      ease: "easeOut"
                    }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ fontSize: `${heart.size}px` }}
                  >
                    {heart.emoji}
                  </motion.div>
                ))}

                {/* Sparkle burst */}
                {sparkles.map((sparkle) => (
                  <motion.div
                    key={sparkle.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                      x: `${(sparkle.x - 50) * 4}%`,
                      y: `${(sparkle.y - 50) * 4}%`,
                    }}
                    transition={{ 
                      duration: 1.5, 
                      delay: sparkle.delay + 0.3
                    }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl"
                  >
                    ✨
                  </motion.div>
                ))}
              </div>

              {/* Main reveal card */}
              <motion.div
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="relative"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-linear-to-r from-pink-400/30 via-rose-400/30 to-pink-400/30 rounded-3xl blur-2xl" />
                
                <Card className="relative shadow-2xl border-2 border-accent/40 bg-card/95 backdrop-blur-md rounded-3xl overflow-hidden">
                  {/* Decorative header */}
                  <div className="bg-linear-to-r from-pink-400 via-rose-400 to-pink-400 p-1">
                    <div className="bg-card rounded-t-3xl pt-6 pb-4">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 360]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity
                        }}
                        className="text-6xl text-center"
                      >
                        💖
                      </motion.div>
                    </div>
                  </div>

                  <CardContent className="p-8 md:p-10 space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-medium">
                        <span className="text-accent text-5xl font-serif float-left mr-2 leading-none">&ldquo;</span>
                        Faith, you are the most incredible woman I&apos;ve ever known. Your warmth, your
                        laughter, your gentle spirit — they fill my life with a joy I never knew was
                        possible. Every day I thank God for placing you in my world.
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1.2 }}
                      className="flex items-center gap-3 py-4"
                    >
                      <div className="flex-1 h-px bg-linear-to-r from-transparent via-pink-300 to-transparent" />
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          animate={{ 
                            scale: [1, 1.3, 1],
                            rotate: [0, 180, 360]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3
                          }}
                          className="text-2xl"
                        >
                          💫
                        </motion.span>
                      ))}
                      <div className="flex-1 h-px bg-linear-to-r from-transparent via-pink-300 to-transparent" />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.5, type: "spring" }}
                      className="bg-linear-to-br from-pink-50 to-rose-50 rounded-2xl p-6 md:p-8 relative overflow-hidden"
                    >
                      {/* Animated background */}
                      <motion.div
                        animate={{
                          backgroundPosition: ['0% 0%', '100% 100%'],
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                        className="absolute inset-0 opacity-30"
                        style={{
                          backgroundImage: 'radial-gradient(circle, rgba(244, 114, 182, 0.3) 1px, transparent 1px)',
                          backgroundSize: '20px 20px',
                        }}
                      />

                      <p className="relative text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-rose-500 to-pink-500 text-center leading-relaxed">
                        You are my answered prayer. I love you endlessly.
                      </p>

                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                        }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity
                        }}
                        className="text-5xl text-center mt-4"
                      >
                        🌹
                      </motion.div>
                    </motion.div>

                    {/* Signature */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2 }}
                      className="text-right text-muted-foreground italic text-lg pt-4"
                    >
                      <p>Forever yours,</p>
                      <p className="text-accent font-semibold text-xl mt-1">Your Programmer 💕</p>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HiddenSurprise;