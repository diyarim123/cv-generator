import * as yup from "yup";


const ExperienceSchema = yup.object().shape({
    organization: yup.string().required("Required!"),
    position: yup.string().required("Required!"),
    duration: yup.array().required("Please select a time!"),
    description: yup.string().required("Required!"),
    experiences: yup.array()
});

export default ExperienceSchema;