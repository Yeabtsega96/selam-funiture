import "./FeaturedProducts.css";

import { motion } from "motion/react";

import products from "../../data/products";
import Rating from "../common/Rating";


const containerVariants = {

  hidden:{},


  visible:{

    transition:{

      staggerChildren:0.15,

      delayChildren:0.2,

    },

  },

};



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



const cardVariants = {

  hidden:{

    opacity:0,

    y:50,

    scale:0.95,

  },


  visible:{

    opacity:1,

    y:0,

    scale:1,


    transition:{

      duration:0.6,

      ease:"easeOut",

    },

  },

};



const FeaturedProducts = () => {


  const featuredProducts = products.filter(
    (product) => product.featured
  );



  return (


    <motion.section


      className="featured-products"

      aria-labelledby="featured-products-title"


      variants={containerVariants}

      initial="hidden"

      whileInView="visible"


      viewport={{

        once:true,

        amount:0.2,

      }}

    >




      <motion.p

        className="hero-span"

        variants={itemVariants}

      >

        Handpicked For You

      </motion.p>






      <motion.h2

        id="featured-products-title"

        variants={itemVariants}

      >

        Featured Products

      </motion.h2>








      <motion.div


        className="featured-product-cards"


        variants={containerVariants}

      >



        {featuredProducts.map((product)=>(


          <motion.article


            className="product-card"


            key={product.id}


            variants={cardVariants}


            whileHover={{

              y:-10,

            }}


            transition={{

              type:"spring",

              stiffness:250,

            }}

          >



            <motion.div


              className="img-container"


              whileHover={{

                scale:1.05,

              }}


              transition={{

                duration:0.4,

              }}

            >


              <img

                src={product.image}

                alt={product.name}

                loading="lazy"

                decoding="async"

              />


            </motion.div>







            <div className="product-content">



              <p className="category">

                {product.category}

              </p>





              <h3 className="name">

                {product.name}

              </h3>





              <Rating

                rating={product.rating}

                reviews={product.reviews}

              />







              <ul className="price-list">


                <li className="price">

                  ETB {product.price.toLocaleString()}

                </li>



                {product.oldPrice && (

                  <li className="old-price">

                    ETB {product.oldPrice.toLocaleString()}

                  </li>

                )}


              </ul>



            </div>



          </motion.article>


        ))}



      </motion.div>



    </motion.section>


  );

};


export default FeaturedProducts;