import styles from "./AddedItemCard.module.css";
import { useDispatch } from "react-redux";
import { addOne, lessOne, deleteItem } from "../../store/shoppingCart";

function AddedItemCard({ image, title, price, description, quantity, id }) {
  const dispatch = useDispatch();

  function lessClick(q) {
    if (q > 1) {
      dispatch(lessOne({ id }));
    }
  }

  function addClick() {
    dispatch(addOne({ id }));
  }

  function deleteClick() {
    dispatch(deleteItem({ id }));
  }

  return (
    <div className={styles.AddedItemCard}>
      <img src={image} alt="Product Image" />
      <div className={styles.info1}>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className={styles.quantityBlock}>
          <button
            className={quantity == 1 ? styles.disabled : undefined}
            onClick={() => lessClick(quantity)}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => {
              addClick();
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className={styles.info2}>
        <button
          onClick={() => {
            deleteClick();
          }}
        >
          <img src="src\assets\trash.svg" alt="" /> Delete
        </button>
        <div>
          <span>Price:</span>
          <span> ${price}</span>
        </div>
      </div>
    </div>
  );
}

export { AddedItemCard };
