import { AvatarComponent } from "./AvatarComponent";
import { NavComponent } from "./NavComponent";

export const HeaderComponent = () => {
  return (
    <div className="max-w-[800px]">
      <NavComponent />
      <AvatarComponent />
    </div>
  );
};
