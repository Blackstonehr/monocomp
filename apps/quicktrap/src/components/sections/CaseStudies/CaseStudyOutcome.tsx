interface OutcomeProps {
  title: string;
  points: string[];
}

export default function CaseStudyOutcome({ title, points }: OutcomeProps) {
  return (
    <div className="bg-brand-accent/20 rounded-lg p-8 border border-brand-accent/40 shadow-sm">
      <h3 className="font-semibold text-graphite text-lg mb-4">{title}</h3>

      <ul className="text-steel text-sm space-y-2">
        {points.map((p, i) => (
          <li key={i}>• {p}</li>
        ))}
      </ul>
    </div>
  );
}
