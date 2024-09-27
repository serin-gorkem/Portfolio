import PropTypes from "prop-types";

/**
 * @description The Highlight component is a component that can be used to highlight texts.
 * @param {node} element - The DOM element to add highlight effect to. 
 */
function Highlight({element}){
  /* This function is used to highlight the hovered element with a gradient background. */
    return(
        <div className="group relative z-10 mr-2 w-fit">
        <div className="absolute bottom-0 -z-10 h-[36%] w-full bg-highlight transition-all duration-500 sm:group-hover:h-[100%]"></div>
        {element}
      </div>
    )
}

export default Highlight;

Highlight.propTypes = {
    /* PropTypes is used to define the expected type and shape of the props passed to this component. */
    element: PropTypes.node.isRequired,
}