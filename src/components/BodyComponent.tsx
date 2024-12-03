import { LanguagesComponent } from "./LanguagesComponent";
import { WorkExperienceComponent } from "./WorkExperienceComponent";

export const BodyComponent = () => {
  return (
    <>
      <WorkExperienceComponent />
      <div className="bg-gray-700 w-full h-[1px] my-10" />
      <LanguagesComponent />
    </>
  );
};
