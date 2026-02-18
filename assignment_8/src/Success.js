import "./Success.css";

function Success({ userData }) {
  const bookingId = Math.floor(Math.random() * 100000);

  return (
    <div className="success-container">
      <h2>Seat Booked Successfully!</h2>

      <div className="booking-id">
        Booking ID: {bookingId}
      </div>

      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Mobile:</strong> {userData.mobile}</p>
    </div>
  );
}

export default Success;
