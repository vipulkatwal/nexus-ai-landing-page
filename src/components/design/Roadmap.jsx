import { gradient } from "../../assets";

// Gradient component renders a large decorative gradient image on the page.
export const Gradient = () => {
  return (
    <div className="absolute top-[18.25rem] -left-[30.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
      {/* Container for the gradient image */}
      <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
        {/* Decorative gradient image */}
        <img
          className="w-full"
          src={gradient} // Path to the gradient asset
          width={942} // Original width of the image
          height={942} // Original height of the image
          alt="Gradient" // Descriptive alt text for accessibility
        />
      </div>
    </div>
  );
};
