import expenses from '../data/expenses.json'
import Expense from "./Expense";
import styles from './Expenses.module.css'

export default function Expenses() {
    const maxExpense = [...expenses].sort((a,b) => b.amount - a.amount)[0];

    function getPercentFromTotal(total, val) {
        return Number(((val*100) / total).toFixed(2));
    }

    return <div className={styles.expenses}>
        {
            expenses.map(expense => <Expense key={expense.day} amount={expense.amount} percent={getPercentFromTotal(maxExpense.amount, expense.amount)} day={expense.day} />)
        }
    </div>
}