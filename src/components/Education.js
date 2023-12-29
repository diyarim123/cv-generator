// importing Ant Design
import { Form, Input, Button, DatePicker } from "antd";

// importing Formik
import { useFormik } from "formik";

//importing moment
import moment from "moment";

//importing redux action
import { useDispatch } from "react-redux";
import { setEducationData } from "../redux/containerSlice";

//import the schema
import EducationSchema from "../schemas/EducationSchema";

const { RangePicker } = DatePicker;

export default function Education({ onNext, onPrev }) {
  const dispatch = useDispatch();

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
      college: "",
      year: [moment(), moment()],
      qualification: "",
      description: "",
      educations: [],
    },
    validationSchema: EducationSchema,
    onSubmit: async (values) => {
      dispatch(setEducationData(values));
      onNext();
    },
  });

  return (
    <div className="bg-white shadow-md p-5 rounded-md">
      <Form onFinish={handleSubmit} autoComplete="off" layout="vertical">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          <div className="flex flex-col">
            <Form.Item
              className="m-0 block"
              label="College"
              name="college"
              tooltip="This is a required field"
            >
              <Input
                value={values.college}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="EPU"
                status={
                  errors.college && touched.college ? "error" : ""
                }
              />
            </Form.Item>

            <span className="text-red-500 my-2">
              {errors.college && touched.college
                ? `${errors.college}`
                : null}
            </span>
          </div>

          <div className="flex flex-col">
            <Form.Item
              className="m-0"
              label="Qualification"
              name="qualification"
              tooltip="This is a required field"
            >
              <Input
                value={values.qualification}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Bechelor"
                status={errors.qualification && touched.qualification ? "error" : ""}
              />
            </Form.Item>

            <span className="text-red-500 my-2">
              {errors.qualification && touched.qualification
                ? `${errors.qualification}`
                : null}
            </span>
          </div>

          <Form.Item
            label="Year"
            name="year"
            tooltip="This is a required field"
          >
            <RangePicker
              value={values.year}
              onChange={(dates) => {
                setFieldValue("year", dates)
              }}
              onBlur={handleBlur}
              status={errors.year && touched.year ? "error" : ""}
              format="DD MMM YYYY"
            />
          </Form.Item>
        </div>

        <div className="flex flex-col">
          <Form.Item
            className="m-0"
            label="Description"
            name="description"
            tooltip="This is a required field"
          >
            <Input
              value={values.description}
              placeholder="Write a description"
              onChange={handleChange}
              onBlur={handleBlur}
              status={errors.description && touched.description ? "error" : ""}
            />
          </Form.Item>

          <span className="text-red-500 my-2">
            {errors.description && touched.description
              ? `${errors.description}`
              : null}
          </span>
        </div>

        <Form.List name="educations">
          {(fields, { add, remove }) => (
            <div>
              {fields.map((field, index) => (
                <div key={field.key}>
                  <div className="text-right my-2">
                    <Button onClick={() => remove(field.name)}>X</Button>
                  </div>

                  <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                    <Form.Item
                      label="College"
                      name={[field.name, "college"]}
                    >
                      <Input
                        onChange={(e) => {
                          setFieldValue(
                            `educations[${index}].college`,
                            e.target.value
                          );
                        }}
                      />
                    </Form.Item>

                    <Form.Item label="Qualification" name={[field.name, "qualification"]}>
                      <Input
                        onChange={(e) => {
                          setFieldValue(
                            `educations[${index}].qualification`,
                            e.target.value
                          );
                        }}
                      />
                    </Form.Item>

                    <Form.Item label="Year" name={[field.name, "year"]}>
                      <RangePicker
                        onChange={(dates) => {
                          setFieldValue(
                            `educations[${index}].year`,
                            dates
                          );
                        }}
                        format="DD MMM YYYY"
                      />
                    </Form.Item>
                  </div>

                  <Form.Item
                    label="Description"
                    name={[field.name, "description"]}
                  >
                    <Input
                      onChange={(e) => {
                        setFieldValue(
                          `educations[${index}].description`,
                          e.target.value
                        );
                      }}
                    />
                  </Form.Item>
                </div>
              ))}

              <div className="my-5 text-right">
                <Button onClick={() => add()} disabled={fields.length > 2}>
                  Add more educations
                </Button>
              </div>
            </div>
          )}
        </Form.List>

        <div className="flex justify-end items-end gap-2 mt-5">
          <Button onClick={() => onPrev()}>Prev</Button>
          <Button className="bg-blue-500 text-white" htmlType="submit">
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
}
