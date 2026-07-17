"use client";

import React from 'react';
import { useConsultationModal } from "@/context/ConsultationModalContext";

const steps = [
  {
    title: "Free Consultation",
    description: "Discuss your profile with our advisors"
  },
  {
    title: "University Shortlist",
    description: "Receive your best-fit European options"
  },
  {
    title: "Document Preparation",
    description: "Prepare SOP, CV and documents"
  },
  {
    title: "Application Submission",
    description: "We apply on your behalf"
  },
  {
    title: "Admission Offer",
    description: "Choose the best university offer"
  },
  {
    title: "Visa & Departure",
    description: "Prepare for your move to Europe"
  }
];

export function HowItWorks() {
  const { openModal } = useConsultationModal();

  return (
    <section className="bg-background py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center border border-[#D4AF37]/30 rounded-full px-4 py-1.5 text-xs font-bold text-[#D4AF37] uppercase tracking-wider bg-[#D4AF37]/5 mb-4">
            HOW IT WORKS
          </div>
          <h2 className="font-h2 text-h2 text-on-background mb-3">From Bangladesh to Europe in 6 Steps</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            We manage the complex application process so you can focus on preparing for your future in Europe.
          </p>
        </div>

        <div className="relative mt-12 mb-16">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[27px] left-[calc(100%/12)] right-[calc(100%/12)] h-[1px] bg-[#D4AF37] -z-10"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center relative group">
                {/* Connecting Line (Mobile) */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden absolute top-[28px] left-1/2 -translate-x-1/2 w-[1px] h-[calc(100%+2rem)] bg-[#D4AF37] -z-10"></div>
                )}
                
                <div className="w-14 h-14 bg-background rounded-full border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-bold text-xl mb-4 shadow-[0px_4px_10px_rgba(212,175,55,0.15)] group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-300">
                  {index + 1}
                </div>
                
                <h3 className="font-bold text-on-background text-base mb-1.5 leading-tight px-1">{step.title}</h3>
                <p className="font-body-md text-sm text-on-surface-variant leading-snug px-1">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="font-h3 text-xl font-bold text-on-background mb-5">Ready to Start Your Europe Journey?</h3>
          <button 
            onClick={openModal}
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-DEFAULT font-bold hover:opacity-90 transition-opacity"
          >
            Book Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
