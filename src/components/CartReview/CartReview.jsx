import styles from "./CartReview.module.css";
import { NextBtn } from "../NextBtn/NextBtn";
import { useSelector } from "react-redux";
import { AddedItemCard } from "../AddedItemCard/AddedItemCard";
import { Link } from "react-router-dom";
import { counter } from "../../utils/counter";

function CartReview() {
  const data = useSelector((store) => store.shoppingCart.shoppingCart);

  return (
    <>
      {data.length ? (
        <div className={styles.content}>
          <h2>Cart</h2>
          <div className={styles.cartItems}>
            {data.map((item) => {
              return (
                <AddedItemCard
                  id={item.itemID}
                  key={item.itemID}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  description={item.description}
                  quantity={item.quantity}
                />
              );
            })}
          </div>

          <div className={styles.info}>
            <div className={styles.infoline}>
              <p className={styles.summary}>Together:</p>
              <span>{counter(data).itemsTotal} products</span>
            </div>
            <div className={styles.infoline}>
              <p className={styles.summary}>Total:</p>
              <span>${counter(data).priceTotal}</span>
            </div>
          </div>

          <NextBtn />
        </div>
      ) : (
        <>
          <h1 className={styles.empty}>Shopping cart is empty</h1>
          <Link className={styles.gohome} to="/">
            Go Shopping
          </Link>
        </>
      )}
    </>
  );
}

export { CartReview };
