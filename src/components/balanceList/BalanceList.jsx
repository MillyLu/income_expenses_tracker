import { BalanceItem } from "../balanceItem/BalanceItem";
import { useContext } from "react";
import { BalanceContext } from "../../Context";
import styles from "./BalanceList.module.css";

export function BalanceList() {
  const { operations } = useContext(BalanceContext);
  console.log(operations);
  return (
    <>
      <h2 className={styles.header}>Все операции</h2>
      <ul className={styles.list}>
        {operations.map((operation) => (
          <BalanceItem
            key={operation.id}
            id={operation.id}
            name={operation.appointment}
            amount={operation.amount}
          />
        ))}
      </ul>
    </>
  );
}
