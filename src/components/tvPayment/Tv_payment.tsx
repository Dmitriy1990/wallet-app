import Modal from "../modal";
import { FC } from "react";
import styles from "./style.module.scss";
import { PatternFormat, NumericFormat } from "react-number-format";
import clsx from "clsx";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const TvPayment: FC<Props> = ({ open, onClose }: Props) => {
  const update = (e: any) => {
    onClose();
  };
  return (
    <div onTouchMove={update}>
      <Modal onClose={onClose} open={open}>
        <div className="modal">
          <div className="">
            <div className="modal__line"></div>
            <h3 className="f20 cBlack textCenter mb15">Оплата телевидения</h3>
            <form className="card">
              <p className="f12 w500 cGrey mb6">Идентификатор платежа</p>
              <div className="mb8">
                <NumericFormat className="field" />
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
                  Оплатить
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};
