import './packages.css'


function Packages() {
  const packages = [
    {
      id: 1,
      name: "Starter Escape",
      duration: "3 Days / 2 Nights",
      price: "$299",
      description: "A perfect short getaway for your next break.",
      features: ["Hotel Accommodation", "Daily Breakfast", "Sightseeing"],
    },
    {
      id: 2,
      name: "Adventure Trip",
      duration: "5 Days / 4 Nights",
      price: "$599",
      description: "Explore amazing places and enjoy new adventures.",
      features: [
        "Premium Hotel Stay",
        "Meals Included",
        "Guided Tours",
        "Airport Transfers",
      ],
      popular: true,
    },
    {
      id: 3,
      name: "Luxury Journey",
      duration: "7 Days / 6 Nights",
      price: "$999",
      description: "Enjoy a relaxing trip with extra comfort and luxury.",
      features: [
        "Luxury Hotel Stay",
        "All Meals Included",
        "Private Transport",
        "Personal Tour Guide",
      ],
    },
  ];

  return (
    <section className="packages" id="packages">
      <div className="packages-header">
        <p className="packages-tagline"> CHOOSE YOUR EXPERIANCE</p>

        <h2>
          Our Travel <span>Packages</span>
        </h2>

        <p className="packages-description">
          Find the perfect package for your next unforgettable journey.
        </p>
      </div>

      <div className="packages-grid">
        {packages.map((item) => (
          <div
            className={`package-card ${item.popular ? "popular" : ""}`}
            key={item.id}
          >
            {item.popular && (
              <span className="popular-badge">MOST POPULAR</span>
            )}

            <h3>{item.name}</h3>

            <p className="package-duration">{item.duration}</p>

            <h2 className="package-price">
              {item.price}
              <span> / person</span>
            </h2>

            <p className="package-description">{item.description}</p>

            <ul className="package-features">
              {item.features.map((feature, index) => (
                <li key={index}>
                  <span>✓</span> {feature}
                </li>
              ))}
            </ul>

            <a href="#contact" className="package-btn">
              Choose Package <span>↗</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Packages;
