import * as yup from "yup"

const EducationSchema = yup.object().shape({
    college: yup.string().required("Required!"),
    qualification: yup.string().required("Required!"),
    year: yup.array(),
    description: yup.string().required("Required!"),
    educations: yup.array()
})


export default EducationSchema;