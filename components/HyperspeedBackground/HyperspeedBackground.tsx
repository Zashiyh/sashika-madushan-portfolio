"use client";

import Hyperspeed from "../Hyperspeed/Hyperspeed";
import "./HyperspeedBackground.css";

export default function HyperspeedBackground() {

  const colors = {

    roadColor: 0x080808,

    islandColor: 0x0a0a0a,

    background: 0x000000,


    shoulderLines: 0xffffff,

    brokenLines: 0xffffff,


    // left side lights
    leftCars: [
      0x00e5ff,
      0x2563eb,
      0xffffff
    ],


    // right side lights
    rightCars: [
      0x00e5ff,
      0x4cc9f0,
      0x22d3ee
    ],


    sticks: 0x00e5ff

  };


  return (
    <div className="hyperspeed-bg">

      <Hyperspeed
        effectOptions={{

          distortion:"turbulentDistortion",

          length:400,

          roadWidth:10,

          islandWidth:2,

          lanesPerRoad:4,


          colors

        }}
      />

    </div>
  );
}