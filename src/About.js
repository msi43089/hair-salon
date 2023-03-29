import arlowe from "./Assets/images/arlowe.JPG";

export default function About() {
  return (
    <div className="about">
      <h2 className="about-title">Bronde Society</h2>
      <div className="about-body">
        <img className="about-img" src={arlowe} alt="arlowe" />
        <p>
          This is where we write the story about the business. Mission
          statement. The purpose and vision of the business. How it got started
          and what we aim to do.
        </p>
      </div>
    </div>
  );
}
