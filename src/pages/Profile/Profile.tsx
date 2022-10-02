import React, { useState } from "react";
import clsx from "clsx";
import { ExitIcon } from "../../assets";
import { ToPline } from "../../components/topLine";
import styles from "./styles.module.scss";

enum TypePassword {
  MyPassword,
  NewPassword,
  RepeatPassword,
}

export const Profile = () => {
  const [fields, setFields] = useState(
    Object.keys(TypePassword)
      .filter((k) => typeof TypePassword[k as any] === "number")
      .map((i) => ({ name: i, checked: true }))
  );

  const onChacked = (name: string) => {
    setFields((fields) =>
      fields.map((i) => (i.name === name ? { ...i, checked: !i.checked } : i))
    );
  };

  return (
    <section className="container">
      <ToPline title="Dmitry" />
      <div className={clsx(styles["profile__box"], "profile__box card")}>
        <form>
          <div className={styles["profile__form"]}>
            <label className={styles["form__item"]}>
              <p className={styles["form__item-text"]}>Имя</p>
              <div className={styles.relative}>
                <input
                  className={styles["form__input"]}
                  type={"text"}
                  placeholder="Имя"
                />
              </div>
              <p className={styles["form__error"]}>
                Имя пользователя должно быть не меньше 4 символов
              </p>
            </label>
            <label className={styles["form__item"]}>
              <p className={styles["form__item-text"]}>Email</p>
              <div className={clsx(styles.relative, "mb28")}>
                <input
                  className={styles["form__input"]}
                  type={"email"}
                  placeholder="email"
                />
              </div>
              <p className={styles["form__error"]}>Email невалидный</p>
            </label>
          </div>
          <button type="button" className="button mb25">
            Сохранить
          </button>
          <div className={clsx(styles["profile__form"], "mb28")}>
            <label className={styles["form__item"]}>
              <p className={styles["form__item-text"]}>Текущий пароль</p>
              <div className={styles.relative}>
                <input
                  className={styles["form__input"]}
                  type={
                    fields[TypePassword.MyPassword].checked
                      ? "password"
                      : "text"
                  }
                  placeholder="Текущий пароль"
                  required
                />
                <span
                  className={clsx(
                    fields[TypePassword.MyPassword].checked && styles["view"],
                    styles["form__password-control"]
                  )}
                  onClick={() =>
                    onChacked(fields[TypePassword.MyPassword].name)
                  }
                />
              </div>
              <p className={styles["form__error"]}>
                Пароль должен быть не менее 10 символов и содержать латинские
                буквы, цифры и не менее одного спец. символа (! $ #%)
              </p>
            </label>

            <label className={styles["form__item"]}>
              <p className={styles["form__item-text"]}>Новый пароль</p>
              <div className={styles.relative}>
                <input
                  className={styles["form__input"]}
                  type={
                    fields[TypePassword.NewPassword].checked
                      ? "password"
                      : "text"
                  }
                  placeholder="Текущий пароль"
                  required
                />
                <span
                  className={clsx(
                    fields[TypePassword.NewPassword].checked && styles["view"],
                    styles["form__password-control"]
                  )}
                  onClick={() =>
                    onChacked(fields[TypePassword.NewPassword].name)
                  }
                />
              </div>
              <p className={styles["form__error"]}>
                Пароль должен быть не менее 10 символов и содержать латинские
                буквы, цифры и не менее одного спец. символа (! $ #%)
              </p>
            </label>

            <label className={styles["form__item"]}>
              <p className={styles["form__item-text"]}>
                Повторите новый пароль
              </p>
              <div className={styles.relative}>
                <input
                  className={styles["form__input"]}
                  type={
                    fields[TypePassword.RepeatPassword].checked
                      ? "password"
                      : "text"
                  }
                  defaultValue="12345"
                  required
                />
                <span
                  className={clsx(
                    fields[TypePassword.RepeatPassword].checked &&
                      styles["view"],
                    styles["form__password-control"]
                  )}
                  onClick={() =>
                    onChacked(fields[TypePassword.RepeatPassword].name)
                  }
                />
              </div>
              <p
                className={clsx(
                  styles["form__error"],
                  styles["form__error-text"]
                )}
              >
                Пароль должен быть не менее 10 символов и содержать латинские
                буквы, цифры и не менее одного спец. символа (! $ #%)
              </p>
            </label>
          </div>

          <button type="submit" className="button">
            Сменить пароль
          </button>
        </form>
      </div>
      <div className="container">
        <button type="submit" className="button flex flex-between flex-center">
          <p className="textCenter f16 w500">Выйти</p>
          <div className="profile__btn_img">
            <ExitIcon />
          </div>
        </button>
      </div>
    </section>
  );
};
