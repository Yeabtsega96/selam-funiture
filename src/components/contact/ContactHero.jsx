import "./ContactHero.css";

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
    y: 40,
    scale: 0.96,
  },


  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};



const ContactHero = () => {
  return (
    <motion.section

      className="contact-hero"

      aria-labelledby="contact-hero-title"

      variants={containerVariants}

      initial="hidden"

      animate="visible"

    >


      <motion.p

        className="hero-subtitle"

        variants={itemVariants}

      >
        Get In Touch
      </motion.p>





      <motion.h1

        id="contact-hero-title"

        variants={titleVariants}

      >

        Let's Talk Furniture

      </motion.h1>





      <motion.p

        className="hero-description"

        variants={itemVariants}

      >

        Have a project in mind? We'd love to hear from you.
        Request a quote or visit our showroom.

      </motion.p>



    </motion.section>
  );
};


export default ContactHero;