import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  Globe,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto container-padding py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-white font-display">
                We<span className="text-hotel-500">Engage</span>
              </span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-xs">
              Redefining hospitality for small stays with smart, scalable AI
              tech.
            </p>
            <div className="mt-6 space-y-2 text-gray-400">
              <a
                href="mailto:contact@weengage.in"
                className="flex items-center gap-2 hover:text-hotel-500 transition-colors"
              >
                <Mail size={18} />
                contact@weengage.in
              </a>
              <a
                href="tel:+919261141701"
                className="flex items-center gap-2 hover:text-hotel-500 transition-colors"
              >
                <Phone size={18} />
                +91 9261141701
              </a>
              <a
                href="https://weengage.in"
                className="flex items-center gap-2 hover:text-hotel-500 transition-colors"
              >
                <Globe size={18} />
                www.weengage.in
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/guesthub"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  GuestHub
                </Link>
              </li>
              <li>
                <Link
                  href="/atlas"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Atlas
                </Link>
              </li>
              <li>
                <Link
                  href="/loop"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Loop
                </Link>
              </li>
              <li>
                <Link
                  href="/prism"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Prism
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blogs"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  API Reference
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Connect</h3>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="#"
                className="flex items-center gap-2 text-gray-400 hover:text-hotel-500 transition-colors"
              >
                <Facebook size={20} />
                Facebook
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-400 hover:text-hotel-500 transition-colors"
              >
                <Twitter size={20} />
                Twitter
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-400 hover:text-hotel-500 transition-colors"
              >
                <Instagram size={20} />
                Instagram
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-400 hover:text-hotel-500 transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} WeEngage. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-6">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
