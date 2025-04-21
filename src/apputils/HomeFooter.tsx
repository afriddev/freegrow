import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function HomeFooter() {
  return (
    <footer className="bg-foreground text-white py-8 w-full  px-8 md:px-16 mt-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold mb-4">FreeGrow</h2>
          <p className="text-sm">
            Empowering freelancers and businesses to grow together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:underline">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/cookies" className="hover:underline">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <div className="flex gap-4 text-xl">
            {/* <a
              href="https://facebook.com"
              className="hover:text-blue-500"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a> */}
            <a
              href="https://twitter.com"
              className="hover:text-sky-400"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              className="hover:text-pink-500"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              className="hover:text-blue-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between items-center mt-10 border-t border-white/10 pt-4 text-center text-sm text-background gap-2">
        <p>© 2025 FreeGrow LLP. All rights reserved.</p>
        <p>An Indian Company</p>
      </div>
    </footer>
  );
}

export default HomeFooter;
