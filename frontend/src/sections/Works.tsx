import { motion } from "framer-motion";

import WorkCard from "../components/cards/WorkCards";
import { works } from "../data/Works";

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.9,
      ease: "easeOut" as const,
    },
  },
};

const Works = () => {
  return (
    <section
      id="works"
      className="
        relative
        overflow-hidden
        px-8
        py-32
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
          amount: 0.15,
        }}

        className="
          relative
          z-10
          mx-auto
          max-w-7xl
        "
      >
        <div className="mb-24 text-center">

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
            Portfolio
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
            Forged Creations
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}

          className="
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {works.map((work, index) => (
            <motion.div
              key={work.title}

              variants={itemVariants}

              whileHover={{
                y: -10,
              }}

              transition={{
                duration: 0.3,
              }}
            >
              <WorkCard
                title={work.title}
                category={work.category}
                description={work.description}
                technologies={work.technologies}
                github={work.github}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Works;