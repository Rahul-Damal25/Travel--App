function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <div className="contact-header">
          <p>GET IN TOUCH</p>
          <h2>
            Contact <span>Us</span>
          </h2>
          <p>
            Hava a question or want to plan your next trip ? We would love to
            hear from you.
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's Plan Your Trip !</h3>
            <p>
              Tell us about your dream destination. We will help you make it
              unforgettable
            </p>

            <div className="contact-detail">
              <span>✉️</span>
              <p>travelgo@gmail.com</p>
            </div>

            <div className="contact-detail">
              <span>📞</span>
              <p>+91 9876543210</p>
            </div>

            <div className="contact-detail">
              <span>📍</span>
              <p>Pune, Maharashtra, India</p>
            </div>
          </div>
            
            <form className="contact-form">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="your Email" />
                <input type="text" placeholder="Your Destination" />

                <textarea placeholder="Your Message" rows="5" ></textarea>

                <button type="submit"> Send Message</button>
            </form>

        </div>
      </section>
    </>
  );
}
export default Contact;
