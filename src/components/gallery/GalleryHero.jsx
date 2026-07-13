import "./GalleryHero.css";

import { motion } from "motion/react";


const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
    },
  },
};



const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};



const titleVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },

  visible: {
    opacity: 1,
    scale: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};



const GalleryHero = () => {
  return (
    <motion.section

      className="gallery-hero"

      aria-labelledby="gallery-title"

      variants={containerVariants}

      initial="hidden"

      animate="visible"

    >


      <motion.span

        className="gallery-subtitle"

        variants={itemVariants}

        whileHover={{
          letterSpacing: "0.18em",
        }}

        transition={{
          duration: 0.3,
        }}

      >
        Our Portfolio

      </motion.span>





      <motion.h1

        id="gallery-title"

        variants={titleVariants}

      >

        Gallery &amp; Projects

      </motion.h1>





      <motion.p

        variants={itemVariants}

      >

        Real spaces transformed by Selam Furniture—from private homes to luxury hotels.

      </motion.p>



    </motion.section>
  );
};


export default GalleryHero;