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
      </div>
    </>
  );
}
