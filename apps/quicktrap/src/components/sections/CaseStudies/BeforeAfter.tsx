interface BeforeAfterProps {
  before: string;
  after: string;
  caption: string;
}

export default function BeforeAfter({ before, after, caption }: BeforeAfterProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

      <div>
        <h3 className="font-semibold text-graphite mb-4">Before</h3>
        <img
          src={before}
          alt="Before"
          className="rounded-lg border border-concrete shadow-sm"
        />
      </div>

      <div>
        <h3 className="font-semibold text-graphite mb-4">After</h3>
        <img
          src={after}
          alt="After"
          className="rounded-lg border border-concrete shadow-sm"
        />
      </div>

      <p className="text-steel mt-4 lg:col-span-2 text-sm">
        {caption}
      </p>
    </div>
  );
}
