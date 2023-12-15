import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

import React from "react";



export default function PDFFile({
  personal_data,
  experience_data,
  project_data,
  education_data,
  miscellaneous_data,
  color_data,
}) {

  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#fff",
      color: color_data
    },
    section: {
      margin: 6,
      padding: 35,
      flexGrow: 1,
    },
    leftColumn: {
      width: "40%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#E4E4E4",
    },
    rightColumn: {
      width: "60%",
    },
    header: {
      margin: 16,
      fontSize: 12,
    },
    title: {
      margin: 16,
      fontSize: 20,
      fontWeight: "bold",
    },
    subTitle: {
      margin: 16,
      fontSize: 18,
      fontWeight: "semibold",
    },
    name: {
      fontSize: 14,
      fontWeight: "bold",
    },
    position: {
      fontSize: 8,
      fontStyle: "italic",
    },
    text: {
      margin: 14,
      fontSize: 8,
      textAlign: "justify",
    },
    link: {
      margin: 14,
      fontSize: 8,
      textAlign: "justify",
    },
    image: {
      width: "70%",
      height: "20%",
      borderRadius: "100%",
      overflow: "hidden",
      objectFit: "cover",
      margin: "auto",
      marginTop: 6,
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Left column */}
        <View style={styles.leftColumn}>
          <Image src={personal_data.photo} style={styles.image} />
          <Text style={styles.header}>Personal Info</Text>
          <Text
            style={styles.text}
          >{`${personal_data.city}, ${personal_data.country}`}</Text>
          <Text style={styles.text}>{personal_data.street}</Text>
          <Text style={styles.text}>{`${personal_data.mobile}`}</Text>
          <Text style={styles.text}>{personal_data.email}</Text>
          <Link style={styles.link} src={personal_data.linkedin}>
            Linked In
          </Link>
          <Link style={styles.link} src={personal_data.github}>
            Github
          </Link>

          <Text style={styles.header}>Skills</Text>
          {personal_data.skills.length > 0 &&
            personal_data.skills.map((value, index) => (
              <Text key={index} style={styles.text}>
                {value}
              </Text>
            ))}

          <Text style={styles.header}>Languages</Text>
          {miscellaneous_data.languages.length > 0 &&
            miscellaneous_data.languages.map((value, index) => (
              <Text key={index} style={styles.text}>
                {value}
              </Text>
            ))}
          <Text style={styles.header}>Achievements</Text>
          {miscellaneous_data.achievements.length > 0 &&
            miscellaneous_data.achievements.map((value, index) => (
              <Text key={index} style={styles.text}>
                {value}
              </Text>
            ))}
          <Text style={styles.header}>Certificates</Text>
          {miscellaneous_data.certificates.length > 0 &&
            miscellaneous_data.certificates.map((value, index) => (
              <Text key={index} style={styles.text}>
                {value}
              </Text>
            ))}
        </View>

        {/* Right Column */}
        <View style={styles.rightColumn}>
          <Text style={styles.title}>{personal_data.name}</Text>
          <Text style={styles.subTitle}>{personal_data.position}</Text>

          <Text style={styles.subTitle}>Experience</Text>
          <Text style={styles.header}>{experience_data.organization}</Text>
          <Text style={styles.text}>{experience_data.position}</Text>
          <Text
            style={styles.text}
          >{`(${experience_data.duration[0]} - ${experience_data.duration[1]})`}</Text>
          <Text style={styles.text}>{experience_data.description}</Text>
          {experience_data.experiences.length > 0 &&
            experience_data.experiences.map((values, index) => (
              <div>
                <Text style={styles.header}>{values.organization}</Text>
                <Text style={styles.text}>{values.position}</Text>
                <Text
                  style={styles.text}
                >{`(${values.duration[0]} - ${values.duration[1]})`}</Text>
                <Text style={styles.text}>{values.description}</Text>
              </div>
            ))}

          <Text style={styles.subTitle}>Projects</Text>
          <Text style={styles.header}>{project_data.title}</Text>
          <Link style={styles.link} src={project_data.link}>
            Demo
          </Link>
          <Text style={styles.text}>{project_data.description}</Text>
          {project_data.projects.length > 0 &&
            project_data.projects.map((value, index) => (
              <div>
                <Text style={styles.header}>{value.title}</Text>
                <Link style={styles.link} src={value.link}>
                  Demo
                </Link>
                <Text style={styles.text}>{value.description}</Text>
              </div>
            ))}

          <Text style={styles.subTitle}>Education</Text>
          <Text style={styles.header}>{education_data.college}</Text>
          <Text style={styles.text}>{education_data.qualification}</Text>
          <Text
            style={styles.text}
          >{`(${education_data.year[0]} - ${education_data.year[1]})`}</Text>
          <Text style={styles.text}>{education_data.description}</Text>
          {education_data.educations.length > 0 &&
            education_data.educations.map((value, index) => (
              <div>
                <Text style={styles.header}>{value.college}</Text>
                <Text style={styles.text}>{value.qualification}</Text>
                <Text
                  style={styles.text}
                >{`(${value.year[0]} - ${value.year[1]})`}</Text>
                <Text style={styles.text}>{value.description}</Text>
              </div>
            ))}
        </View>
      </Page>
    </Document>
  );
}
