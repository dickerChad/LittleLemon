import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import BookingForm from "../BookingForm";

describe("BookingForm", () => {
  const mockAvailableTimes = ["17:00", "18:00", "19:00"];
  const mockDispatch = jest.fn();

  test("renders all form fields", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
      />
    );

    // Vérifier les labels
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();

    // Vérifier le bouton de soumission
    expect(
      screen.getByRole("button", { name: /make your reservation/i })
    ).toBeInTheDocument();
  });

  test("updates times when date changes", () => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
      />
    );

    const dateInput = screen.getByLabelText(/date/i);
    fireEvent.change(dateInput, { target: { value: "2024-03-20" } });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "UPDATE_TIMES",
      payload: "2024-03-20",
    });
  });
});
