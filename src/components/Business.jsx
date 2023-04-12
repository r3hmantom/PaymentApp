import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { motion } from "framer-motion";

const FeatureCard = ({ index, icon, title, content }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] cursor-pointer ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} className="w-[50%] h-[50%] object-contain" alt="icon" />
    </div>
    <div className="flex-1 flex flex-col ml-3 ">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
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
        type: "tween",
        duration: 2,
      },
    },
  };
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
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
      id="features"
      className={layout.section}
    >
      <motion.div variants={cardVariantLeft} className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we'll handle
          the money
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
        <Button styles="mt-10" />
      </motion.div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <motion.div
            variants={{
              ...cardVariantTop,
              onscreen: {
                ...cardVariantTop.onscreen,
                transition: { delay: index * 0.3 },
              },
            }}
          >
            <FeatureCard key={feature.id} {...feature} index={index} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Business;
