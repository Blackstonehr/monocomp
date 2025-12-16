interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export default function Button({ children, href, className = "" }: ButtonProps) {
  const base =
    "inline-block bg-brand-accent text-graphite font-semibold px-6 py-3 rounded-sm " +
    "hover:bg-brand-accent/80 transition shadow-card hover:shadow-cardHover";

  if (href) {
    return <a href={href} className={`${base} ${className}`}>{children}</a>;
  }

  return <button className={`${base} ${className}`}>{children}</button>;
}
