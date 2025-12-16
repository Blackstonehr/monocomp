interface InstallStepProps {
  number: number;
  title: string;
  desc: string;
}

export default function InstallStep({ number, title, desc }: InstallStepProps) {
  return (
    <div className="relative pl-10 pb-14">

      {/* Vertical bronze line */}
      <div className="absolute left-[14px] top-0 bottom-0 w-[3px] bg-brand-accent/80" />

      {/* Number badge */}
      <div className="absolute left-0 top-0 h-8 w-8 rounded-full bg-brand-accent text-graphite font-bold flex items-center justify-center">
        {number}
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-graphite mb-2">{title}</h3>
      <p className="text-steel text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
