import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Book() {
  const locate = useLocation();

  let source;

  if (locate.pathname === "/book") {
    source =
      "https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqoDp4rCp4cT3qnV39y79oz34mC2PeFJ4mC30m9cyUeJUtjP0dDxkJEvwRapWUep2sERAJDXwPapcUbfY?v=fsPyai6oJ0FqLvryzkXT0ERjhN9XJYX3RGeXiZgyznfu#";
  } else {
    source =
      "https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqoDp4rCp4cT3qnV39y79oz34mC2PeFJ4mC30m9cyUeJUtjP0dDxkJEvwRapWUep2sERAJDXwR4pcUbfY?v=NkjTt3TpyKVxAo2wF3wjuXTpo22mbVjmlv6ucv1iyTP#";
  }

  useEffect(() => {
    const script = document.createElement("script");
    script.src = source;
    script.async = true;

    const vagaroParent = document.querySelector(".vagaro");
    vagaroParent.appendChild(script);
    console.log(vagaroParent);
    return () => {
      vagaroParent.removeChild(script);
    };
  }, []);

  console.log(locate);

  return (
    <div className="book">
      <div className="vagaro"></div>
    </div>
  );
}
