import { BodyComponent } from "../components/BodyComponent";
import { FooterComponent } from "../components/FooterComponent";
import { HeaderComponent } from "../components/HeaderComponent";

export const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4">
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </div>
  );
};
