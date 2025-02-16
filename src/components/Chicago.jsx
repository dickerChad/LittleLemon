import "../styles/chicago.css";
import { useNavigate } from "react-router-dom";
import resto from "../assets/restauranfood.jpg";

function Chicago() {
  const navigate = useNavigate();

  const handleReservation = () => {
    navigate("/booking");
  };
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button onClick={handleReservation} className="button-primary">
            Reserve a Table
          </button>
        </div>
        <div className="hero-image">
          <img src={resto} alt="Featured dish" />
        </div>
      </div>
    </section>
  );
}

export default Chicago;
