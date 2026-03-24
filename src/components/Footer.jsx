import {
  Linkedin,
  Instagram,
  Phone,
  Mail,
} from "lucide-react";
import whatsappIcon from "../assets/icons/whatsapp.jpg";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold tracking-widest mb-4">
              VULCORE
            </h3>

            <p className="text-gray-400 text-sm">
              Delivering scalable and modern software
              solutions for clients worldwide.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">
              Contact
            </h4>

            <div className="space-y-3 text-gray-400">

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>
                  +234 903 604 6611
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>
                  +234 806 683 7234
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>
                  info@vulcoretechnology.com
                </span>
              </div>

            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">
              Follow Us
            </h4>

            <div className="flex gap-4">

              <a href="#" target="_blank">
                <Linkedin className="hover:text-yellow-400 transition" />
              </a>

              <a href="#" target="_blank">
                <Instagram className="hover:text-yellow-400 transition" />
              </a>

              <a
  href="https://wa.me/2349036046611"
  target="_blank"
>
  <img
    src={whatsappIcon}
    alt="WhatsApp"
    className="w-6 h-6 hover:scale-110 transition"
  />
</a>

            </div>

          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">

          <div className="flex gap-6">

            <a
              href="#"
              className="hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-white"
            >
              Terms of Service
            </a>

          </div>

          <p>
            © 2026 Vulcore Technology
          </p>

        </div>

      </div>
    </footer>
  );
}