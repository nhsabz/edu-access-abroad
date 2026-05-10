import Link from "next/link";
import { MapPin, MessageCircle, Globe } from "lucide-react";

export function Footer() {
  return (
    <>
      <footer className="w-full py-16 bg-slate-100 dark:bg-slate-900 border-t border-blue-100 dark:border-slate-800 transition-all duration-300 ease-in-out">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-[1280px] mx-auto px-6 sm:px-8">
          
          {/* Column 1: Brand Info */}
          <div>
            <span className="text-xl font-black text-blue-900 dark:text-white mb-6 block">EduAccess Abroad</span>
            <p className="font-inter text-sm leading-relaxed text-slate-600 dark:text-slate-400 mb-6">
              Helping students achieve their global education dreams. We guide ambitious students to top-tier universities worldwide, providing expert support at every step of the journey.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3 font-inter text-sm leading-relaxed">
              <li><Link className="text-slate-600 dark:text-slate-400 hover:text-orange-500 transition-colors" href="/services">Student Counseling</Link></li>
              <li><a className="text-slate-600 dark:text-slate-400 hover:text-orange-500 transition-colors" href="https://ielts.org/" target="_blank" rel="noopener noreferrer">English Test Prep</a></li>
              <li><Link className="text-slate-600 dark:text-slate-400 hover:text-orange-500 transition-colors" href="/services">Visa Support</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Company</h4>
            <ul className="space-y-3 font-inter text-sm leading-relaxed">
              <li><Link className="text-slate-600 dark:text-slate-400 hover:text-orange-500 transition-colors" href="/destinations">Partner Universities</Link></li>
              <li><Link className="text-slate-600 dark:text-slate-400 hover:text-orange-500 transition-colors" href="#">Office Locations</Link></li>
              <li><Link className="text-slate-600 dark:text-slate-400 hover:text-orange-500 transition-colors" href="#">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4 font-inter text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-orange-500 mt-0.5" />
                <span>149/A, 4th Floor, Baitush Sharaf Complex,<br/>Airport Road, Farmgate, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 shrink-0 text-[#25D366]" />
                <a href="https://wa.me/8801641545094" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
                  01641-545094
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Globe className="w-5 h-5 shrink-0 text-[#1877F2] group-hover:scale-110 transition-transform" />
                <a href="https://www.facebook.com/share/1K1R3tdqwH/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">
                  Facebook Page
                </a>
              </li>
            </ul>
            <div className="mt-6 text-sm text-slate-500">
              <p className="font-semibold text-slate-700 dark:text-slate-300">Office Hours:</p>
              <p>Sun - Thu: 10:00 AM - 6:00 PM</p>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="max-w-[1280px] mx-auto mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 font-inter text-sm text-center md:text-left leading-relaxed text-slate-500 px-6 sm:px-8">
          © 2026 EduAccess Abroad. All rights reserved.
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/8801641545094" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group border border-white/20"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-semibold px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          Chat with us!
        </span>
      </a>
    </>
  );
}
