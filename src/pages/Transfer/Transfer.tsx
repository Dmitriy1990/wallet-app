import { useState } from "react";
import styles from "./style.module.scss";
import {
  PatternFormat,
  NumericFormat,
  usePatternFormat,
  NumberFormatBase,
} from "react-number-format";
import clsx from "clsx";
import Checkbox from "../../components/checkbox";
import { ToPline } from "../../components/topLine";
import { Heading } from "../../components/heading";

export const Transfer = () => {
  const [number, setNumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [code, setCode] = useState("");

  const { format, ...rest } = usePatternFormat({ format: "##/##" });

  const _format = (val: any) => {
    let month = val.substring(0, 2);
    const year = val.substring(2, 4);

    if (month.length === 1 && month[0] > 1) {
      month = `0${month[0]}`;
    } else if (month.length === 2) {
      if (Number(month) === 0) {
        month = `01`;
      } else if (Number(month) > 12) {
        month = "12";
      }
    }

    return format(`${month}${year}`);
  };

  return (
    <div className="container">
      <Heading />
      <form className="card">
        <h3 className="textCenter mb20 f20 cBlack w500">Пополнение</h3>
        <p className="f12 w500 cGrey mb6">Номер карты</p>
        <div className="mb8">
          <PatternFormat
            value={number}
            onChange={(e: any) => setNumber(e.target.value)}
            format="#### #### #### ####"
            className="field"
          />
        </div>
        <div className="flex mb22">
          <div>
            <p className="f12 w500 cGrey mb5">Срок действия</p>
            <NumberFormatBase
              value={cvc}
              onChange={(e: any) => setCvc(e.target.value)}
              className={clsx(
                styles["field-small"],
                styles["field-small-mr"],
                "field"
              )}
              placeholder="мм/гг"
              format={_format}
              {...(rest as any)}
            />
          </div>
          <div>
            <p className="f12 w500 cGrey mb5">CVC</p>
            <PatternFormat
              value={code}
              onChange={(e: any) => setCode(e.target.value)}
              format="###"
              className={clsx(
                styles["field-small"],

                "field"
              )}
            />
          </div>
        </div>
        {/* <div className="mb8">
          <p className="f12 w500 cGrey mb6">Имя держателя</p>
          <input className={clsx("field")} />
        </div> */}
        <div className="mb20">
          <p className="f12 w500 cGrey mb6">Сумма пополнения </p>

          <NumericFormat
            className={clsx("field")}
            value={173700.12}
            thousandsGroupStyle="wan"
            decimalSeparator=","
            suffix={"₽"}
          />
        </div>
        <div className="mb20">
          <Checkbox name="">
            <span className={styles.label}>Запомнить карту</span>
          </Checkbox>
        </div>
        <div>
          <button className="button" type="submit">
            Пополнить
          </button>
        </div>
      </form>
    </div>
  );
};
