// app/skill/[slug]/page.tsx

import React from "react";
import { notFound } from "next/navigation";

interface SkillProps {
  params: {
    slug: string;
  };
}

const BookingLinks = () => (
  <div className="mt-8 text-center">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">📩 Book a session</h2>
    <div className="flex flex-wrap justify-center gap-4">
      <a
        href="https://wa.me/2347012345678"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow transition"
      >
        Chat on WhatsApp
      </a>
      <a
        href="https://www.instagram.com/deshentech/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg shadow transition"
      >
        Chat on Instagram
      </a>
      <a
        href="https://www.linkedin.com/in/your-profile/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg shadow transition"
      >
        Chat on LinkedIn
      </a>
    </div>
  </div>
);

const skills = [
  {
    name: "Software Development",
    slug: "software-development",
    description: (
      <>
        <p className="mb-4">
          As a passionate software developer, I specialize in building robust and scalable web applications using modern technologies like JavaScript, React, Node.js, and MongoDB. I’ve worked on full-stack projects like e-commerce platforms, blogs, and portfolio dashboards—focusing on clean architecture, responsiveness, and user experience.
        </p>
        <a
          href="https://almondfresh.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline transition-colors"
        >
          👉 View my projects
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
        <p className="mb-4">
          My graphic design journey blends creativity with strategic thinking. I create logos, business cards, posters, and engaging social media content using Adobe Illustrator, Photoshop, and Figma. I focus on crafting visual identities that communicate clearly and leave lasting impressions.
        </p>
        <a
          href="https://www.instagram.com/deshentech/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline transition-colors"
        >
          👉 See my designs
        </a>
        <BookingLinks />
      </>
    ),
  },
  {
    name: "Motion Design",
    slug: "motion-designs",
    description: (
      <>
        <p className="mb-4">
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

export default function SkillDetails({ params }: SkillProps) {
  const skill = skills.find((skill) => skill.slug === params.slug);

  if (!skill) {
    notFound();
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-10 max-w-3xl w-full text-center animate-fadeInUp">
        <h1 className="text-4xl font-bold text-red-500 mb-6">{skill.name}</h1>
        <div className="text-lg text-gray-700 leading-relaxed">{skill.description}</div>
      </div>
    </div>
  );
}
