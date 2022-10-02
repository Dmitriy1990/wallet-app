import React from "react";
import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  PlusIcon,
  RightIcon,
  TopIcon,
  WalletIcon,
} from "../../assets";
import { routes } from "../../constantes/routes";
import clsx from "clsx";
import styles from "./style.module.scss";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-inner"]}>
        <NavLink
          to={routes.main}
          end
          className={({ isActive }) =>
            clsx(isActive ? styles.active : undefined, styles.icon)
          }
        >
          <HomeIcon />
        </NavLink>
        <NavLink
          to={routes.transfer}
          className={({ isActive }) =>
            clsx(isActive ? styles.active : undefined, styles.icon)
          }
        >
          <PlusIcon />
        </NavLink>
        <NavLink
          to={routes.replenishment}
          className={({ isActive }) =>
            clsx(isActive ? styles.active : undefined, styles.icon)
          }
        >
          <RightIcon />
        </NavLink>
        <NavLink
          to={routes.transferWallet}
          className={({ isActive }) =>
            clsx(isActive ? styles.active : undefined, styles.icon)
          }
        >
          <TopIcon />
        </NavLink>
        {/* <NavLink
          to={routes.history}
          className={({ isActive }) =>
            clsx(isActive ? styles.active : undefined, styles.icon)
          }
        >
          <WalletIcon />
        </NavLink> */}
      </div>
    </nav>
  );
};
