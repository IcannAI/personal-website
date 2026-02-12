"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (!expanded) {
      setDisplayCount(0);
      return;
    }

    let startTimestamp = null;
    const duration = 1200; // 1.2 秒，更有質感
    const target = project.metrics || 0;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // easeOutQuad 曲線：前面快、後面慢，更自然
      const eased = 1 - (1 - progress) ** 2;
      const current = Math.floor(eased * target);

      setDisplayCount(current);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);

    return () => {};
  }, [expanded, project.metrics]);

  return (
    <motion.div
      layout
      className="border rounded-xl p-6 mb-6 cursor-pointer bg-white shadow-sm hover:shadow-xl transition-all duration-300 border-gray-200"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
          <div className="flex flex-wrap gap-2 mt-1.5">
            {project.principle && (
              <span className="text-xs font-medium bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full">
                {project.principle}
              </span>
            )}
            {project.unit && project.metrics && (
              <span className="text-xs text-gray-500 self-center">
                {project.unit}
              </span>
            )}
          </div>
        </div>

        <div className="text-3xl font-extrabold text-emerald-600 tabular-nums tracking-tight">
          {displayCount.toLocaleString()}
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="mt-5 border-t pt-5 text-gray-700 space-y-4"
          >
            {project.situation && (
              <p className="text-sm"><strong className="text-gray-900">Situation:</strong> {project.situation}</p>
            )}
            {project.task && (
              <p className="text-sm"><strong className="text-gray-900">Task:</strong> {project.task}</p>
            )}
            {project.action && (
              <p className="text-sm"><strong className="text-gray-900">Action:</strong> {project.action}</p>
            )}
            {project.result && (
              <p className="text-sm font-medium text-green-800 bg-green-50 p-3 rounded-lg border border-green-100">
                <strong>Result:</strong> {project.result}
              </p>
            )}

            {project.narrative && (
              <p className="text-sm leading-relaxed italic border-l-4 border-gray-300 pl-4 text-gray-800">
                {project.narrative}
              </p>
            )}

            {(project.demo || project.github) && (
              <div className="pt-3 flex flex-wrap gap-4">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition shadow-sm"
                  >
                    Live Demo →
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2.5 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-900 transition shadow-sm"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}