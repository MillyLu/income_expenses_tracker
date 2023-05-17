import { useContext } from "react";
import { BalanceContext } from "../../Context";
import styles from './Balance.module.css';


export function Balance() {
  const { operations } = useContext(BalanceContext);

  const balance = operations
    .map((operation) => operation.amount)
    .reduce((sum, current) => sum + current, 0);

  console.log(balance);
  return (
    <>
      <h2 className={styles.header}>Итого средств</h2>
      <h1>{balance}</h1>
    </>
  );
}
