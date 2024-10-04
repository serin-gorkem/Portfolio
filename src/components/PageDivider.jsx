import { lazy } from "react";
const PropTypes = lazy(() => import("prop-types"));
const Highlight = lazy(() => import("./Highlight"));
const ImportAos = lazy(() => import("../components/ImportAos"));

function PageDivider({ title, titleHighlight, page }) {
  return (
    <section
      className="max-container relative p-4 sm:px-8 xl:px-[6rem]"
      data-aos="fade-up"
    >
      {/* Import AOS for animations */}
      <ImportAos />
      <div className="flex justify-between py-4">
        <div className="flex gap-2">
          <h1 className="font-title text-3xl text-text-white sm:text-5xl">
            {title}
          </h1>
          {
            <Highlight
              element={
                <h1 className="font-title text-3xl text-text-white sm:text-5xl">
                  {titleHighlight}
                </h1>
              }
            />
          }
        </div>
        <h1 className="font-title text-3xl text-text-white sm:text-5xl">
          {page}
        </h1>
      </div>
      <hr className="border-secondary"></hr>
    </section>
  );
}

PageDivider.propTypes = {
  title: PropTypes.string,
  titleHighlight: PropTypes.string,
  page: PropTypes.string,
};

export default PageDivider;
