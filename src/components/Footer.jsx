// src/components/Footer.jsx
import { FiTwitter, FiInstagram, FiFacebook, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  const footerLinks = {
    Ready: [
      { label: 'About Us', href: '#' },
      { label: 'Features', href: '#' },
      { label: 'Services', href: '#' },
      { label: 'Pricing', href: '#' }
    ],
    Support: [
      { label: 'Programs', href: '#' },
      { label: 'FAQs', href: '#' },
      { label: 'Contact', href: '#' }
    ],
    Developers: [
      { label: 'API', href: '#' },
      { label: 'Status', href: '#' },
      { label: 'Docs', href: '#' }
    ],
    Products: [
      { label: 'Terms', href: '#' },
      { label: 'Privacy', href: '#' },
      { label: 'Security', href: '#' }
    ]
  };

  const socialLinks = [
    { Icon: FiTwitter, href: '#' },
    { Icon: FiInstagram, href: '#' },
    { Icon: FiFacebook, href: '#' },
    { Icon: FiLinkedin, href: '#' }
  ];

  return (
    <footer className="bg-blue-600 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Company Name</h3>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="hover:text-blue-200 transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([title, links], index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-blue-100 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-blue-500 pt-8 text-center text-blue-100">
          <p>© 2024 Company Name. All rights reserved.</p>
          <p className="mt-2">Designed and Built by Company Name</p>
        </div>
      </div>
    </footer>
  );
}