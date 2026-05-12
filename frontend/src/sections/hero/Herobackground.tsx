const HeroBackground = () => {
  return (
    <>
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(255,100,0,0.18),transparent_45%)]
        "
      />
      <div
        className="
          absolute
          right-0
          top-0
          h-100
          w-100
          rounded-full
          bg-orange-500/10
          blur-3xl
        "
      />
      <div
        className="
          absolute
          bottom-0
          left-1/3
          h-100
          w-100
          rounded-full
          bg-orange-600/10
          blur-3xl
        "
      />

      <div
        className="
          absolute
          inset-0
          opacity-[0.04]

          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]

          
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.85)_100%)]
        "
      />
    </>
  );
};

export default HeroBackground;