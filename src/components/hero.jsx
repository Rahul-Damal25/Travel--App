function Hero(){

    return(
        <>
         
         <section className="hero" id="home">

            <div className="hero-content">
                <p className="hero-tagline">  YOUR JOURNEY STARTS HERE</p>

                <h1>Discover Your <br /> Next <span>Adventure</span></h1>


                <p className="hero-description">   Explore beautiful destinations, discover new
          experiences, and create memories that last forever.</p>


          <div className="hero-buttons">
             <a href="#destinations" className="hero-btn">
            Explore Destinations <span>↗</span>
          </a>

             <a href="#about" className="hero-link">
            Learn More
          </a>
          </div>
            </div>

                  <div className="hero-image">
         <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85" alt="Beautiful mountain landscape" />


         <div className="destination-card">
            <span className="destination-icon">✈</span>

            <div>
                <p>YOUR NEXT ESCAPE</p>
                <h3>Explore the World</h3>
            </div>
         </div>

      </div>


         </section>
                    
        </>
    )
}
export default Hero;
