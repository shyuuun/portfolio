"use client";

import { motion } from "motion/react";

const projects = [
  {
    title: "pixel-pets",
    description:
      "A virtual pet playground built with Next.js and canvas. Feed, play, and watch your pixel critter grow. Features real-time mood tracking and custom sprite animations.",
    tags: ["Next.js", "Canvas API", "Tailwind"],
    link: "#",
  },
  {
    title: "note-crunch",
    description:
      "A minimalist markdown note-taking app with a squiggly twist. Supports real-time previews, tagging, and a scrapbook-style journal layout.",
    tags: ["React", "Markdown", "Supabase"],
    link: "#",
  },
  {
    title: "doodle-drop",
    description:
      "Collaborative whiteboard for quick sketches and brain dumps. Built with WebSockets for real-time drawing, plus sticky note and stamp features.",
    tags: ["Next.js", "WebSockets", "CSS Art"],
    link: "#",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="section-heading text-3xl sm:text-4xl font-bold">
          stuff i&apos;ve built
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            variants={card}
            whileHover={{ scale: 1.02, rotate: 0 }}
            transition={{ duration: 0.2 }}
            className="scrapbook-card p-6 flex flex-col"
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>

            <p className="text-base text-primary/60 leading-relaxed mb-4 flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-2 py-0.5 border border-primary/20 rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              className="text-base text-primary hover:underline inline-flex items-center gap-1"
            >
              view project &rarr;
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
