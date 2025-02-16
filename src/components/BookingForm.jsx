import { useState, useEffect, useCallback } from "react";

function BookingForm({ availableTimes = [], dispatch, submitForm }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "1",
    occasion: "birthday",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = useCallback(() => {
    const errors = {};
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Ignore l'heure pour la validation

    const selectedDate = new Date(formData.date);
    selectedDate.setHours(0, 0, 0, 0);

    // Validation de la date
    if (!formData.date) {
      errors.date = "Date is required";
    } else if (selectedDate < today) {
      errors.date = "Date cannot be in the past";
    }

    // Validation de l'heure
    if (!formData.time) {
      errors.time = "Time is required";
    } else if (!availableTimes.includes(formData.time)) {
      errors.time = "Please select an available time";
    }

    // Validation du nombre d'invités
    const guestsNum = Number(formData.guests);
    if (guestsNum < 1 || guestsNum > 10) {
      errors.guests = "Number of guests must be between 1 and 10";
    }

    // Validation de l'occasion
    if (!formData.occasion) {
      errors.occasion = "Please select an occasion";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }, [formData, availableTimes]); // dépendances du useCallback

  useEffect(() => {
    setIsFormValid(validateForm());
  }, [validateForm]); // valider seulement lorsque validateForm change

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "date") {
      dispatch({ type: "UPDATE_TIMES", payload: value });
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormValid) {
      await submitForm(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form" noValidate>
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          min={new Date().toISOString().split("T")[0]}
          className={formErrors.date ? "error" : ""}
          aria-invalid={!!formErrors.date}
          aria-describedby="date-error"
        />
        {formErrors.date && (
          <span id="date-error" className="error-message">
            {formErrors.date}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="time">Time</label>
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className={formErrors.time ? "error" : ""}
          aria-invalid={!!formErrors.time}
          aria-describedby="time-error"
        >
          <option value="">Select a time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        {formErrors.time && (
          <span id="time-error" className="error-message">
            {formErrors.time}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of guests</label>
        <select
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          required
          className={formErrors.guests ? "error" : ""}
          aria-invalid={!!formErrors.guests}
          aria-describedby="guests-error"
        >
          {Array.from({ length: 10 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1} guest{i > 0 && "s"}
            </option>
          ))}
        </select>
        {formErrors.guests && (
          <span id="guests-error" className="error-message">
            {formErrors.guests}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          required
          className={formErrors.occasion ? "error" : ""}
          aria-invalid={!!formErrors.occasion}
          aria-describedby="occasion-error"
        >
          <option value="">Select an occasion</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="business">Business</option>
          <option value="other">Other</option>
        </select>
        {formErrors.occasion && (
          <span id="occasion-error" className="error-message">
            {formErrors.occasion}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="button-primary"
        aria-label="Make reservation"
        disabled={!isFormValid}
      >
        Make Your Reservation
      </button>
    </form>
  );
}

export default BookingForm;
