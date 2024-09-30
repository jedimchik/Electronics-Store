import { Field, ErrorMessage as Error } from "formik";
import styles from "./SelectField.module.css";

function SelectField({
  countrySelected,
  setCountrySelected,
  name,
  placeholder,
  id,
  label,
}) {
  if (!countrySelected) {
    countrySelected = "empty";
  }

  const countries = [
    { USA: "USA" },
    { Kazakhstan: "Kazakhstan" },
    { South_Korea: "South Korea" },
  ];

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
  switch (countrySelected) {
    case "empty":
      choice = countries;
    case "USA":
      choice = USAStates;
    case "Kazakhstan":
      choice = kazStates;
    case "South_Korea":
      choice = KoreaStates;
  }

  return (
    <div className={styles.selectCountry}>
      <label htmlFor={id}>{label}</label>
      <Field
        className={styles.inputText}
        id={id}
        as="select"
        onClick={(e) => {
          if (setCountrySelected) {
            setCountrySelected(e.target.value);
          }
        }}
        name={name}
        placeholder={placeholder}
      >
        <option>--{placeholder}--</option>
        {countries.map((item) => {
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

export { SelectField };
