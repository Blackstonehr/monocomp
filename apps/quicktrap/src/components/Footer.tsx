import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-brand-accent mb-4">Quicktrap</h3>
            <p className="text-sm text-gray-300">
              Keep Storm Lines Open - Advanced stormwater management solutions for municipal and commercial applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/product" className="text-sm text-gray-300 hover:text-brand-accent transition-colors">
                  Product Specifications
                </Link>
              </li>
              <li>
                <Link to="/installation" className="text-sm text-gray-300 hover:text-brand-accent transition-colors">
                  Installation Guide
                </Link>
              </li>
              <li>
                <Link to="/data-certifications" className="text-sm text-gray-300 hover:text-brand-accent transition-colors">
                  Data & Certifications
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-sm text-gray-300 hover:text-brand-accent transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Email: info@quicktrap.ca</li>
              <li>Phone: (555) 123-4567</li>
              <li>
                <Link to="/contact" className="text-brand-accent hover:underline">
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Quicktrap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
