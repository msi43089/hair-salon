import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home"  >
        <div className="home-bg">
        <div className="home-title">BRONDE SOCIETY HAIR CO.</div>
        <div className="home-slogan">life is better bronde</div>
        <Link to="/book">
          <div className="centered">RESERVE HAIR THERAPY HERE</div>
        </Link>
        </div>
        <div className="home-container">
          <div className="about-salon">
            <img src="/images/logo-white-mobile.webp" alt="logo" className="salon-logo" />
              <div class="about-salon-story">
                Bronde Society Hair Co. is a single salon suite located inside of Strand Salon Studios. We are based out of Pier Village - Long Branch, NJ. Brond Society Hair Co. is operated by Jessica Anderson. Jess specializes in blonde & bronde hair color. She alos offers an array of other women's services such as hair cuts, styling, keratin treatments and extensions.
              </div>
          </div>
          <div className="bronde-def">
            <div className="bronde-img">
              <img src="/images/bronde-img-small.webp" alt="Bronde Hair" />
            </div>
            <div className="def">
              <h2>Bronde</h2>
              <p>/brand/</p>
              <p>adjective</p>
              <p>adjective: bronde; adjective: brond</p>
              <br/>
              <p>A color technique that fuses brown and blonde, to create a flattering, sun-kissed color result.</p>
            </div>
          </div>
          
          <div className="reviews-container">
            <h1>Testimonials</h1>
              <div className="review-img">
						    <img src="/images/reviews-mobile.webp" alt="review-img" />
              </div>
						<div className="reviews">
							<div className="review">
                <p className="review-body">Jess is a boss when it comes to hair. She has done a variety of things for me. Haircuts, highlights, shadow roots, color corrections, balayage and so many other things I can’t remember. She takes her time and actually explains the process and lets me know what to expect. I listen to her recommendations on shampoo/ conditioner and other hair products. She also has so much positive energy and it makes your time in her chair very enjoyable.</p>
                <p className="review-name">- Gina I.</p>
              </div>
							<div className="review">
                <p className="review-body">Jess is the best hairdresser around! She has been doing my hair for years and every time she leaves me feeling beautiful! She also genuinely cares about her clients and she has become a good friend over the years. I would never trust anyone else with my hair! She is also very knowledgeable about hair products and recommends the best hair lines that are also affordable. Highly recommend going to see her.</p>
                <p className="review-name"> - Elizabeth P.</p>
              </div>
						</div>
          </div>
        </div>
      </div>
    </>
  );
}
