import "./Collection.css";

import { Link } from "react-router-dom";
import { motion } from "motion/react";

import products from "../../data/products";



const categories = [
  "Living Room",
  "Bedroom",
  "Dining",
  "Office",
  "Restaurant",
];



// Parent animation

const containerVariants = {

  hidden:{},


  visible:{

    transition:{

      staggerChildren:0.15,

      delayChildren:0.2,

    },

  },

};



// Children animation

const itemVariants = {

  hidden:{

    opacity:0,

    y:40,

  },


  visible:{

    opacity:1,

    y:0,


    transition:{

      duration:0.7,

      ease:"easeOut",

    },

  },

};



// Card animation

const cardVariants = {

  hidden:{

    opacity:0,

    scale:0.9,

    y:30,

  },


  visible:{

    opacity:1,

    scale:1,

    y:0,


    transition:{

      duration:0.6,

      ease:"easeOut",

    },

  },

};



const Collection = () => {


  return (

    <motion.section


      className="collections"

      aria-labelledby="collections-title"


      variants={containerVariants}


      initial="hidden"


      whileInView="visible"


      viewport={{

        once:true,

        amount:0.2,

      }}

    >



      <motion.p

        className="collections-subtitle"

        variants={itemVariants}

      >

        Browse By Space

      </motion.p>






      <motion.h2

        id="collections-title"

        className="collections-title"

        variants={itemVariants}

      >

        Our Collections

      </motion.h2>






      <motion.p

        className="collections-description"

        variants={itemVariants}

      >

        Discover furniture crafted for every space—from cozy
        homes to grand hotel interiors.

      </motion.p>







      <motion.div

        className="collections-grid"

        variants={containerVariants}

      >


        {categories.map((category)=>{


          const items = products.filter(

            (product)=>product.category===category

          );



          if(!items.length) return null;



          const title =

            category==="Restaurant"

            ? "Hotel & Restaurant"

            : category;



          return (



            <motion.article


              className="collection-card"


              key={category}


              variants={cardVariants}



              whileHover={{

                y:-8,

                scale:1.03,

              }}


              transition={{

                type:"spring",

                stiffness:250,

              }}

            >



              <Link


                to={`/products?category=${encodeURIComponent(category)}`}


                aria-label={`View ${title} furniture collection`}


              >



                <div className="collection-image">


                  <img

                    src={items[0].image}

                    alt={`${title} furniture collection`}

                    loading="lazy"

                    decoding="async"

                  />


                </div>





                <div className="collection-content">


                  <h3>

                    {title}

                  </h3>



                  <p>

                    {items.length} Items

                  </p>


                </div>



              </Link>


            </motion.article>



          );

        })}



      </motion.div>




    </motion.section>

  );

};


export default Collection;