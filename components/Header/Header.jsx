const navLinks = [
  { label: "Fix and Flip", href: "#" },
  { label: "Rental Loans", href: "#" },
  { label: "Where We Lend", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Resources", href: "#" },
];

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm font-inter">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <div
          className="flex items-center select-none shrink-0"
          style={{ height: 48, maxWidth: "100%" }}
        >
          <span className="text-[#1B5631] font-bold text-[32px] md:text-[40px] leading-[40px] md:leading-[48px]">
            RIDGE
          </span>
          <span className="text-gray-500 font-bold text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] ml-1">
            STREET
          </span>
        </div>
        {/* Navigation */}
        <nav className="grow flex justify-center">
          <ul className="flex gap-4 md:gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-inter font-medium text-[16px] md:text-[20px] leading-[100%] tracking-normal hover:text-[#1B5631] transition-colors duration-200"
                  style={{ letterSpacing: 0 }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* CTA Button */}
        <a
          href="#"
          className="bg-[#1B5631] text-white font-semibold rounded-[8px] shadow-lg hover:bg-[#174826] transition-colors duration-200 uppercase font-inter flex items-center justify-center shrink-0"
          style={{
            width: "180px",
            height: "48px",
            paddingTop: 12,
            paddingBottom: 12,
            paddingLeft: 16,
            paddingRight: 16,
            fontSize: 14,
            lineHeight: "100%",
            letterSpacing: 0,
            gap: 10,
            fontWeight: 600,
          }}
        >
          <span className="text-[10px] md:text-[12px]">
            Get Approved Online
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;
