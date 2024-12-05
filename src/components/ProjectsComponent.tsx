import { FirebaseIcon, JavaScriptIcon, TailwindIcon, TypeScriptIcon, VueIcon } from "../assets/svg/LanguagesIcons";
import ProjectsIcon from "../assets/svg/ProjectsIcon";
import BauerImg from "../assets/img/bauer_web.webp";
import { SocialComponent } from "./SocialComponent";
import LinkIcon from "../assets/svg/linkIcon";
import GithubIcon from "../assets/svg/GithubIcon";

const ListProjects = [
  {
    src: BauerImg,
    title: "Certificate BAUER",
    description:
      "It is a page to create and generate certificates with an authentication system, in a simple and easy way. Built from scratch with Vue, Tailwind and Firebase",
    languages: [VueIcon, FirebaseIcon, TypeScriptIcon, JavaScriptIcon, TailwindIcon],
    link: "https://vue-academy-six.vercel.app/#/signin",
    github: "https://github.com/COLADOXD/vue_academy/tree/master",
  },
];

export const ProjectsComponent = () => {
  return (
    <div className="flex flex-col w-full max-w-[800px] items-start pb-10">
      <div className="flex items-center justify-start pb-10">
        <ProjectsIcon className="size-12 dark:text-gray-200 mr-4" />
        <h1>Projects</h1>
      </div>
      <div className="">
        {ListProjects.map((project, key) => (
          <div
            key={key}
            className="rounded-3xl border-2 flex flex-col border-gray-200 shadow-2xl shadow-gray-300 dark:border-gray-800  lg:flex-row"
          >
            <a href={project.link} target="_blank">
              <img
                className="rounded-t-2xl h-full w-full lg:rounded-l-2xl lg:rounded-r-none"
                src={project.src}
                alt="image"
                key={key}
              />
            </a>
            <div className="mx-4 mb-4 lg:w-1/2">
              <h3 className=" text-transparent bg-clip-text bg-gradient-to-r  from-red-400 to-violet-800 dark:bg-gradient-to-l dark:from-red-100 dark:to-red-900 font-bold my-2">
                {project.title}
              </h3>
              <p>{project.description}</p>
              <div className="flex mt-4">
                {project.languages.map((language, key) => {
                  const IconComponent = language;
                  return <IconComponent className="size-12 mr-4" key={key} />;
                })}
              </div>
              <div className="flex justify-end mt-4">
                <SocialComponent href={project.link}>
                  <LinkIcon className="size-12" />
                  <p>Link</p>
                </SocialComponent>
                <SocialComponent href={project.link}>
                  <GithubIcon className="size-12" />
                  <p>Github</p>
                </SocialComponent>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
