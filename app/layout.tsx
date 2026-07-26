import type { Metadata } from "next";

import { Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar/Navbar";

import Background from "@/components/Background/Background";

import Particles from "@/components/Particles/Particles";

import ScrollProgress from "@/components/ScrollProgress/ScrollProgress";

import HyperspeedBackground from "@/components/HyperspeedBackground/HyperspeedBackground";


const inter = Inter({

subsets:["latin"],

variable:"--font-inter",

});


const spaceGrotesk = Space_Grotesk({

subsets:["latin"],

variable:"--font-space-grotesk",

});


export const metadata:Metadata={

title:"Sashika Madushan | Portfolio",

description:"Software Engineer | Full Stack Developer",

};



export default function RootLayout({

children,

}:{

children:React.ReactNode;

}){


return (

<html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>

<body className="text-white font-sans overflow-x-hidden">


<HyperspeedBackground />


<Background />

<Navbar />

<Particles />

<ScrollProgress />


{children}


</body>

</html>

)

}