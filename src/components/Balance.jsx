import styles from './Balance.module.css';
import BalanceIcon from '../assets/logo.svg';

function Balance({amount}) {
    return <div className={styles.balance}>
        <div><p className={styles.balance__title}>My balance</p><p className={styles.balance__amount}>${amount}</p></div>
        <img className={styles.balance__icon} src={BalanceIcon} alt=""/>
    </div>
}

export default Balance;