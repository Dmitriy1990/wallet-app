import styles from "../Main/styles.module.scss";
import clsx from "clsx";
import { ToPline } from "../../components/topLine";

export const History = () => {
  return (
    <section className="container">
      <ToPline title="Последние операции" />
      <div className="">
        {/* 1 day  */}
        <div className="flex flex-beetwen mb7">
          <h3 className="f12 cLightGrey w500 mb6">Сегодня</h3>
        </div>
        <div className={clsx(styles.balance, styles["balance--small"])}>
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

          <div className="flex flex-between flex-center ">
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

        {/* 2 day  */}

        <div className="flex flex-beetwen mb7">
          <h3 className="f12 cLightGrey w500 mb6">25 Сентября</h3>
        </div>
        <div className={clsx(styles.balance, styles["balance--small"])}>
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

        {/* 3 day  */}

        <div className="flex flex-beetwen mb7">
          <h3 className="f12 cLightGrey w500 mb6">24 Сентября</h3>
        </div>
        <div className={clsx(styles.balance, styles["balance--small"])}>
          <div className="flex flex-between flex-center mb13">
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

          <div className="flex flex-between flex-center mb13">
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

          <div className="flex flex-between flex-center mb13">
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

        {/* 4 day  */}
        <div className="flex flex-beetwen mb7">
          <h3 className="f12 cLightGrey w500 mb6">23 Сентября</h3>
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
    </section>
  );
};
