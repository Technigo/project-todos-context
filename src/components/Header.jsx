import { useThemeStore } from "../stores/useThemeStore";
import { useLanguageStore } from "../stores/useLanguageStore";
import { translations } from "../data/translations";
import { ThemeSwitch } from "./ThemeSwitch";
import { FlagButton } from "./FlagButton";
import Sloth from "../assets/sloth.jpg";

export const Header = () => {
  // Access current theme from the theme store
  const theme = useThemeStore((state) => state.theme);

  // Access current Language
  const { currentLanguage } = useLanguageStore();
  const text = translations[currentLanguage];

  return (
    <header
      className={`${
        theme === "light"
          ? "bg-secondary text-primary"
          : "bg-primary text-secondary"
      } flex flex-col justify-center gap-4 xl:justify-between p-6 md:p-10 md:gap-10 lg:p-12 lg:gap-12 shadow-md w-full xl:w-[40%] xl:h-screen xl:gap-2 xl:p-8`}
    >
      <FlagButton />
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold md:text-center">
          {text.greeting}
        </h1>
        <h2
          className={`${
            theme === "light" ? "text-gray-600" : "text-gray-300"
          } text-xl font-medium mt-2 md:text-center `}
        >
          {text.tagline}
        </h2>
      </div>

      {/* Large Screen Image */}
      <div className="hidden xl:block mt-4 p-4">
        <img
          src={Sloth}
          alt="Illustration of a sloth to inspire productivity"
          className="rounded-lg shadow-md object-contain max-h-[50vh] w-full"
        />
      </div>
      <div className="mt-auto flex justify-center">
        <ThemeSwitch />
      </div>
    </header>
  );
};
