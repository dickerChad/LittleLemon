import { initializeTimes, updateTimes } from "../bookingReducer";

// Mock the API
jest.mock("../../utils/api", () => ({
  fetchAPI: jest.fn(() => [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]),
}));

describe("Booking Reducer", () => {
  test("initializeTimes returns the correct initial state", () => {
    const initialTimes = initializeTimes();
    expect(initialTimes).toEqual([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ]);
  });

  test("updateTimes returns the same state when date changes", () => {
    const currentState = ["17:00", "18:00", "19:00"];
    const action = { type: "UPDATE_TIMES", payload: "2024-03-20" };

    const newState = updateTimes(currentState, action);

    expect(newState).toEqual([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ]);
  });

  test("updateTimes returns current state for unknown action", () => {
    const currentState = ["17:00", "18:00", "19:00"];
    const action = { type: "UNKNOWN_ACTION" };

    const newState = updateTimes(currentState, action);

    expect(newState).toEqual(currentState);
  });
});
