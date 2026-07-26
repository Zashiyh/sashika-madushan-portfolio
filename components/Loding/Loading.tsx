"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./Loading.css";

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 1.8 + 0.5;
        if (newProgress >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          return 100;
        }
        return Math.min(newProgress, 99);
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Background */}
      <div className="bg-animated">
        <div className="bg-orb orb-1" />
        <div className="bg-orb orb-2" />
        <div className="bg-orb orb-3" />
      </div>

      <div className="loading-container">
        {/* Top Glow Bar */}
        <div className="top-glow-bar" />

        {/* Logo Section - Box with Line Animation */}
        <motion.div
          className="logo-section"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="logo-box-wrapper">
            {/* Box Border - Animated Line */}
            <svg className="box-svg" viewBox="0 0 140 140">
              {/* Box Background */}
              <rect
                x="10"
                y="10"
                width="120"
                height="120"
                rx="8"
                stroke="rgba(255,255,255,0.03)"
                strokeWidth="1"
                fill="none"
              />
              
              {/* Animated Box Line - Top */}
              <motion.rect
                x="10"
                y="10"
                width="120"
                height="120"
                rx="8"
                stroke="#4cc9f0"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="480"
                strokeDashoffset="480"
                animate={{
                  strokeDashoffset: isComplete ? 0 : 480 - (progress / 100) * 480,
                  opacity: isComplete ? [0.5, 1, 0.5] : 1,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Corner Glows */}
              <motion.rect
                x="10"
                y="10"
                width="120"
                height="120"
                rx="8"
                stroke="url(#boxGlow)"
                strokeWidth="1"
                fill="none"
                opacity="0.15"
                animate={{
                  opacity: isComplete ? [0.15, 0.3, 0.15] : 0.15,
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Moving Dot on Box */}
              {!isComplete && (
                <>
                  <motion.circle
                    cx="10"
                    cy="10"
                    r="4"
                    fill="#4cc9f0"
                    animate={{
                      cx: [
                        10, 130, 130, 10, 10
                      ],
                      cy: [
                        10, 10, 130, 130, 10
                      ],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    filter="url(#glow)"
                  />
                  <motion.circle
                    cx="130"
                    cy="130"
                    r="3"
                    fill="#f72585"
                    animate={{
                      cx: [
                        130, 10, 10, 130, 130
                      ],
                      cy: [
                        130, 130, 10, 10, 130
                      ],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      delay: 2.25,
                      ease: "linear",
                    }}
                    filter="url(#glow)"
                  />
                </>
              )}

              {/* Inner Grid Lines */}
              <rect
                x="30"
                y="30"
                width="80"
                height="80"
                rx="4"
                stroke="rgba(255,255,255,0.02)"
                strokeWidth="0.5"
                fill="none"
                strokeDasharray="4 4"
              />

              {/* Center Cross */}
              <line
                x1="70"
                y1="30"
                x2="70"
                y2="110"
                stroke="rgba(255,255,255,0.01)"
                strokeWidth="0.5"
              />
              <line
                x1="30"
                y1="70"
                x2="110"
                y2="70"
                stroke="rgba(255,255,255,0.01)"
                strokeWidth="0.5"
              />

              {/* Defs for Gradients */}
              <defs>
                <linearGradient id="boxGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4cc9f0" />
                  <stop offset="50%" stopColor="#f72585" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="blur"/>
                  <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
            </svg>

            {/* SM Text */}
            <div className="logo-text">
              <motion.span
                className="logo-s"
                animate={{
                  textShadow: isComplete 
                    ? ['0 0 20px #4cc9f0', '0 0 40px #4cc9f0', '0 0 20px #4cc9f0']
                    : ['0 0 10px rgba(76,201,240,0.2)', '0 0 20px rgba(76,201,240,0.1)', '0 0 10px rgba(76,201,240,0.2)'],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                S
              </motion.span>
              <motion.span
                className="logo-m"
                animate={{
                  textShadow: isComplete 
                    ? ['0 0 20px #f72585', '0 0 40px #f72585', '0 0 20px #f72585']
                    : ['0 0 10px rgba(247,37,133,0.2)', '0 0 20px rgba(247,37,133,0.1)', '0 0 10px rgba(247,37,133,0.2)'],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                M
              </motion.span>
            </div>

            {/* Progress Indicator inside box */}
            <div className="box-progress-indicator">
              <motion.div
                className="box-progress-fill"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Progress Section */}
        <motion.div
          className="progress-section"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="percentage">
            <span className="percent-number">{Math.round(progress)}</span>
            <span className="percent-symbol">%</span>
          </div>

          <div className="progress-track">
            <motion.div
              className="progress-line"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
            />
            <div className="progress-glow-line" />
          </div>

          <div className="status">
            <span className="status-dot" />
            <span className="status-text">
              {isComplete ? '● READY' : '○ LOADING'}
            </span>
          </div>
        </motion.div>

        {/* Bottom Decorative Line */}
        <div className="bottom-line">
          <span className="line-dash" />
          <span className="line-dash" />
          <span className="line-dash" />
          <span className="line-dash" />
          <span className="line-dash" />
        </div>
      </div>

      {/* Background Glows */}
      <div className="bg-glow g1" />
      <div className="bg-glow g2" />
    </motion.div>
  );
}