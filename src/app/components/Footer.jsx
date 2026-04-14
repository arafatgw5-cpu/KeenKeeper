import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#295c49] text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        {/* Title */}
        <h1 className="text-5xl font-bold mb-4">KeenKeeper</h1>

        {/* Subtitle */}
        <p className="text-gray-200 max-w-2xl mx-auto mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and nurture 
          the relationships that matter most.
        </p>

        {/* Social Links */}
        <h3 className="text-lg font-semibold mb-4">Social Links</h3>

        <div className="flex justify-center gap-4 mb-8">
          <button className="bg-white text-black p-3 rounded-full hover:scale-110 transition">
            <FaInstagram />
          </button>
          <button className="bg-white text-black p-3 rounded-full hover:scale-110 transition">
            <FaFacebookF />
          </button>
          <button className="bg-white text-black p-3 rounded-full hover:scale-110 transition">
            <FaXTwitter />
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-400 opacity-30 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-200">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;