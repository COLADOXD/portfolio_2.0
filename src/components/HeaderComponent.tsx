import { AvatarComponent } from "./AvatarComponent";
import { NavComponent } from "./NavComponent";

export const HeaderComponent = () => {
  return (
    <div className="max-w-[800px]">
      <NavComponent />
      <AvatarComponent />
      <div className="bg-gray-700 h-[1px] my-10" />
    </div>
  );
};
