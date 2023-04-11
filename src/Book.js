import React from "react";
import { Helmet } from "react-helmet";

export default function Book() {
  return (
    <div>
      <div id="frameTitle" className="embedded-widget-title"></div>
      <div className="vagaro">
        <a href="https://www.vagaro.com/pro/">Powered by Vagaro</a>&nbsp;
        <a href="https://www.vagaro.com/pro/salon-software">Salon Software</a>
        ,&nbsp;
        <a href="https://www.vagaro.com/pro/spa-software">Spa Software</a>
        &nbsp;&amp;&nbsp;
        <a href="https://www.vagaro.com/pro/fitness-software">
          Fitness Software
        </a>
        <Helmet>
          <script
            type="text/javascript"
            src="https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqoDp4rCp4cT3qmV35y6RuSdBuOc1WJD1wOc1WO61CxdfkJE1wgEJgoapOUcPCvdfQOW?v=mIvwzavaOdz1FNIyQRzhNz9SlgoDjTBY13UyaiGiv6Ry#"
          ></script>
        </Helmet>
      </div>
    </div>
  );
}
