import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home">
        <Link to="/book" >
        <div className="centered">RESERVE HAIR THERAPY HERE</div>
        </Link>
      </div>
    </>
  );
}
