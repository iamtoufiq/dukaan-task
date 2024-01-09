import ProfileHeader from "./ProfileHeader";
import AvailbleCredits from "./AvailbleCredits";
import { Icons } from "../assets/icons/Icons";
import clsx from "clsx";

const Sidebar = () => {
  return (
    <div className="hidden sm:block">
      <div className="w-fit lg:w-56 bg-primary px-0 md:px-2.5 py-4 flex flex-col sticky top-0 h-screen overflow-auto ">
        <ProfileHeader />
        <ul className="space-y-1 mt-6 grow">
          {Icons.map((icon, index) => (
            <li
              key={index}
              className={clsx(
                `flex  justify-start items-center hover:bg-white/10 hover:cursor-pointer hover:rounded space-x-0 md:space-x-3 px-4 py-2`,
                icon.title === "Payments" && "bg-white/10"
              )}
            >
              {icon.Logo}
              <h1 className="text-white/80 text-sm font-medium hidden md:block">
                {icon.title}
              </h1>
            </li>
          ))}
        </ul>
        <AvailbleCredits />
      </div>
    </div>
  );
};

export default Sidebar;
