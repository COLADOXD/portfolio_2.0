import { AvatarComponent } from "./AvatarComponent";
import { NavComponent } from "./NavComponent";

export const HeaderComponent = () => {
  return (
    <div className="w-[800px]">
      <NavComponent />
      <AvatarComponent />
    </div>
  );
};
