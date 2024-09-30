import styles from "./ProductCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { addItem } from "../../store/shoppingCart";
import { BtnAdd } from "../BtnAdd";
import { BtnAdded } from "../BtnAdded/BtnAdded";

function ProductCard({ image, title, price, description, id }) {
  const data = useSelector((store) => store.shoppingCart.shoppingCart);

  //test if item is added
  function isPresent(objList, item) {
    let result = false;
    objList.forEach((element) => {
      if (element.itemID == item) {
        result = true;
      }
    });
    return result;
  }

  return (
    <div className={styles.card}>
      <img src={image} />
      <p>
        {title} - {description}
      </p>
      <span>${price}</span>
      {isPresent(data, id) ? (
        <BtnAdded />
      ) : (
        <BtnAdd
          id={id}
          image={image}
          description={description}
          price={price}
          title={title}
        />
      )}
    </div>
  );
}

export { ProductCard };
