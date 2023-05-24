export default function Services() {
  return (
    <div className="services">
      <h1 className="services-title">Services</h1>
      <div className="hc-body">
        <div className="service-title">Hair Color</div>
        <div className="hc-left">
          <table>
            <tbody>
              <tr>
                <td>Platinum Card:</td>
                <td class="price">$385</td>
              </tr>
              <br />
              <tr>
                <td>Heavy Full Foil:</td>
                <td class="price">$300</td>
              </tr>
              <tr>
                <td>Classic Full Foil:</td>
                <td class="price">$230</td>
              </tr>
              <br />
              <tr>
                <td>Heavy Partial:</td>
                <td class="price">$250</td>
              </tr>
              <tr>
                <td>Classic Partial:</td>
                <td class="price">$185</td>
              </tr>
              <br />
              <tr>
                <td>Heavy Balayage:</td>
                <td class="price">$300</td>
              </tr>
              <tr>
                <td>Classic Balayage:</td>
                <td class="price">$265</td>
              </tr>
              <br />
              <tr>
                <td>Face Frame Foil:</td>
                <td class="price">$140</td>
              </tr>
              <br />
              <tr>
                <td>Color Corrections:</td>
                <td class="price">$350+</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="hc-right">
          <table>
            <tbody>
              <tr>
                <td>Root Touch Up(6 weeks or less):</td>
                <td class="price">$75</td>
              </tr>
              <tr>
                <td>Single Process:</td>
                <td class="price">$130</td>
              </tr>
              <tr>
                <td>Bleach & Tone Touch Up(4 weeks or less):</td>
                <td class="price">$175</td>
              </tr>
              <br />
              <tr>
                <td>Root Tap:</td>
                <td class="price">$20</td>
              </tr>
              <tr>
                <td>Extra Color:</td>
                <td class="price">$22</td>
              </tr>
              <tr>
                <td>Low lights:</td>
                <td class="price">$40</td>
              </tr>
              <tr>
                <td>Glaze:</td>
                <td class="price">$65</td>
              </tr>
              <br />
              <tr>
                <td>Haircut:</td>
                <td class="price">$50</td>
              </tr>
              <tr>
                <td>Haircut w/ color:</td>
                <td class="price">$40</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="styling-body">
        <div className="styling">
          <table>
            <caption>Styling</caption>
            <tbody>
              <tr>
                <td>Blow out:</td>
                <td className="price">$40</td>
              </tr>
              <tr>
                <td>Blow out + iron working:</td>
                <td className="price">$60</td>
              </tr>
              <tr>
                <td>Updo:</td>
                <td className="price">$90+</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="treatments">
          <table>
            <caption>Treatments</caption>
            <tbody>
              <tr>
                <td>Keratin Smoothing Treatment:</td>
                <td className="price">$350</td>
              </tr>
              <tr>
                <td>Deep Conditioning Treatment:</td>
                <td className="price">$30</td>
              </tr>
              <td>Extensions:</td>
              <td className="price">Upon Consultation</td>
            </tbody>
          </table>
        </div>
      </div>
      <div className="wax-body">
        <div className="wax">
          <table>
            <caption>Waxing</caption>
            <tbody>
              <tr>
                <td>Brows:</td>
                <td className="price">$17</td>
              </tr>
              <tr>
                <td>Lip:</td>
                <td className="price">$12</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
