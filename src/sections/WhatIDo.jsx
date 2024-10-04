import "aos/dist/aos.css";
import AOS from "aos";
import PageDivider from "../components/PageDivider";
AOS.init();
/**
 * @description The WhatIDo component describes the developer's skills and services.
 */
function WhatIDo() {
  return (
    <article id="whatIDo" className="m-2 xl:m-4 py-8">
      <PageDivider title="What" titleHighlight="I do" page="03" />
      <section className="max-container flex w-full text-text-white relative flex-col justify-between gap-8 p-4 sm:gap-16  sm:p-8 xl:flex-row xl:px-[6rem]">
      <div className=" bg-secondary h-64 -z-10 sm:left-96 bottom-0 left-20 absolute w-full"></div>
        <div className="flex flex-col justify-between w-full gap-12 xl:flex-row">
          <div data-aos="fade-up">
            <h1 className="pb-3 font-title text-xl font-bold sm:pb-6 sm:text-3xl">
              Design
            </h1>
            <p className="font-lato font-light leading-relaxed tracking-[%2] opacity-70 sm:w-[35rem] sm:text-xl sm:leading-relaxed">
              I design beautiful and powerful websites for modern businesses.
              Any business today needs a website that wins customers&#39; trust
              and helps you do your business well. I make sure your website is
              up to that standard.
            </p>
          </div>
          <div data-aos="fade-up">
            <h1 className="pb-3 font-title text-xl font-bold sm:pb-6 sm:text-3xl">
              Development
            </h1>
            <p className="font-lato font-light leading-relaxed tracking-[%2] opacity-70 sm:w-[35rem] sm:text-xl sm:leading-relaxed">
              I build websites with mostly React and Webflow where I can create
              responsive, powerful and fully custom websites. Plus, Webflow has
              an incredibly simple Content Editor for you and your team to edit
              website content quickly and easily.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
export default WhatIDo;

