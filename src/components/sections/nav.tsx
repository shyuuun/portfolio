"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
  { label: "journey", href: "#experience" },
  { label: "contact", href: "#contact" },
];

export default function Nav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          key="topnav"
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 flex justify-center gap-6 py-4 backdrop-blur-sm"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base text-foreground/50 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
