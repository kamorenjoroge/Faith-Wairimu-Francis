"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Enhanced gradient background with animation */}
      <div className="absolute inset-0  from-pink-50 via-rose-50/50 to-pink-100/60" />
      
      {/* Animated decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating hearts in background */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 text-6xl opacity-20"
        >
          💕
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-32 right-16 text-5xl opacity-20"
        >
          🌸
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/3 right-20 text-4xl opacity-20"
        >
          💐
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, 18, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute bottom-40 left-20 text-5xl opacity-20"
        >
          🌷
        </motion.div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Sparkle effect around main heart */}
        <div className="relative inline-block mb-8">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring", 
              duration: 1.2, 
              delay: 0.2,
              bounce: 0.5,
            }}
            className="text-7xl md:text-8xl drop-shadow-lg"
          >
            💕
          </motion.div>
          
          {/* Sparkles around heart */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5 + 1,
                ease: "easeInOut",
              }}
              className="absolute text-2xl"
              style={{
                top: i === 0 ? '-10px' : i === 1 ? '50%' : i === 2 ? '100%' : '50%',
                left: i === 0 ? '50%' : i === 1 ? '-10px' : i === 2 ? '50%' : '110%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              ✨
            </motion.div>
          ))}
        </div>

        {/* Main Heading with staggered animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-4"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="block text-primary/90"
            >
              To the most beautiful teacher
            </motion.span>
            
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="block mt-2 text-primary/90"
            >
              in my life,
            </motion.span>
            
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 1.3,
                type: "spring",
                bounce: 0.3,
              }}
              className="block mt-4 text-gradient text-5xl md:text-6xl lg:text-7xl font-extrabold italic"
            >
              Faith Wairimu Wangai
            </motion.span>
            
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                delay: 1.8,
                duration: 0.8,
                bounce: 0.6,
              }}
              className="inline-block ml-3 animate-float-heart text-5xl md:text-6xl"
            >
              ❤️
            </motion.span>
          </h1>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="mt-8 mb-8 h-px  from-transparent via-pink-300 to-transparent"
        />

        {/* Subtext with background card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="mt-8 inline-block"
        >
          <div className="bg-card/60 backdrop-blur-sm px-8 py-4 rounded-2xl border border-border/50 shadow-lg card-glow">
            <p className="text-lg md:text-xl text-muted-foreground font-medium italic">
              &quot;This page was written in code,
              <br className="hidden md:block" />
              <span className="text-accent font-semibold"> but powered by love</span>.&quot;
            </p>
          </div>
        </motion.div>

        {/* Code snippet decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="mt-10 text-sm md:text-base font-mono text-primary/60"
        >
          <span className="text-accent">const</span> myFeeling ={" "}
          <span className="text-pink-500">&quot;endless love&quot;</span>;
        </motion.div>

        {/* Scroll indicator with better animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 1 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-sm text-primary/70 font-medium"
          >
            Scroll to explore
          </motion.p>
          <motion.div
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-3xl text-primary/80"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 from-background/80 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;