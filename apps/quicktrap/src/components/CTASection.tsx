interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const CTASection = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: CTASectionProps) => {
  return (
    <section className="bg-brand text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={primaryButtonLink}
            className="inline-block bg-brand-accent text-brand px-8 py-3 rounded-lg font-semibold text-lg hover:bg-brand-accent/90 transition-colors"
          >
            {primaryButtonText}
          </a>
          {secondaryButtonText && secondaryButtonLink && (
            <a
              href={secondaryButtonLink}
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-brand transition-colors"
            >
              {secondaryButtonText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
