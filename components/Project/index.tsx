import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "Easy Banking",
    desc: "This challenge was provided by Frontend mentor to test out my layout skills and boost it up from my junior level. It was a great experience which enabled me to really test out my mobile responsiveness since that was my weakest point. Had a chance to collaborate with some peers and was able to learn new approaches on how to create good user experience desings.Also played around with firebase authentication with google cause why not!",
    link: "https://easy-banking-landingpage.netlify.app/",
    technologies: [
      {
        technology: "Firebase Google Auth",
      },
      {
        technology: "Tailwind CSS",
      },
      {
        technology: "React",
      },
      {
        technology: "Mobile Responsiveness",
      },
    ],
    image: "/easy.jpg",
  },
  {
    title: "Imalipay's Website",
    desc: "Being amongst the companies that offer emmbended finance as fintech-as a service in the African tech space. Imalipay's website showcases the different API services that they have, their mission and vision on how to revolutionalize the gig econom sector in Africa.",
    link: "https://www.imalipay.com/",
    technologies: [
      {
        technology: "Next js",
      },
      {
        technology: "Tailwind CSS",
      },
      {
        technology: "React Email",
      },
      {
        technology: "Mobile Responsiveness",
      },
    ],
    image: "/imalipay.png",
  },
  {
    title: "Imalipay's B2B Dashboard prototype",
    desc: "The B2B Dashboard application is a dashboard solution that caters for ours new partners to meet their business requirements and needs. The objective of the dashboard is to tell the data’s story,that can be easily consumed and offer the ability to compare past performance and tracking. In addition, it also ensures that complex information becomes easily interpreted and new insights are found ",
    link: "https://portal-prototype-aphrysof.vercel.app/",
    technologies: [
      {
        technology: "Next js",
      },
      {
        technology: "Tailwind CSS",
      },
      {
        technology: "React Redux",
      },
      {
        technology: "Chakra UI",
      },
      {
        technology: "axios",
      },
    ],
    image: "/portal.png",
  },
];

type ProjectProps = {
  title: string;
  desc: string;
  link: string;
  image: string;
  technologies: {
    technology: string;
  }[];
};

const Tiles = ({ skill }: { skill: string }) => {
  return (
    <div className="border-2 border-white rounded-lg py-3 px-4 bg-white bg-opacity-50 cursor-pointer">
      <p className="">{skill}</p>
    </div>
  );
};

const ProjectCards = ({
  title,
  desc,
  link,
  image,
  technologies,
}: ProjectProps) => {
  return (
    <div className="py-4 px-4 bg-[#111927] rounded-2xl mt-8 bg-opacity-100 flex space-x-6 items-center" id="projects">
      <div className="w-full">
        <h3 className="text-3xl font-medium">{title}</h3>
        <div className="grid gap-4 mt-5">
          <div className="text-base">
            <p>{desc}</p>
          </div>
          <div className="flex flex-wrap gap-6 justify-center mt-8">
            {technologies.map(({ technology }, index: any) => (
              <div key={index}>
                <Tiles skill={technology} />
              </div>
            ))}
          </div>

          <div className="my-4">
            <Link
              className="bg-purple-500 px-3 py-2 rounded-lg text-white"
              href={link}
              target="_blank"
            >
              View App
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Image
          src={image}
          alt="first_project"
          width={800}
          height={800}
         
        />
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="Projects" className="py-[96px] px-[124px]">
      <h2 className="text-3xl text-center font-bold">My Projects</h2>
      <div className="text-center">
        <h2 className="pt-3 text-[#a0aec0] font-bold text-base">
          The following projects helped me a lot in grasping and mastering a ton
          of concepts about Front-End.
        </h2>
        <div className="grid gap-5">
          {projects.map((item: ProjectProps, index: number) => (
            <div key={index}>
              <ProjectCards
                title={item.title}
                desc={item.desc}
                image={item.image}
                link={item.link}
                technologies={item.technologies}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
