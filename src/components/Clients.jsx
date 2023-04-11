import React from "react";
import { clients } from "../constants";
import styles from "../style";

const ClientSection = () => (
  <section className={`${styles.flexCenter} my-4 `}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`${styles.flexCenter} flex-1 min-w-[120px] sm:min-w-[192px]`}
        >
          <img
            src={client.logo}
            alt="client"
            className="w-[100px] sm:w-[192px] text-white object-contain cursor-pointer transition-all duration-200 hover:brightness-[3] hover:scale-110 hover:-translate-y-1"
          />
        </div>
      ))}
    </div>
  </section>
);

export default ClientSection;
