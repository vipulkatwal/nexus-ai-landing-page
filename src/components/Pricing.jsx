import React, { useRef } from 'react';
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import Section from "./Section";
import { LeftLine, RightLine } from "./design/Pricing";
import { ScrollParallax } from "react-just-parallax";

const Pricing = () => {
  const parallaxRef = useRef(null);

  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2" ref={parallaxRef}>
        <div
          className="hidden relative justify-center
            mb-[6.5rem] lg:flex"
        >
          <ScrollParallax isAbsolutelyPositioned>
            <img
              src={smallSphere}
              className="relative z-1 transition-transform duration-300"
              width={255}
              height={255}
              alt="Sphere"
            />
          </ScrollParallax>

          <ScrollParallax isAbsolutelyPositioned>
            <div
              className="absolute top-1/2 left-1/2 w-[60rem]
                -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            >
              <img
                src={stars}
                className="w-full transition-transform duration-300"
                width={950}
                height={400}
                alt="Stars"
              />
            </div>
          </ScrollParallax>
        </div>

        <Heading
          tag="Get started with StarForge"
          title="Pay once, use forever"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="/pricing"
            className="text-xs font-code font-bold tracking-wider
                uppercase border-b "
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;