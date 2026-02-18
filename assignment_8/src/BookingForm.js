import { useState } from "react";
import "./BookingForm.css";

function BookingForm({ setPage, setUserData }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(form);
    setPage("success");
  };

 return (
  <div className="form-container">
    <h2> Book Seat</h2>

    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
      />

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />

      <input
        name="mobile"
        placeholder="Mobile"
        onChange={handleChange}
        required
      />

      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  </div>
);

}

export default BookingForm;
