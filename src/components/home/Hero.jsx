import { motion } from "motion/react";
import { Link } from "react-router-dom";

import Button from "../Button";

import "./Hero.css";


const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};


const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
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


const statVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};


const Hero = () => {
  return (
    <motion.section
      className="hero"
      aria-labelledby="hero-title"

      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >

      <div className="hero-container">


        <motion.p
          className="hero-subtitle"
          variants={itemVariants}
        >
          Premium Ethiopian Furniture
        </motion.p>



        <motion.h1
          id="hero-title"
          className="hero-title"

          variants={itemVariants}
        >
          Crafting Spaces <span>You'll Love.</span>
        </motion.h1>




        <motion.p
          className="hero-description"

          variants={itemVariants}
        >
          Handcrafted furniture blending Scandinavian
          minimalism with Ethiopian artistry. From homes to
          hotels, we create timeless pieces designed for
          comfort, beauty, and lasting impressions.
        </motion.p>




        <motion.div

          className="hero-actions"

          aria-label="Primary actions"

          variants={itemVariants}
        >

          <Link to="/products">

            <motion.div
              whileHover={{
                scale: 1.05,
                y: -3,
              }}

              whileTap={{
                scale: 0.96,
              }}
            >

              <Button>
                Shop Collection
              </Button>

            </motion.div>

          </Link>




          <Link to="/contact">

            <motion.div
              whileHover={{
                scale: 1.05,
                y: -3,
              }}

              whileTap={{
                scale: 0.96,
              }}
            >

              <Button variant="secondary">
                Get a Quote
              </Button>

            </motion.div>

          </Link>


        </motion.div>





        <motion.div

          className="hero-stats"

          aria-label="Company statistics"

          variants={itemVariants}

        >


          <motion.article

            className="hero-stat"

            variants={statVariants}

            whileHover={{
              y: -8,
              scale: 1.05,
            }}

            transition={{
              type: "spring",
              stiffness: 250,
            }}

          >

            <h2>
              12+
            </h2>

            <p>
              Years of Craftsmanship
            </p>

          </motion.article>






          <motion.article

            className="hero-stat"

            variants={statVariants}

            whileHover={{
              y: -8,
              scale: 1.05,
            }}

            transition={{
              type: "spring",
              stiffness: 250,
            }}

          >

            <h2>
              1,200+
            </h2>

            <p>
              Happy Customers
            </p>

          </motion.article>







          <motion.article

            className="hero-stat"

            variants={statVariants}

            whileHover={{
              y: -8,
              scale: 1.05,
            }}

            transition={{
              type: "spring",
              stiffness: 250,
            }}

          >

            <h2>
              150+
            </h2>

            <p>
              Unique Designs
            </p>

          </motion.article>



        </motion.div>



      </div>


    </motion.section>
  );
};


export default Hero;