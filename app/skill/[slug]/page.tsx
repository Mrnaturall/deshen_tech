// app/skill/[slug]/page.tsx
import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

const BookingLinks = () => (
  <div className="mt-8 text-center ">
    <h2 className="text-xl font-semibold text-gray-800 mb-4"> Book a session</h2>
    <div className="flex flex-wrap justify-center gap-4">
      <Link
        href="https://wa.me/2348069420489"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow transition"
      >
        <FaWhatsapp className="text-xl" />
      
      </Link>
      <Link
        href="https://www.instagram.com/deshentech/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-red-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg shadow transition"
      >
        <FaInstagram className="text-xl" />
       
      </Link>
      <Link
        href="https://www.linkedin.com/in/favour-ngozi-6a72b2222"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg shadow transition"
      >
        <FaLinkedin className="text-xl" />
     
      </Link>
    </div>
  </div>
);

const skills = [
  {
    name: "Software Development",
    slug: "software-development",
    description: (
      <>
        <p className="mb-4 text-center">
          As a passionate software developer, I specialize in building robust and scalable web applications using modern technologies like html, tailwindcss, typescript, Next.js, Node.js, and MongoDB. I&apos;ve worked on full-stack projects like e-commerce platforms, blogs, and portfolio dashboards—focusing on clean architecture, responsiveness, and user experience.
        </p>
        <a
          href="https://almondfresh.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800  transition-colors"
        >
          View my projects
        </a>
        <BookingLinks />
      </>
    ),
  },
  {
    name: "Graphic Design",
    slug: "graphic-design",
    description: (
      <>
        <p className="mb-4 text-center">
          My graphic design journey blends creativity with strategic thinking. I create logos, business cards, posters, and engaging social media content using Adobe Illustrator, Photoshop, and Figma. I focus on crafting visual identities that communicate clearly and leave lasting impressions.
        </p>
        <Link 
          href="https://www.instagram.com/deshentech/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline transition-colors"
        >
          👉 See my designs
        </Link>
        <BookingLinks />
      </>
    ),
  },
  {
    name: "Motion Design",
    slug: "motion-designs",
    description: (
      <>
        <p className="mb-4 text-center">
          I breathe life into visuals with motion graphics. Using After Effects and Premiere Pro, I create logo reveals, explainer videos, UI animations, and social content. Each piece is designed to enhance storytelling, grab attention, and drive interaction.
        </p>
        <a
          href="https://www.instagram.com/tv/CdK1v5wI6_h/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline transition-colors"
        >
          👉 Watch my animations
        </a>
        <BookingLinks />
      </>
    ),
  },
];

export default async function SkillDetails({ params }: PageProps) {
  // Await the params Promise
  const { slug } = await params;
  
  const skill = skills.find((skill) => skill.slug === slug);

  if (!skill) {
    notFound();
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-red-50">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-10 max-w-3xl w-full text-center animate-fadeInUp">
        <h1 className="text-4xl font-bold text-red-500 mb-6">{skill.name}</h1>
        <div className="text-lg text-gray-700 leading-relaxed">{skill.description}</div>
      </div>
    </div>
  );
}

// Required for static generation of dynamic routes
export async function generateStaticParams() {
  return skills.map((skill) => ({
    slug: skill.slug,
  }));
}