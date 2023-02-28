import React from "react";
import style from "./style.module.css";
import { dataServices } from "../../Data";
const Services = () => {
  return (
    <div className={style.servicesWrapper}>
      <div className={style.services}>
        <div className={style.headerServices}>
          <h2 className={style.title}>Services</h2>
        </div>
        <div className={style.blockServices}>
          {dataServices.map((elem) => (
            <div key={elem.id} className={style.wrapperItems}>
              <div className={style.block1}>
                <div
                  style={{
                    width: `${elem.percent}%`,
                    background: `${elem.color}`,
                    borderRadius: "0 5px 5px 0",
                  }}
                >
                  <h2 className={style.nameServices}>{elem.name}</h2>
                </div>
              </div>
              <h2 className={style.valueServices}>{elem.value}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className={style.totalServices}>
        <h2>Total</h2>
        <h2>15</h2>
      </div>
    </div>
  );
};

export default Services;
