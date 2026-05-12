import {
  GitFork,
  Link,
  Mail,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-orange-500/10
        py-8
      "
    >
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_bottom,rgba(255,80,0,0.08),transparent_60%)]
        "
      />
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          justify-between
          gap-10

          lg:flex-row
        "
      >
        <div className="text-center lg:text-left">

          <h2
            className="
              text-3xl
              font-black
              tracking-tight
              text-orange-100
            "
          >
            INFERNO
            <span
              className="
                bg-linear-to-r
                from-orange-400
                to-orange-600
                bg-clip-text
                text-transparent
              "
            >
              Lab
            </span>
          </h2>

          <p
            className="
              mt-4
              max-w-md
              text-sm
              leading-7
              text-orange-100/40
            "
          >
            Building scalable systems, AI-powered
            products, and immersive digital experiences
            focused on performance and engineering.
          </p>
        </div>
        <div
          className="
            flex
            items-center
            gap-4
          "
        >

          <a
            href="https://github.com/Choudhary-Sahil099"
            className="
              flex
              h-12
              w-12
              items-center
              justify-center

              border
              border-orange-500/20
              bg-orange-500/5

              text-orange-300

              transition-all
              duration-300

              hover:border-orange-400/40
              hover:bg-orange-500/10
              hover:text-orange-100
              hover:shadow-[0_0_30px_rgba(255,80,0,0.2)]
            "
          >
            <GitFork size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/sahil-choudhary-478a682b6/"
            className="
              flex
              h-12
              w-12
              items-center
              justify-center

              border
              border-orange-500/20
              bg-orange-500/5

              text-orange-300

              transition-all
              duration-300

              hover:border-orange-400/40
              hover:bg-orange-500/10
              hover:text-orange-100
              hover:shadow-[0_0_30px_rgba(255,80,0,0.2)]
            "
          >
            <Link size={20} />
          </a>

          <a
            href="mailto:sahilchoudhary35689@gmail.com"
            className="
              flex
              h-12
              w-12
              items-center
              justify-center

              border
              border-orange-500/20
              bg-orange-500/5

              text-orange-300

              transition-all
              duration-300

              hover:border-orange-400/40
              hover:bg-orange-500/10
              hover:text-orange-100
              hover:shadow-[0_0_30px_rgba(255,80,0,0.2)]
            "
          >
            <Mail size={20} />
          </a>

        </div>

        <div className="text-center lg:text-right">

          <a
            href="#hero"
            className="
              group
              inline-flex
              items-center
              gap-3

              text-xs
              font-semibold
              uppercase
              tracking-[0.3em]
              text-orange-100/40

              transition-colors
              duration-300

              hover:text-orange-300
            "
          >
            Back To Top

            <ArrowUp
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-1
              "
            />
          </a>

          <p
            className="
              mt-6
              text-xs
              uppercase
              tracking-[0.2em]
              text-orange-100/20
            "
          >
            © 2026 INFERNOLAB
          </p>

          <p
            className="
              mt-2
              text-xs
              uppercase
              tracking-[0.2em]
              text-orange-100/20
            "
          >
            Crafted with fire & obsession
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;