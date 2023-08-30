import "../styles/details.css";

export function ExperienceInformation() {
  return (
    <form>
      <h1>Experience</h1>
      <div className="input-div">
        <label htmlFor="details-companyName">Company Name</label>
        <input
          type="text"
          placeholder="Enter company name"
          id="details-companyName"
        />
      </div>
      <div className="input-div">
        <label htmlFor="details-title">Title</label>
        <input
          type="text"
          placeholder="Enter position title"
          id="details-title"
        />
      </div>
      <div className="start-end-div">
        <div className="input-div">
          <label htmlFor="details-start-date">Start Date</label>
          <input type="date" id="details-start-date" />
        </div>
        <div className="input-div">
          <label htmlFor="details-start-date">End Date</label>
          <input type="date" id="details-end-date" />
        </div>
      </div>
      <div className="input-div">
        <label htmlFor="details-location">Location</label>
        <input type="text" placeholder="Enter location" id="details-location" />
      </div>
      <div className="input-div">
        <label htmlFor="details-description">Description</label>
        <textarea
          rows={3}
          placeholder="Enter description"
          id="details-description"
        />
      </div>
    </form>
  );
}
