import React from "react";
import "./App.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div>
        <a
          href="https://github.com/snoelcameron/TheWeatherStation"
          target="_blank"
        >
          Open-source code,{" "}
        </a>
        <a
          href="https://suspicious-hypatia-4e7f11.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify{" "}
        </a>
        By{" "}
        <a
          href="https://www.linkedin.com/in/sarah-noel-960740b2/"
          target="_blank"
        >
          Sarah Noel
        </a>{" "}
        from Intellisports👩‍💻
      </div>
    </div>
  );
}
