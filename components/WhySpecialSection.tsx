"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface Message {
  emoji: string;
  title: string;
  text: string;
}

const messages: Message[] = [
  { emoji: "📚", title: "The Teacher", text: "You shape minds and touch hearts every single day. Your dedication inspires me endlessly." },
  { emoji: "✨", title: "The Inspiration", text: "Your passion for life and learning lights up every room you walk into." },
  { emoji: "🌻", title: "The Blessing", text: "God knew exactly what He was doing when He placed you in my life." },
  { emoji: "💛", title: "The Kindness", text: "Your gentle heart sees beauty in everyone. That's what makes you extraordinary." },
  { emoji: "🌟", title: "The Strength", text: "You carry grace under pressure and turn every challenge into a lesson of love." },
  { emoji: "🕊️", title: "The Peace", text: "Just hearing your voice calms my soul. You are my safe place." },
];

const WhySpecialSection: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden gradient-hero">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-pink-50/50 via-rose-50/30 to-pink-50/50" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-20 -right-20 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-rose-200/15 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Heading */}
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
            transition={{ type: "spring", delay: 0.2, bounce: 0.5 }}
            className="text-6xl mb-4"
          >
            💝
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Why You Are </span>
            <span className="text-primary">Special</span>
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 w-32 bg-linear-to-b from-pink-300 via-rose-400 to-pink-300 mx-auto rounded-full mb-6"
          />

          <p className="text-lg text-muted-foreground italic font-medium">
            Let me count the ways...
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.15,
                type: "spring",
                bounce: 0.3,
              }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="group relative border-2 border-border/50 shadow-lg hover:shadow-2xl hover:border-accent/50 transition-all duration-300 rounded-2xl overflow-hidden bg-card/80 backdrop-blur-sm card-glow h-full">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-linear-to-b from-pink-500/0 via-rose-500/0 to-pink-500/0 group-hover:from-pink-500/5 group-hover:via-rose-500/5 group-hover:to-pink-500/5 transition-all duration-300" />
                  
                  <CardHeader className="relative pb-3">
                    <div className="flex items-start gap-4">
                      <motion.span 
                        className="text-5xl"
                        whileHover={{ 
                          scale: 1.2,
                          rotate: [0, -10, 10, -10, 0],
                          transition: { duration: 0.5 }
                        }}
                      >
                        {msg.emoji}
                      </motion.span>
                      <div>
                        <h3 className="font-bold text-xl text-primary group-hover:text-accent transition-colors duration-300">
                          {msg.title}
                        </h3>
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.15 + 0.3 }}
                          className="h-0.5 bg-linear-to-b from-pink-400 to-rose-400 mt-2 origin-left rounded-full"
                        />
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative text-base text-muted-foreground leading-relaxed pt-2">
                    {msg.text}
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 text-accent text-2xl">
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              💕
            </motion.span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
            >
              💕
            </motion.span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
            >
              💕
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySpecialSection;