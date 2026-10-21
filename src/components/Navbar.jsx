function Navbar(){
    return(
        <>
          <div className="navbar">

            <h2 className="logo"> ✳ Wanderly</h2>

            <div className="nav-links">

                <a href="#home" className="active">Home</a>
                <a href="#destination">Destination</a>
                <a href="#package">Packges</a>
                <a href="#about">About</a>
            </div>

            <button className="nav-btn"> Explore Now</button>

          </div>



        </>
    )
}

export default Navbar;