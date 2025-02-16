import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>123 Restaurant Street</p>
          <p>Chicago, IL 60601</p>
          <p>Tel: (312) 555-0123</p>
          <p>Email: info@littlelemon.com</p>
        </div>
        <div className="footer-section">
          <h3>Opening Hours</h3>
          <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
          <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>
            <a href="https://facebook.com/littlelemon">Facebook</a>
          </p>
          <p>
            <a href="https://instagram.com/littlelemon">Instagram</a>
          </p>
          <p>
            <a href="https://twitter.com/littlelemon">Twitter</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Little Lemon Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
