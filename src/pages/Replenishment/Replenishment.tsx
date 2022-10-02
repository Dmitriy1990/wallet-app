import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import {
  LeftIcon,
  PlsIcon,
  WithdrawIcon,
  ChangeIcon,
  PurseIcon,
  PurseColorIcon,
} from "../../assets";
import { routes } from "../../constantes/routes";
import clsx from "clsx";
import { useState } from "react";
import { PatternFormat, NumericFormat } from "react-number-format";
import { Heading } from "../../components/heading";

enum Tabs {
  Withdraw,
  Change,
  Purse,
}

export const Replenishment = () => {
  const [tab, setTab] = useState<Tabs>(Tabs.Withdraw);
  const [number, setNumber] = useState("");

  const activeTab = (active: Tabs) => {
    if (tab !== active) {
      setTab(active);
    }
  };

  return (
    <div className="container">
      <Heading />
      <div className={styles.tabs}>
        <div
          className={clsx(
            styles["tabs-item"],
            tab === Tabs.Withdraw && styles["tabs-item-active"]
          )}
          onClick={() => activeTab(Tabs.Withdraw)}
        >
          <WithdrawIcon
            className={clsx(
              styles["tabs-item__icon"],
              tab === Tabs.Withdraw && styles["tabs-item-active__icon"]
            )}
          />
          <span
            className={clsx(
              styles["tabs-item__text"],
              styles["w-middle"],
              tab === Tabs.Withdraw && styles["tabs-item-active__text"]
            )}
          >
            Вывести на карту
          </span>
        </div>
        <div
          className={clsx(
            styles["tabs-item"],
            tab === Tabs.Change && styles["tabs-item-active"]
          )}
          onClick={() => activeTab(Tabs.Change)}
        >
          <ChangeIcon
            className={clsx(
              styles["tabs-item__icon"],
              tab === Tabs.Change && styles["tabs-item-active__icon-fill"]
            )}
          />
          <span
            className={clsx(
              styles["tabs-item__text"],
              styles["w-middle"],
              tab === Tabs.Change && styles["tabs-item-active__text"]
            )}
          >
            Перевод на карту
          </span>
        </div>
        <div
          className={clsx(
            styles["tabs-item"],
            tab === Tabs.Purse && styles["tabs-item-active"]
          )}
          onClick={() => activeTab(Tabs.Purse)}
        >
          {tab === Tabs.Purse ? (
            <PurseColorIcon className={clsx(styles["tabs-item__icon"])} />
          ) : (
            <PurseIcon className={clsx(styles["tabs-item__icon"])} />
          )}
          <span
            className={clsx(
              styles["tabs-item__text"],
              styles["w-big"],
              tab === Tabs.Purse && styles["tabs-item-active__text"]
            )}
          >
            Перевод на другой кошель
          </span>
        </div>
      </div>
      {/* Withdraw */}
      {tab === Tabs.Withdraw ? (
        <form className="card">
          <h3 className="textCenter mb25 f20 cBlack w500">
            Вывести деньги со счета
          </h3>
          <p className="f12 w500 cGrey mb6">Номер карты</p>
          <div className="mb8">
            <PatternFormat
              value={number}
              onChange={(e: any) => setNumber(e.target.value)}
              format="#### #### #### ####"
              className="field"
              mask="_"
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
          <div>
            <button className="button" type="submit">
              Вывести
            </button>
          </div>
        </form>
      ) : null}

      {/* Change */}

      {tab === Tabs.Change ? (
        <form className="card">
          <h3 className="textCenter mb25 f20 cBlack w500">Перевести</h3>
          <p className="f12 w500 cGrey mb6">Номер карты</p>
          <div className="mb8">
            <PatternFormat
              value={number}
              onChange={(e: any) => setNumber(e.target.value)}
              format="#### #### #### ####"
              className="field"
              mask="_"
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
          <div>
            <button className="button" type="submit">
              Отправить
            </button>
          </div>
        </form>
      ) : null}

      {/* Purse */}

      {tab === Tabs.Purse ? (
        <form className="card">
          <h3 className="textCenter mb25 f20 cBlack w500">Перевести</h3>
          <p className="f12 w500 cGrey mb6">Email получателя</p>
          <div className="mb19">
            <input value={"i2@brpay.io"} type="email" className="field" />
          </div>
          <div className="mb19">
            <p className="f12 w500 cGrey mb6">Сумма</p>
            <NumericFormat
              className={clsx("field")}
              value={173700.12}
              thousandsGroupStyle="wan"
              decimalSeparator=","
              suffix={"₽"}
            />
          </div>
          <div className="mb18">
            <p className="f12 w500 cGrey mb6">Комментарий</p>
            <textarea
              className="textarea"
              placeholder="Комментарий..."
            ></textarea>
          </div>
          <div>
            <button className="button" type="submit">
              Отправить
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
};
