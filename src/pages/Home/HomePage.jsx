import { useState } from "react";
import { Link } from "react-router-dom";
import { joinCls, randomImgUrl } from "../../utilities/text.utils";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import { CATEGORIES } from "./constants";

import style from "./style.module.css";

export default function HomePage() {
  const fakeProjects = [
    {
      tags: [CATEGORIES.WEBSITES, CATEGORIES.AI, CATEGORIES.BLOCKCHAIN],
      title: "HomeLab.ai",
      image: randomImgUrl(),
    },
    {
      tags: [CATEGORIES.WEBSITES, CATEGORIES.BLOCKCHAIN],
      title: "WREF Team",
      image: randomImgUrl(),
    },
    {
      tags: [CATEGORIES.WEBSITES],
      title: "Huynd",
      image: randomImgUrl(),
    },
    {
      tags: [CATEGORIES.WEBSITES, CATEGORIES.DESIGNER],
      title: "Nabatti99",
      image: randomImgUrl(),
    },
    {
      tags: [CATEGORIES.MOBILE],
      title: "Uptimum Gold",
      image: randomImgUrl(),
    },
    {
      tags: [CATEGORIES.MOBILE],
      title: "TikTok",
      image: randomImgUrl(),
    },
    {
      tags: [CATEGORIES.AR_VR],
      title: "Virtual Shop",
      image: randomImgUrl(),
    },
  ];

  const [currentCategory, setCurrentCategory] = useState(CATEGORIES.WEBSITES);

  const showedProjects = fakeProjects.filter((project) => project.tags.includes(currentCategory));

  return (
    <div className="bg-light">
      <section className={joinCls("my-10", style["header-title"])}>
        <div className="container">
          <h1 className="text-center">We are Passgenix</h1>
          <h6 className="text-center text-secondary mt-3 text-uppercase text-loose">We always bring best products for you</h6>

          <div className="d-flex justify-content-center gap-4 mt-5">
            <button className="btn btn-lg btn-dark">About us</button>
            <button className="btn btn-lg btn-outline-dark">Hire we now</button>
          </div>
        </div>
      </section>

      <section className={joinCls("mt-5", style["header-experience"])}>
        <div className="container">
          <h6 className="text-center text-uppercase text-secondary text-loose">We are always available for freelance works</h6>
          <div className={joinCls("d-flex justify-content-center align-items-stretch gap-5 mt-4", style["experiences"])}>
            <div>
              <h1 className="text-center">10</h1>
              <p className="text-center m-0">Completed Projects</p>
            </div>
            <hr className="border-end border-secondary" />
            <div>
              <h1 className="text-center">92%</h1>
              <p className="text-center m-0">Positive Ratings</p>
            </div>
            <hr className="border-end border-secondary" />
            <div>
              <h1 className="text-center">03</h1>
              <p className="text-center m-0">Active Members</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className={joinCls("mt-10", style["project-showcases"])}>
        <div className="container">
          <h1 className="text-center">Projects</h1>
          <p className="text-center text-uppercase text-secondary text-loose mt-3">Make our customer's dreams come true</p>

          <ul className="nav nav-tabs justify-content-center gap-3 mt-5">
            {Object.values(CATEGORIES).map((category) => (
              <li className="nav-item">
                <Link
                  to="#projects"
                  className={joinCls("nav-link cursor-pointer", currentCategory === category && "active")}
                  aria-current="page"
                  onClick={() => setCurrentCategory(category)}
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>

          <div className="row mt-4 g-4">
            {showedProjects.map(({ image, tags, title }) => (
              <ProjectCard image={image} tags={tags} title={title} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
