import { useDispatch } from "react-redux";
import { addItem } from "../../store/shoppingCart";
import styles from "./BtnAdd.module.css";

function BtnAdd({ id, image, description, price, title }) {
  const dispatch = useDispatch();

  return (
    <button
      className={styles.BtnAdd}
      onClick={() => {
        dispatch(addItem({ id, image, description, price, title }));
      }}
    >
      + Add to cart
    </button>
  );
}

export { BtnAdd };
