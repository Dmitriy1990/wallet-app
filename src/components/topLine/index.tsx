import React, { FC } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../constantes/routes";
import styles from "./style.module.scss";

type Props = {
  title: string;
};

export const ToPline: FC<Props> = ({ title }: Props) => {
  return (
    <div className={styles.text}>
      <Link to={routes.main} className={styles.link}>
        <div className={styles.img}></div>
      </Link>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};
