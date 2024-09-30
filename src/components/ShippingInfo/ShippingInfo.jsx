import { InputField } from "../InputField";
import { SelectField } from "../SelectField/SelectField";
import { SelectState } from "../SelectState/";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./ShippingInfo.module.css";
import { useDispatch } from "react-redux";
import { storeShippingInfo } from "../../store/shoppingCart";

const regx = {
  address: /[A-Za-z0-9'\.\-\s\,]/,
  addressApt: /^([a-zA-z0-9/\\''(),-\s]{1,255})$/,
  city: /^[а-яА-Яa-zA-Z]{2,20}$/,
  zip: /^\d{6}(?:[-\s]\d{4})?$/,
};

const address = Yup.string()
  .matches(regx.address, "Enter a valid address")
  .required("Address is required");

const addressApt = Yup.string().matches(
  regx.addressApt,
  "Enter a valid apartment number"
);

const city = Yup.string()
  .matches(regx.city, "Enter a valid city name only alphabetical chars")
  .required("city is required");

const country = Yup.string()
  .required("country is required")
  .oneOf(["USA", "Kazakhstan", "South_Korea"]);

const state = Yup.string().required("state is required");

const zip = Yup.string()
  .matches(regx.zip, "Enter a valid ZIP code")
  .required("zip is required");

const schemas = {
  custom: Yup.object().shape({
    address,
    addressApt,
    city,
    country,
    state,
    zip,
  }),
};

const initialValues = {
  address: "",
  addressApt: "",
  city: "",
  country: "",
  state: "",
  zip: "",
};

function ShippingInfo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [countrySelected, setCountrySelected] = useState("");
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schemas.custom}
      onSubmit={(value) => {
        dispatch(storeShippingInfo({ shippingInfo: value }));

        return navigate("/summary");
      }}
    >
      <Form className={styles.shippingInfoForm}>
        <InputField
          id="address1"
          label="Address(No P. O. Boxes)*"
          name="address"
          placeholder="Enter your address"
        />
        <InputField
          id="addressApt"
          label="Apartment, suite etc."
          name="addressApt"
          placeholder="Enter your apartment information"
        />
        <InputField
          id="city"
          label="City*"
          name="city"
          placeholder="Enter your city"
        />
        <section className={styles.regionSection}>
          <SelectField
            setCountrySelected={setCountrySelected}
            name={"country"}
            placeholder="Select your country"
            id="country"
            label="Country/Region*"
          />
          <SelectState
            countrySelected={countrySelected}
            name={"state"}
            placeholder="Select your state"
            id="state"
            label="State*"
          />
          <InputField
            className={styles.zipBlock}
            id="zip"
            label="ZIP code*"
            name="zip"
            placeholder="Enter your zip code"
          />
        </section>
        <button className={styles.submitBtn} type="submit">
          Submit order
        </button>
      </Form>
    </Formik>
  );
}
export { ShippingInfo };
