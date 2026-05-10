"use client";

import { useConsultationModal } from "@/context/ConsultationModalContext";
import Link from "next/link";

export default function Home() {
  const { openModal } = useConsultationModal();

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 py-xl overflow-hidden landmark-bg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <h1 className="font-h1 text-h1 text-on-background">Your Global Education Journey Starts Here</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[36rem]">
              Expert guidance for studying in the UK, USA, Canada, Australia, Germany, Sweden, and other top European destinations. We transform the complex application process into a seamless, premium experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={openModal} className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-DEFAULT font-bold hover:opacity-90 transition-opacity">
                Free Consultation
              </button>
              <Link href="/destinations" className="w-full sm:w-auto inline-flex items-center justify-center border border-secondary text-secondary px-8 py-4 rounded-DEFAULT font-bold hover:bg-secondary-fixed transition-colors">
                Explore Destinations
              </Link>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                <img alt="Student profile" className="w-10 h-10 rounded-full border-2 border-surface-container-lowest object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMd4MpdUroEH_lnDKbBL2Q4o_hXX0O6szrMzqDlbZ35k1i2FkSNU8qggKfRdNs9T7nnpShzy3Hk8-0ROFhROqFTEBmRozshwpnZPQPQaWj0ipb3gp7dvnoUeFwIz2dflPbabWQaHj4hKUqb63QkrOGaIB9Ad1IIKb9qxKc9YfH57CJdvntsLVgbjbbN6_kkDXWNK9-MN2Zdb546nWhp-b9ia0_VmyrBqjvTYIczk9IJ8Uv2nX1rah4XqxYt0DNsFTzm5Y73Rs5Onv7"/>
                <img alt="Student profile" className="w-10 h-10 rounded-full border-2 border-surface-container-lowest object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAbtuO4J2QmJhdDCH7YhXxZMSFc-KNrrvoCKTFOAVQUyCU3VmtBYvI-yh4QbhZ8P-0ov2xz9J9NoAYPDe5Xo38iESGqWPE-ZynulfX8HUG4NB4klOmhoSpghDscR9XSxHSALQbnr4JMcU6jcAZHf_7dIow0h0aoTbgiENJLglRHVZoNAtn-9s7JsQfwL5fzAZB_0QEVUpnFvgZNKzqyuQ-oLm-U8RHPZ4IPUelsp4qdv1zKLoN54R9aXV32e6axpTeBH2Qd1lqjpaH"/>
                <img alt="Student profile" className="w-10 h-10 rounded-full border-2 border-surface-container-lowest object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-5zx9W6QfPEm6UT2tt8ruWImtAuHDPwN3zo2nJqLaoDIgdJqM4Is8qOrrGSrA9xEO9broXb7dRSe8d3mdXGAt7bKQrukClrBXaW31GANRnj2aSNBHyCp3V3CD8B98IDv9JWMzT9xAt9x1EW0nY8WLf_PNsn3YXC427FEMV-IW4HH76FcDRLlSHEuG9QTQ-GH82LB4tdMYDOnkpvQ19vIMaEH56PLFx6QB1We2ApWr2BnIN6masF8IfWSAI4DM6aSTtDOLYNPAdvNl"/>
              </div>
              <div className="font-body-md text-body-md text-on-surface-variant">
                <span className="font-bold text-on-background">10,000+</span> Students Placed
              </div>
            </div>
          </div>
          <div className="relative h-[600px] hidden lg:block">
            {/* Floating UI Cards */}
            <div className="absolute top-10 right-10 bg-surface-container-lowest p-6 rounded-xl shadow-[0px_4px_20px_rgba(0,51,102,0.08)] z-20 w-72 transform hover:-translate-y-1 transition-transform border border-transparent hover:border-secondary-fixed">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#26D367]/10 rounded-full flex items-center justify-center text-[#26D367]">
                  <span className="material-symbols-outlined">check_circle</span>
                </div>
                <div>
                  <div className="font-bold text-on-background">Application Accepted</div>
                  <div className="text-sm text-on-surface-variant">University of Oxford</div>
                </div>
              </div>
              <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                <div className="w-full h-full bg-[#26D367]"></div>
              </div>
            </div>
            <div className="absolute bottom-20 left-0 bg-surface-container-lowest p-6 rounded-xl shadow-[0px_4px_20px_rgba(0,51,102,0.08)] z-20 w-80 transform hover:-translate-y-1 transition-transform border border-transparent hover:border-secondary-fixed">
              <div className="font-bold text-on-background mb-2">Upcoming Interview</div>
              <div className="flex items-center gap-2 text-on-surface-variant text-sm mb-4">
                <span className="material-symbols-outlined text-base">calendar_today</span>
                Oct 24, 10:00 AM EST
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">video_camera_front</span>
                </div>
                <div className="text-sm">Visa Prep Session</div>
              </div>
            </div>
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
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-h2 text-h2 text-on-background mb-4">Comprehensive Services</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">From initial counseling to your first day on campus, we provide end-to-end support for your international education.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0px_4px_20px_rgba(0,51,102,0.08)] hover:-translate-y-1 transition-transform border border-transparent hover:border-secondary-fixed group">
              <div className="w-14 h-14 bg-secondary-fixed rounded-lg flex items-center justify-center text-secondary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <span className="material-symbols-outlined text-3xl">psychology</span>
              </div>
              <h3 className="font-h3 text-h3 text-on-background mb-3">Counseling</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Personalized sessions to identify the right course and university for your career goals.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0px_4px_20px_rgba(0,51,102,0.08)] hover:-translate-y-1 transition-transform border border-transparent hover:border-secondary-fixed group">
              <div className="w-14 h-14 bg-secondary-fixed rounded-lg flex items-center justify-center text-secondary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <span className="material-symbols-outlined text-3xl">edit_document</span>
              </div>
              <h3 className="font-h3 text-h3 text-on-background mb-3">Test Prep</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Expert coaching for IELTS, TOEFL, GRE, and GMAT to secure your admission.</p>
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
    </>
  );
}
