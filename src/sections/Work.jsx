import { useState } from "react";
import { Link } from "react-router-dom";
/**
 * @description This function takes an array of project data and returns a JSX element that displays each project in a card format.
 * @param {Array} projectData - An array of objects containing information about each project. Each object should have the following properties:
 *  - id: A unique identifier for the project.
 *  - title: The title of the project.
 *  - type: The type of work the project represents.
 *  - specs: An array of strings representing the specifications of the project.
 *  - description: A detailed description of the project.
 *  - link: A URL pointing to more information about the project.
 *  - buttonText: The text that will appear on the button linking to more information about the project.
 *  - image: The URL of an image representing the project.
 * @returns {JSX.Element} A JSX element representing a card for each project in the projectData array.
 */
function Work() {
  const [projectData, setProjectData] = useState([
    {
      id: "0",
      title: "Elysium Hotel Website Design",
      type: "WEB DESIGN WORK",
      specs: [
        "Mobile-first design",
        "Responsiveness and adaptability",
        "User-friendly interface",
        "Cross-browser compatibility",
        "Accessibility",
        "Figma",
      ],
      description:
        "This is a homepage design and build for a concept project - a chat application. I designed the page first then built a responsive web page using Webflow",
      link: "https://www.figma.com/design/19B4Ts2SMJCerIFwftbOGr/Responsive-Design-Template-(Copy)?node-id=2027-7&t=dTFkvUlk6xMYySfz-1",
      buttonText: " visit figma file",
      image: "./Hotel-Showcase.webp",
    },
    {
      id: "1",
      title: "Elysium Hotel Website Design",
      type: "WEB DESIGN WORK",
      specs: [
        "Mobile-first design",
        "Responsiveness and adaptability",
        "User-friendly interface",
        "Cross-browser compatibility",
        "Accessibility",
        "Figma",
      ],
      description:
        "This is a homepage design and build for a concept project - a chat application. I designed the page first then built a responsive web page using Webflow",
      link: "https://www.figma.com/design/19B4Ts2SMJCerIFwftbOGr/Responsive-Design-Template-(Copy)?node-id=2027-7&t=dTFkvUlk6xMYySfz-1",
      buttonText: " visit live site",
      image: "./Hotel-Showcase.webp",
    },
  ]);
  return (
    <article id="work" className="m-2 xl:m-4">
      {/* I used a projectData array to store the information about the work title to specs. */}
      {projectData.map((project) => {
        return (
          <section
            key={project.id}
            className="max-container my-8 flex flex-col justify-between p-4 sm:items-start sm:px-8 xl:flex-row xl:items-center xl:px-[6rem]"
          >
            {/* Left - Top div */}
            <section className="flex flex-col justify-between gap-6 text-secondary sm:gap-9 xl:w-8/12">
              <div>
                {/* Project type */}
                <h1 className="mb-2 font-lato text-xs tracking-[0.2rem] text-black opacity-60 sm:px-1 sm:text-base">
                  {projectData[project.id].type}
                </h1>
                {/* Project title  */}
                <p className="font-playfair text-[2rem] font-extrabold leading-tight tracking-tighter sm:text-6xl sm:leading-tight xl:w-[26rem]">
                  {projectData[project.id].title}
                </p>
              </div>
              {/* Project Specs */}
              <ul className="flex flex-wrap gap-2 font-lato font-bold text-black sm:w-8/12">
                {projectData[project.id].specs.map((spec) => (
                  <li
                    key={spec}
                    className="flex justify-center bg-primary p-4 py-1 text-xs"
                  >
                    {spec}
                  </li>
                ))}
              </ul>
              {/* Project summary */}
              <p className="font-lato font-light leading-[175%] tracking-normal sm:text-[1.125rem] sm:leading-[175%] xl:w-[26rem]">
                {projectData[project.id].description}
              </p>
              <div className="relative h-[2.75rem] w-[8.625rem] border-2 border-secondary sm:h-[3.75rem] sm:w-[10.625rem]">
                <Link to="/showcase" state={{project}}>
                  <button className="h-[2.75rem] w-[8.625rem] -translate-x-2 -translate-y-2 bg-secondary font-lato text-xs text-white transition-all duration-500 hover:translate-x-0 hover:translate-y-0 sm:h-[3.75rem] sm:w-[10.625rem] sm:text-base">
                    see this work
                  </button>
                </Link>
              </div>
            </section>
            {/* Right - Bottom div */}
            <section className="relative my-8 aspect-square sm:my-9 xl:w-1/2">
              <div className="group relative flex h-full w-full items-center justify-center bg-primary p-4 transition-all duration-300 xl:hover:-translate-y-4 xl:hover:translate-x-4">
                <img
                  src="./Hotel.webp"
                  decoding="async"
                  rel="preload"
                  width={"100%"}
                  height={"100%"}
                  className="hover w-full shadow-lg"
                  alt="hotel design landing page"
                ></img>
                <p className="absolute -bottom-8 right-0 hidden translate-x-8 text-secondary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 xl:block">
                  See this project
                </p>
                <svg
                  className="absolute -bottom-6 -left-7 -z-10 aspect-square w-32"
                  width="115"
                  height="115"
                  viewBox="0 0 115 115"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="1.81962"
                    cy="1.81962"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="1.81962"
                    cy="38.94"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="1.81962"
                    cy="88.4336"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="1.81962"
                    cy="14.1932"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="1.81962"
                    cy="51.3134"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="1.81962"
                    cy="100.807"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="1.81962"
                    cy="26.5663"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="1.81962"
                    cy="76.0601"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="1.81962"
                    cy="63.6866"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="1.81962"
                    cy="113.18"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="38.9397"
                    cy="100.807"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="38.9397"
                    cy="113.18"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="76.0599"
                    cy="100.807"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="76.0599"
                    cy="113.18"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="14.1932"
                    cy="1.81962"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="14.1932"
                    cy="38.94"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="14.1932"
                    cy="88.4336"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="14.1932"
                    cy="14.1932"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="14.1932"
                    cy="51.3134"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="14.1932"
                    cy="100.807"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="14.1932"
                    cy="26.5663"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="14.1932"
                    cy="76.0601"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="14.1932"
                    cy="63.6866"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="14.1932"
                    cy="113.18"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="51.3133"
                    cy="100.807"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="51.3133"
                    cy="113.18"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="88.4334"
                    cy="100.807"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="88.4334"
                    cy="113.18"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="26.5664"
                    cy="100.807"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="26.5664"
                    cy="113.18"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="63.6868"
                    cy="100.807"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="63.6868"
                    cy="113.18"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="100.807"
                    cy="100.807"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="100.807"
                    cy="113.18"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="113.18"
                    cy="100.807"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="113.18"
                    cy="113.18"
                    r="1.81962"
                    fill="#3C4510"
                    fillOpacity="0.6"
                  />
                </svg>
              </div>
            </section>
          </section>
        );
      })}
      {/* */}
    </article>
  );
}

export default Work;
