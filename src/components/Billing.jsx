import React from "react";
import { apple, bill, google } from "../assets/index";
import styles, { layout } from "../style";
import { motion } from "framer-motion";

function Billing() {
  const cardVariantLeft = {
    offscreen: {
      x: "-100vw",
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
  const cardVariantRight = {
    offscreen: {
      x: "100vw",
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
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0 }}
      id="product"
      className={`${layout.sectionReverse}`}
    >
      <motion.div
        variants={cardVariantLeft}
        className={layout.sectionImgReverse}
      >
        <img
          src={bill}
          alt="billing"
          className="h-full w-full relative z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-1/2 h-1/2 rounded-full pink__gradient" />
      </motion.div>

      <motion.div variants={cardVariantRight} className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className="hidden sm:block" /> billing &
          invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          voluptates ad quae consectetur voluptatem, cum soluta, temporibus
          libero rerum aliquam inventore saepe doloribus quia porro nihil est
        </p>
        <div className="flex flex-row flex-wrap mt-6 sm:mt-10">
          <img
            src={apple}
            alt="app_store"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="play_store"
            className="w-[128px] h-[42px] object-contain cursor-pointer"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Billing;
