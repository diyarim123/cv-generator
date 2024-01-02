//import hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//import antd
import { Button, Form, Input, message, Upload, Space, Alert } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

//import Formik
import { useFormik } from "formik";

//import Schema Yup
import PersonalSchema from "../schemas/PersonalSchema";

//importing redux
import { useDispatch } from "react-redux";
import { setPersonalData } from "../redux/containerSlice";

const beforeUpload = (file) => {
  const isJpgOrPng =
    file.type === "image/jpeg" ||
    file.type === "image/png" ||
    file.type === "image/jpg";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

// component
export default function Personal({ onNext }) {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [isPictureUploaded, setIsPictureUploaded] = useState(true);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      street: "",
      city: "",
      country: "",
      linkedin: "",
      github: "",
      position: "",
      skill: "",
      skills: [],
      photo: "",
    },
    validationSchema: PersonalSchema,
    onSubmit: async () => {
      dispatch(setPersonalData(values));
      onNext();
    },
  });

  const handlePicture = () => {
    if (values.photo === "") {
      setIsPictureUploaded(false);
    } else {
      setIsPictureUploaded(true);
    }
  };

  const handleFileChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Use createObjectURL to generate a URL for the image
      const imageUrl = URL.createObjectURL(info.file.originFileObj);
      setLoading(false);
      setImageUrl(imageUrl);
      setFieldValue("photo", imageUrl);
    }
  };

  const handleAddSkill = () => {
    // Use setFieldValue to update the skills array
    if (values.skills.length < 6) {
      setFieldValue("skills", [...values.skills, values.skill]);
      setFieldValue("skill", ""); // Clear the input field
    }
  };

  const handleRemoveSkill = (index) => {
    // Use setFieldValue to update the skills array by removing the item at the specified index
    const updatedSkills = [...values.skills];
    updatedSkills.splice(index, 1);
    setFieldValue("skills", updatedSkills);
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <div className="bg-white shadow-md p-5 rounded-md">
      <Form onFinish={() => handleSubmit()}>
        <div className="grid grid-cols-1 gap-5 mb-5">
          <div className="flex flex-col">
            <Form.Item className="m-0" label="Name" name="name">
              <Input
                value={values.name}
                onChange={handleChange}
                placeholder="Enter your name"
                onBlur={handleBlur}
                status={errors.name && touched.name ? "error" : null}
              />
            </Form.Item>
            <p className="text-red-500 ">
              {errors.name && touched.name ? `${errors.name}` : null}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Form.Item className="m-0" label="Email" name="email">
              <Input
                value={values.email}
                onChange={handleChange}
                type="email"
                placeholder="Enter your email"
                onBlur={handleBlur}
                status={errors.email && touched.email ? "error" : null}
              />
            </Form.Item>
            <p className="text-red-500 ">
              {errors.email && touched.email ? `${errors.email}` : null}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Form.Item className="m-0" label="Mobile" name="mobile">
              <Input
                value={values.mobile}
                onChange={handleChange}
                type="number"
                placeholder="Enter your phone number"
                onBlur={handleBlur}
                status={errors.mobile && touched.mobile ? "error" : null}
              />
            </Form.Item>
            <p className="text-red-500 ">
              {errors.mobile && touched.mobile ? `${errors.mobile}` : null}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mb-5">
          <div className="flex flex-col gap-2">
            <Form.Item className="m-0" label="Street" name="street">
              <Input
                value={values.street}
                onChange={handleChange}
                placeholder="Enter your street"
                onBlur={handleBlur}
                status={errors.street && touched.street ? "error" : null}
              />
            </Form.Item>
            <p className="text-red-500 ">
              {errors.street && touched.street ? `${errors.street}` : null}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Form.Item className="m-0" label="City" name="city">
              <Input
                value={values.city}
                onChange={handleChange}
                placeholder="Enter your city"
                onBlur={handleBlur}
                status={errors.city && touched.city ? "error" : null}
              />
            </Form.Item>
            <p className="text-red-500 ">
              {errors.city && touched.city ? `${errors.city}` : null}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Form.Item className="m-0" label="Country" name="country">
              <Input
                value={values.country}
                onChange={handleChange}
                placeholder="Enter your country"
                onBlur={handleBlur}
                status={errors.country && touched.country ? "error" : null}
              />
            </Form.Item>
            <p className="text-red-500 ">
              {errors.country && touched.country ? `${errors.country}` : null}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-2 gap-5 mb-5">
          <div className="flex flex-col gap-2">
            <Form.Item className="m-0" label="Linkedin" name="linkedin">
              <Input
                value={values.linkedin}
                onChange={handleChange}
                placeholder="Enter your linkedin account"
                onBlur={handleBlur}
                status={errors.linkedin && touched.linkedin ? "error" : null}
              />
            </Form.Item>
            <p className="text-red-500 ">
              {errors.linkedin && touched.linkedin
                ? `${errors.linkedin}`
                : null}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Form.Item className="m-0" label="Github" name="github">
              <Input
                value={values.github}
                onChange={handleChange}
                placeholder="Enter your github account"
                onBlur={handleBlur}
                status={errors.github && touched.github ? "error" : null}
              />
            </Form.Item>
            <p className="text-red-500 ">
              {errors.github && touched.github ? `${errors.github}` : null}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <Form.Item className="m-0" label="Position" name="position">
            <Input
              value={values.position}
              onChange={handleChange}
              placeholder="Front-End Developer"
              onBlur={handleBlur}
              status={errors.position && touched.position ? "error" : null}
            />
          </Form.Item>
          <p className="text-red-500 ">
            {errors.position && touched.position ? `${errors.position}` : null}
          </p>
        </div>

        <div className="flex flex-wrap gap-5 mb-5">
          <Form.Item className="m-0 w-[90%]" label="Skills" name="skill">
            <Input
              value={values.skill}
              onChange={handleChange}
              placeholder="Enter your skills"
              onBlur={handleBlur}
              status={errors.skill && touched.skill ? "error" : null}
            />
          </Form.Item>
          <Button
            disabled={values.skills.length === 6 || values.skill === ""}
            onClick={handleAddSkill}
          >
            +
          </Button>
        </div>

        <div className="mb-5">
          {values.skills.length > 0 &&
            values.skills.map((value, index) => (
              <div
                key={index}
                className="inline-block py-1 px-3 m-4 bg-blue-400 rounded-md text-white"
              >
                <span className="mr-2">{value}</span>
                <button onClick={handleRemoveSkill}>
                  <i
                    className="fa-solid fa-trash"
                    style={{ color: "#ffffff" }}
                  ></i>
                </button>
              </div>
            ))}
        </div>

        <div className="flex gap-5 w-[20%] h-[10rem] mb-5">
          <div>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              beforeUpload={beforeUpload}
              onChange={handleFileChange}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{
                    width: "100%",
                  }}
                />
              ) : (
                uploadButton
              )}
            </Upload>
            <p>Only PNG, JPEG, or JPG</p>
          </div>
          {isPictureUploaded === false ? (
            <Space
              direction="vertical"
              style={{
                marginBottom: "1rem",
              }}
            >
              <Alert
                message="Warning"
                description="Please upload a photo!"
                type="warning"
                showIcon
                closable
              />
            </Space>
          ) : null}
        </div>

        <div className="flex justify-end items-end gap-2">
          <Button onClick={() => navigate("/")}>Prev</Button>
          <Button
            className="bg-blue-500 text-white"
            htmlType="submit"
            onClick={handlePicture}
          >
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
}
