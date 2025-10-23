import React from "react";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="py-5"
      style={{ backgroundColor: "#fff", minHeight: "90vh" }}
    >
      <div className="container">
        <h2 className="text-center mb-5 text-main fw-bold">About Me</h2>

        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <p className="lead">
              A passionate fresher who blends art and technology to craft
              visually captivating, interactive, and responsive web experiences.
              I love building beautiful, meaningful, and responsive digital
              experiences where art meets logic.
            </p>
            <p className="mt-4">
              <strong>Skills:</strong> Data Structure, Algorithms, Java Linux,
              SQL, HTML, CSS, JavaScript, React.js, React Native, Node.js,
              Figma, Neon, Bootstrap.
            </p>
          </div>
        </div>

        {/* Education Cards */}
        <div className="row justify-content-center mt-5 g-4">
          <div className="col-md-5">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body text-center">
                <h5 className="card-title text-main fw-bold">
                  Bachelor's Degree
                </h5>
                <p className="card-text">
                  <br />
                  2022 - 2026
                  <br />
                  <strong>KCG College of technology</strong>
                  <br />
                  Bachelor's in Electronics & Communication Engineering
                  <br />
                  My college days are where I spent growing my analytical
                  thinking and problem-solving expertise which is the hidden
                  ingredient in all my pixel-perfect and code-tastic work.
                  Thanks for my free days ...
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body text-center">
                <h5 className="card-title text-main fw-bold">High School</h5>
                <p className="card-text">
                  <br />
                  Completed in 2022
                  <br />
                  <strong>Bharath Dass MHSS</strong>
                  <br />
                  I blame my Science stream schooling for my obsession with
                  structure and logic—traits I now happily channel into bug-free
                  code and organized interfaces. Basically, I apply the
                  Scientific Method to making things look adorable.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
