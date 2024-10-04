import { lazy, memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageDivider from "../components/PageDivider";
const ImportAos = lazy(() => import("../components/ImportAos"));

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
const Work = memo(function Work() {
  /* Project data json state */
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  <ImportAos></ImportAos>;

  /* Fetching data from json file on component mount */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./ProjectData.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProjectData(data);
      } catch (error) {
        setError(error.message); // Capture error
      } finally {
        setLoading(false); // Stop loading once data is fetched or error occurs
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading projects...</p>; // Loading indicator
  }

  if (error) {
    return <p>Failed to load projects: {error}</p>; // Error message
  }

  const workList = projectData ? (
    projectData.map((project) => {
      return (
        <section
          key={project.id}
          data-aos="fade-up"
          className="max-container flex flex-col justify-between p-4 py-8 sm:items-start sm:px-8 xl:flex-row xl:items-center xl:px-[6rem]"
        >
          {/* Import AOS for animations */}
          <ImportAos />
          {/* Left - Top div */}
          <section className="flex flex-col justify-between gap-6 text-text-white sm:gap-9 xl:w-8/12">
            <div>
              {/* Project type */}
              <h1 className="mb-2 font-lato text-xs tracking-[0.2rem] opacity-60 sm:px-1 sm:text-base">
                {projectData[project.id].type}
              </h1>
              {/* Project title  */}
              <p className="font-title text-[2rem] font-medium leading-tight tracking-tighter sm:text-6xl sm:leading-tight xl:w-[26rem]">
                {projectData[project.id].title}
              </p>
            </div>
            {/* Project Specs */}
            <ul className="flex flex-wrap gap-2 font-lato font-bold sm:w-8/12">
              {projectData[project.id].specs.map((spec) => (
                <li
                  key={spec}
                  className="flex justify-center bg-secondary p-4 py-1 text-xs"
                >
                  {spec}
                </li>
              ))}
            </ul>
            {/* Project summary */}
            <p className="font-lato font-light leading-[175%] tracking-normal sm:text-[1.125rem] sm:leading-[175%] xl:w-[26rem]">
              {projectData[project.id].description}
            </p>
            <div className="relative h-[3.75rem] w-[9.625rem] border-2 border-secondary hover:border-highlight sm:h-[3.75rem] sm:w-[10.625rem]">
              <Link to="/showcase" className="p-2" state={{ project }}>
                <button className="h-[3.75rem] w-[9.625rem] -translate-x-4 -translate-y-2 bg-secondary font-lato text-sm font-bold text-white transition-all duration-500 hover:-translate-x-2 hover:-translate-y-[0.13rem] hover:bg-highlight sm:h-[3.75rem] sm:w-[10.625rem] sm:text-base">
                  see this work
                </button>
              </Link>
            </div>
          </section>
          {/* Right - Bottom div */}
          <section className="relative my-8 aspect-square sm:my-9 xl:w-1/2">
            <Link to="/showcase" state={{ project }}>
              <div className="group relative flex h-full w-full items-center justify-center bg-secondary p-4 transition-all duration-300 xl:hover:-translate-y-4 xl:hover:translate-x-4">
                <img
                  src={project.image}
                  decoding="async"
                  rel="preload"
                  width={"100%"}
                  height={"100%"}
                  className="hover w-full shadow-lg"
                  alt="hotel design landing page"
                ></img>
                <p className="absolute -bottom-8 right-0 hidden translate-x-8 text-highlight opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 xl:block">
                  See this project
                </p>
                <img
                  src="./svg/dots.svg"
                  alt="dots images"
                  className="absolute -bottom-6 -left-7 -z-10 hidden aspect-square w-32 sm:block xl:hidden"
                ></img>
              </div>
              <img
                src="./svg/dots.svg"
                alt="dots images"
                className="absolute -bottom-6 -left-7 -z-10 block aspect-square w-32 sm:hidden xl:block"
              ></img>
            </Link>
          </section>
        </section>
      );
    })
  ) : (
    <h1>There were some errors on fetching the data</h1>
  );

  return (
    <article id="work" className="m-2 py-8 sm:py-32 xl:m-4">
      <PageDivider title="Selected" titleHighlight="work" page="01" />
      {workList}
    </article>
  );
});

export default Work;
