import { background } from "../../assets";

// Component to render concentric rings with specific styles and sizes
export const Rings = () => {
  return (
    <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2">
      {/* Middle ring */}
      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      {/* Inner ring */}
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

// Component to render vertical lines on the left and right sides of the screen
export const SideLines = () => {
  return (
    <>
      {/* Left vertical line */}
      <div className="absolute top-0 left-5 w-0.25 h-full bg-n-6"></div>
      {/* Right vertical line */}
      <div className="absolute top-0 right-5 w-0.25 h-full bg-n-6"></div>
    </>
  );
};

// Component to render decorative background circles with gradient styles
export const BackgroundCircles = () => {
  return (
    <>
      {/* Top-left small circle */}
      <div className="absolute top-[4.4rem] left-16 w-3 h-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full"></div>
      {/* Top-right small circle */}
      <div className="absolute top-[12.6rem] right-16 w-3 h-3 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full"></div>
      {/* Bottom-left larger circle */}
      <div className="absolute top-[26.8rem] left-12 w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full"></div>
    </>
  );
};

// Component to render a responsive background design and elements for the hamburger menu
export const HamburgerMenu = () => {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden">
      {/* Background image with low opacity */}
      <div className="absolute inset-0 opacity-[.03]">
        <img
          className="w-full h-full object-cover"
          src={background}
          width={688}
          height={953}
          alt="Background"
        />
      </div>

      {/* Concentric rings */}
      <Rings />

      {/* Vertical side lines */}
      <SideLines />

      {/* Decorative background circles */}
      <BackgroundCircles />
    </div>
  );
};
