const regx = {
  name: /^[aA-zZ]+$/,
};
const firstName = Yup.string()
  .matches(regx.name, "Enter you first name using alphabetical characters a-z")
  .required("This field is required");

const schemas = {
  custom: Yup.object().shape({
    firstName,
  }),
};
