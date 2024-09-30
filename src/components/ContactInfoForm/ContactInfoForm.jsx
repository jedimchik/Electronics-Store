import styles from "./ContactInfoForm.module.css";
import { InputField } from "../InputField";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { storeContactInfo } from "../../store/shoppingCart.js";

const regx = {
  name: /^[а-яА-Яa-zA-Z]{2,20}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/,
  phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
};

const firstName = Yup.string()
  .matches(regx.name, "Only letters between 2 and 20 characters")
  .required("first name is required");

const lastName = Yup.string()
  .matches(regx.name, "Only letters between 2 and 20 characters")
  .required("last name is required");

const email = Yup.string()
  .matches(regx.email, "Enter the right email format example@mail.com")
  .required("email is required");

const phone = Yup.string()
  .matches(regx.phone, "Please enter a valid phone number")
  .required("phone number is required");

const schemas = {
  custom: Yup.object().shape({
    firstName,
    lastName,
    email,
    phone,
  }),
};

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

function ContactInfoForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schemas.custom}
      onSubmit={(values) => {
        dispatch(storeContactInfo({ contactInfo: values }));
        return navigate("/shippingInfo");
      }}
    >
      <Form className={styles.contactInfoform}>
        <div>
          <InputField
            label="First Name*"
            name="firstName"
            id="firstName"
            placeholder="Enter your first name"
          />

          <InputField
            label="Last Name*"
            name="lastName"
            id="lastName"
            placeholder="Enter your last name"
          />
        </div>
        <div>
          <InputField
            label="Email*"
            name="email"
            id="email"
            placeholder="Enter your email"
          />

          <InputField
            label="Phone*"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
          />
        </div>

        <button type="submit">SEND</button>
      </Form>
    </Formik>
  );
}

export { ContactInfoForm };
