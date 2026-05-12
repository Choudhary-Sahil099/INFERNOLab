import { motion } from "framer-motion";

import SkillBar from "../components/ui/SkillBar";

const techStack = [
  "C++",
  "Python",
  "Go",
  "React",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "ML",
  "Docker",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Kubernetes",
  "Distributed Systems",
];

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        py-15
      "
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}

        viewport={{ once: true }}

        transition={{
          duration: 1.5,
        }}

        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(255,80,0,0.12),transparent_55%)]
        "
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"

        viewport={{
          once: true,
          amount: 0.2,
        }}

        className="
          relative
          z-10
          mx-auto
          max-w-7xl
        "
      >
        <div className="mb-14 text-center">

          <motion.span
            variants={itemVariants}

            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.5em]
              text-orange-500
            "
          >
            Expertise
          </motion.span>

          <motion.h2
            variants={itemVariants}

            className="
              mt-6
              text-5xl
              font-black
              uppercase
              tracking-tight
              text-orange-100
              sm:text-6xl
            "
          >
            Mastered Crafts
          </motion.h2>
        </div>

        <div
          className="
            grid
            gap-24
            lg:grid-cols-[1fr_1.2fr]
          "
        >
          <motion.div
            variants={itemVariants}
          >
            <motion.h3
              variants={itemVariants}

              className="
                text-4xl
                font-black
                uppercase
                tracking-tight
                text-orange-100
              "
            >
              Tools of the Forge
            </motion.h3>

            <motion.p
              variants={itemVariants}

              className="
                mt-8
                max-w-xl
                text-lg
                leading-10
                text-orange-100/50
              "
            >
              Building scalable products,
              AI-powered systems, and immersive
              digital experiences with a strong
              focus on architecture, performance,
              and modern engineering.
            </motion.p>

            <motion.div
              variants={containerVariants}

              className="
                mt-14
                flex
                flex-wrap
                gap-4
                hover:cursor-pointer
              "
            >
              {techStack.map((tech) => (
                <motion.div
                  key={tech}

                  variants={itemVariants}

                  whileHover={{
                    y: -4,
                    scale: 1.05,
                  }}

                  whileTap={{
                    scale: 0.96,
                  }}

                  transition={{
                    duration: 0.25,
                  }}

                  className="
                    border
                    border-orange-500/20

                    bg-orange-500/5

                    px-6
                    py-3

                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.2em]

                    text-orange-200/80

                    transition-all
                    duration-300

                    hover:border-orange-400/40
                    hover:bg-orange-500/10
                    hover:text-orange-100
                    hover:shadow-[0_0_20px_rgba(255,80,0,0.15)]

                    [clip-path:polygon(8px_0%,100%_0%,calc(100%-8px)_100%,0%_100%)]
                  "
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}

            className="space-y-10"
          >
            <motion.div variants={itemVariants}>
              <SkillBar
                skill="Frontend Development"
                value={95}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <SkillBar
                skill="Backend Engineering"
                value={90}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <SkillBar
                skill="AI / ML Systems"
                value={85}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <SkillBar
                skill="Distributed Systems"
                value={80}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <SkillBar
                skill="Problem Solving / DSA"
                value={92}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;