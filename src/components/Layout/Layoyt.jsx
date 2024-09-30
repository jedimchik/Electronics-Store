import { Link, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import { useSelector } from "react-redux";

function Layout() {
  const data = useSelector((store) => store.shoppingCart.shoppingCart);
  return (
    <div className={styles.container}>
      <header>
        <Link to="/">
          <img
            className={styles.logoLink}
            src="src\assets\logo.svg"
            alt="company logo"
          />
        </Link>

        <Link to="/cart">
          <button className={styles.cartBtn}>
            {data.length > 0 && (
              <span className={styles.itemsQ}>{data.length}</span>
            )}
            <img src="src\assets\cart.svg" alt="shopping cart image" />
            <span>Cart</span>
          </button>
        </Link>
      </header>
      <Outlet />
    </div>
  );
}

export { Layout };
