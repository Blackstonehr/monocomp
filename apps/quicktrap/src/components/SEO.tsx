import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  jsonLd?: object;
}

const SEO = ({
  title = 'Quicktrap | Keep Storm Lines Open',
  description = 'Advanced stormwater management solutions that prevent blockages and protect your infrastructure. Proven performance in municipal and commercial applications.',
  keywords = 'stormwater management, storm drain, catch basin, drainage solutions, municipal infrastructure, commercial drainage, debris capture, flood prevention',
  ogImage = '/images/hero.jpg',
  ogType = 'website',
  canonicalUrl,
  jsonLd,
}: SEOProps) => {
  const siteUrl = 'https://www.quicktrap.ca';
  const fullTitle = title.includes('Quicktrap') ? title : `${title} | Quicktrap`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Quicktrap');

    // Open Graph meta tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:image', `${siteUrl}${ogImage}`, true);
    updateMetaTag('og:url', canonicalUrl || siteUrl, true);
    updateMetaTag('og:site_name', 'Quicktrap', true);

    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', `${siteUrl}${ogImage}`);

    // Canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', canonicalUrl);
    }

    // JSON-LD structured data
    if (jsonLd) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    }
  }, [fullTitle, description, keywords, ogImage, ogType, canonicalUrl, jsonLd, siteUrl]);

  return null;
};

export default SEO;

// Organization Schema
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Quicktrap',
  description: 'Advanced stormwater management solutions for municipal and commercial applications',
  url: 'https://www.quicktrap.ca',
  logo: 'https://www.quicktrap.ca/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-123-4567',
    contactType: 'Customer Service',
    email: 'info@quicktrap.ca',
    availableLanguage: 'English',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Industrial Way, Suite 100',
    addressLocality: 'Anytown',
    addressRegion: 'ST',
    postalCode: '12345',
    addressCountry: 'US',
  },
  sameAs: [
    'https://www.linkedin.com/company/quicktrap',
    'https://twitter.com/quicktrap',
  ],
};

// Product Schema
export const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Quicktrap Stormwater Management System',
  description: 'Advanced debris capture system that maintains optimal flow while preventing blockages in storm drainage systems',
  brand: {
    '@type': 'Brand',
    name: 'Quicktrap',
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
  },
};
