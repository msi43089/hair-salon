import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="home-title">BRONDE SOCIETY HAIR CO.</div>
        <div className="home-slogan">life is better bronde</div>
        <Link to="/book">
          <div className="centered">RESERVE HAIR THERAPY HERE</div>
        </Link>
        {/* <div className="home-container">
          <div className="bronde-def">
            <div className="def">
              <h2>Bronde</h2>
              <p>/brand/</p>
              <p>adjective</p>
              <p>adjective: bronde; adjective: brone</p>
              <br/>
              <p>A color technique that fuses brown and blonde, to create a flattering, sun-kissed color result.</p>
            </div>
            <div>

            </div>
          </div>
          <div className="about-salon">

          </div>
          <div className="reviews">

          </div>
        </div> */}
      </div>
    </>
  );
}
