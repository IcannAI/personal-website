import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="border border-zinc-800 rounded-lg p-6 cursor-pointer hover:border-zinc-700 transition-all bg-zinc-900/50 backdrop-blur"
      onClick={() => setExpanded(!expanded)}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          {project.principle && (
            <span className="inline-block text-xs font-medium bg-accent/20 text-accent px-3 py-1 rounded-full">
              {project.principle}
            </span>
          )}
        </div>

        {/* Metrics Display */}
        {project.metrics && (
          <div className="text-right">
            <div className="text-3xl font-bold text-accent tabular-nums">
              {project.metrics.toLocaleString()}
            </div>
            {project.unit && (
              <div className="text-sm text-muted-foreground mt-1">
                {project.unit}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="mt-6 pt-6 border-t border-zinc-800 space-y-4">
              
              {/* Amazon STAR Format */}
              {project.situation && (
                <>
                  <div>
                    <span className="font-semibold text-white">Situation: </span>
                    <span className="text-muted-foreground">{project.situation}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-white">Task: </span>
                    <span className="text-muted-foreground">{project.task}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-white">Action: </span>
                    <span className="text-muted-foreground">{project.action}</span>
                  </div>
                  <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                    <span className="font-semibold text-success">Result: </span>
                    <span className="text-muted-foreground">{project.result}</span>
                  </div>
                </>
              )}

              {/* Google Narrative Format */}
              {project.narrative && (
                <div className="border-l-4 border-accent pl-4 py-2">
                  <p className="text-muted-foreground italic leading-relaxed">
                    {project.narrative}
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              {(project.demo || project.github) && (
                <div className="flex flex-wrap gap-4 pt-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-accent hover:bg-accent-hover text-white rounded-lg transition-colors font-medium inline-flex items-center gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo
                      <span>→</span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 border border-zinc-700 hover:border-zinc-500 text-white rounded-lg transition-colors font-medium inline-flex items-center gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub
                      <span>→</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expand Indicator */}
      <div className="mt-4 text-center">
        <span className="text-xs text-muted-foreground">
          {expanded ? "Click to collapse ↑" : "Click to expand ↓"}
        </span>
      </div>
    </motion.div>
  );
}