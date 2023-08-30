import "../src/styles/App.css";
import { useState } from "react";
import { GeneralInformation } from "./components/GeneralInformation";
import { EducationalInformation } from "./components/educationalInformation";
import { ExperienceInformation } from "./components/ExperienceInformation";
import { ExpandableForm } from "./components/ExpandableForm";
function App() {
  const initialEducationalDetails = [
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

  const [educationalDetails, setEducationalDetails] = useState(
    initialEducationalDetails
  );
  const handleUpdate = (index, updatedValue) => {
    const updatedDetails = [...educationalDetails];
    updatedDetails[index] = updatedValue;
    setEducationalDetails(updatedDetails);
  };
  return (
    <div className="all">
      <GeneralInformation></GeneralInformation>
      <EducationalInformation
        details={educationalDetails[0]}
        onUpdate={(updatedValue) => handleUpdate(0, updatedValue)}
      ></EducationalInformation>
      <EducationalInformation
        details={educationalDetails[1]}
        onUpdate={(updatedValue) => handleUpdate(1, updatedValue)}
      ></EducationalInformation>
      <ExperienceInformation></ExperienceInformation>
      <ExpandableForm
        title="Edu"
        forms={educationalDetails.map((obj) => {
          return obj.school;
        })}
      ></ExpandableForm>
    </div>
  );
}

export default App;
