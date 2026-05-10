"use client";

import { useState } from "react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby165WgAIVQtU2eNoIbJ3Y6p8-uh27V1wNliph8Q9DEh9vPWJxBXvBDU0UyR-zuqTNO/exec";

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setStatus("success");
      setTimeout(() => {
        onClose();
        setStatus("idle");
        setFormData({ name: "", email: "", phone: "", country: "", message: "" });
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-scrim/50 backdrop-blur-sm">
      <div className="bg-surface-container-lowest w-full max-w-[32rem] rounded-2xl shadow-xl flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between p-6 border-b border-surface-variant">
          <h2 className="font-h3 text-h3 text-on-surface">Free Consultation</h2>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-surface-container text-on-surface-variant transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto">
          {status === "success" ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-[#26D367]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#1e8a46]">
                <span className="material-symbols-outlined text-[32px]">check_circle</span>
              </div>
              <h3 className="font-h3 text-h3 text-on-surface mb-2">Request Received!</h3>
              <p className="font-body-md text-on-surface-variant">
                Thank you for reaching out. One of our expert counselors will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-label-caps text-label-caps text-on-surface mb-1" htmlFor="name">Full Name</label>
                <input 
                  id="name" name="name" type="text" required
                  value={formData.name} onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-surface border border-outline-variant rounded-lg font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-label-caps text-label-caps text-on-surface mb-1" htmlFor="email">Email</label>
                  <input 
                    id="email" name="email" type="email" required
                    value={formData.email} onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-surface border border-outline-variant rounded-lg font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block font-label-caps text-label-caps text-on-surface mb-1" htmlFor="phone">Phone Number</label>
                  <input 
                    id="phone" name="phone" type="tel" required
                    value={formData.phone} onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-surface border border-outline-variant rounded-lg font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="+1 234 567 890"
                  />
                </div>
              </div>

              <div>
                <label className="block font-label-caps text-label-caps text-on-surface mb-1" htmlFor="country">Target Country</label>
                <select 
                  id="country" name="country" required
                  value={formData.country} onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-surface border border-outline-variant rounded-lg font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                >
                  <option value="">Select a destination</option>
                  <option value="UK">United Kingdom</option>
                  <option value="USA">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block font-label-caps text-label-caps text-on-surface mb-1" htmlFor="message">Message (Optional)</label>
                <textarea 
                  id="message" name="message" rows={3}
                  value={formData.message} onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-surface border border-outline-variant rounded-lg font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Tell us about your study goals..."
                ></textarea>
              </div>

              {status === "error" && (
                <div className="p-3 bg-error-container text-on-error-container rounded-lg text-sm">
                  There was an error submitting your request. Please try again.
                </div>
              )}

              <button 
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-primary hover:bg-surface-tint text-primary-foreground font-label-caps text-label-caps py-3 rounded-lg transition-colors flex items-center justify-center gap-2 mt-2 disabled:opacity-70"
              >
                {status === "submitting" ? "Submitting..." : "Request Consultation"}
                {status !== "submitting" && <span className="material-symbols-outlined text-[18px]">send</span>}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
