import { useContext } from "react";
import { BalanceContext } from "../../Context";
import styles from './Income.module.css';

export function Income() {
  const { operations } = useContext(BalanceContext);

  const income = operations
    .map((operation) => operation.amount)
    .filter((item) => item > 0)
    .reduce((sum, value) => sum + value, 0);

  const expense = operations
    .map((operation) => operation.amount)
    .filter((item) => item < 0)
    .reduce((sum, value) => sum + value, 0);

  return (
    <div className={styles.income}>
      <div className={styles.incomes}>
        <h3>Доходы</h3>
        <h3 className={styles.incomes_amount}>{income}</h3>
      </div>
      <div className={styles.expenses}>
        <h3>Расходы</h3>
        <h3 className={styles.expenses_amount}>{expense}</h3>
      </div>
    </div>
  );
}
