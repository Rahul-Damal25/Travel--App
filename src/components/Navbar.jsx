import { Plane } from "lucide-react";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Plane size={28} color="#2563eb" />
          <h2>TravelGo</h2>
        </div>

        <div className="nav-links">
          <a href="#home" className="active">Home </a>
          <a href="#destination">Destination</a>
          <a href="#package">Packges</a>
          <a href="#about">About</a>
        </div>

        <button className="nav-btn"> Explore Now</button>
      </div>
    </>
  );
}

export default Navbar;
