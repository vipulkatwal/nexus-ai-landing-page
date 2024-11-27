import { lines } from "../../assets";

// LeftLine component renders a decorative line on the left side of the page.
export const LeftLine = () => {
  return (
    <div className="hidden lg:block absolute top-1/2 right-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 pointer-events-none">
      {/* Decorative line image displayed on the left */}
      <img
        className="w-full"
        src={lines}
        width={1480} // Original width of the image
        height={177} // Original height of the image
        alt="Lines" // Descriptive alt text for accessibility
      />
    </div>
  );
};

// RightLine component renders a decorative line on the right side of the page.
export const RightLine = () => {
  return (
    <div className="hidden lg:block absolute top-1/2 left-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 -scale-x-100 pointer-events-none">
      {/* Decorative line image displayed on the right with horizontal flip */}
      <img
        className="w-full"
        src={lines}
        width={1480} // Original width of the image
        height={177} // Original height of the image
        alt="Lines" // Descriptive alt text for accessibility
      />
    </div>
  );
};
