import { Field, ErrorMessage as Error } from "formik";
import styles from "./SelectState.module.css";

function SelectState({ countrySelected, name, placeholder, id, label }) {
  const kazStates = [
    { Akmola: "Akmola Region" },
    { Almaty: "Almaty Region" },
    { Jambyl: "Jambyl Region" },
    { Pavlodar: "Pavlodar Region" },
  ];

  const USAStates = [
    { Alaska: "Alaska" },
    { Connecticut: "Connecticut" },
    { Indiana: "Indiana" },
    { Missouri: "Missouri" },
    { Nevada: "Nevada" },
    { Pennsylvania: "Pennsylvania" },
  ];

  const KoreaStates = [
    { Gangwon: "Gangwon" },
    { NorthChungcheong: "North Chungcheong" },
    { Jeju: "Jeju" },
    { SouthGyeongsang: " South Gyeongsang" },
  ];

  let choice = [];

  if (!countrySelected) {
    choice = [];
  }

  switch (countrySelected) {
    case "USA":
      choice = USAStates;
      break;
    case "Kazakhstan":
      choice = kazStates;
      break;
    case "South_Korea":
      choice = KoreaStates;
      break;
  }

  return (
    <div className={styles.selectState}>
      <label htmlFor={id}>{label}</label>
      <Field
        className={styles.inputText}
        id={id}
        as="select"
        name={name}
        placeholder={placeholder}
      >
        <option></option>
        {choice.map((item) => {
          return (
            <option key={Object.keys(item)[0]} value={Object.keys(item)[0]}>
              {Object.values(item)[0]}
            </option>
          );
        })}
      </Field>
      <Error name={name}>{(error) => <span>{error}</span>}</Error>
    </div>
  );
}

export { SelectState };
