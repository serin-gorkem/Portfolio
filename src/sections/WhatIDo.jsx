import Highlight from "../components/Highlight";
import 'aos/dist/aos.css';
import AOS from 'aos';
AOS.init();
function WhatIDo() {
  return (
    <article id="whatIDo" className="m-2 xl:m-4">
    <section className="max-container flex w-full flex-col justify-between gap-8 p-4 sm:gap-16 sm:px-8 xl:flex-row xl:px-[6rem]">
      <div className="flex gap-1 sm:h-16 sm:gap-2" data-aos="fade-up">
        <h1 className="font-playfair text-4xl font-extrabold tracking-tight text-secondary sm:text-6xl">
          What
        </h1>
        {
          <Highlight
            element={
              <h1 className="font-playfair text-4xl font-extrabold tracking-tight text-secondary sm:text-6xl">
                I do
              </h1>
            }
          />
        }
      </div>
      <div className="flex flex-col gap-3 sm:gap-16 xl:gap-6">
        <div data-aos="fade-up">
          <h1  className="pb-3 font-playfair text-xl font-bold sm:pb-6 sm:text-3xl">
            Design
          </h1>
          <p className="font-lato font-light leading-relaxed tracking-[%2] opacity-70 sm:w-[35rem] sm:text-xl sm:leading-relaxed">
            I design beautiful and powerful websites for modern businesses.
            Any business today needs a website that wins customers&#39;
            trust and helps you do your business well. I make sure your
            website is up to that standard.
          </p>
        </div>
        <div data-aos="fade-up">
          <h1 className="pb-3 font-playfair text-xl font-bold sm:pb-6 sm:text-3xl">
            Development
          </h1>
          <p className="font-lato font-light leading-relaxed tracking-[%2] opacity-70 sm:w-[35rem] sm:text-xl sm:leading-relaxed">
            I build websites with mostly React and Webflow where I can
            create responsive, powerful and fully custom websites. Plus,
            Webflow has an incredibly simple Content Editor for you and your
            team to edit website content quickly and easily.
          </p>
        </div>
      </div>
    </section>
  </article>
  );
}
export default WhatIDo;
