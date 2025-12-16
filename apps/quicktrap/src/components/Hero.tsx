interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
  onCtaClick?: () => void;
}

const Hero = ({ title, subtitle, backgroundImage, ctaText, ctaLink, onCtaClick }: HeroProps) => {
  return (
    <div
      className="relative bg-brand text-white py-24 md:py-32 bg-cover bg-center"
      style={{
        backgroundImage: backgroundImage ? `linear-gradient(rgba(74, 74, 74, 0.7), rgba(74, 74, 74, 0.7)), url(${backgroundImage})` : undefined,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {subtitle}
          </p>
          {ctaText && (
            <div>
              {ctaLink ? (
                <a
                  href={ctaLink}
                  className="inline-block bg-brand-accent text-brand px-8 py-3 rounded-lg font-semibold text-lg hover:bg-brand-accent/90 transition-colors"
                >
                  {ctaText}
                </a>
              ) : (
                <button
                  onClick={onCtaClick}
                  className="inline-block bg-brand-accent text-brand px-8 py-3 rounded-lg font-semibold text-lg hover:bg-brand-accent/90 transition-colors"
                >
                  {ctaText}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
