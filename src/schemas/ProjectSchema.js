import * as yup from "yup";

// link regex
const linkRules = /^https?:\/\//i;

const ProjectSchema = yup.object().shape({
    title: yup.string().required("Required!"),
    link: yup.string().matches(linkRules, "Must starts with http or https").required("Must starts with http or https!"),
    description: yup.string().required("Required!"),
    projects: yup.array()
});

export default ProjectSchema;