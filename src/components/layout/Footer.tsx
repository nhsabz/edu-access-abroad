import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-16 px-8 bg-slate-50 dark:bg-slate-950 border-t border-blue-100 dark:border-slate-800 transition-all duration-300 ease-in-out">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-[1280px] mx-auto">
        <div className="col-span-1 md:col-span-2">
          <span className="text-lg font-black text-blue-900 dark:text-white mb-4 block">EduAccess Abroad</span>
          <p className="font-inter text-sm leading-relaxed text-blue-800/70 dark:text-slate-400 max-w-[24rem]">
            Empowering Global Education. We guide ambitious students to top-tier universities worldwide, providing expert support at every step of the journey.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2 font-inter text-sm leading-relaxed">
            <li><Link className="text-blue-800/70 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-300 underline decoration-2 underline-offset-4" href="/services">Student Counseling</Link></li>
            <li><Link className="text-blue-800/70 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-300 underline decoration-2 underline-offset-4" href="#">English Test Prep</Link></li>
            <li><Link className="text-blue-800/70 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-300 underline decoration-2 underline-offset-4" href="/services">Visa Support</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-foreground mb-4">Company</h4>
          <ul className="space-y-2 font-inter text-sm leading-relaxed">
            <li><Link className="text-blue-800/70 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-300 underline decoration-2 underline-offset-4" href="/destinations">Partner Universities</Link></li>
            <li><Link className="text-blue-800/70 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-300 underline decoration-2 underline-offset-4" href="#">Office Locations</Link></li>
            <li><Link className="text-blue-800/70 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-300 underline decoration-2 underline-offset-4" href="#">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto mt-12 pt-8 border-t border-border font-inter text-sm leading-relaxed text-blue-800/70 dark:text-slate-400">
        © 2024 EduAccess Abroad. Empowering Global Education.
      </div>
    </footer>
  );
}
