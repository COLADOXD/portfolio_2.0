import ContactIcon from "../assets/svg/ContactIcon";
import GithubIcon from "../assets/svg/GithubIcon";
import LinkedinIcon from "../assets/svg/LinkedinIcon";
import ExperienceIcon from "../assets/svg/WorkExperienceIcon";

const ListContacts = [
  { name: "Github", icon: GithubIcon, link: "https://github.com/COLADOXD" },
  { name: "Linkedin", icon: LinkedinIcon, link: "https://linkedin.com/in/mateo-chacon-4a45a52b2/" },
  { name: "Email", icon: ExperienceIcon, link: "mailto:xdmate90@gmail.com" },
];

export const ContactComponent = () => {
  return (
    <div className="flex flex-col mb-10 w-screen max-w-[800px] ml-4 items-start justify-start">
      <div className="flex items-center justify-center">
        <ContactIcon className="size-12 dark:text-white mr-4" />
        <h1>Contact</h1>
      </div>
      <div className="flex mt-8">
        {ListContacts.map((contact, key) => {
          const IconComponent = contact.icon;
          return (
            <a
              href={contact.link}
              target="_blank"
              className="flex items-center p-4 mr-4 rounded-3xl border-2 border-gray-200 dark:border-gray-900"
              key={key}
            >
              <IconComponent className="size-12 dark:text-white" />
              <p className="ml-2">{contact.name}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
};
