import React from "react";
import "./App.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div>
        <a
          href="https://github.com/snoelcameron/TheWeatherStation"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code,{" "}
        </a>
        <a
          href="https://www.wonderful-bohr-ec4c13.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Netlify{" "}
        </a>
        By{" "}
        <a
          href="https://www.linkedin.com/in/sarah-noel-960740b2/"
          target="_blank"
          rel="noreferrer"
        >
          Sarah Noel
        </a>{" "}
        from Intellisports👩‍💻
      </div>
    </div>
  );
}
