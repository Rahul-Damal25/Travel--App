
function Destination(){

   const places =[
    {
        id:1,
        name : "Swiss Alps",
        country : "switerzland",
         image:
        "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=85",
        price :"$899"
    },
    {
      id: 2,
      name: "Bali Island",
      country: "Indonesia",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=85",
      price: "$599",
    },
      {
      id: 3,
      name: "Santorini",
      country: "Greece",
      image:
        "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=800&q=85",
      price: "$749",
    }
   ]

   return(
    <>
    <section className="destinations" id="destinations">
    <div className="destination-header">
        <p className="section-tagline">EXPLORE THE WORLD</p>

        <h2>Popular <span>Destinations</span></h2>

        <p className="section-description"> Discover amazing places and make your next journey unforgettable</p>
    </div>


    <div className="destination-grid">
        {places.map((place)=>(
            <div className="destination-item" key ={place.id}>
                <img src={place.image} alt={place.name} />

                <div className="destination-info">
                    <p>{place.country}</p>
                    <h3>{place.name}</h3>
                    <span>From {place.price}</span>
                </div>
            </div>
        ))}
    </div>
</section>

   </>
   )
   
}

export default Destination;
 