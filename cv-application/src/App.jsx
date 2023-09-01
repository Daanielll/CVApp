import "../src/styles/App.css";
import { useState } from "react";
import { GeneralInformation } from "./components/GeneralInformation";
import { EducationalInformation } from "./components/educationalInformation";
import { ExperienceInformation } from "./components/ExperienceInformation";
import { ExpandableForm } from "./components/ExpandableForm";
function App() {
  const exampleEducationalDetails = [
    {
      school: "Harvard University",
      degree: "B.sc in Computer Science",
      startDate: "2015-09-01",
      endDate: "2018-07-01",
      location: "Cambridge, MA",
    },
    {
      school: "Columbia University",
      degree: "Master of Business Administration",
      startDate: "2019-09-01",
      endDate: "2021-07-01",
      location: "New York, NY",
    },
  ];

  const [educationalDetails, setEducationalDetails] = useState([]);
  const [experienceDetails, setExperienceDetails] = useState([]);

  return (
    <div className="all">
      {/* <GeneralInformation></GeneralInformation> */}
      {/* <EducationalInformation
        index="0"
        details={educationalDetails}
        setDetails={setEducationalDetails}
      ></EducationalInformation>
      <EducationalInformation
        index="1"
        details={educationalDetails}
        setDetails={setEducationalDetails}
      ></EducationalInformation> */}
      {/* <ExperienceInformation></ExperienceInformation> */}
      <ExpandableForm
        formType="Education"
        details={educationalDetails}
        setDetails={setEducationalDetails}
      ></ExpandableForm>
      <ExpandableForm
        formType="Education"
        details={educationalDetails}
        setDetails={setEducationalDetails}
      ></ExpandableForm>
      <ExpandableForm
        formType="Experience"
        details={experienceDetails}
        setDetails={setExperienceDetails}
      ></ExpandableForm>
      <ExpandableForm
        formType="Experience"
        details={experienceDetails}
        setDetails={setExperienceDetails}
      ></ExpandableForm>
    </div>
  );
}

export default App;
