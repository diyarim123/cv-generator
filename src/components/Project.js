// importing Ant Design
import { Form, Input, Button } from "antd";

// importing Formik
import { useFormik } from "formik";

//importing the Schema
import ProjectSchema from "../schemas/ProjectSchema";

//importing redux action
import { useDispatch } from "react-redux";
import { setProjectData } from "../redux/containerSlice";

export default function Project({ onNext, onPrev }) {
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
      title: "",
      link: "",
      description: "",
      projects: [],
    },
    validationSchema: ProjectSchema,
    onSubmit: async (values) => {
      dispatch(setProjectData(values));
      onNext();
    },
  });

  return (
    <div className="bg-white shadow-md p-5 rounded-md">
      <Form onFinish={handleSubmit} autoComplete="off" layout="vertical">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <div className="flex flex-col">
            <Form.Item
              className="m-0"
              label="Title"
              name="title"
              tooltip="This is a required field"
            >
              <Input
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Kurd.Movie"
                status={errors.title && touched.title ? "error" : ""}
              />
            </Form.Item>

            <span className="text-red-500 my-2">
              {errors.title && touched.title ? `${errors.title}` : null}
            </span>
          </div>

          <div className="flex flex-col">
            <Form.Item
              className="m-0"
              label="Link"
              name="link"
              tooltip="This is a required field"
            >
              <Input
                value={values.link}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="https://github.com/diyarim123/Kurd.Movie"
                status={errors.link && touched.link ? "error" : ""}
              />
            </Form.Item>

            <span className="text-red-500 my-2">
              {errors.link && touched.link ? `${errors.link}` : null}
            </span>
          </div>
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

        <Form.List name="project">
          {(fields, { add, remove }) => (
            <div>
              {fields.map((field, index) => (
                <div key={field.key}>
                  <div className="text-right my-2">
                    <Button onClick={() => remove(field.name)}>X</Button>
                  </div>

                  <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                    <Form.Item label="Title" name={[field.name, "title"]}>
                      <Input
                        onChange={(e) => {
                          setFieldValue(
                            `projects[${index}].title`,
                            e.target.value
                          );
                        }}
                      />
                    </Form.Item>

                    <Form.Item label="Link" name={[field.name, "link"]}>
                      <Input
                        onChange={(e) => {
                          setFieldValue(
                            `projects[${index}].link`,
                            e.target.value
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
                          `projects[${index}].description`,
                          e.target.value
                        );
                      }}
                    />
                  </Form.Item>
                </div>
              ))}

              <div className="my-5 text-right">
                <Button onClick={() => add()} disabled={fields.length > 2}>
                  Add more projects
                </Button>
              </div>
            </div>
          )}
        </Form.List>

        <div className="flex justify-end items-end gap-2 mt-5">
          <Button>Prev</Button>
          <Button className="bg-blue-500 text-white" htmlType="submit">
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
}
