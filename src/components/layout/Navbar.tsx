"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useConsultationModal } from "@/context/ConsultationModalContext";

export function Navbar() {
  const { openModal } = useConsultationModal();
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleConsultationClick = () => {
    setIsOpen(false);
    openModal();
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-blue-50 dark:border-slate-800 shadow-[0px_4px_20px_rgba(0,51,102,0.08)]">
      <div className="flex justify-between items-center w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 h-20">
        <Link href="/" className="text-xl font-bold text-blue-900 dark:text-blue-100 font-h2 text-h2 !text-2xl" onClick={handleLinkClick}>
          EduAccess Abroad
        </Link>
        <nav className="hidden md:flex gap-8 font-inter text-sm font-semibold tracking-tight">
          <Link href="/services" className="text-blue-900 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-300 transition-colors active:opacity-80 duration-150">Services</Link>
          <Link href="/destinations" className="text-blue-900 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-300 transition-colors active:opacity-80 duration-150">Destinations</Link>
          <Link href="/portal" className="text-blue-900 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-300 transition-colors active:opacity-80 duration-150">Student Portal</Link>
        </nav>
        <button 
          onClick={openModal}
          className="bg-primary text-primary-foreground px-6 py-3 rounded text-sm font-semibold hover:opacity-90 transition-opacity hidden md:block"
        >
          Get Free Consultation
        </button>
        <button 
          className="md:hidden text-secondary p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-md flex flex-col p-4 gap-4 md:hidden border-t border-blue-50 dark:border-slate-800">
          <Link href="/services" onClick={handleLinkClick} className="text-blue-900 dark:text-slate-300 hover:text-orange-500 font-semibold py-2">Services</Link>
          <Link href="/destinations" onClick={handleLinkClick} className="text-blue-900 dark:text-slate-300 hover:text-orange-500 font-semibold py-2">Destinations</Link>
          <Link href="/portal" onClick={handleLinkClick} className="text-blue-900 dark:text-slate-300 hover:text-orange-500 font-semibold py-2">Student Portal</Link>
          <button 
            onClick={handleConsultationClick}
            className="bg-primary text-primary-foreground px-6 py-3 rounded text-sm font-semibold hover:opacity-90 transition-opacity w-full mt-2"
          >
            Get Free Consultation
          </button>
        </div>
      )}
    </header>
  );
}
