import { useState, useContext } from "react";
import { BalanceContext } from "../../Context";
import styles from "./AddNewItem.module.css";

export function AddNewItem() {
  const [appointment, setAppointment] = useState("");
  const [amount, setAmount] = useState(0);

  const { addOperation } = useContext(BalanceContext);

  const onHandleAdd = (e) => {
    e.preventDefault();

    const newOperation = {
      id: Date.now(),
      appointment,
      amount: +amount,
    };

    addOperation(newOperation);
    setAmount(0);
    setAppointment("");
  };

  return (
    <>
      <h2 className={styles.header}>Добавить расход/приход</h2>
      <form onSubmit={onHandleAdd}>
        <div className={styles.form_part}>
          <label className={styles.form_title} htmlFor="appointment">
            Назначение
          </label>
          <input
            className={styles.form_input}
            type={"text"}
            value={appointment}
            onChange={(e) => setAppointment(e.target.value)}
          />
        </div>
        <div className={styles.form_part}>
          <label className={styles.form_title} htmlFor="amount">
            Сумма
          </label>
          <input
            className={styles.form_input}
            type={"number"}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <p>"+" доход "-" расход</p>
        </div>

        <button className={styles.button}>Добавить</button>
      </form>
    </>
  );
}
