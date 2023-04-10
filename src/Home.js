import homeImg from "./Assets/images/home.png";

export default function Home() {
  return (
    <>
      <div className="home">
        <img className="home-iframe" src={homeImg}></img>
        <div className="centered">RESERVE HAIR THERAPY HERE</div>
      </div>
    </>
  );
}
