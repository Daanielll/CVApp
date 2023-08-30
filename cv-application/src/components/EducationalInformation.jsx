import { useState } from "react";
import "../styles/details.css";
export function EducationalInformation({ details, onUpdate }) {
  const [eduDetails, setEduDetails] = useState(details);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const det = {
      ...eduDetails,
      [name]: value,
    };
    setEduDetails(det);
    onUpdate(det);
  };
  return (
    <form>
      <h1>Education</h1>
      <div className="input-div">
        <label htmlFor="details-school">School</label>
        <input
          type="text"
          name="school"
          placeholder="Enter School / University"
          id="details-school"
          value={eduDetails.school}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-div">
        <label htmlFor="details-degree">Degree</label>
        <input
          type="text"
          name="degree"
          placeholder="Enter Degree"
          id="details-degree"
          value={eduDetails.degree}
          onChange={handleInputChange}
        />
      </div>
      <div className="start-end-div">
        <div className="input-div">
          <label htmlFor="details-start-date">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={eduDetails.startDate}
            onChange={handleInputChange}
            id="details-start-date"
          />
        </div>
        <div className="input-div">
          <label htmlFor="details-start-date">End Date</label>
          <input
            type="date"
            name="endDate"
            value={eduDetails.endDate}
            onChange={handleInputChange}
            id="details-end-date"
          />
        </div>
      </div>
      <div className="input-div">
        <label htmlFor="details-location">Location</label>
        <input
          type="text"
          name="location"
          placeholder="Enter location"
          id="details-location"
          value={eduDetails.location}
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
}
