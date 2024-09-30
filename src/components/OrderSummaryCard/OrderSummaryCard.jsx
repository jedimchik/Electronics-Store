import styles from "./OrderSummaryCard.module.css";

function OrderSummaryCard({ image, title, description, price, quantity }) {
  return (
    <div className={styles.OrderSummaryCard}>
      <div className={styles.OrderSummaryCard_main}>
        <img className={styles.OrderSummaryCard_img} src={image} />
        <div className={styles.OrderSummaryCard_info}>
          <div>
            <b>{title}</b> - {description}
          </div>
          <div>
            <b>
              <span>${price}</span>, <span>{quantity} product</span>{" "}
            </b>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export { OrderSummaryCard };
