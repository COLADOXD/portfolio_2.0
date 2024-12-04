import {
  CSSIcon,
  DartIcon,
  FirebaseIcon,
  FlutterIcon,
  HTMLIcon,
  JavaScriptIcon,
  ReactIcon,
  TailwindIcon,
  TypeScriptIcon,
  VueIcon,
} from "../assets/svg/LanguagesIcons";
import TechnologiesIcon from "../assets/svg/Technologies";

const Language = [
  { name: "HTML", icon: HTMLIcon },
  { name: "CSS", icon: CSSIcon },
  { name: "JavaScript", icon: JavaScriptIcon },
  { name: "TypeScript", icon: TypeScriptIcon },
  { name: "Dart", icon: DartIcon },
  { name: "React", icon: ReactIcon },
  { name: "Vue", icon: VueIcon },
  { name: "Flutter", icon: FlutterIcon },
  { name: "Firebase", icon: FirebaseIcon },
  { name: "Tailwind", icon: TailwindIcon },
];

export const LanguagesComponent = () => {
  return (
    <div className="flex flex-col w-full max-w-[800px] items-start pb-10">
      <div className="flex items-center justify-center pb-10">
        <TechnologiesIcon className="size-12 dark:text-white mr-4" />
        <h1>Languages</h1>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-5 md:gap-10 mb-10 w-full rounded-xl border-[1px] border-gray-200 shadow-2xl shadow-gray-300 dark:border-gray-800 py-10">
        {Language.map((language, key) => {
          const IconComponent = language.icon;
          return (
            <div key={key} className=" flex flex-col items-center">
              <IconComponent className="w-10 h-10 mb-2" />
              <h3 className="text-2xl text-gray-900 dark:text-gray-300">{language.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
