// import Home from "./Home";
import { Link } from "react-router-dom";
import bgImg from "./image2.png";
import "./About.css";
export default function About() {
  return (
    <section className="about-section">
      <div className="about-page-container">
        <img src={bgImg} className="about-hero-image" />
        <div className="about-page-content">
          <h1 className="headding">Don’t squeeze in a sedan when you could relax in a van.</h1>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div className="about-page-ca">
          <h2>
            Your destination is waiting.
          </h2>
            
            <h2>

            Your van is ready.
            </h2>
            <br/>
          <Link className="about-button" to="/vans">
            <button>

            Explore our vans
            </button>
          </Link>
        </div>
      </div>

      {/* <Link to="/">Home</Link> */}
    </section>
  );
}
