type SkillBarProps = {
  skill: string;
  value: number;
};

const SkillBar = ({
  skill,
  value,
}: SkillBarProps) => {
  return (
    <div className="space-y-4">

      <div className="flex items-center justify-between">

        <h3
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.3em]
            text-orange-100/80
          "
        >
          {skill}
        </h3>

        <span
          className="
            text-sm
            font-bold
            uppercase
            tracking-[0.2em]
            text-orange-400
          "
        >
          {value}%
        </span>
      </div>

      <div
        className="
          relative
          h-0.75
          overflow-hidden
          bg-orange-500/10
        "
      >
        <div
          className="
            absolute
            inset-0
            bg-orange-500/5
            blur-sm
          "
        />
        <div
          className="
            relative
            h-full
            bg-linear-to-r
            from-orange-500
            via-orange-400
            to-yellow-300

            shadow-[0_0_20px_rgba(255,100,0,0.6)]
          "
          style={{
            width: `${value}%`,
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;