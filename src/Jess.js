import jess from "./Assets/images/jess.JPG";

export default function Jess() {
  return (
    <div className="jess">
      <h2 className="about-title">Meet Jess</h2>
      <div className="about-body">
        <img className="about-img" src={jess} alt="arlowe" />
        <p>
          This is where we write the story about Jess. How she got into hair.
          What motivates her/passions.
        </p>
      </div>
    </div>
  );
}
