import WorkExperienceIcon from "../assets/svg/WorkExperience";

const Experiences = [
  {
    date: "At present",
    title: "University Student",
    description:
      "I am a student at the University of Israel, studying by distance learning, in my spare time I study programming on my own.",
  },
];

export const WorkExperienceComponent = () => {
  return (
    <div className="flex flex-col w-full max-w-[800px] items-start">
      <div className="flex items-center justify-center">
        <WorkExperienceIcon className="size-12 dark:text-white mr-4" />
        <h1>Work Experience</h1>
      </div>
      {Experiences.map((experience, key) => (
        <div key={key} className="flex my-10">
          <h2 className="text-gray-400 basis-1/3 text-start text-2xl">{experience.date}</h2>
          <div className="basis-2/3">
            <h3 className=" text-transparent bg-clip-text bg-gradient-to-r  from-red-400 to-violet-800 dark:bg-gradient-to-l dark:from-red-100 dark:to-red-900 font-bold">
              {experience.title}
            </h3>
            <p>{experience.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
