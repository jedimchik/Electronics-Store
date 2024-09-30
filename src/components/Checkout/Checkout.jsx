import { Routes, Route, NavLink } from "react-router-dom";
import styles from "./Checkout.module.css";
import { CartReview } from "../CartReview/CartReview";
import { ContactInfoForm } from "../ContactInfoForm";
import { ShippingInfo } from "../ShippingInfo";
import { Summary } from "../Summary";
import { useSelector } from "react-redux";

function Checkout() {
  const dataCart = useSelector((store) => store.shoppingCart.shoppingCart);
  const dataContacts = useSelector(
    (store) => store.shoppingCart.contactInformation
  );

  return (
    <div className={styles.content}>
      <nav className={styles.navigation}>
        <NavLink to="/cart">Cart</NavLink>
        <span className={styles.symbol}>&gt;</span>
        {dataCart.length ? (
          <NavLink to="/contactInfo">Contact Information</NavLink>
        ) : (
          <span className={styles.disabledNav}>Contact Information</span>
        )}
        <span className={styles.symbol}>&gt;</span>
        {dataContacts ? (
          <NavLink to="/shippingInfo">Shipping Information</NavLink>
        ) : (
          <span className={styles.disabledNav}>Shipping Information</span>
        )}
      </nav>

      <Routes>
        <Route path="/cart" element={<CartReview />}></Route>
        <Route path="/contactInfo" element={<ContactInfoForm />}></Route>
        <Route path="/shippingInfo" element={<ShippingInfo />}></Route>
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </div>
  );
}

export { Checkout };
