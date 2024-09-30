import styles from "./MainGalery.module.css";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import info from "../../../src/assets/data.json";

function MainGalery() {
  return (
    <div className={styles.productList}>
      {info.map((item) => {
        return (
          <ProductCard
            key={item._id}
            id={item._id}
            image={item.image}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        );
      })}
    </div>
  );
}

export { MainGalery };
