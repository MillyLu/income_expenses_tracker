import { useContext } from "react";
import { BalanceContext } from "../../Context";
import styles from "./BalanceItem.module.css";

export function BalanceItem(props) {
  const { deleteOperation } = useContext(BalanceContext);

  return (
    <li className={props.amount > 0 ? styles.item : styles.item_red}>
      <span>{props.name}</span>
      <span>
        <span>{props.amount}</span>
        <button
          className={styles.button}
          onClick={() => deleteOperation(props.id)}
        >
          ❌
        </button>
      </span>
    </li>
  );
}
