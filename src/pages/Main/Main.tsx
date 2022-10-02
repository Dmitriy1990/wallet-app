import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HistoryIcon,
  Logo,
  ProfileIcon,
  PlsIcon,
  PerevIcon,
  BillIcon,
  PhoneIcon,
  InternetIcon,
  TvIcon,
} from "../../assets";
import styles from "./styles.module.scss";
import { routes } from "../../constantes/routes";
import clsx from "clsx";
import { PhonePayment } from "../../components/phonePayment";
import { InternetPayment } from "../../components/internetPayment";
import { TvPayment } from "../../components/tvPayment";

export const Main = () => {
  const [modalPhone, setModalPhone] = useState(false);
  const [modalTv, setModalTv] = useState(false);
  const [modalWeb, setModalWeb] = useState(false);

  return (
    <section className="container">
      <div className={styles.header}>
        <Link to={routes.main} className={styles["header-logo"]}>
          <Logo />
        </Link>
        <div className={styles["header-icons"]}>
          <Link to={routes.history}>
            <span className={styles["header-icon"]}>
              <HistoryIcon />
            </span>
          </Link>
          <Link to={routes.profile}>
            <span className={styles["header-icon"]}>
              <ProfileIcon />
            </span>
          </Link>
        </div>
      </div>
      <div className={styles.balance}>
        <span className="f12 w500 cGrey mb10">Ваш баланс</span>
        <p className="f28 w600 cDark mb14">
          502 571,<span className="f20 w600 cDark">92 ₽</span>
        </p>
        <div className={styles["balance-box"]}>
          <li
            className={clsx(
              styles["balance-box_item"],
              styles["balance-box_item-full"]
            )}
          >
            <Link
              to={routes.transfer}
              className={clsx(
                styles["balance-box_link"],
                styles["balance-box_link-full"]
              )}
            >
              <div className="">
                <PlsIcon />
              </div>
              <p className="f10 w500 cDark ">Пополнить</p>
            </Link>
          </li>
          <li
            className={clsx(
              styles["balance-box_item"],
              styles["balance-box_item-full"]
            )}
          >
            <Link
              to={routes.replenishment}
              className={clsx(
                styles["balance-box_link"],
                styles["balance-box_link-full"]
              )}
            >
              <div className="">
                <PerevIcon />
              </div>
              <p className="f10 w500 cDark ">Перевести</p>
            </Link>
          </li>
          <li
            className={clsx(
              styles["balance-box_item"],
              styles["balance-box_item-full"]
            )}
          >
            <Link
              to={routes.transferWallet}
              className={clsx(
                styles["balance-box_link"],
                styles["balance-box_link-full"]
              )}
            >
              <div className="">
                <BillIcon />
              </div>
              <p className="f10 w500 cDark ">Выставить счёт</p>
            </Link>
          </li>
        </div>
      </div>

      <div>
        <div className={styles.operation}>
          <h3 className="f12 w500 cBlack">Последние операции</h3>
          <Link to={routes.history} className="cOrange f12 w500">
            Больше
          </Link>
        </div>

        <div className={styles.balance}>
          <div className="flex flex-between flex-center mb14">
            <div className={styles["box_preview"]}>
              <div className={styles["box_img"]}>
                <div className={styles["box_inshop"]}></div>
              </div>
              <div className="flex flex-column">
                <h2 className="f15 cBlack w500 mb4">Магазин</h2>
                <p className="f12 cLightGrey w500">13:20</p>
              </div>
            </div>
            <div className="f15 cBlack w500">- 2 300 ₽</div>
          </div>
          <div className="flex flex-between flex-center">
            <div className={styles["box_preview"]}>
              <div className={styles["box_img"]}>
                <div className={styles["box_inshop"]}></div>
              </div>
              <div className="flex flex-column">
                <h2 className="f15 cBlack w500 mb4">Оплата</h2>
                <p className="f12 cLightGrey w500">13:20</p>
              </div>
            </div>
            <div className="f15 cBlack w500">- 46 400 ₽</div>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.operation}>
          <h3 className="f12 cLightGrey w500">25 Сентября</h3>
        </div>
        <div className={styles.balance}>
          <div className="flex flex-between flex-center">
            <div className={styles["box_preview"]}>
              <div className={styles["box_img"]}>
                <div className={styles["box_inshop"]}></div>
              </div>
              <div className="flex flex-column">
                <h2 className="f15 cBlack w500 mb4">Пополнение</h2>
                <p className="f12 cLightGrey w500">16:32</p>
              </div>
            </div>
            <div className="f15 cGreen w500">+ 165 900 ₽</div>
          </div>
        </div>
      </div>
      <div className={styles.operation}>
        <h3 className="f12 w500 cBlack">Оплатить</h3>
      </div>
      <ul className={styles.pay}>
        <li className={styles["pay-item"]}>
          <div
            className={styles["pay_link"]}
            onClick={() => setModalPhone(true)}
          >
            <div className="mb8">
              <PhoneIcon />
            </div>
            <div className="f12 w500 cDark mt-auto">Телефон </div>
          </div>
        </li>
        <li className={styles["pay-item"]}>
          <div className={styles["pay_link"]} onClick={() => setModalWeb(true)}>
            <div className="mb8">
              <InternetIcon />
            </div>
            <div className="f12 w500 cDark mt-auto">Интернет</div>
          </div>
        </li>
        <li className={styles["pay-item"]}>
          <div className={styles["pay_link"]} onClick={() => setModalTv(true)}>
            <div className="mb8">
              <TvIcon />
            </div>
            <div className="f12 w500 cDark mt-auto">Телевидение</div>
          </div>
        </li>
      </ul>
      <PhonePayment open={modalPhone} onClose={() => setModalPhone(false)} />
      <InternetPayment open={modalWeb} onClose={() => setModalWeb(false)} />
      <TvPayment open={modalTv} onClose={() => setModalTv(false)} />
    </section>
  );
};
