import { OrderSummaryCard } from "../OrderSummaryCard/OrderSummaryCard";
import { counter } from "../../utils/counter";
import styles from "./Summary.module.css";

import { clearAll } from "../../store/shoppingCart";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const orderDate = new Date();

function Summary() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataCart = useSelector((state) => state.shoppingCart.shoppingCart);
  const dataContacts = useSelector(
    (state) => state.shoppingCart.contactInformation
  );
  const dataAddress = useSelector(
    (state) => state.shoppingCart.shippingInformation
  );
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const subTotal = Math.round(counter(dataCart).priceTotal * 100) / 100;
  const shippingCost = Math.round(subTotal * 0.05 * 100) / 100;
  const taxCost = Math.round(subTotal * 0.1 * 100) / 100;
  const grandTotal =
    Math.round((subTotal + shippingCost + taxCost) * 100) / 100;

  return (
    <div className={styles.summaryPage}>
      <div className={styles.confirmationText}>
        <div className={styles.confirmationLogo}>
          <img src="src\assets\confirmationCircle.svg" />
          <img
            className={styles.checkmark}
            src="src\assets\confirmationCheck.svg"
          />
        </div>
        <p>
          The order confirmation email with details of your order and a link to
          track its progress has been sent to your email address.
        </p>
        <span className={styles.orderNumber}>
          <b>Your order # is 000000003 - PENDING</b>
        </span>
        <span className={styles.orderDate}>
          Order date: {orderDate.getDate()} {monthNames[orderDate.getMonth()]}{" "}
          {orderDate.getFullYear()}
        </span>
      </div>

      <div className={styles.userInfo}>
        <div className={styles.userInfoCard}>
          <div className={styles.title}>
            <img src="src\assets\userInfo1.svg" />
            <span>Contact information</span>
          </div>

          <div className={styles.info}>
            <span>
              {dataContacts.firstName} {dataContacts.lastName}
            </span>
            <span>{dataContacts.email}</span>
            <span>{dataContacts.phone}</span>
          </div>
        </div>

        <div className={styles.userInfoCard}>
          <div className={styles.title}>
            <img src="src\assets\userInfo2.svg" />
            <span>Contact information</span>
          </div>

          <div className={styles.info}>
            <span>
              {dataAddress.address}, {dataAddress.addressApt}
            </span>
            <span>
              {dataAddress.city}, {dataAddress.zip}
            </span>
            <span>
              {dataAddress.state} State, {dataAddress.country}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.orderInfo}>
        <div className={styles.orderInfo_title}>
          <img src="src\assets\orderSummary.svg" />
          <span>Order Summary</span>
        </div>

        <div className={styles.orderInfo_cards}>
          {dataCart.map((item) => {
            return (
              <OrderSummaryCard
                key={item.title}
                image={item.image}
                title={item.title}
                description={item.description}
                price={item.price}
                quantity={item.quantity}
              />
            );
          })}
        </div>

        <div className={styles.orderInfo_total}>
          <div className={styles.orderInfo_total_line}>
            <span>Subtotal:</span> <p>${subTotal}</p>
          </div>
          <div className={styles.orderInfo_total_line}>
            <span>Shipping & Handling:</span> <p>${shippingCost}</p>
          </div>
          <div className={styles.orderInfo_total_line}>
            <span>Tax:</span> <p>${taxCost}</p>
          </div>
          <div className={styles.orderInfo_total_line}>
            <span>
              {" "}
              <b>Grand Total:</b>
            </span>{" "}
            <p>
              <b>${grandTotal}</b>
            </p>
          </div>
        </div>
      </div>

      <button
        className={styles.gohome}
        onClick={() => {
          dispatch(clearAll());
          return navigate("/");
        }}
      >
        Continue shopping
      </button>
    </div>
  );
}

export { Summary };
