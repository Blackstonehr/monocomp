import Container from "../../layout/Container";
import Button from "../../ui/Button";

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  image: string;
}

export default function Hero({ title, subtitle, ctaText, image }: HeroProps) {
  return (
    <div className="relative w-full min-h-[70vh] flex items-center">
      <img src={image} className="absolute inset-0 h-full w-full object-cover" alt="" />
      <div className="absolute inset-0 bg-graphite/40" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-accent/25 to-transparent" />

      <Container className="relative z-10 pt-40 pb-32">
        <h1 className="text-hero font-bold text-white drop-shadow-lg max-w-3xl">{title}</h1>

        {subtitle && (
          <p className="mt-6 text-body text-white/90 max-w-2xl drop-shadow">
            {subtitle}
          </p>
        )}

        {ctaText && (
          <Button className="mt-10" href="#features">
            {ctaText}
          </Button>
        )}
      </Container>
    </div>
  );
}
