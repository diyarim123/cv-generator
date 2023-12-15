// importing Ant Design
import { Form, Input, Button, DatePicker } from "antd";

// importing Formik
import { useFormik } from "formik";

//importing moment
import moment from "moment";

//importing redux action
import { setExperienceData } from "../redux/containerSlice";
import { useDispatch } from "react-redux";

//importing Schema
import ExperienceSchema from "../schemas/ExperienceSchema";

const { RangePicker } = DatePicker;

export default function Experience({ onNext, onPrev }) {
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
      organization: "",
      position: "",
      duration: [moment(), moment()],
      description: "",
      experiences: [],
    },
    validationSchema: ExperienceSchema,
    onSubmit: async (values) => {
      dispatch(setExperienceData(values));
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
              label="Organization"
              name="organization"
              tooltip="This is a required field"
            >
              <Input
                value={values.organization}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Facebook"
                status={
                  errors.organization && touched.organization ? "error" : ""
                }
              />
            </Form.Item>

            <span className="text-red-500 my-2">
              {errors.organization && touched.organization
                ? `${errors.organization}`
                : null}
            </span>
          </div>

          <div className="flex flex-col">
            <Form.Item
              className="m-0"
              label="Position"
              name="position"
              tooltip="This is a required field"
            >
              <Input
                value={values.position}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Full-Time"
                status={errors.position && touched.position ? "error" : ""}
              />
            </Form.Item>

            <span className="text-red-500 my-2">
              {errors.position && touched.position
                ? `${errors.position}`
                : null}
            </span>
          </div>

          <Form.Item
            label="Duration"
            name="duration"
            tooltip="This is a required field"
          >
            <RangePicker
              value={values.duration}
              onChange={(dates) => setFieldValue("duration", dates)}
              onBlur={handleBlur}
              status={errors.duration && touched.duration ? "error" : ""}
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

        <Form.List name="experiences">
          {(fields, { add, remove }) => (
            <div>
              {fields.map((field, index) => (
                <div key={field.key}>
                  <div className="text-right my-2">
                    <Button onClick={() => remove(field.name)}>X</Button>
                  </div>

                  <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                    <Form.Item
                      label="Organization"
                      name={[field.name, "organization"]}
                    >
                      <Input
                        onChange={(e) => {
                          setFieldValue(
                            `experiences[${index}].organization`,
                            e.target.value
                          );
                        }}
                      />
                    </Form.Item>

                    <Form.Item label="Position" name={[field.name, "position"]}>
                      <Input
                        onChange={(e) => {
                          setFieldValue(
                            `experiences[${index}].position`,
                            e.target.value
                          );
                        }}
                      />
                    </Form.Item>

                    <Form.Item label="Duration" name={[field.name, "duration"]}>
                      <RangePicker
                        onChange={(dates) => {
                          setFieldValue(
                            `experiences[${index}].duration`,
                            dates
                          );
                        }}
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
                          `experiences[${index}].description`,
                          e.target.value
                        );
                      }}
                    />
                  </Form.Item>
                </div>
              ))}

              <div className="my-5 text-right">
                <Button onClick={() => add()} disabled={fields.length > 2}>
                  Add more experience
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
