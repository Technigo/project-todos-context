import SleepingSloth from "../assets/coffee-sloth.png";
import { useThemeStore } from "../stores/useThemeStore";
import { useLanguageStore } from "../stores/useLanguageStore";
import { translations } from "../data/translations";

export const NoTasksMessage = () => {
  const theme = useThemeStore((state) => state.theme);
  const currentLanguage = useLanguageStore((state) => state.currentLanguage);
  const text = translations[currentLanguage];

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="w-64 h-64 rounded-full border-2 border-gray-300 overflow-hidden">
        <img
          src={SleepingSloth}
          alt={text.slothAlt}
          className="w-full h-full object-cover"
        />
      </div>
      <p
        className={`mt-4 text-lg ${
          theme === "light" ? "text-primary" : "text-secondary"
        }`}
      >
        {text.slothMessage}
      </p>
    </div>
  );
};
