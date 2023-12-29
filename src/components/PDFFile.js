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
    container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap' ,
      marginHorizontal: 10
    },
    leftColumn: {
      width: "40%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#0939E7",
      color: "#fff"
    },
    rightColumn: {
      width: "60%",
    },
    header: {
      margin: 10,
      fontSize: 12,
    },
    title: {
      margin: 16,
      fontSize: 22,
      fontWeight: "bold",
    },
    subTitle: {
      marginHorizontal: 16,
      marginTop: 6,
      marginBottom: 18,
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
      marginVertical: 12,
      marginHorizontal: 6,
      fontSize: 8,
      textAlign: "justify",
      lineHeight: 0
    },
    link: {
      marginVertical: 12,
      marginHorizontal: 6,
      fontSize: 8,
      textAlign: "justify",
      color: "#fff"
    },
    image: {
      width: "70%",
      height: "20%",
      borderRadius: "100%",
      overflow: "hidden",
      objectFit: "cover",
      margin: "auto",
      marginTop: 6,
      marginBottom: 10,
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Left column */}
        <View style={styles.leftColumn}>
          <Image src={personal_data.photo} style={styles.image} />

          <Text style={styles.header}>Personal Info</Text>
          <View style={styles.container}>
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
          </View>

          <Text style={styles.header}>Skills</Text>
          <View style={styles.container}>
            {personal_data.skills.length > 0 &&
              personal_data.skills.map((value, index) => (
                <Text key={index} style={styles.text}>
                  {value}
                </Text>
              ))}
          </View>

          <Text style={styles.header}>Languages</Text>
          <View style={styles.container}>
            {miscellaneous_data.languages.length > 0 &&
              miscellaneous_data.languages.map((value, index) => (
                <Text key={index} style={styles.text}>
                  {value}
                </Text>
              ))}
          </View>

          <Text style={styles.header}>Achievements</Text>
          <View style={styles.container}>
            {miscellaneous_data.achievements.length > 0 &&
              miscellaneous_data.achievements.map((value, index) => (
                <Text key={index} style={styles.text}>
                  {value}
                </Text>
              ))}
          </View>

          <Text style={styles.header}>Certificates</Text>
          <View style={styles.container}>
            {miscellaneous_data.certificates.length > 0 &&
              miscellaneous_data.certificates.map((value, index) => (
                <Text key={index} style={styles.text}>
                  {value}
                </Text>
              ))}
          </View>

        </View>

        {/* Right Column */}
        <View style={styles.rightColumn}>
          <Text style={styles.title}>{personal_data.name}</Text>
          <Text style={styles.subTitle}>{personal_data.position}</Text>

          <Text style={styles.subTitle}>Experience</Text>
          <View style={styles.container}>
            <Text style={styles.header}>{experience_data.organization} - </Text>
            <Text style={{fontSize: 8, marginHorizontal: 4, marginVertical: 12}}>{experience_data.position}</Text>
            <Text
              style={styles.text}
            >{`(${experience_data.duration[0]} - ${experience_data.duration[1]})`}</Text>
            <Text style={styles.text}>{experience_data.description}</Text>
            {experience_data.experiences.length > 0 &&
              experience_data.experiences.map((values, index) => (
                <div>
                  <Text style={{width: '100%',margin: 10, fontSize: 12}}>{values.organization} - </Text>
                  <Text style={styles.text}>{values.position}</Text>
                  <Text
                    style={styles.text}
                  >{`(${values.duration[0]} - ${values.duration[1]})`}</Text>
                  <Text style={styles.text}>{values.description}</Text>
                </div>
              ))}
          </View>

          <Text style={styles.subTitle}>Projects</Text>
          <View style={styles.container}>
            <Text style={{width: '100%',margin: 10, fontSize: 12}}>{project_data.title}</Text>
            <Link style={{marginVertical: 12, marginHorizontal: 6, fontSize: 8, textAlign: "justify"}} src={project_data.link}>
              Demo - 
            </Link>
            <Text style={styles.text}>{project_data.description}</Text>
            {project_data.projects.length > 0 &&
              project_data.projects.map((value, index) => (
                <div>
                  <Text style={styles.header}>{value.title}</Text>
                  <Link style={{marginVertical: 12, marginHorizontal: 6, fontSize: 8, textAlign: "justify"}} src={value.link}>
                    Demo -
                  </Link>
                  <Text style={styles.text}>{value.description}</Text>
                </div>
              ))}
          </View>

          <Text style={styles.subTitle}>Education</Text>
          <View style={styles.container}>
            <Text style={{width: '100%',margin: 10, fontSize: 12}}>{education_data.college}</Text>
            <Text style={styles.text}>{education_data.qualification} - </Text>
            <Text
              style={styles.text}
            >{`(${education_data.year[0]} - ${education_data.year[1]})`}</Text>
            <Text style={styles.text}>{education_data.description}</Text>
            {education_data.educations.length > 0 &&
              education_data.educations.map((value, index) => (
                <div>
                  <Text style={{width: '100%',margin: 10, fontSize: 12}}>{value.college}</Text>
                  <Text style={styles.text}>{value.qualification} - </Text>
                  <Text
                    style={styles.text}
                  >{`(${value.year[0]} - ${value.year[1]})`}</Text>
                  <Text style={styles.text}>{value.description}</Text>
                </div>
              ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}
