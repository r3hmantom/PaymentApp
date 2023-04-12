import React from "react";
import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { motion } from "framer-motion";

const Testimonials = () => {
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
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

      <div className="w-full flex justify-between items-center flex-col md:flex-row mb-6 sm:mb-6 relative z-[1]">
        <h1 className={styles.heading2}>
          What people are <br className="hidden sm:block" /> saying about us
        </h1>
        <div className="w-full mt-6 md:mt-0">
          <p className={`${styles.paragraph} text-left max-w-[450px] `}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-start  sm:justify-between w-full feedback-container relative z-[1]">
        {feedback.map((card, index) => (
          <motion.div
            variants={{
              ...cardVariantTop,
              onscreen: {
                ...cardVariantTop.onscreen,
                transition: { delay: index * 0.1 },
              },
            }}
          >
            <FeedbackCard key={card.id} {...card} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;
