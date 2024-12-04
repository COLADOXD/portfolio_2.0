import { LanguagesComponent } from "./LanguagesComponent";
import { ProjectsComponent } from "./ProjectsComponent";
import { WorkExperienceComponent } from "./WorkExperienceComponent";

export const BodyComponent = () => {
  return (
    <div className="max-w-[800px]">
      <WorkExperienceComponent />
      <div className="bg-gray-700 w-full h-[1px] my-10" />
      <ProjectsComponent />
      <div className="bg-gray-700 w-full h-[1px] my-10" />
      <LanguagesComponent />
    </div>
  );
};
