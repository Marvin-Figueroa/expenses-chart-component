import styles from './Dashboard.module.css'
import Expenses from "./Expenses";

export default function Dashboard({totalAmount, percentage}) {
    return <main className={styles.dashboard}>
        <h2 className={styles.dashboard__title}>Spending - Last 7 Days</h2>
        <div className={styles.dashboard__expenses}>
            <Expenses />
        </div>

        <div className={styles.dashboard__footer}>
            <div>
                <p className={styles.dashboard__footer__text}>Total this month</p>
                <p className={styles.dashboard__footer__amount}>${totalAmount}</p>
            </div>
            <div className={styles.dashboard__footer__right}>
                <p className={styles.dashboard__footer__percentage}>+{percentage}%</p>
                <p className={styles.dashboard__footer__text}>from last month</p>
            </div>
        </div>
    </main>
}