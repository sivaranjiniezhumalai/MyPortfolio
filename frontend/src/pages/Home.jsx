import React from "react";
import myGif from "../assets/my-gif-portfolio.gif";
import bgImage from "../assets/portfolio-bg-image.png";
import profilePhoto from "../assets/my-photo-for-portfolio.png"; // small profile photo

export default function Home() {
  return (
    <section
      id="home"
      className="d-flex flex-column justify-content-center align-items-center vh-100 text-center position-relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for contrast */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      ></div>

      {/* Small profile photo */}
      <img
        src={profilePhoto}
        alt="Profile"
        className="position-absolute"
        style={{
          top: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "2px solid white",
          zIndex: 3,
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <h1 className="display-4 mb-3 fw-bold text-white">
          Pixel-perfect ideas, code-tastic fun
        </h1>
        <p className="lead mb-4 text-white">
          Welcome to my digital playground! While I take my craft seriously, I
          believe the best results come from an approach that is both
          professional and fun-loving.
        </p>
        <img
          src={myGif}
          alt="girl coding gif"
          className="img-fluid rounded shadow mb-4"
          style={{ maxWidth: "400px" }}
        />

        {/* Social Links with Names */}
        <div className="d-flex justify-content-center gap-4 mt-3 flex-wrap">
          <a
            href="https://www.linkedin.com/in/sivaranjini-ezhumalai-622941300/"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex align-items-center text-white text-decoration-none fs-5"
          >
            <i className="bi bi-linkedin me-2"></i> LinkedIn
          </a>
          <a
            href="https://github.com/sivaranjiniezhumalai"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex align-items-center text-white text-decoration-none fs-5"
          >
            <i className="bi bi-github me-2"></i> GitHub
          </a>
          <a
            href="https://leetcode.com/u/sivaranjiniezhumalai/"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex align-items-center text-white text-decoration-none fs-5"
          >
            <i className="bi bi-code-slash me-2"></i> LeetCode
          </a>
          <a
            href="https://www.codechef.com/users/ranz_25"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex align-items-center text-white text-decoration-none fs-5"
          >
            <i className="bi bi-puzzle me-2"></i> CodeChef
          </a>
        </div>
      </div>
    </section>
  );
}
