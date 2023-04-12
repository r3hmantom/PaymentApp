import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import { motion } from "framer-motion";

const CardDeal = () => {
  const cardVariantLeft = {
    offscreen: {
      x: "-100vw",
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1,
      },
    },
  };
  const cardVariantRight = {
    offscreen: {
      x: "100vw",
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 2,
      },
    },
  };
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0 }}
      className={layout.section}
    >
      <motion.div variants={cardVariantLeft} className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="hidden sm:block" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id magni
          nesciunt repudiandae cumque dolorum eveniet? Temporibus laudantium
          exercitationem voluptates, .
        </p>
        <Button styles="mt-10" />
      </motion.div>

      <motion.div variants={cardVariantRight} className={layout.sectionImg}>
        <img src={card} alt="card" className="w-full h-full" />
      </motion.div>
    </motion.section>
  );
};

export default CardDeal;
