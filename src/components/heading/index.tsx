import React from "react";
import { routes } from "../../constantes/routes";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import styles from "./style.module.scss";
import { LeftIcon, PlsIcon } from "../../assets";

export const Heading = () => {
  const location = useLocation();
  return (
    <div className={styles.header}>
      <Link to={routes.main} className={styles["header-back"]}>
        <LeftIcon />
      </Link>
      <div className={clsx(styles["header-center"], "mb15")}>
        <span className="f12 cPlaceholder textCenter block mb8">Баланс</span>
        <h4 className="f20 cDark w600">736 502 571,92 ₽</h4>
      </div>
      {location.pathname !== routes.transfer ? (
        <Link to={routes.transfer} className={styles["header-btn"]}>
          <PlsIcon width={12} height={12} />
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
};
