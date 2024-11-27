import React from "react";
import { notificationImages } from "../constants";
import { notification1 } from "../assets";

/**
 * Notification Component
 * Displays a notification card with an image, title, and associated icons.
 *
 * @param {object} props - The component's props.
 * @param {string} [props.className] - Additional class names to apply to the component.
 * @param {string} props.title - The title of the notification.
 * @returns {JSX.Element} The rendered notification component.
 */
const Notification = ({ className, title }) => {
  return (
    <div
      className={`${className || ""}
    flex items-center p-4 pr-6 bg-n-9/40 rounded-2xl gap-5`}
    >
      {/* Notification Image */}
      <img src={notification1} width={62} height={62} className="rounded-xl" />

      <div className="flex-1">
        {/* Notification Title */}
        <h6 className="mb-1 font-semibold text-base">{title}</h6>

        <div className="flex items-center justify-between">
          {/* Notification Icons */}
          <ul className="flex -m-0.5 ">
            {notificationImages.map((item, index) => (
              <li
                key={index}
                className="flex w-6 h-6 border-2
              border-n-12 rounded-full overflow-hidden"
              >
                <img
                  src={item}
                  className="w-full"
                  width={20}
                  height={20}
                  alt={item}
                />
              </li>
            ))}
          </ul>

          {/* Time Ago */}
          <div className="body-2 text-n-13">1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
