import { useState } from "react";
import styles from "./style.module.scss";
import { CardIcon, WallettIcon } from "../../assets";
import clsx from "clsx";
import { Heading } from "../../components/heading";
import { PatternFormat, NumericFormat } from "react-number-format";
import { ToPline } from "../../components/topLine";

enum Type {
  Card,
  Wallet,
}

export const TransferWallet = () => {
  const [number, setNumber] = useState("0000000000000000");
  const [tab, setTab] = useState<Type>(Type.Wallet);

  const activeTab = (active: Type) => {
    if (active !== tab) {
      setTab(active);
    }
  };

  return (
    <div className="container">
      <Heading />
      {/* <ToPline title="&nbsp;" /> */}
      <div className={styles.tabs}>
        {/* <div
          className={clsx(
            styles["tabs-item"],
            tab === Type.Card && styles["tabs-item--active"]
          )}
          onClick={() => activeTab(Type.Card)}
        >
          <CardIcon
            className={clsx(
              styles["tabs-item__icon"],
              tab === Type.Card && styles["tabs-item--active__icon"]
            )}
          />
          <span
            className={clsx(
              styles["tabs-item__text"],
              tab === Type.Card && styles["tabs-item--active__text"],
              "f12 w500"
            )}
          >
            Карта
          </span>
        </div> */}
        {/* <div
          className={clsx(
            styles["tabs-item"],
            tab === Type.Wallet && styles["tabs-item--active"]
          )}
          onClick={() => activeTab(Type.Wallet)}
        >
          <WallettIcon
            className={clsx(
              styles["tabs-item__icon"],
              tab === Type.Wallet && styles["tabs-item--active__icon"]
            )}
          />
          <span
            className={clsx(
              styles["tabs-item__text"],
              tab === Type.Wallet && styles["tabs-item--active__text"],
              "f12 w500"
            )}
          >
            Кошель
          </span>
        </div> */}
      </div>
      <form className={clsx("card")}>
        <h3 className="textCenter mb20 f20 cBlack w500">Выставить счет</h3>
        <p className="f12 w500 cGrey mb6">Email плательщика</p>
        <div className="mb8">
          <input
            type="email"
            className="field"
            value={"i2@brpay.io"}
            onChange={() => {}}
          />
        </div>
        <div className="mb20">
          <p className="f12 w500 cGrey mb6">Сумма</p>

          <NumericFormat
            className={clsx("field")}
            value={173700.12}
            thousandsGroupStyle="wan"
            decimalSeparator=","
            suffix={"₽"}
          />
        </div>
        <div className="mb20">
          <p className="f12 w500 cGrey mb6">Комментарий</p>

          <textarea
            className="textarea"
            placeholder="Комментарий..."
          ></textarea>
        </div>
        <div>
          <button className="button" type="submit">
            Выставить счет
          </button>
        </div>
      </form>
    </div>
  );
};
