import { useState } from "react";
import { motion } from "framer-motion";

import {
  Mail,
  Link,
  GitFork,
  Send,
} from "lucide-react";

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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);

      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
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
          amount: 0.2,
        }}
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
        "
      >
        <div className="text-center">

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
            Let's Work
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
            Strike While The
            <br />
            Iron's Hot
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="
              mx-auto
              mt-10
              max-w-4xl
              text-lg
              leading-10
              text-orange-100/50
            "
          >
            Interested in building scalable systems,
            AI-powered products, or immersive digital
            experiences? Let’s create something legendary.
          </motion.p>
        </div>

        <div
          className="
            mt-24
            grid
            gap-14
            lg:grid-cols-[0.9fr_1.1fr]
          "
        >
          <motion.div
            variants={containerVariants}
            className="space-y-8"
          >
            {[
              {
                icon: <Mail size={28} />,
                title: "Email",
                subtitle: "sahilchoudhary35689@gmail.com",
                href: "mailto:sahilchoudhary35689@gmail.com",
              },

              {
                icon: <Link size={28} />,
                title: "LinkedIn",
                subtitle: "Connect Professionally",
                href: "https://www.linkedin.com/in/sahil-choudhary-478a682b6/",
              },

              {
                icon: <GitFork size={28} />,
                title: "Github",
                subtitle: "Explore My Projects",
                href: "https://github.com/Choudhary-Sahil099",
              },
            ].map((item) => (
              <motion.a
                key={item.title}
                variants={itemVariants}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                href={item.href}
                className="
                  group
                  flex
                  items-center
                  gap-6

                  border
                  border-orange-500/20

                  bg-orange-500/5

                  p-6

                  transition-all
                  duration-300

                  hover:border-orange-400/40
                  hover:bg-orange-500/10
                  hover:shadow-[0_0_40px_rgba(255,80,0,0.15)]
                "
              >
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center

                    border
                    border-orange-500/20

                    text-orange-300

                    transition-all
                    duration-300

                    group-hover:scale-110
                    group-hover:text-orange-100
                  "
                >
                  {item.icon}
                </div>

                <div>
                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-[0.3em]
                      text-orange-100/40
                    "
                  >
                    {item.title}
                  </p>

                  <h3
                    className="
                      mt-2
                      text-lg
                      font-semibold
                      text-orange-100
                    "
                  >
                    {item.subtitle}
                  </h3>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="
              border
              border-orange-500/20

              bg-black/20

              p-10

              backdrop-blur-md

              shadow-[0_0_50px_rgba(255,80,0,0.08)]
            "
          >
            <motion.h3
              variants={itemVariants}
              className="
                text-3xl
                font-black
                uppercase
                tracking-tight
                text-orange-100
              "
            >
              Send A Message
            </motion.h3>

            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-8"
            >
              {/* NAME */}
              <motion.div variants={itemVariants}>
                <label
                  className="
                    mb-3
                    block

                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-orange-100/40
                  "
                >
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="
                    w-full

                    border
                    border-orange-500/20

                    bg-orange-500/5

                    px-5
                    py-4

                    text-orange-100

                    outline-none

                    transition-all
                    duration-300

                    placeholder:text-orange-100/20

                    focus:border-orange-400/50
                    focus:bg-orange-500/10
                    focus:shadow-[0_0_30px_rgba(255,80,0,0.1)]
                  "
                />
              </motion.div>

              {/* EMAIL */}
              <motion.div variants={itemVariants}>
                <label
                  className="
                    mb-3
                    block

                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-orange-100/40
                  "
                >
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="hello@example.com"
                  required
                  className="
                    w-full

                    border
                    border-orange-500/20

                    bg-orange-500/5

                    px-5
                    py-4

                    text-orange-100

                    outline-none

                    transition-all
                    duration-300

                    placeholder:text-orange-100/20

                    focus:border-orange-400/50
                    focus:bg-orange-500/10
                    focus:shadow-[0_0_30px_rgba(255,80,0,0.1)]
                  "
                />
              </motion.div>

              {/* MESSAGE */}
              <motion.div variants={itemVariants}>
                <label
                  className="
                    mb-3
                    block

                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-orange-100/40
                  "
                >
                  Message
                </label>

                <textarea
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  className="
                    w-full
                    resize-none

                    border
                    border-orange-500/20

                    bg-orange-500/5

                    px-5
                    py-4

                    text-orange-100

                    outline-none

                    transition-all
                    duration-300

                    placeholder:text-orange-100/20

                    focus:border-orange-400/50
                    focus:bg-orange-500/10
                    focus:shadow-[0_0_30px_rgba(255,80,0,0.1)]
                  "
                />
              </motion.div>

              {/* BUTTON */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="
                  group
                  flex
                  items-center
                  gap-3

                  bg-linear-to-r
                  from-orange-500
                  to-orange-600

                  px-8
                  py-4

                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.2em]

                  text-white

                  shadow-[0_0_40px_rgba(255,80,0,0.25)]

                  transition-all
                  duration-300

                  hover:shadow-[0_0_60px_rgba(255,80,0,0.4)]

                  disabled:opacity-50
                "
              >
                {loading ? "Sending..." : "Send Message"}

                <Send
                  size={18}
                  className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;