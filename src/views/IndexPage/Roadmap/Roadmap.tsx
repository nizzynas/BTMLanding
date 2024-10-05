import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const sections = [
  {
    title: "Coding courses",
    description: "Arafa Tech offers a variety of coding courses for students of all skill levels.",
    link: "/courses",
    linkText: "Explore Courses",
    bgColor: "bg-blue-100",
  },
  {
    title: "Mentorship program",
    description: "Join our mentorship program to get paired with an experienced mentor",
    link: "/mentorship",
    linkText: "Apply to be a Mentee",
    bgColor: "bg-green-100",
  },
  {
    title: "Workshops",
    description: "Attend our workshops to learn about a variety of topics in computer science.",
    link: "/workshops",
    linkText: "Browse Workshops",
    bgColor: "bg-purple-100",
  },
  {
    title: "Volunteer",
    description: "Volunteer with us to help us create a better future for our community.",
    link: "/volunteer",
    linkText: "See Opportunities",
    bgColor: "bg-orange-100",
  }
];

export default function SnapScrollSections() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
      {sections.map((section, index) => (
        <div 
          key={index}
          className={`h-screen w-full snap-start flex items-center justify-center ${section.bgColor}`}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-xl p-6"
          >
            <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
            <p className="text-xl mb-6">{section.description}</p>
            <a 
              href={section.link}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              {section.linkText}
              <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </div>
      ))}
    </div>
  );
}