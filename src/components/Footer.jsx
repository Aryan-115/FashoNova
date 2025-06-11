import React from 'react';

const Footer = () => {
  const footerSections = [

    {
      title: 'Categories',
      links: ['Women', 'Men', 'Accessories', 'Shoes'],
    },
    {
      title: 'Support',
      links: ['Contact Us', 'Size Guide'],
    },
    {
      title: 'Company',
      links: ['About Us',  'Sustainability'],
    },
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              FashoNova
            </h3>
            <p className="text-muted mb-6">
              Discover your perfect style with fashion recommendations tailored just for you.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-600 transition-colors">
                <span className="text-sm">f</span>
              </div>
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-600 transition-colors">
                <span className="text-sm">W</span>
              </div>
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-600 transition-colors">
                <span className="text-sm">i</span>
              </div>
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-muted hover:text-background transition-colors cursor-pointer"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-muted mt-12 pt-8 text-center">
          <p className="text-muted">
            © 2025 FashoNova. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;