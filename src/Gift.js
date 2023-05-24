import React from "react";
import { useEffect } from "react";

export default function Gift() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqoDp4rCp4cT3qnV39y79oz34mC2PeFJ4mC30m9cyUexIpEX0XihawDBCqiR2wChcJEvwRapWUep2sERAJDXwR4pcUbfY?v=aRGKHynBb2AYOwky9rwaEn9A2iYKry0mkJtJkLSBZyz0#";
    script.async = true;

    const vagaroParent = document.querySelector(".vagaro");
    vagaroParent.appendChild(script);

    return () => {
      vagaroParent.removeChild(script);
    };
  }, []);

  return (
    <div className="book">
      <div className="vagaro"></div>
    </div>
  );
}
