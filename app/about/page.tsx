import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 mt-8 text-center">
      <h1 className="text-3xl font-bold text-red-600 mb-6">About</h1>

      <div className="max-w-3xl text-gray-700 text-justify leading-relaxed space-y-4">
        <p>
          I&apos;m Ngozi Favour Nwachukwu, a graduate of Federal University of Technology Owerri, where I studied Electrical Electronics Engineering. 
          My journey into the creative digital world began in 2019 when I fell in love with graphic design during my studies.
        </p>
        
        <p>
          During the coronavirus lockdown, I picked up video editing, which added another creative dimension to my skill set. 
          As I explored more designs on the web, I noticed many weren&apos;t looking as great as they could be. This observation 
          sparked my transition into software development - I wanted to solve problems and create better digital experiences. 
          I learnt software development through Udemy and various other online resources.
        </p>
        
        <p>
          Today, I&apos;m a passionate and versatile creative professional who combines technical engineering knowledge with artistic flair. 
          As a Software Developer, Graphic Designer, and Video Editor, I love building functional, user-focused applications and digital 
          experiences that make a real impact. Whether it&apos;s coding intuitive web applications, designing visually compelling graphics, 
          or editing engaging videos, I&apos;m driven by creativity and problem-solving.
        </p>
      </div>
    </div>
  );
};

export default About;