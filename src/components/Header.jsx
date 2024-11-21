import { useThemeStore } from "../stores/useThemeStore";
import { ThemeSwitch } from "./ThemeSwitch";
import Sloth from "../assets/sloth.jpg";

export const Header = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <header
      className={`${
        theme === "light"
          ? "bg-secondary text-primary"
          : "bg-primary text-secondary"
      } flex flex-col justify-center xl:justify-between p-5 md:pt-10 lg:p-12 shadow-md w-full xl:w-[45%] xl:h-screen gap-y-6`}
    >
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold md:text-center">
          Hello, Productivity!
        </h1>
        <h2 className="text-base font-medium text-gray-400 mt-2 md:text-center">
          Welcome to finally getting stuff done.
        </h2>
      </div>

      {/* Large Screen Image */}
      <div className="hidden xl:block mt-4">
        <img
          src={Sloth}
          alt="Illustration of a sloth to inspire productivity"
          className="rounded-lg shadow-md object-cover"
        />
      </div>
      <div className="mt-auto flex justify-center">
        <ThemeSwitch />
      </div>
    </header>
  );
};
