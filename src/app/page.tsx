"use client";

import { useConsultationModal } from "@/context/ConsultationModalContext";
import Link from "next/link";
import { HowItWorks } from "@/components/HowItWorks";

export default function Home() {
  const { openModal } = useConsultationModal();

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 py-xl overflow-hidden landmark-bg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 border border-surface-variant rounded-full px-4 py-1.5 text-xs font-bold text-secondary uppercase tracking-wider bg-surface/50 backdrop-blur-sm w-fit">
              <img src="https://flagcdn.com/w40/bd.png" alt="Bangladesh" className="w-5 h-auto rounded-[2px]" /> Bangladesh's Europe Study Specialists
            </div>
            <h1 className="font-h1 text-5xl md:text-6xl lg:text-[68px] font-extrabold text-on-background leading-[1.1] tracking-tight">
              Study in <span className="text-secondary">Europe.</span><br />
              Pay Only When<br />
              You Get In.
            </h1>
            <p className="font-body-lg text-lg text-on-surface-variant max-w-[38rem] leading-relaxed">
              We help Bangladeshi students gain admission to top European universities — with low tuition, part-time work rights, and a clear path to Permanent Residency. Our fee? Zero until you receive your offer letter.
            </p>
            
            <div className="bg-surface-container-lowest/80 backdrop-blur-md border border-surface-variant rounded-xl p-5 flex items-start gap-4 max-w-[36rem]">
              <div className="w-10 h-10 bg-[#3b82f6]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[#3b82f6]">security</span>
              </div>
              <div>
                <h3 className="font-bold text-secondary text-lg">100% Success-Fee Model</h3>
                <p className="text-on-surface-variant text-sm mt-1">No offer letter = You pay us nothing. Zero risk.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button onClick={openModal} className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-DEFAULT font-bold hover:opacity-90 transition-opacity">
                Free Consultation
              </button>
              <Link href="/destinations" className="w-full sm:w-auto inline-flex items-center justify-center border border-secondary text-secondary px-8 py-4 rounded-DEFAULT font-bold hover:bg-secondary-fixed transition-colors">
                Explore Destinations
              </Link>
            </div>
          </div>
          <div className="relative h-[600px] hidden lg:block">
            {/* Hero Image */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden z-10 shadow-2xl border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#003366]/30 to-[#FF6B00]/10 z-10 mix-blend-overlay"></div>
              <img 
                alt="International students on modern university campus" 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2070&q=80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-surface-container-low py-xl">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-h2 text-h2 text-on-background mb-4">Comprehensive Services</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">From initial counseling to your first day on campus, we provide end-to-end support for your international education.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0px_4px_20px_rgba(0,51,102,0.08)] hover:-translate-y-1 transition-transform border border-transparent hover:border-secondary-fixed group">
              <div className="w-14 h-14 bg-secondary-fixed rounded-lg flex items-center justify-center text-secondary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <span className="material-symbols-outlined text-3xl">psychology</span>
              </div>
              <h3 className="font-h3 text-h3 text-on-background mb-3">University Selection</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Personalized sessions to identify the right European course and university for your career goals.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0px_4px_20px_rgba(0,51,102,0.08)] hover:-translate-y-1 transition-transform border border-transparent hover:border-secondary-fixed group">
              <div className="w-14 h-14 bg-secondary-fixed rounded-lg flex items-center justify-center text-secondary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <span className="material-symbols-outlined text-3xl">edit_document</span>
              </div>
              <h3 className="font-h3 text-h3 text-on-background mb-3">Application Support</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Expert guidance on preparing SOPs, motivation letters, CVs, and handling all paperwork.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0px_4px_20px_rgba(0,51,102,0.08)] hover:-translate-y-1 transition-transform border border-transparent hover:border-secondary-fixed group">
              <div className="w-14 h-14 bg-secondary-fixed rounded-lg flex items-center justify-center text-secondary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <span className="material-symbols-outlined text-3xl">flight_takeoff</span>
              </div>
              <h3 className="font-h3 text-h3 text-on-background mb-3">Visa Support</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Meticulous guidance through the visa application process to ensure success.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0px_4px_20px_rgba(0,51,102,0.08)] hover:-translate-y-1 transition-transform border border-transparent hover:border-secondary-fixed group">
              <div className="w-14 h-14 bg-secondary-fixed rounded-lg flex items-center justify-center text-secondary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <span className="material-symbols-outlined text-3xl">apartment</span>
              </div>
              <h3 className="font-h3 text-h3 text-on-background mb-3">Accommodation</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Assistance in finding safe, comfortable housing near your chosen university.</p>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
    </>
  );
}
