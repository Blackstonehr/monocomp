import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
  className?: string;
}

const NavLink = ({ to, label, isActive, onClick, className = '' }: NavLinkProps) => (
  <Link
    to={to}
    onClick={onClick}
    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? 'bg-brand-accent text-brand'
        : 'text-white hover:bg-brand-accent/20'
    } ${className}`}
  >
    {label}
  </Link>
);

const Navigation = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/product', label: 'Product' },
    { path: '/installation', label: 'Installation' },
    { path: '/data-certifications', label: 'Data & Certifications' },
    { path: '/case-studies', label: 'Case Studies' },
    { path: '/contact', label: 'Contact' },
  ];

  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu?.classList.toggle('hidden');
  };

  return (
    <nav className="bg-brand text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/images/logo_wordmark.png" alt="Quicktrap" className="h-8" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                label={link.label}
                isActive={location.pathname === link.path}
              />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-brand-accent/20"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div id="mobile-menu" className="hidden md:hidden pb-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              label={link.label}
              isActive={location.pathname === link.path}
              onClick={toggleMobileMenu}
              className="block"
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
