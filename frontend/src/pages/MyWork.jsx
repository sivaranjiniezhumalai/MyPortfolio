import React from "react";
import project4 from "../assets/leetcode-profile.png";

export default function MyWork() {
  const projects = [
    {
      title: "From Scroll to Sauce in Seconds",
      description:
        "Forget cluttered cookbooks! This app acts as your kitchen assistant, serving up pixel-perfect recipes, ingredients, and simple steps. Save your favorites and conquer dinner like the culinary genius you are.",
      image:
        "https://github.com/sivaranjiniezhumalai/fullstack-recipe-app/blob/main/recipe-app-figma-ui-design2.jpg?raw=true",
      link: "https://github.com/sivaranjiniezhumalai/fullstack-recipe-app",
    },
    {
      title: "Mealprep",
      description:
        "Living with dietary restrictions shouldn't feel like a daily diagnosis. For those who need to maintain specific, lifelong healthy eating habits, finding suitable meals and sticking to them is a constant source of stress. This project showcases a demo solution transforms this critical challenge into tension-free meal choosing, just pick your choice.",
      image:
        "https://github.com/sivaranjiniezhumalai/Mealprep-/raw/main/output2.png?raw=true",
      link: "https://github.com/sivaranjiniezhumalai/Mealprep-/tree/main",
    },
    {
      title: "User Registry",
      description:
        "This project is essentially for my understanding. It's built with React for the frontend, SpringBoot handling the heavy lifting and security on the backend, and MySQL acting as the record keeper—allowing authorized users to not only view all the accounts but also modify or completely erase their own digital footprint, making it a great exploration of the full MERN/Spring stack.",
      image:
        "https://github.com/sivaranjiniezhumalai/User-Registry/raw/main/output1.png?raw=true",
      link: "https://github.com/sivaranjiniezhumalai/User-Registry",
    },
    {
      title: "Data Structure & Algorithms",
      description:
        "If you looked at my screen most days, you'd find me knee-deep in DSA problems. I see it as training my mind to be a high-performance machine . I believe that understanding structures like hash maps, trees, and graphs is the difference between writing an application that works and writing one that excels when the real-world data loads hit. It's my way of mastering the how and why behind great software design.",
      image: project4,
      link: "https://leetcode.com/u/sivaranjiniezhumalai/",
    },
  ];

  const internships = [
    {
      title: "Data Analyst",
      company: "Vayumitra",
      duration: "June 2025 - July 2025",
      description:
        "I worked on generating and running the WRF model to simulate atmospheric conditions for specific regions. I retrieved and analyzed key meteorological variables (temperature, wind, humidity, etc.) from model outputs based on assigned dates, times, and coordinates. I extracted data from NetCDF files using Python tools and processed it for use in climate analysis and forecasting. This role deepened my understanding of numerical weather prediction and geospatial data handling. I also gained hands-on experience with high-performance computing and scientific data workflows.",
      link: "https://www.linkedin.com/in/sivaranjini-ezhumalai-622941300/",
    },
  ];

  return (
    <section id="work" className="py-5 bg-light">
      <div className="container">
        {/* Projects Section */}
        <h2 className="text-center mb-5 text-main fw-bold">My Work</h2>
        <div className="row g-4 mb-5">
          {projects.map((project, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 shadow-sm">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  {/* Projects Section */}
                  <a
                    href={project.link}
                    className="btn btn-outline-success btn-lg d-flex align-items-center gap-2 mt-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-box-arrow-up-right"></i> View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Internship Section */}
        <h2 className="text-center mb-5 text-main fw-bold">My Internship</h2>
        <div className="row g-4 justify-content-center">
          {internships.map((intern, index) => (
            <div key={index} className="col-md-6">
              <div className="card shadow-sm h-100 border-0">
                <div className="card-body">
                  <h5 className="card-title text-main fw-bold">
                    {intern.title}
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {intern.company}
                  </h6>
                  <p className="text-secondary">{intern.duration}</p>
                  <p className="card-text">{intern.description}</p>
                  {/* Internship Section */}
                  {intern.link && (
                    <a
                      href={intern.link}
                      className="btn btn-outline-success btn-lg d-flex align-items-center gap-2 mt-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-link-45deg"></i> Check Internship Work
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
