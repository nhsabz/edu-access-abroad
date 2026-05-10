"use client";

import React, { useState } from "react";

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycby165WgAIVQtU2eNoIbJ3Y6p8-uh27V1wNliph8Q9DEh9vPWJxBXvBDU0UyR-zuqTNO/exec";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;

    const formData = new FormData();
    formData.append("name", (form.elements.namedItem("name") as HTMLInputElement).value);
    formData.append("email", (form.elements.namedItem("email") as HTMLInputElement).value);
    formData.append(
      "phone",
      (form.elements.namedItem("phone") as HTMLInputElement)?.value || ""
    );
    formData.append(
      "country",
      (form.elements.namedItem("service") as HTMLSelectElement).value
    );
    formData.append(
      "message",
      (form.elements.namedItem("message") as HTMLTextAreaElement).value
    );

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // 🔥 FIX FOR CORS
        body: formData,
      });

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("idle");
      alert("❌ Submission failed. Try again.");
    }
  };

  // ✅ SUCCESS UI
  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-300 rounded-xl p-8 text-center space-y-4">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
          ✔
        </div>
        <h3 className="text-xl font-semibold">Request Received!</h3>
        <p>We will contact you within 24 hours.</p>

        <button
          onClick={() => setStatus("idle")}
          className="text-blue-600 underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* NAME */}
      <div>
        <label className="block mb-1">Full Name</label>
        <input
          name="name"
          required
          className="w-full border p-3 rounded"
          placeholder="John Doe"
        />
      </div>

      {/* EMAIL */}
      <div>
        <label className="block mb-1">Email</label>
        <input
          name="email"
          type="email"
          required
          className="w-full border p-3 rounded"
          placeholder="john@email.com"
        />
      </div>

      {/* PHONE */}
      <div>
        <label className="block mb-1">Phone</label>
        <input
          name="phone"
          className="w-full border p-3 rounded"
          placeholder="+880..."
        />
      </div>

      {/* SERVICE */}
      <div>
        <label className="block mb-1">Service Interest</label>
        <select name="service" className="w-full border p-3 rounded">
          <option>Student Counseling</option>
          <option>English Test Prep</option>
          <option>Admission Process</option>
          <option>Visa Guidance</option>
          <option>Other</option>
        </select>
      </div>

      {/* MESSAGE */}
      <div>
        <label className="block mb-1">Message</label>
        <textarea
          name="message"
          rows={3}
          className="w-full border p-3 rounded"
          placeholder="Your goal..."
        />
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-orange-500 text-white py-3 rounded flex items-center justify-center gap-2"
      >
        {status === "submitting" ? "Submitting..." : "Request Callback"}
      </button>
    </form>
  );
}