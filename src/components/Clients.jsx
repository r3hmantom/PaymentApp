import React from "react";
import { clients } from "../constants";
import styles from "../style";
import { motion } from "framer-motion";
const ClientSection = () => {
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
  // {
  //   ...cardVariantTop,
  //   onscreen: {
  //     ...cardVariantTop.onscreen,
  //     transition: { delay: index * 0.1 },
  //   },
  // }

  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
      className={`${styles.flexCenter} mt-4 mb-28 `}
    >
      <div
        className={`${styles.flexCenter}  flex-col gap-10 md:gap-1 md:flex-row w-full  `}
      >
        {clients.map((client, index) => (
          <motion.div
            variants={{
              ...cardVariantTop,
              onscreen: {
                ...cardVariantTop.onscreen,
                transition: { duration: index * 0.1 + 0.1 },
              },
            }}
            key={client.id}
            className={`${styles.flexCenter} flex-1 min-w-[120px] sm:min-w-[192px]`}
          >
            <img
              src={client.logo}
              alt="client"
              className="w-[150px] md:w-[192px] text-white object-contain cursor-pointer transition-all duration-200 hover:brightness-[3] hover:scale-110 hover:-translate-y-1"
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ClientSection;
