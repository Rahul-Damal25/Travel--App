import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-about">
            <h2 className="footer-logo">Travel<span>Go</span> <span className="footer-plane">✈</span></h2>
            
            <p>
              Explore beautiful destinations and create unforgettable memories
              with Travel Go.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#destinations">Destinations</a>
            <a href="#packages">Packages</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-links">
            <h3>Popular Places</h3>
            <a href="#destinations">Switzerland</a>
            <a href="#destinations">Bali</a>
            <a href="#destinations"> Santorini</a>
          </div>

          <div className="footer-contact">
            <h3>Contact US</h3>
            <p>✉️ travelgo@gmail.com</p>
            <p>📞 +91 9876543210</p>
            <p>📍 Pune, Maharashtra</p>
          </div>

        </div>

        <div className="footer-bottom">
            <p>0 2026 Travel Go. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
