import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";
const GetStarted = () => (
  <div
    className={`${styles.flexCenter} group w-[100px] h-[100px] sm:h-[140px] sm:w-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row `}>
        <p className="font-poppins font-medium text-[15px] sm:text-[18px] leading-[23px] mr-2">
          <span className="text-gradient">Get</span>
        </p>
        <img
          src={arrowUp}
          className="w-[23px] h-[23px] object-contain group-hover:-translate-y-3 origin-bottom duration-200 group-hover:rotate-[100deg]"
          alt="arrow"
        />
      </div>
      <p className="font-poppins font-medium text-[15px] sm:text-[18px] leading-[23px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
