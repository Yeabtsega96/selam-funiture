import "./Statistics.css";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView
} from "motion/react";

import { useEffect, useRef } from "react";


const statistics = [
  {
    id: 1,
    value: 12,
    suffix: "+",
    label: "Years of Craftsmanship",
  },
  {
    id: 2,
    value: 1200,
    suffix: "+",
    label: "Happy Customers",
  },
  {
    id: 3,
    value: 150,
    suffix: "+",
    label: "Unique Designs",
  },
  {
    id: 4,
    value: 98,
    suffix: "%",
    label: "Satisfaction Rate",
  },
];



const Counter = ({ value, suffix }) => {


  const ref = useRef(null);


  const isInView = useInView(ref, {
    amount: 0.5,
  });



  const count = useMotionValue(0);



  const rounded = useTransform(
    count,
    (latest) => Math.floor(latest).toLocaleString()
  );



  useEffect(() => {


    if (!isInView) return;



    // reset number

    count.set(0);



    const controls = animate(

      count,

      value,

      {
        duration: 1.8,
        ease: "easeOut",
      }

    );



    return () => controls.stop();



  }, [isInView, value]);




  return (

    <h3 ref={ref}>

      <motion.span>
        {rounded}
      </motion.span>

      {suffix}

    </h3>

  );

};





const Statistics = () => {


  return (

    <section

      className="stats"

      aria-labelledby="statistics-title"

    >


      <h2
        id="statistics-title"
        className="sr-only"
      >
        Company Statistics
      </h2>




      {statistics.map((stat)=>(


        <article

          className="stat"

          key={stat.id}

        >


          <Counter

            value={stat.value}

            suffix={stat.suffix}

          />



          <p>

            {stat.label}

          </p>



        </article>


      ))}


    </section>

  );

};


export default Statistics;