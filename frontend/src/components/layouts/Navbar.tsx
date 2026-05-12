const Navbar = () => {
  return (
    <div className="fixed top-0 w-full px-10 py-5 z-50 flex justify-between items-center">
      <div className="text-2xl font-black text-orange-300">
        INFERNO<span className="text-orange-500">Lab</span>
      </div>

      <div>
        <ul className="flex items-center gap-10 uppercase tracking-[0.2em] text-sm text-orange-100/50">

        <li>
          <a
            href="#skills"
            className="hover:text-orange-400 transition-colors duration-300"
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#works"
            className="hover:text-orange-400 transition-colors duration-300"
          >
            Works
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:text-orange-400 transition-colors duration-300"
          >
            Contact
          </a>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default Navbar;