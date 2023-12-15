// import antd
import { Form, Input, Button } from "antd";

// import formik
import { useFormik } from "formik";

//import schema
import MiscellaneousSchema from "../schemas/MiscellaneousSchema";

//import redux
import { useDispatch } from "react-redux"
import { setMiscellaneousData } from "../redux/containerSlice";

export default function Miscellaneous({onNext, onPrev}) {

    const dispatch = useDispatch();

  const { values, errors, touched, handleSubmit, handleChange, handleBlur, setFieldValue } =
    useFormik({
      initialValues: {
        language: "",
        languages: ["Kurdish", "English"],
        achievement: "",
        achievements: ["Meta", "Udemy"],
        certificate: "",
        certificates: ["Meta", "Udemy"],
      },
      validationSchema: MiscellaneousSchema,
      onSubmit: async (values) => {
        dispatch(setMiscellaneousData(values));
        onNext();
      },
    });

    const handleAddLanguages = () => {
        // Use setFieldValue to update the languages array
        if (values.languages.length < 4) {
          setFieldValue("languages", [...values.languages, values.language]); 
          setFieldValue("language", ""); 
        }
    };    
    const handleRemoveLanguages = (index) => {
        const updatedLanguages = [...values.languages];
        updatedLanguages.splice(index, 1);
        setFieldValue("languages", updatedLanguages);
        
    };

    const handleAddAchievements = () => {
        // Use setFieldValue to update the achievements array
        if (values.achievements.length < 4) {
          setFieldValue("achievements", [...values.achievements, values.achievement]); 
          setFieldValue("achievement", ""); 
        }
    };    
    const handleRemoveAchievements = (index) => {
        const updatedAchievements = [...values.achievements];
        updatedAchievements.splice(index, 1);
        setFieldValue("achievements", updatedAchievements);
        
    };

    const handleAddCertificates = () => {
        // Use setFieldValue to update the certificates array
        if (values.certificates.length < 4) {
          setFieldValue("certificates", [...values.certificates, values.certificate]); 
          setFieldValue("certificate", ""); 
        }
    };    
    const handleRemoveCertificates = (index) => {
        const updatedCertificates = [...values.certificates];
        updatedCertificates.splice(index, 1);
        setFieldValue("certificates", updatedCertificates);
        
    };

  return (
    <div>
      <Form
        onFinish={handleSubmit}
      >

        <div className="flex flex-wrap gap-5 mb-5">
          <Form.Item
            className="m-0 w-[90%]"
            label="Languages"
            name="language"
          >
            <Input
              value={values.language}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter languages"
              status={errors.language && touched.language ? "error" : ""}
            />
          </Form.Item>
          <Button disabled={values.languages.length === 6 || values.language === ""} onClick={handleAddLanguages}>+</Button>
        </div>

        <div className="mb-5">
          {values.languages.length > 0 && values.languages.map((value, index) => (
            <div key={index} className="inline-block py-1 px-3 m-4 bg-blue-400 rounded-md text-white">
              <span className="mr-2">{value}</span>
              <button onClick={handleRemoveLanguages}><i className="fa-solid fa-trash" style={{color: "#ffffff"}}></i></button>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-5 mb-5">
          <Form.Item
            className="m-0 w-[90%]"
            label="Achievements"
            name="achievement"
          >
            <Input
              value={values.achievement}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter achievements"
              status={errors.achievement && touched.achievement ? "error" : ""}
            />
          </Form.Item>
          <Button disabled={values.achievements.length === 6 || values.achievement === ""} onClick={handleAddAchievements}>+</Button>
        </div>

        <div className="mb-5">
          {values.achievements.length > 0 && values.achievements.map((value, index) => (
            <div key={index} className="inline-block py-1 px-3 m-4 bg-blue-400 rounded-md text-white">
              <span className="mr-2">{value}</span>
              <button onClick={handleRemoveAchievements}><i className="fa-solid fa-trash" style={{color: "#ffffff"}}></i></button>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-5 mb-5">
          <Form.Item
            className="m-0 w-[90%]"
            label="Certificates"
            name="certificate"
          >
            <Input
              value={values.certificate}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter certificates"
              status={errors.certificate && touched.certificate ? "error" : ""}
            />
          </Form.Item>
          <Button disabled={values.certificates.length === 6 || values.certificate === ""} onClick={handleAddCertificates}>+</Button>
        </div>

        <div className="mb-5">
          {values.certificates.length > 0 && values.certificates.map((value, index) => (
            <div key={index} className="inline-block py-1 px-3 m-4 bg-blue-400 rounded-md text-white">
              <span className="mr-2">{value}</span>
              <button onClick={handleRemoveCertificates}><i className="fa-solid fa-trash" style={{color: "#ffffff"}}></i></button>
            </div>
          ))}
        </div>

        <div className="flex justify-end items-end gap-2">
          <Button onClick={() => onPrev()}>Prev</Button>
          <Button className="bg-blue-500 text-white" htmlType="submit">Next</Button>
        </div>

      </Form>
    </div>
  );
}
