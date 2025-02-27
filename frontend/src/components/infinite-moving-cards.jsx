import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`scroller relative z-20 max-w-7xl overflow-hidden ${className}`}
    >
      <ul
        ref={scrollerRef}
        className={`flex min-w-full shrink-0 gap-6 py-6 w-max flex-nowrap ${
          start ? "animate-scroll" : ""
        } ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
      >
        {items.map((item, idx) => (
          <li
            className="group bg-indigo-500 text-white rounded-[2rem] overflow-hidden flex-shrink-0 transition-all w-[300px] sm:w-[350px] md:w-[450px] flex flex-col"
            key={idx}
          >
            {/* Blog Image */}
            <Link to={item.link} className="block">
              <div className="relative h-48">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="object-cover h-[30vh] w-full"
                />
              </div>
            </Link>

            {/* Blog Content */}
            <div className="p-6 flex flex-col flex-grow">
              <Link to={item.link} className="block">
                <h3 className="text-xl font-bold mb-3 group-hover:text-zinc-900 group-hover:cursor-pointer group-hover:underline line-clamp-2">
                  {item.name}
                </h3>
              </Link>
              <p className="mb-6 text-base line-clamp-3">{item.quote}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-md font-semibold">
                  By &nbsp;
                  <Link to="/all-doctors">
                    <span className="cursor-pointer group-hover:text-zinc-900 group-hover:underline">
                      {item.title}
                    </span>
                  </Link>
                </span>
                <div className="flex justify-center items-center gap-2 transition-all md:text-lg font-semibold">
                  <Link to={item.link} className="inline-block">
                    <button className="flex justify-center items-center group-hover:text-zinc-900 group-hover:gap-2 transition-all gap-1">
                      Learn more
                      <ArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
