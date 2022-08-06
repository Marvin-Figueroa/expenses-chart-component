import styles from './Expense.module.css'

export default function Expense({amount, percent, day}) {
    const today = new Date()
        .toLocaleString('en-us', { weekday: 'short' })
        .toLocaleLowerCase();

    return <div  className={styles.expense}>

        <div className={styles.expense__barContainer}>

            <div className={`${styles.expense__bar} ${day === today ? styles['expense--today'] : ''}`} style={{height: `${percent}%`}} >
                <span className={styles.expense__barLabel}>${amount}</span>
            </div>
        </div>
        <span className={styles.expense__label}>{day}</span>
    </div>
}