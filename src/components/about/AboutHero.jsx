import "./AboutHero.css";

import { motion } from "motion/react";


const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};



const subtitleVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};



const titleVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};



const AboutHero = () => {
  return (
    <motion.section

      className="about-hero"

      aria-labelledby="about-hero-title"

      variants={containerVariants}

      initial="hidden"

      animate="visible"

    >


      <motion.div

        className="about-hero-content"

        variants={containerVariants}

      >


        <motion.p

          className="hero-subtitle"

          variants={subtitleVariants}

        >

          Our Story

        </motion.p>





        <motion.h1

          id="about-hero-title"

          variants={titleVariants}

        >

          Crafted with Purpose &amp; Pride

        </motion.h1>



      </motion.div>


    </motion.section>
  );
};


export default AboutHero;