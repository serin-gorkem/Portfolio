import Highlight from "../components/Highlight" ;
function WhatIDo() {
  return (
    <article id="whatIDo" className="max-container mx-2 flex items-center py-8 sm:py-16 sm:mx-8">
      {/* <div className="flex h-8 w-full mb-32 justify-center">
        <ul className="mb-36 flex w-24 justify-evenly self-center sm:w-32">
          <li className="aspect-square w-3 rounded-full bg-primary sm:w-5"></li>
          <li className="aspect-square w-3 rounded-full bg-secondary sm:w-5"></li>
          <li className="aspect-square w-3 rounded-full bg-primary sm:w-5"></li>
        </ul>
      </div> */}
      <section className="flex flex-col w-full justify-between gap-3 sm:gap-16 xl:flex-row">
        <div className="flex gap-1 sm:h-16 sm:gap-2">
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
          <div>
            <h1 className="pb-3 font-playfair text-xl font-light sm:pb-6 sm:text-3xl">
              Design
            </h1>
            <p className="font-lato leading-relaxed sm:leading-relaxed tracking-[%2] opacity-50 sm:w-[45rem] sm:text-xl">
              I design beautiful and powerful websites for modern businesses.
              Any business today needs a website that wins customers&#39; trust
              and helps you do your business well. I make sure your website is
              up to that standard.
            </p>
          </div>
          <div>
            <h1 className="pb-3 font-playfair text-xl font-light sm:pb-6 sm:text-3xl">
              Development
            </h1>
            <p className="font-lato leading-relaxed sm:leading-relaxed tracking-[%2] opacity-50 sm:w-[45rem] sm:text-xl">
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
