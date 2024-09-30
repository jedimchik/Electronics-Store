import styles from "./InputField.module.css";
import { Field, ErrorMessage as Error } from "formik";

function InputField({ id, label, name, placeholder }) {
  return (
    <div className={styles.inputField}>
      <label htmlFor={id}>{label}</label>
      <Field
        className={styles.inputText}
        name={name}
        id={id}
        placeholder={placeholder}
      />
      <Error name={name}>{(error) => <span>{error}</span>}</Error>
    </div>
  );
}

export { InputField };
