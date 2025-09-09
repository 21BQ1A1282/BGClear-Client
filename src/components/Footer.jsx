import { assets, FOOTER_ICONS } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between gap-4 px-4 lg:px-44 py-3">
      {/* Logo */}
      <img src={assets.logo} alt="logo" width={32} />

      {/* Copyright */}
      <p className="flex-1 border-l border-gray-100 max-sm:hidden">
        &copy; {new Date().getFullYear()} @saimanikanta | All rights reserved.
      </p>

      {/* Social Icons */}
      <div className="flex gap-3">
        {FOOTER_ICONS.map((item, index) => (
          <a
            href={item.url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={item.logo} alt="social-logo" width={32} />
          </a>
        ))}
      </div>
      <p className="text-center text-gray-700 font-medium"></p>
    </footer>
  );
};

export default Footer;
