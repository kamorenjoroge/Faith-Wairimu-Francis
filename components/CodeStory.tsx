"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const codeLines: string[] = [
  "const love = {",
  '  name: "Faith Wairimu Wangai",',
  '  profession: "Teacher",',
  '  smile: "Healing",',
  '  beauty: "Endless",',
  '  importance: "My Everything",',
  '  distance: "Can never separate us",',
  '  promise: "Forever and always"',
  "};",
  "",
  "// Every day with you",
  "while (true) {",
  "  love.growsStronger();",
  "  myHeart.beatsForYou();",
  "}",
];

const CodeStory: React.FC = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let line = 0;
          const interval = setInterval(() => {
            line++;
            setVisibleLines(line);
            if (line >= codeLines.length) clearInterval(interval);
          }, 350);
        }
      },
      { threshold: 0.3 }
    );

    const el = document.getElementById("code-section");
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const getLineColor = (line: string) => {
    if (line.includes("const") || line.includes("while") || line.includes("true")) {
      return "text-purple-400";
    }
    if (line.includes('"')) {
      return "text-pink-400";
    }
    if (line.includes("//")) {
      return "text-green-400 italic";
    }
    if (line.includes("love.") || line.includes("myHeart.")) {
      return "text-blue-400";
    }
    if (line.includes("growsStronger") || line.includes("beatsForYou")) {
      return "text-yellow-400";
    }
    return "text-foreground";
  };

  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden gradient-hero">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Decorative code symbols floating */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-10 text-6xl font-mono text-primary"
        >
          {'{ }'}
        </motion.div>
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [360, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-20 text-5xl font-mono text-accent"
        >
          {'< />'}
        </motion.div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute top-1/2 right-10 text-7xl font-mono text-primary"
        >
          =&gt;
        </motion.div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2, bounce: 0.6 }}
            className="text-6xl mb-4"
          >
            💻
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Our Story </span>
            <span className="text-primary">in Code</span>
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 w-32 bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 mx-auto rounded-full mb-6"
          />

          <p className="text-lg text-muted-foreground italic font-medium">
            When a programmer falls in love... 💝
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-linear-to-r from-pink-400/20 via-purple-400/20 to-blue-400/20 rounded-2xl blur-xl" />
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-border/50 bg-slate-900">
            {/* Window bar */}
            <div className="bg-slate-800 px-5 py-3 flex items-center gap-2 border-b border-slate-700">
              <motion.div 
                whileHover={{ scale: 1.2 }}
                className="w-3 h-3 rounded-full bg-red-400 cursor-pointer"
              />
              <motion.div 
                whileHover={{ scale: 1.2 }}
                className="w-3 h-3 rounded-full bg-yellow-400 cursor-pointer"
              />
              <motion.div 
                whileHover={{ scale: 1.2 }}
                className="w-3 h-3 rounded-full bg-green-400 cursor-pointer"
              />
              <span className="ml-4 text-sm text-slate-400 font-mono flex items-center gap-2">
                <span>💕</span>
                love.js
              </span>
            </div>

            {/* Code content */}
            <div className="p-6 md:p-8 font-mono text-sm md:text-base leading-loose bg-slate-900">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    i < visibleLines
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.3 }}
                  className="group hover:bg-slate-800/50 -mx-2 px-2 py-0.5 rounded transition-colors"
                >
                  <span className="text-slate-600 mr-4 select-none inline-block w-6 text-right">
                    {i + 1}
                  </span>
                  <span className={getLineColor(line)}>
                    {line}
                  </span>
                  {i < visibleLines && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 0.5 }}
                      className="text-pink-400"
                    >
                      
                    </motion.span>
                  )}
                </motion.div>
              ))}

              {visibleLines >= codeLines.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 flex items-center gap-2"
                >
                  <span className="text-slate-600 mr-4 select-none inline-block w-6 text-right">
                    {codeLines.length + 1}
                  </span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-2 h-5 bg-pink-400 inline-block"
                  />
                </motion.div>
              )}
            </div>

            {/* Bottom terminal line */}
            <div className="bg-slate-800 px-5 py-2 border-t border-slate-700 text-xs font-mono text-slate-400 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Running...
              </span>
              <span>❤️ Powered by Love</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-card/60 backdrop-blur-sm px-6 py-3 rounded-full border border-border/50 shadow-lg">
            <p className="text-muted-foreground italic">
              <span className="text-accent font-semibold">console.log</span>
              (<span className="text-pink-400">&quot;I love you, Faith 💕&quot;</span>);
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodeStory;