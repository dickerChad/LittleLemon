import { useNavigate } from "react-router-dom";
import { submitAPI } from "../utils/api";
import BookingForm from "../components/BookingForm";
import "../styles/BookingPage.css";
import { useReducer } from "react";
import { initializeTimes, updateTimes } from "../reducers/bookingReducer";

function BookingPage() {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const submitForm = async (formData) => {
    const success = await submitAPI(formData);
    if (success) {
      navigate("/booking-confirmed");
    }
    return success;
  };

  return (
    <main className="booking-page">
      <section className="booking-section">
        <div className="booking-content">
          <h1>Reserve a Table</h1>
          <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
          />
        </div>
      </section>
    </main>
  );
}

export default BookingPage;
