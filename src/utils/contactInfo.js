import * as Yup from "yup";

const regx = {
  name: /^[aA-zZ]+$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/,
};

const firstName = Yup.string()
  .matches(regx.name, "Enter you first name using alphabetical characters a-z")
  .required("This field is required");

const lastName = Yup.string()
  .matches(regx.name, "Кириллица латиница от 2 до 20 символов")
  .required("Введите фамилию");

const email = Yup.string()
  .matches(regx.email, "Формат example@mail.com")
  .required("Введите email");

const schemas = {
  custom: Yup.object().shape({
    firstName,
    lastName,
    email,
  }),
};

const initialVal = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

export { initialVal, schemas };
