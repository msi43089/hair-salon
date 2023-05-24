import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="home-bg">
          <div className="home-title">BRONDE SOCIETY HAIR CO.</div>
          <div className="home-slogan">life is better bronde</div>
          <Link to="/book">
            <div className="centered">RESERVE HAIR THERAPY HERE</div>
          </Link>
        </div>
        <div className="home-container">
          <div className="bronde-def">
            <div className="bronde-img">
              <img src="/images/bronde-img-small.webp" alt="Bronde Hair" />
            </div>
            <div className="def">
              <h2>Bronde</h2>
              <p>
                /br<span>&#228;</span>nd/
              </p>
              <p>adjective</p>
              <p>adjective: bronde; adjective: brond</p>
              <br />
              <p>
                A color technique that fuses brown and blonde, to create a
                flattering, sun-kissed color result.
              </p>
            </div>
          </div>
          <div className="about-salon">
            <img
              src="/images/logo-white-mobile.webp"
              alt="logo"
              className="salon-logo"
            />
            <div class="about-salon-story">
              <p>
                Welcome! I'm so happy you landed on my page. My name is Jess and
                I'm the owner and stylist at Bronde Society Hair Co. Bronde
                Society is a single salon suite located inside Pier Village. I
                have over ten years experience specializing in hair color and
                blonding services. I also offer an array of women's services
                such as haircuts, styling, keratin smoothing treatments and hair
                extensions. My main goal as your stylist is to give you your
                dream hair while maintaining the integrity, and never
                compromising the health of your hair. When reserving any service
                at Bronde Society you can expect an intimate experience since I
                operate out of a single salon suite. I pride myself on giving my
                clients my undivided attention during each appointment. I also
                enjoy being able to offer my guests a tranquil environment, they
                are able to relax and be pampered in.
              </p>
              <br />
              <p>
                Have questions about your dream hair? Want to know the best
                services I would recommend to achieve your hair goals? Feel free
                to message me prior to reserving! You can also text me at{" "}
                <a href="tel:+1(908)-596-1342">(908)-596-1342</a>.
              </p>
            </div>
          </div>

          <h1 className="reviews-title">Testimonials</h1>
          <div className="reviews-container">
            <div className="review-img">
              <img src="/images/reviews-mobile-2.webp" alt="review-img" />
            </div>
            <div className="reviews">
              <div className="review">
                <p className="review-body">
                  Jess is a boss when it comes to hair. She has done a variety
                  of things for me. Haircuts, highlights, shadow roots, color
                  corrections, balayage and so many other things I can’t
                  remember. She takes her time and actually explains the process
                  and lets me know what to expect. I listen to her
                  recommendations on shampoo/ conditioner and other hair
                  products. She also has so much positive energy and it makes
                  your time in her chair very enjoyable.
                </p>
                <p className="review-name">- Gina I.</p>
              </div>
              <div className="review">
                <p className="review-body">
                  Jess is the best hairdresser around! She has been doing my
                  hair for years and every time she leaves me feeling beautiful!
                  She also genuinely cares about her clients and she has become
                  a good friend over the years. I would never trust anyone else
                  with my hair! She is also very knowledgeable about hair
                  products and recommends the best hair lines that are also
                  affordable. Highly recommend going to see her.
                </p>
                <p className="review-name"> - Elizabeth P.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
