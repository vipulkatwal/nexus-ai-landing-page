import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { benefits } from "../constants";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from '../assets/svg/ClipPath'

/**
 * Benefits component showcases the key features or advantages of Nexus.ai.
 */
const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        {/* Section heading */}
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center"
          title="Chat Smarter, Not Harder with Nexus.ai" // Section title
        />

        {/* Benefits list */}
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat
              bg-[length:100%_100%] md:max-w-[24rem] z-10
              hover:scale-95 transition-all" // Hover effect and responsive design
              style={{
                backgroundImage: `url(${item.backgroundUrl})`, // Background image for each benefit card
              }}
              key={item.id} // Unique key for each item
            >
              <div
                className="relative z-2 flex flex-col
              min-h-[22rem] p-[2.4rem]" // Card content container
              >
                {/* Benefit title */}
                <h5 className="h5 mb-5">{item.title}</h5>
                {/* Benefit description */}
                <p className="body-2 mb-6 text-n-3">{item.text}</p>

                {/* Footer with icon and "Explore More" action */}
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl} // Benefit icon
                    width={48}
                    height={48}
                    alt={item.title} // Accessible alt text for the icon
                  />
                  <div
                    className="group/edit ml-auto flex justify-center
                  cursor-pointer items-center" // Hover effect for "Explore More" link
                  >
                    <p
                      className=" font-code tracking-wider
                      group-hover/edit:translate-x-0.5 transition-transform
                      text-xs font-bold text-n-1 uppercase" // Hover transition for text
                    >
                      Explore more
                    </p>
                    <div
                      className="group-hover/edit:translate-x-0.5
                    transition-transform" // Hover transition for arrow icon
                    >
                      <Arrow />
                    </div>
                  </div>
                </div>
              </div>

              {/* Optional gradient light effect */}
              {item.light && (
                <div className="-z-10">
                  <GradientLight />
                </div>
              )}



              <div className="absolute inset-0.5 bg-n-8"
                // style={{clipPath:"url(#benefits)"}}
              >
                <div className="absolute inset-0 opacity-0
                transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl} // Optional image for the benefit
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover" // Ensure image covers the entire card
                    />
                  )}
                </div>
              </div>
              */}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
