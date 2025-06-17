import Link from "next/link";
import Image from "next/image";

const skills = [
  {
    name:"Software Development",
    slug: "software-development",
    description:
      "Learn to build applications from scratch using programming languages, frameworks, and design patterns. Master full-stack development including frontend and backend technologies. Collaborate on real-world projects and gain hands-on experience. Understand data structures and algorithms. Build scalable and maintainable codebases.",
    image: "/images/softwaree.jpg",
  },
  {
    name: "Graphic Design",
    slug: "graphic-design",
    description:
      "Create compelling visuals using typography, color theory, and layout principles. Use tools like Photoshop, Illustrator, and Figma. Design branding assets such as logos, posters, and social media graphics. Understand UX principles and visual storytelling. Build a strong portfolio to showcase your creativity.",
    image: "/images/videoediting.jpg",
  },
  {
    name:"Motion Design",
    slug: "motion-designs",
    description:
      "I bring static visuals to life through motion graphics. Using After Effects and Premiere Pro, I create animated explainers, logo reveals, social content, and UI animations. My motion design work focuses on enhancing storytelling, grabbing attention, and improving user interaction.",
    image: "/images/videoediting.jpg",
  },
];

const SkillsIHave = () => {
  return (
    <section className="w-full  flex justify-center items-center px-4 py-4 font-work-sans">
      <div className="max-w-[1200px] w-full">
        <h1 className="font-bold text-3xl mb-6 text-center">Portfolio</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {skills.map((skill) => (
            <article
              key={skill.slug}
              className="bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 text-black rounded-lg shadow-md p-4 flex flex-col justify-between transform transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={skill.image}
                alt={skill.name}
                width={300}
                height={200}
                className="rounded mb-3 w-full object-cover"
              />

              <div>
                <h2 className="text-lg font-bold mb-2">{skill.name}</h2>
                <p className="text-sm text-gray-600">
                  {skill.description.slice(0, 150)}...
                </p>
              </div>

              <Link
                href={`/skill/${skill.slug}`}
                className="mt-4 inline-block text-sm text-white bg-[#d71e24] hover:bg-red-500 px-3 py-1 rounded w-fit"
              >
                Show More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsIHave;
