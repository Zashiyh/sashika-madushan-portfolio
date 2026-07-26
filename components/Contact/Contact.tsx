"use client";
import Hyperspeed from "../Hyperspeed/Hyperspeed";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

import "./Contact.css";


export default function Contact(){

return(

<section
id="contact"
className="contact"
>


<motion.div

className="contact-container"

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

>


<div className="contact-info">


<h2>
Let's <span>Connect</span>
</h2>


<p>
Have a project idea or want to collaborate?
Feel free to contact me.
</p>



<div className="info-item">

<FaMapMarkerAlt/>

<span>
Sri Lanka
</span>

</div>



<div className="info-item">

<FaEnvelope/>

<span>
sashikamadushan2003@gmail.com
</span>

</div>



<div className="social-links">


<a href="#">
<FaGithub/>
</a>


<a href="#">
<FaLinkedin/>
</a>


<a href="#">
<FaEnvelope/>
</a>


</div>



</div>




<form className="contact-form">


<input
type="text"
placeholder="Your Name"
/>


<input
type="email"
placeholder="Your Email"
/>


<textarea
placeholder="Your Message"
/>



<motion.button

whileHover={{
scale:1.05
}}

whileTap={{
scale:.95
}}

>

Send Message 🚀

</motion.button>


</form>



</motion.div>


</section>

)

}