import { Brain } from "lucide-react";
import { FaTwitter, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";

const footerSections = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Integrations", href: "#" },
      { name: "API", href: "#" },
      { name: "Security", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Partners", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Status", href: "#" },
      { name: "Community", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { icon: FaFacebook, href: "#", label: "Facebook" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-violet-500 rounded-lg flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">ADmyBRAND AI</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Revolutionizing marketing with AI-powered solutions that drive growth, engagement, 
              and success for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                    data-testid={`social-link-${social.label.toLowerCase()}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-primary transition-colors text-left"
                      data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 ADmyBRAND AI Suite. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-colors text-sm"
              data-testid="link-privacy-policy"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-colors text-sm"
              data-testid="link-terms-of-service"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-colors text-sm"
              data-testid="link-cookie-policy"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
