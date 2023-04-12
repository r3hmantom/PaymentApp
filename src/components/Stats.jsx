import React from "react";
import { stats } from "../constants";
import styles from "../style";
import { motion } from "framer-motion";

const Stats = () => {
  const cardVariantTop = {
    offscreen: {
      y: "20vh",
      display: "none",
    },
    onscreen: {
      y: 0,
      display: "flex",
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.6,
      },
    },
  };

  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
      className={`flex justify-center flex-col flex-1 items-start
      md:flex-row flex-wrap  my-10 `}
    >
      {stats.map((stat, index) => (
        <motion.div
          variants={cardVariantTop}
          key={stat.id}
          className={`flex-1 flex justify-start  items-center flex-row m-3`}
        >
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Stats;
