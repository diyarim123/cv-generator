import * as yup from "yup";

// link regex
const linkRules = /^https?:\/\//i;


const basicSchema = yup.object().shape({
  name: yup.string().required("Must be a string"),
  email: yup.string().email().required("Please enter a valid email"),
  mobile: yup.number().required("Must be number"),
  street: yup.string().required("Required"),
  city: yup.string().required("Required"),
  country: yup.string().required("Required"),
  linkedin: yup.string().matches(linkRules, "Write a URL starts with http or https").required("Enter correct url!"),
  github: yup.string().matches(linkRules, "Write a URL starts with http or https").required("Enter correct url!"),
  position: yup.string().required("Required"),
  skill: yup.string(),
  skills: yup.array(),
  photo: yup.string()
});

export default basicSchema;


