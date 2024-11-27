import { render } from "react-dom";
import ButtonSvg from "../assets/svg/ButtonSvg";

/**
 * Reusable Button component that supports rendering as either a button or an anchor link.
 *
 * @param {object} props - The component props.
 * @param {string} [props.className] - Additional CSS classes to style the button.
 * @param {string} [props.href] - If provided, renders the button as an anchor link.
 * @param {function} [props.onClick] - Click event handler for the button.
 * @param {React.ReactNode} props.children - Content inside the button.
 * @param {string} [props.px] - Padding for the button, default is "px-7".
 * @param {boolean} [props.white] - Determines the text color and SVG variant.
 * @returns {JSX.Element} The rendered Button component.
 */
const Button = ({ className, href, onClick, children, px, white }) => {
  // Base classes for the button
  const classes = `button relative inline-flex items-center justify-center
  h-11 transition-colors hover:text-color-1 ${px || "px-7"}
  ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

  // Classes for the content span inside the button
  const spanClasses = "relative z-10";

  /**
   * Renders the button as a <button> element.
   * Used when `href` is not provided.
   */
  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)} {/* SVG icon for the button */}
    </button>
  );

  /**
   * Renders the button as an <a> element.
   * Used when `href` is provided.
   */
  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)} {/* SVG icon for the link */}
    </a>
  );

  // Render as a button or link based on the presence of `href`
  return href ? renderLink() : renderButton();
};

export default Button;
