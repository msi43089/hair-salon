import React from "react";
import { useEffect } from "react";

export default function Book() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqoDp4rCp4cT3qnV3avV34mC2PeFJ4mC30m9cyUeJUtjP0dDxkJEvwRapWUep2sERAJDXwPapcUbfY?v=fsPyai6oJ0FqLvryzkXT0ERjhN9XJYX3RGeXiZgyznfu#";
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
