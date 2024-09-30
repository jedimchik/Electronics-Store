import { NavLink } from "react-router-dom";
import styles from "./NextBtn.module.css";

function NextBtn() {
  return (
    <div className={styles.nextButton}>
      <NavLink className={styles.navText} to="/contactInfo">
        Next step
      </NavLink>
    </div>
  );
}

export { NextBtn };
