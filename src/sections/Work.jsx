import { useState } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
AOS.init();

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
        "The Elysium Hotel website design focuses on elegance and user experience. It features a modern layout with visually captivating imagery, intuitive navigation, and a seamless booking system...",
      showcaseDescription:
        "The Elysium Hotel website design focuses on elegance and user experience. It features a modern layout with visually captivating imagery, intuitive navigation, and a seamless booking system. The website showcases the luxurious amenities of the hotel, including spacious rooms with stunning views, an outdoor infinity pool and, fine dining experiences. Special attention is given to mobile responsiveness, ensuring an optimal experience across all devices. The color scheme reflects the brand’s sophistication, while large visuals and clear typography guide users effortlessly through the site.",
      link: "https://www.figma.com/design/qpD0Urqf1aFgNX2kbWXtE6/Elysium-Hotel?node-id=0-1&t=fup4HToJp8RAZABu-1",
      buttonText: " visit figma file",
      image: "./Hotel.webp",
      alt: "Hotel website design on figma.",
      showcaseImage: "./Hotel-Showcase.webp",
    },
    {
      id: "1",
      title: "Weather Pulse Website",
      type: "WEB DEVELOPMENT",
      specs: [
        "Mobile-first design",
        "Responsiveness and adaptability",
        "User-friendly interface",
        "Cross-browser compatibility",
        "Accessibility",
        "EJS",
        "Tailwind",
        "Axios",
        "Node.js",
        "Express.js",
      ],
      description:
        "WeatherPulse is a dynamic, responsive weather forecasting app designed using Figma and built with EJS, Node.js, OpenWeather API, Express, Axios, and Tailwind CSS...",
      showcaseDescription:
        "WeatherPulse is a dynamic, responsive weather forecasting app designed using Figma and built with EJS, Node.js, OpenWeather API, Express, Axios, and Tailwind CSS. The clean, modern design provides real-time weather updates with a simple, intuitive interface. Users can easily search for any location and get detailed weather data, including temperature, humidity, wind speed, and more. The minimalist UI, coupled with Tailwind CSS, ensures a seamless experience across all devices. Since this was a template project, it can load a little bit late but it has 98 score on page speed insight. ",
      link: "https://weatherpulse.onrender.com/",
      buttonText: " visit live site",
      image: "./WeatherPulse.webp",
      alt: "Weather website called Weather Pulse",
      showcaseImage: "./WeatherPulse-Showcase.webp",
    },
    {
      id: "2",
      title: "Acme Website",
      type: "WEB DEVELOPMENT",
      specs: [
        "Mobile-first design",
        "Responsiveness and adaptability",
        "User-friendly interface",
        "Cross-browser compatibility",
        "Accessibility",
        "Tailwind",
      ],
      description:
        "Acme Rocket is a sleek, responsive website developed as part of a Tailwind CSS tutorial. Built using Tailwind's utility-first approach, the site offers a minimalist and modern layout with optimized styling and fast load times...",
      showcaseDescription:
        "Acme Rocket is a sleek, responsive website developed as part of a Tailwind CSS tutorial. Built using Tailwind’s utility-first approach, the site offers a minimalist and modern layout with optimized styling and fast load times. The design showcases a fictional rocket service with clear, bold typography, vibrant colors, and responsive design that adapts seamlessly to all devices. This project was a hands-on exercise in applying Tailwind's principles for clean, maintainable code and fast front-end development.",
      link: "https://acme-rocket-tailwind-2pn7.onrender.com/",
      buttonText: " visit live site",
      image: "./Acme.webp",
      alt: "A fun acme website",
      showcaseImage: "./Acme-Showcase.webp",
    },
    {
      id: "3",
      title: "Nike Clone Website",
      type: "WEB DEVELOPMENT",
      specs: [
        "Mobile-first design",
        "Responsiveness and adaptability",
        "User-friendly interface",
        "Cross-browser compatibility",
        "Accessibility",
        "React",
        "Tailwind",
      ],
      description:
        "The React Nike App is a responsive e-commerce website developed through a React and Tailwind CSS tutorial...",
      showcaseDescription:
        "The React Nike App is a responsive e-commerce website developed through a React and Tailwind CSS tutorial. The app features a clean and dynamic interface that showcases products in a grid format. Built with React for efficient rendering and Tailwind CSS for rapid styling, the project emphasizes modular components, smooth navigation, and fast load times. This app simulates an online store experience, complete with product filtering and dynamic UI updates, while demonstrating the power of React and Tailwind in modern web development.",
      link: "https://react-nike-app-cr.netlify.app/",
      buttonText: " visit live site",
      image: "./Nike.webp",
      alt: "Nike clone website.",
      showcaseImage: "./Nike-Showcase.webp",
    },
    {
      id: "4",
      title: "Chat Clone Website Design",
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
        "This is a homepage design and build for a concept project - a chat application. I designed the page and plan to built it on Webflow in the future.",
      showcaseDescription:
        "This is a homepage design and build for a concept project - a chat application. I designed the page and plan to built it on Webflow in the future. ",
      link: "https://www.figma.com/design/NeWDS6LTqcEWSByApMAOBP/Practice%3A-Chat-App-Homepage-Design-(Copy)?node-id=107-2&t=l9sJWatKgJ3lOTdr-1",
      buttonText: " visit figma file",
      image: "./Chat.webp",
      alt: "Chat website app design.",
      showcaseImage: "./Chat-Showcase.webp",
    },
    {
      id: "5",
      title: "RRated Website",
      type: "WEB DEVELOPMENT",
      specs: [
        "Mobile-first design",
        "Responsiveness and adaptability",
        "User-friendly interface",
        "Cross-browser compatibility",
        "Accessibility",
        "Backend",
        "Search logic ",
        "SASS",
      ],
      description:
        "RRated is a responsive movie database website developed using the Movie Database (TMDb) API. This project features a modern, user-friendly interface with dynamic content fetched from the API...",
      showcaseDescription:
        "RRated is a responsive movie database website developed using the Movie Database (TMDb) API. This project features a modern, user-friendly interface with dynamic content fetched from the API. Built with SASS for organized and efficient styling, it enables users to search for movies, view details, and explore trending films. The site demonstrates effective API integration and emphasizes clean, maintainable code alongside an attractive layout.",
      link: "https://rrated.netlify.app/",
      buttonText: " visit live site",
      image: "./RRated.webp",
      alt: "RRated movie rating website",
      showcaseImage: "./RRated-Showcase.webp",
    },
    {
      id: "6",
      title: "KusadasiVipTaxi Website",
      type: "WEB DEVELOPMENT",
      specs: [
        "Mobile-first design",
        "Responsiveness and adaptability",
        "User-friendly interface",
        "Cross-browser compatibility",
        "Accessibility",
        "React",
        "Tailwind",
      ],
      description:
        "Kusadasi VIP Taxi was my first professional project, completed in just one month using React and Tailwind CSS...",
      showcaseDescription:
        "Kusadasi VIP Taxi was my first professional project, completed in just one month using React and Tailwind CSS. Despite tight time and budget constraints, the site features a responsive, user-friendly design that allows users to book rides and access information with ease. A key feature is the ability to switch between languages, making it accessible to a broader audience. This project showcases efficient development under pressure, balancing functionality and speed.",
      link: "https://kusadasiviptaxi.com/",
      buttonText: " visit live site",
      image: "./Taxi.webp",
      showcaseImage: "./Taxi-Showcase.webp",
    },
  ]);
  return (
    <article id="work" className="m-2 xl:m-4">
      {/* I used a projectData array to store the information about the work title to specs. */}
      {projectData.map((project) => {
        return (
          <section
            key={project.id}
            data-aos="fade-up"
            className="max-container my-8 flex flex-col justify-between p-4 sm:items-start sm:px-8 xl:flex-row xl:items-center xl:px-[6rem]"
          >
            {/* Left - Top div */}
            <section className="flex flex-col justify-between gap-6 text-text-white sm:gap-9 xl:w-8/12">
              <div>
                {/* Project type */}
                <h1 className="mb-2 font-lato text-xs tracking-[0.2rem] opacity-60 sm:px-1 sm:text-base">
                  {projectData[project.id].type}
                </h1>
                {/* Project title  */}
                <p className="font-title text-[2rem] font-extrabold leading-tight tracking-tighter sm:text-6xl sm:leading-tight xl:w-[26rem]">
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
              <div className="relative h-[3.75rem] w-[9.625rem] border-2 border-highlight sm:h-[3.75rem] sm:w-[10.625rem]">
                <Link to="/showcase" className="p-2" state={{ project } }>
                  <button className="h-[3.75rem] w-[9.625rem]  -translate-x-4 hover:-translate-x-2 hover:-translate-y-[0.13rem] -translate-y-2 bg-highlight font-lato text-xs text-white transition-all duration-500 sm:h-[3.75rem] sm:w-[10.625rem] sm:text-base">
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
                  <svg
                    className="absolute -bottom-6 -left-7 -z-10 hidden aspect-square w-32 sm:block xl:hidden"
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
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                    <circle
                      cx="1.81962"
                      cy="38.94"
                      r="1.81962"
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                    <circle
                      cx="1.81962"
                      cy="88.4336"
                      r="1.81962"
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                    <circle
                      cx="1.81962"
                      cy="14.1932"
                      r="1.81962"
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                    <circle
                      cx="1.81962"
                      cy="51.3134"
                      r="1.81962"
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                    <circle
                      cx="1.81962"
                      cy="100.807"
                      r="1.81962"
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                    <circle
                      cx="1.81962"
                      cy="26.5663"
                      r="1.81962"
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                    <circle
                      cx="1.81962"
                      cy="76.0601"
                      r="1.81962"
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                    <circle
                      cx="1.81962"
                      cy="63.6866"
                      r="1.81962"
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                    <circle
                      cx="1.81962"
                      cy="113.18"
                      r="1.81962"
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                    <circle
                      cx="38.9397"
                      cy="100.807"
                      r="1.81962"
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                    <circle
                      cx="38.9397"
                      cy="113.18"
                      r="1.81962"
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                    <circle
                      cx="76.0599"
                      cy="100.807"
                      r="1.81962"
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                    <circle
                      cx="76.0599"
                      cy="113.18"
                      r="1.81962"
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                    <circle
                      cx="14.1932"
                      cy="1.81962"
                      r="1.81962"
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                    <circle
                      cx="14.1932"
                      cy="38.94"
                      r="1.81962"
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                    <circle
                      cx="14.1932"
                      cy="88.4336"
                      r="1.81962"
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                    <circle
                      cx="14.1932"
                      cy="14.1932"
                      r="1.81962"
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                    <circle
                      cx="14.1932"
                      cy="51.3134"
                      r="1.81962"
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                    <circle
                      cx="14.1932"
                      cy="100.807"
                      r="1.81962"
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                    <circle
                      cx="14.1932"
                      cy="26.5663"
                      r="1.81962"
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                    <circle
                      cx="14.1932"
                      cy="76.0601"
                      r="1.81962"
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                    <circle
                      cx="14.1932"
                      cy="63.6866"
                      r="1.81962"
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                    <circle
                      cx="14.1932"
                      cy="113.18"
                      r="1.81962"
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                    <circle
                      cx="51.3133"
                      cy="100.807"
                      r="1.81962"
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                    <circle
                      cx="51.3133"
                      cy="113.18"
                      r="1.81962"
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                    <circle
                      cx="88.4334"
                      cy="100.807"
                      r="1.81962"
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                    <circle
                      cx="88.4334"
                      cy="113.18"
                      r="1.81962"
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                    <circle
                      cx="26.5664"
                      cy="100.807"
                      r="1.81962"
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                    <circle
                      cx="26.5664"
                      cy="113.18"
                      r="1.81962"
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                    <circle
                      cx="63.6868"
                      cy="100.807"
                      r="1.81962"
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                    <circle
                      cx="63.6868"
                      cy="113.18"
                      r="1.81962"
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                    <circle
                      cx="100.807"
                      cy="100.807"
                      r="1.81962"
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                    <circle
                      cx="100.807"
                      cy="113.18"
                      r="1.81962"
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                    <circle
                      cx="113.18"
                      cy="100.807"
                      r="1.81962"
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                    <circle
                      cx="113.18"
                      cy="113.18"
                      r="1.81962"
                      fill="#FF6500"
                      fillOpacity="0.6"
                    />
                  </svg>
                </div>
                <svg
                  className="absolute -bottom-6 -left-7 -z-10 aspect-square w-32 sm:hidden xl:block"
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
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="1.81962"
                    cy="38.94"
                    r="1.81962"
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="1.81962"
                    cy="88.4336"
                    r="1.81962"
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="1.81962"
                    cy="14.1932"
                    r="1.81962"
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="1.81962"
                    cy="51.3134"
                    r="1.81962"
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="1.81962"
                    cy="100.807"
                    r="1.81962"
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="1.81962"
                    cy="26.5663"
                    r="1.81962"
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="1.81962"
                    cy="76.0601"
                    r="1.81962"
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="1.81962"
                    cy="63.6866"
                    r="1.81962"
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="1.81962"
                    cy="113.18"
                    r="1.81962"
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="38.9397"
                    cy="100.807"
                    r="1.81962"
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="38.9397"
                    cy="113.18"
                    r="1.81962"
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="76.0599"
                    cy="100.807"
                    r="1.81962"
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="76.0599"
                    cy="113.18"
                    r="1.81962"
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="14.1932"
                    cy="1.81962"
                    r="1.81962"
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="14.1932"
                    cy="38.94"
                    r="1.81962"
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="14.1932"
                    cy="88.4336"
                    r="1.81962"
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="14.1932"
                    cy="14.1932"
                    r="1.81962"
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="14.1932"
                    cy="51.3134"
                    r="1.81962"
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="14.1932"
                    cy="100.807"
                    r="1.81962"
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="14.1932"
                    cy="26.5663"
                    r="1.81962"
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="14.1932"
                    cy="76.0601"
                    r="1.81962"
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="14.1932"
                    cy="63.6866"
                    r="1.81962"
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="14.1932"
                    cy="113.18"
                    r="1.81962"
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="51.3133"
                    cy="100.807"
                    r="1.81962"
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="51.3133"
                    cy="113.18"
                    r="1.81962"
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="88.4334"
                    cy="100.807"
                    r="1.81962"
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="88.4334"
                    cy="113.18"
                    r="1.81962"
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="26.5664"
                    cy="100.807"
                    r="1.81962"
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="26.5664"
                    cy="113.18"
                    r="1.81962"
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="63.6868"
                    cy="100.807"
                    r="1.81962"
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="63.6868"
                    cy="113.18"
                    r="1.81962"
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="100.807"
                    cy="100.807"
                    r="1.81962"
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="100.807"
                    cy="113.18"
                    r="1.81962"
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="113.18"
                    cy="100.807"
                    r="1.81962"
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                  <circle
                    cx="113.18"
                    cy="113.18"
                    r="1.81962"
                    fill="#FF6500"
                    fillOpacity="0.6"
                  />
                </svg>
              </Link>
            </section>
          </section>
        );
      })}
      {/* */}
    </article>
  );
}

export default Work;
