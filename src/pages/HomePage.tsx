import { HeaderComponent } from "../components/HeaderComponent";
import { WorkExperienceComponent } from "../components/WorkExperienceComponent";

export const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <HeaderComponent />
      <WorkExperienceComponent />
    </div>
  );
};
