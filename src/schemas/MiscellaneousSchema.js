import * as yup from "yup"


const MiscellaneousSchema = yup.object().shape({
    language: yup.string(),
    languages: yup.array().required("Please provide languages"),
    achievement: yup.string(),
    achievements: yup.array().required("Please provide achievements"),
    certificate: yup.string(),
    certificates: yup.array().required("Please provide certificates")
})

export default MiscellaneousSchema;