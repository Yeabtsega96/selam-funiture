import "./ProductsHero.css";

import { MdOutlineNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

import { motion } from "motion/react";


// Parent animation
const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};


// Child animation
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


const ProductsHero = () => {
  return (
    <motion.section

      className="products-hero"

      variants={containerVariants}

      initial="hidden"

      animate="visible"

    >


      <motion.nav

        className="breadcrumb"

        aria-label="Breadcrumb"

        variants={itemVariants}

      >

        <ul>

          <li>

            <motion.div
              whileHover={{
                x: 4,
              }}
            >

              <Link to="/">
                Home
              </Link>

            </motion.div>

          </li>



          <li className="breadcrumb-separator">

            <MdOutlineNavigateNext />

          </li>



          <li

            className="active"

            aria-current="page"

          >

            Products

          </li>


        </ul>


      </motion.nav>





      <motion.div

        className="products-hero-content"

        variants={itemVariants}

      >

        <motion.h1

          initial={{
            opacity:0,
            scale:0.95
          }}

          animate={{
            opacity:1,
            scale:1
          }}

          transition={{
            duration:.8,
            ease:"easeOut"
          }}

        >

          Our Collection

        </motion.h1>



        <motion.p

          variants={itemVariants}

        >

          Discover handcrafted furniture pieces for every space

        </motion.p>


      </motion.div>


    </motion.section>
  );
};


export default ProductsHero;