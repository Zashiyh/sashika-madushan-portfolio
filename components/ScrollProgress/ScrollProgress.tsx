"use client";

import { motion, useScroll } from "framer-motion";
import "./ScrollProgress.css";


export default function ScrollProgress(){

  const { scrollYProgress } = useScroll();


  return (

    <motion.div
      className="scroll-progress"

      style={{
        scaleX: scrollYProgress
      }}

    />

  );

}