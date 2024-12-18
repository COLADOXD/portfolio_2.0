import Avatar from "../assets/img/anakinSkywalker.webp";

export const AvatarComponent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center py-10 ">
      <img className="size-40 rounded-full mb-4 md:mb-0" src={Avatar} alt="" />
      <div className="mx-4 text-center md:text-left">
        <h1>
          Hi,{" "}
          <strong className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-l from-blue-400 to-violet-700 ">
            I'm Mateo Chacon
          </strong>
        </h1>
        <p>
          +2 years of self-taught.{" "}
          <strong className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-l from-blue-400 to-violet-700">
            Future systems engineer and web developer
          </strong>
          . Specialized in creating interactive web pages. I study Systems Engineering at a distance.
        </p>
      </div>
    </div>
  );
};
