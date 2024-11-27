import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading tag="Ready to get started" title="What we're working on" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`
                md:flex
                even:md:translate-y-[7rem]
                p-0.25
                rounded-[2.5rem]
                transition-all
                duration-500
                ease-in-out
                hover:scale-[1.02]
                hover:shadow-2xl
                hover:shadow-primary/20
                ${item.colorful ? "bg-conic-gradient" : "bg-n-6"}
                group
              `}
              key={item.id}
            >
              <div
                className="
                  relative
                  p-8
                  bg-n-8
                  rounded-[2.4375rem]
                  overflow-hidden
                  xl:p-15
                  transition-all
                  duration-500
                  ease-in-out
                  group-hover:bg-n-7
                "
              >
                <div className="absolute top-0 left-0 max-w-full opacity-30 group-hover:opacity-10 transition-opacity duration-500">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <Tagline className="transition-colors group-hover:text-n-2">
                      {item.date}
                    </Tagline>

                    <div
                      className="
                        flex
                        items-center
                        px-4
                        py-1
                        bg-n-1
                        rounded
                        text-n-8
                        transition-transform
                        group-hover:scale-105
                      "
                    >
                      <img
                        className="mr-2.5 transition-transform group-hover:rotate-12"
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  <div
                    className="
                      mb-10
                      -my-10
                      -mx-15
                      overflow-hidden
                      rounded-lg
                      transition-transform
                      duration-500
                      group-hover:scale-[1.05]
                    "
                  >
                    <img
                      className="
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-110
                      "
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>
                  <h4
                    className="
                      h4
                      mb-4
                      transition-colors
                      group-hover:text-primary
                    "
                  >
                    {item.title}
                  </h4>
                  <p
                    className="
                      body-2
                      text-n-4
                      transition-colors
                      group-hover:text-n-3
                    "
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button
          href="/roadmap"
          className="
            transition-all
            duration-500
            hover:scale-105
            hover:shadow-lg
          "
        >
          Our roadmap
        </Button>
      </div>
    </div>
  </Section>
);

export default Roadmap;