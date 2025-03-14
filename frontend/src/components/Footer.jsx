import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-blue-900 to-blue-600 text-white py-10">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-3 gap-8">
        {/* Left Section - Logo & Moto */}
        <div>
          <h2 className="text-2xl font-bold">MotoConnect</h2>
          <p className="mt-2 text-gray-300">Connecting Motovloggers with Brands for the Best Sponsorships!</p>
        </div>

        {/* Center Section - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/about" className="hover:text-gray-300 transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-gray-300 transition">Contact Us</a></li>
            <li><a href="/blogs" className="hover:text-gray-300 transition">Blogs</a></li>
            <li><a href="/news" className="hover:text-gray-300 transition">News</a></li>
          </ul>
        </div>

        {/* Right Section - Social Media */}
        <div>
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="mt-8 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} MotoConnect. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
