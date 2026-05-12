import { ArrowUpRight,GitFork } from "lucide-react";

type WorkCardProps = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  github: string;
  index: number;
};

const gradients = [
  "from-orange-950/40 to-orange-500/10",
  "from-lime-950/40 to-lime-500/10",
  "from-cyan-950/40 to-cyan-500/10",
  "from-fuchsia-950/40 to-fuchsia-500/10",
  "from-blue-950/40 to-blue-500/10",
  "from-amber-950/40 to-amber-500/10",
];

const roman = ["I", "II", "III", "IV", "V", "VI"];

const WorkCard = ({
  title,
  category,
  description,
  technologies,
  github,
  index,
}: WorkCardProps) => {
  return (
    <div
      className="
        group
        relative
        h-80
        overflow-hidden
        border
        border-orange-500/20

        transition-all
        duration-500

        hover:scale-[1.03]
        hover:border-orange-400/50
        hover:shadow-[0_0_50px_rgba(255,100,0,0.15)]
      "
    >
      <div
        className={`
          absolute
          inset-0
          bg-linear-to-br
          ${gradients[index % gradients.length]}
        `}
      />

      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100

          bg-[radial-gradient(circle_at_center,rgba(255,120,0,0.15),transparent_70%)]
        "
      />

      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center

          text-[10rem]
          font-black
          text-orange-200/5
        "
      >
        {roman[index]}
      </div>

      <div
        className="
          absolute
          left-0
          top-0
          h-12
          w-12
          border-l
          border-t
          border-orange-500/50
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          h-12
          w-12
          border-b
          border-r
          border-orange-500/50
        "
      />

      <div
        className="
          absolute
          inset-0
          flex
          translate-y-10
          flex-col
          justify-end
          bg-linear-to-t
          from-black
          via-black/80
          to-transparent
          p-8

          opacity-0

          transition-all
          duration-500

          group-hover:translate-y-0
          group-hover:opacity-100
        "
      >
        <span
          className="
            mb-2
            text-xs
            font-semibold
            uppercase
            tracking-[0.3em]
            text-orange-400
          "
        >
          {category}
        </span>

        <h3
          className="
            text-3xl
            font-black
            text-orange-100 
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-4
            text-sm
            leading-7
            text-orange-100/60
          "
        >
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">

          {technologies.map((tech) => (
            <span
              key={tech}
              className="
                border
                border-orange-500/20
                bg-orange-500/10
                px-3
                py-1

                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-orange-200/80
              "
            >
              {tech}
            </span>
          ))}

        </div>

        <div className="mt-6 flex items-center gap-4">

          <a
            href={github}
            target="_blank"
            className="
              flex
              items-center
              gap-2

              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-orange-300

              transition-colors
              duration-300

              hover:text-orange-100
            "
          >
            <GitFork size={18} />

            Github
          </a>

          <button
            className="
              flex
              items-center
              gap-2

              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-orange-300

              transition-colors
              duration-300

              hover:text-orange-100
            "
          >
            Explore

            <ArrowUpRight size={18} />
          </button>

        </div>
      </div>
    </div>
  );
};

export default WorkCard;