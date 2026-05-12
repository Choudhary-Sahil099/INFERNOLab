import { ArrowRight } from "lucide-react";

const HeroContent = () => {
  return (
    <div className="relative z-20 flex flex-col">
      <div className="flex items-center gap-3 rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 backdrop-blur-md">
        <div className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_12px_#ff4500]" />
        <span className="text-sm uppercase tracking-[0.3em] text-orange-200/70">
          Full Stack Developer
        </span>
        <div className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_12px_#ff4500]" />
          <span className="text-sm uppercase tracking-[0.3em] text-orange-200/70">ML Engineer</span>
      </div>
      <h1 className="text-5xl font-black leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-8xl mt-3">
        SAHIL
        <br />
        <span
          className="
            bg-linear-to-r
            from-orange-400
            via-orange-500
            to-yellow-300
            bg-clip-text
            text-transparent
          "
        >
          CHOUDHARY
        </span>
      </h1>

      <p
        className="
          mt-3
          max-w-xl
          text-lg
          leading-8
          text-orange-100/60
        "
      >
        Building scalable systems, AI-powered products, and immersive digital
        experiences focused on performance, architecture, and modern
        engineering.
      </p>
      <div className="mt-5 flex flex-wrap gap-5">
        <a
          className="
            group
            flex
            items-center
            gap-3
            rounded-full
            bg-linear-to-r
            from-orange-500
            to-orange-600
            px-8
            py-4
            text-sm
            font-semibold
            hover:cursor-pointer
            uppercase
            tracking-[0.2em]
            text-white
            shadow-[0_0_40px_rgba(255,80,0,0.35)]
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-[0_0_60px_rgba(255,80,0,0.55)]
          "
          href="#works"
        >
          View Projects
          <ArrowRight
            className="
              h-4
              w-4
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </a>
        <a
          className="
            rounded-full
            border
            border-orange-500/20
            bg-black/20
            px-8
            py-4
            text-sm
            font-semibold
            hover:cursor-pointer
            uppercase
            tracking-[0.2em]
            text-orange-100/80
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-orange-400
            hover:bg-orange-500/10
            hover:text-orange-50
          "
          href="#contact"
        >
          Contact Me
        </a>
      </div>

      <div
        className="
          mt-7
          grid
          grid-cols-3
          gap-8
          border-t
          border-orange-500/10
          pt-10
        "
      >
        <div>
          <h3
            className="
              text-3xl
              font-black
              text-orange-400
            "
          >
            10+
          </h3>

          <p
            className="
              mt-2
              text-sm
              uppercase
              tracking-[0.2em]
              text-orange-100/40
            "
          >
            Projects Built
          </p>
        </div>

        <div>
          <h3
            className="
              text-3xl
              font-black
              text-orange-400
            "
          >
            AI
          </h3>

          <p
            className="
              mt-2
              text-sm
              uppercase
              tracking-[0.2em]
              text-orange-100/40
            "
          >
            Interview Platform
          </p>
        </div>

        <div>
          <h3
            className="
              text-3xl
              font-black
              text-orange-400
            "
          >
            DSA
          </h3>

          <p
            className="
              mt-2
              text-sm
              uppercase
              tracking-[0.2em]
              text-orange-100/40
            "
          >
            Problem Solver
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
