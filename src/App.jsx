import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking";
import "./App.css";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
