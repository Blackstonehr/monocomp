import Container from "../../layout/Container";

interface ProductHeroProps {
  title: string;
  subtitle?: string;
  image: string;
}

export default function ProductHero({ title, subtitle, image }: ProductHeroProps) {
  return (
    <div className="relative w-full min-h-[40vh] flex items-end border-b border-concrete">

      {/* Background */}
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-graphite/40" />

      {/* Content */}
      <Container className="relative z-10 pb-16">
        <h1 className="text-4xl font-bold text-white drop-shadow">
          {title}
        </h1>

        {subtitle && (
          <p className="text-white/90 mt-4 text-lg max-w-2xl drop-shadow">
            {subtitle}
          </p>
        )}
      </Container>

    </div>
  );
}
