import styles from "./topBar.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
const TopBar = () => {
  return (
    <div className={styles.top_bar}>
      <div className={styles.left_side}>
        <span>Estamos abertos</span>
        <span>7 dias por semana</span>
      </div>

      <div className={styles.right_side}>
        <ul className={styles.top_bar__list}>
          <li>
            <SlLocationPin color="#977656" size={24} />
            <span className={styles.adress}>Av Logo ali, nº 900</span>
          </li>
          <li>
            <BsTelephone color="#977656" size={24} />
            <span className={styles.phone}>(99) 99999-9999</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default TopBar;
