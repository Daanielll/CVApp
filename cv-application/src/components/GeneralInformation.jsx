import "../styles/details.css";

export function GeneralInformation() {
  return (
    <form>
      <h1>General Information</h1>
      <div className="input-div">
        <label htmlFor="details-fullName">Full name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          name=""
          id="details-fullName"
        />
      </div>
      <div className="input-div">
        <label htmlFor="details-email">Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          name=""
          id="details-email"
        />
      </div>
      <div className="input-div">
        <label htmlFor="details-number">Phone number</label>
        <input
          type="tel"
          placeholder="Enter your phone number"
          name=""
          id="details-number"
        />
      </div>
      <div className="input-div">
        <label htmlFor="details-address">Address</label>
        <input
          type=""
          placeholder="Enter your address"
          name=""
          id="details-address"
        />
      </div>
    </form>
  );
}
