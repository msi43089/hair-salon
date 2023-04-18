export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-body">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d760.6937755791413!2d-73.9789626145914!3d40.30295224827614!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c224decef36325%3A0xffa482504e14448a!2s16%20Laird%20St%2C%20Long%20Branch%2C%20NJ%2007740!5e0!3m2!1sen!2sus!4v1680132064646!5m2!1sen!2sus"
            width="100%"
            height="450px"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>
        <div className="contact-info">
          <div >
            <h3>Get In Touch</h3>
            <p>We are taking on new clients! Please feel free to reach out via text, email or phone call. </p>
          </div> 
          <div>
            <h3>Phone</h3>
              <p>908-596-1342</p>
            <h3>Email</h3>
              <p>brondesociety@gmail.com</p>
            <h3>Location</h3>
            <p>16 Laird Steet</p>
            <p>Long Branch, NJ 07740</p>
            <h3>Business Hours</h3>
              <ul>
              <li className="test">Sun: by appointment only</li>
              <li>Mon: closed</li>
              <li>Tue: by appointment only</li>
              <li>Wed: by appointment only</li>
              <li>Thu: 10:00 AM - 8:00 PM</li>
              <li>Fri: 9:00 AM - 5:00 PM</li>
              <li>Sat: 9:00 AM - 4:00 PM</li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
