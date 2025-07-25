import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1B5631] text-white font-['Inter'] py-10 px-6 w-full">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-[20px] leading-[168%]">
        {/* Column 1: Company + Where We Lend */}
        <div>
          <h3 className="text-[24px] font-bold leading-[33px] mb-2">Company</h3>
          <ul className="mb-2">
            <li>About</li>
            <li>Fix And Flip Loans</li>
            <li>DSCR Rental Loans</li>
            <li>Ground Up Construction Loans</li>
          </ul>
          <h3 className="text-[24px] font-bold leading-[33px] mt-4 mb-2">
            Where We Lend
          </h3>
          <ul>
            <li>Florida</li>
            <li>Texas</li>
            <li>Georgia</li>
          </ul>
        </div>

        {/* Column 2: Top Cities */}
        <div>
          <h3 className="text-[24px] font-bold leading-[33px] mb-2">
            Top Cities We Lend In
          </h3>
          <ul>
            <li>Orlando</li>
            <li>Tampa</li>
            <li>Miami</li>
            <li>Jacksonville</li>
            <li>Houston</li>
            <li>Austin</li>
            <li>Dallas</li>
            <li>San Antonio</li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h3 className="text-[24px] font-bold leading-[33px] mb-2">
            Top Resources
          </h3>
          <ul>
            <li>Loan Calculator</li>
            <li>What is a Hard Money Loan</li>
            <li>What is a Hard Money Loan</li>
            <li>How to find fix and flip deals</li>
            <li>Best Cities for Fix and Flips</li>
          </ul>

          <h3 className="text-[24px] font-bold leading-[33px] mt-4 mb-2">
            Useful Link
          </h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        {/* Column 4: Contact, Logo, Social */}
        <div className="flex flex-col h-full justify-between">
          <div>
            <h3 className="text-[24px] font-bold leading-[33px] mb-2">
              Contact Us
            </h3>
            <div className="flex items-start gap-2 mb-2">
              <Mail className="w-6 h-6 mt-1" />
              <span>loans@ridgestreetcap.com</span>
            </div>
            <div className="mt-4 mb-1 text-[18px] font-semibold">
              Direct/Text
            </div>
            <div className="flex items-start gap-2">
              <Phone className="w-6 h-6 mt-1" />
              <span>Phone: 786-304-2751</span>
            </div>
          </div>

          {/* Logo */}
          <div className="bg-white text-[#1B5631] font-bold text-[24px] rounded-xl px-8 py-3 mt-8 inline-block w-fit">
            <span className="text-[#1B5631]">RIDGE</span>{" "}
            <span className="text-gray-500">STREET</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8 text-white">
            <Linkedin className="w-8 h-8 bg-white text-[#1B5631] p-1 rounded" />
            <Facebook className="w-8 h-8 bg-white text-[#1B5631] p-1 rounded" />
            <Twitter className="w-8 h-8 bg-white text-[#1B5631] p-1 rounded" />
            <Instagram className="w-8 h-8 bg-white text-[#1B5631] p-1 rounded" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
