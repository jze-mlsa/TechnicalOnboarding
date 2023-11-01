/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/rome-portrait.jpeg";

const imageAltText = "Photo of me in Rome, Italy";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Microsoft 365 at František Palacký Grammar School in Neratovice",
    description:
      "I implemented Microsoft 365 (Office 365 then) for both teachers and students at my grammar school. Thanks to M365, communication, collaboration and productivity advanced to a completely new level and everyone can use the newest Office suite - even at home. The entire project included consultations with the school's IT administrator, training and an adoption campaign (utilizing the school's website, social media and email). During the COVID-19 pandemic, transition to distance learning proved to be simple compared to other schools.",
    url: "https://www.gfp.cz/microsoft365/",
  },
  {
    title: "Website of the project 'Waking up in Baroque'",
    description:
      "Website of an Erasmus+ project that I participated in. The website is made in WordPress and is available in English and Czech.",
    url: "https://baroque.gfp.cz/",
  },
  {
    title: "Video - Microsoft Day 2019",
    description:
      "Video from the Microsoft Day 2019 event that I made a few years ago.",
    url: "https://www.youtube.com/watch?v=c9albOyY280",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
