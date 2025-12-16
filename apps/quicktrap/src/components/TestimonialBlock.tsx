interface TestimonialBlockProps {
  title: string;
  subtitle: string;
  content: string;
  imageBefore?: string;
  imageAfter?: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

const TestimonialBlock = ({
  title,
  subtitle,
  content,
  imageBefore,
  imageAfter,
  stats,
}: TestimonialBlockProps) => {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 md:p-8">
        <h3 className="text-2xl md:text-3xl font-bold text-brand mb-2">
          {title}
        </h3>
        <p className="text-brand-accent font-semibold mb-4">
          {subtitle}
        </p>
        <div className="prose max-w-none text-gray-700 mb-6">
          {content}
        </div>

        {/* Before/After Images */}
        {(imageBefore || imageAfter) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {imageBefore && (
              <div>
                <p className="text-sm font-semibold text-gray-600 mb-2">Before</p>
                <img
                  src={imageBefore}
                  alt="Before installation"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            )}
            {imageAfter && (
              <div>
                <p className="text-sm font-semibold text-gray-600 mb-2">After</p>
                <img
                  src={imageAfter}
                  alt="After installation"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            )}
          </div>
        )}

        {/* Stats */}
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-brand-accent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default TestimonialBlock;
