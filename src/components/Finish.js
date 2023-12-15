import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFFile from "./PDFFile";

import { useSelector } from "react-redux";


export default function Finish() {
  const {
    personal_data,
    experience_data,
    project_data,
    education_data,
    miscellaneous_data,
    color_data,
  } = useSelector((state) => state.data_container);

  return (
    <div>
      <PDFDownloadLink
        document={
          <PDFFile
            personal_data={personal_data}
            experience_data={experience_data}
            project_data={project_data}
            education_data={education_data}
            miscellaneous_data={miscellaneous_data}
            color_data={color_data}
          />
        }
        filename="FORM"
      >
        {({ loading }) =>
          loading ? (
            <button>Loading Document...</button>
          ) : (
            <div className="flex flex-col items-center justify-center text-center gap-5 p-5">
                <p className="text-2xl font-semibold text-black">Congrats your CV is Ready</p>
                <p className="text-9xl"><i class="fa-solid fa-circle-check" style={{color: "#27be2a"}}></i></p>
                <button className="py-1 px-2 rounded-md bg-cyan-500 text-white">Download CV</button>
            </div>
          )
        }
      </PDFDownloadLink>
      {/* <PDFFile /> */}
    </div>
  );
}
