export default function Contact() {
  return (
    <div className="contact">
      <h2 className="about-title">Contact Us</h2>
      <div className="about-body">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d760.6937755791413!2d-73.9789626145914!3d40.30295224827614!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c224decef36325%3A0xffa482504e14448a!2s16%20Laird%20St%2C%20Long%20Branch%2C%20NJ%2007740!5e0!3m2!1sen!2sus!4v1680132064646!5m2!1sen!2sus"
          width="600"
          height="450"
          className="map"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="map"
        ></iframe>
        <p>
          This is where we write the story about Jess. How she got into hair.
          What motivates her/passions.
        </p>
      </div>
    </div>
  );
}
