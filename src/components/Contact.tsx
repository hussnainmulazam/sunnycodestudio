"use client";
import React, { useState } from "react";
import { Paragraph } from "@/components/Paragraph";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandUpwork,
  IconBrandWhatsapp,
  IconCheck,
  IconCopy,
  IconMail,
  IconMapPin,
  IconPhone,
  IconSend,
  IconClock,
} from "@tabler/icons-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    projectType: "AI Agent & LLM Development",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hussnainmulazam@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+923266655307");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs.fullName = "Please enter your full name.";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) errs.message = "Please write a brief message about your project.";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate sending with realistic feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const mailtoUrl = `mailto:hussnainmulazam@gmail.com?subject=${encodeURIComponent(
    `Project Inquiry: ${formData.projectType}`
  )}&body=${encodeURIComponent(
    `Hi Hussnain,\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <div className="w-full">
      {/* Header Badge & Title */}
      <div className="max-w-2xl mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Open for New Projects &amp; Consulting
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900">
          Let&apos;s Build Something Impactful
        </h1>
        <Paragraph className="mt-3 text-neutral-600 text-sm md:text-base leading-relaxed">
          Whether you need custom AI agents, RAG systems, a scalable SaaS architecture, or a codebase performance overhaul, feel free to reach out directly or submit your project details below.
        </Paragraph>
      </div>

      {/* Main Grid: Left Direct Channels, Right Form */}
      <div className="grid lg:grid-cols-[1fr_440px] gap-10 lg:gap-14 items-start">
        {/* Left Column: Direct Contact Info */}
        <div className="space-y-6">
          {/* Quick Direct Actions Card */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Direct Communication Channels
            </h2>

            {/* Email item */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl border border-neutral-100 bg-neutral-50/70 hover:bg-neutral-50 transition gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <IconMail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 font-medium">Email Address</p>
                  <a
                    href="mailto:hussnainmulazam@gmail.com"
                    className="text-sm font-semibold text-neutral-900 hover:text-blue-600 transition"
                  >
                    hussnainmulazam@gmail.com
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 bg-white text-xs font-medium text-neutral-700 hover:bg-neutral-100 transition shadow-2xs self-start sm:self-auto"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <IconCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <IconCopy className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Phone & WhatsApp item */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl border border-neutral-100 bg-neutral-50/70 hover:bg-neutral-50 transition gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                  <IconBrandWhatsapp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 font-medium">WhatsApp &amp; Phone</p>
                  <a
                    href="https://wa.me/923266655307"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-neutral-900 hover:text-emerald-600 transition"
                  >
                    +92 326 6655307
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <a
                  href="https://wa.me/923266655307"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition"
                >
                  <IconBrandWhatsapp className="w-3.5 h-3.5" />
                  Chat
                </a>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-neutral-200 bg-white text-xs text-neutral-700 hover:bg-neutral-100 transition shadow-2xs"
                  title="Copy phone"
                >
                  {copiedPhone ? (
                    <IconCheck className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <IconCopy className="w-3.5 h-3.5 text-neutral-500" />
                  )}
                </button>
              </div>
            </div>

            {/* Upwork Profile */}
            <div className="flex items-center justify-between p-3.5 rounded-xl border border-neutral-100 bg-neutral-50/70 hover:bg-neutral-50 transition">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center text-white">
                  <IconBrandUpwork className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 font-medium">Upwork Profile</p>
                  <p className="text-sm font-semibold text-neutral-900">
                    Hussnain M. · Verified Freelancer
                  </p>
                </div>
              </div>
              <a
                href="https://www.upwork.com/freelancers/~01c22e447f1a03bc8e"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-neutral-300 bg-white text-xs font-semibold text-neutral-800 hover:bg-neutral-100 transition shadow-2xs"
              >
                Hire on Upwork
              </a>
            </div>
          </div>

          {/* Social Profiles & Timezone Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-neutral-200 bg-white shadow-sm flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-700">
                <IconMapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-neutral-500">Location &amp; Timezone</p>
                <p className="text-sm font-semibold text-neutral-900">Lahore, Pakistan (PKT)</p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-neutral-200 bg-white shadow-sm flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-700">
                <IconClock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-neutral-500">Typical Response Time</p>
                <p className="text-sm font-semibold text-neutral-900">Within 0 - 4 Hours</p>
              </div>
            </div>
          </div>

          {/* Connect on Socials */}
          <div className="flex items-center gap-3 pt-2">
            <span className="text-xs font-semibold text-neutral-500">Profiles:</span>
            <a
              href="https://github.com/Sunny-Janjua"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 bg-white text-xs font-semibold text-neutral-800 hover:bg-neutral-50 transition"
            >
              <IconBrandGithub className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/hussnainmulazam"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 bg-white text-xs font-semibold text-neutral-800 hover:bg-neutral-50 transition"
            >
              <IconBrandLinkedin className="w-4 h-4 text-blue-600" />
              LinkedIn
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01c22e447f1a03bc8e"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 bg-white text-xs font-semibold text-neutral-800 hover:bg-neutral-50 transition"
            >
              <IconBrandUpwork className="w-4 h-4 text-emerald-600" />
              Upwork
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-7 shadow-sm">
          {isSubmitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <IconCheck className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900">Message Received!</h3>
              <p className="text-sm text-neutral-600 max-w-sm mx-auto">
                Thank you, <strong>{formData.fullName}</strong>. Your message regarding <em>{formData.projectType}</em> has been sent. I will respond to <strong>{formData.email}</strong> shortly.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={mailtoUrl}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800 transition"
                >
                  <IconSend className="w-4 h-4" />
                  Open in Email Client
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      fullName: "",
                      email: "",
                      projectType: "AI Agent & LLM Development",
                      message: "",
                    });
                  }}
                  className="px-4 py-2 rounded-lg border border-neutral-200 text-neutral-700 text-xs font-semibold hover:bg-neutral-50 transition"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Send a Message</h3>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Alex Morgan"
                  className={`bg-neutral-50/70 border ${
                    errors.fullName ? "border-red-400 focus:ring-red-200" : "border-neutral-200 focus:ring-neutral-200"
                  } focus:outline-none focus:ring-2 px-3 py-2.5 rounded-lg text-sm text-neutral-900 w-full transition`}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
                {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="e.g. alex@company.com"
                  className={`bg-neutral-50/70 border ${
                    errors.email ? "border-red-400 focus:ring-red-200" : "border-neutral-200 focus:ring-neutral-200"
                  } focus:outline-none focus:ring-2 px-3 py-2.5 rounded-lg text-sm text-neutral-900 w-full transition`}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Project Type / Service
                </label>
                <select
                  className="bg-neutral-50/70 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-3 py-2.5 rounded-lg text-sm text-neutral-900 w-full transition"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                >
                  <option value="AI Agent & LLM Development">AI Agent &amp; Multi-Agent Workflow</option>
                  <option value="RAG Pipeline & Vector Search">RAG Pipeline with Pinecone</option>
                  <option value="Full-Stack SaaS Platform">Full-Stack SaaS (Next.js + FastAPI)</option>
                  <option value="Codebase Takeover & Performance">Codebase Optimization / Takeover</option>
                  <option value="Technical Consultation">Technical Consultation &amp; Architecture</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Project Details / Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  placeholder="Briefly describe your goals, timeline, or requirements..."
                  rows={5}
                  className={`bg-neutral-50/70 border ${
                    errors.message ? "border-red-400 focus:ring-red-200" : "border-neutral-200 focus:ring-neutral-200"
                  } focus:outline-none focus:ring-2 px-3 py-2.5 rounded-lg text-sm text-neutral-900 w-full resize-none transition`}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white bg-neutral-900 hover:bg-neutral-800 disabled:opacity-60 transition shadow-sm text-sm"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <IconSend className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
                <a
                  href={mailtoUrl}
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-700 hover:bg-neutral-100 transition text-xs font-semibold"
                  title="Directly open in your default mail application"
                >
                  Send via Mail App
                </a>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Embedded Location Map: Lahore, Pakistan */}
      <div className="mt-14 rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm">
        <div className="p-4 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/60">
          <div className="flex items-center gap-2">
            <IconMapPin className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-neutral-800">Based in Lahore, Pakistan</span>
          </div>
          <span className="text-xs text-neutral-500 font-medium">Remote Worldwide Collaboration</span>
        </div>
        <iframe
          title="Location Map — Lahore, Pakistan"
          className="w-full h-[260px] sm:h-[320px] lg:h-[360px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Lahore%2C%20Pakistan&output=embed"
        />
      </div>
    </div>
  );
};
