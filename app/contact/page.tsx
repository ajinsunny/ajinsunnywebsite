"use client";

import React, { useState, useCallback } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/navigation"; // Note: using next/navigation for App Router
import { useReward } from "react-rewards";
import Script from "next/script";

// Declare grecaptcha for TypeScript (provided by the recaptcha script)
declare const grecaptcha: any;

const Contact: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [recaptchaToken, setRecaptchaToken] = useState<string>("");
  const router = useRouter();

  const { reward, isAnimating } = useReward("rewardId", "confetti", {
    angle: 90,
    spread: 60,
    startVelocity: 50,
    elementCount: 70,
    elementSize: 8,
  });

  // Handle the Tab key inside the textarea
  const handleTabInTextarea = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab" && !e.currentTarget.value) {
      e.preventDefault(); // Prevent the default tab behavior (moving focus)
      e.currentTarget.value = "Hi Ajin, I'd like to talk about ";
    }
  };

  // Execute reCAPTCHA when an input receives focus
  const executeRecaptcha = useCallback(async () => {
    if (typeof grecaptcha !== "undefined") {
      const token: string = await grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        { action: "submit" }
      );
      setRecaptchaToken(token);
    }
  }, []);

  // Handle form submission
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrors({});

    // Access form elements using the currentTarget
    const form = e.currentTarget;
    const nameInput = form.elements.namedItem("name") as HTMLInputElement;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    const messageInput = form.elements.namedItem(
      "message"
    ) as HTMLTextAreaElement;

    const formData = {
      name: nameInput?.value || "",
      email: emailInput?.value || "",
      subject: "Contact Form Submission",
      message: messageInput?.value || "",
      recaptchaToken,
    };

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        reward();
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          router.push("/");
        }, 2000);
      } else {
        const errorData = await response.json();
        if (errorData && errorData.errors && Array.isArray(errorData.errors)) {
          const transformedErrors = errorData.errors.reduce(
            (acc: Record<string, string>, error: any) => {
              acc[error.path[0]] = error.message;
              return acc;
            },
            {}
          );
          setFormErrors(transformedErrors);
        }
      }
    } catch (error) {
      console.error("ReCAPTCHA Error:", error);
      // Optionally handle additional errors here
    }
  };

  return (
    <div className="h-screen bg-gradient-to-b from-primary via-primary/95 to-primary/80 flex items-center justify-center overflow-hidden pt-20">
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Let&apos;s <span className="text-accent">connect.</span>
            </h1>
            <p className="text-white/70 text-base">
              Have a project in mind? I&apos;d love to hear from you.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8 shadow-2xl">
            <form onSubmit={handleFormSubmit} className="space-y-4">
              {/* Name Input */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="block text-white/90 text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 transition-all duration-300"
                  onFocus={executeRecaptcha}
                  required
                />
                {formErrors.name && (
                  <p className="text-accent text-sm mt-1">{formErrors.name}</p>
                )}
              </div>

              {/* Email Input */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-white/90 text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 transition-all duration-300"
                  required
                />
                {formErrors.email && (
                  <p className="text-accent text-sm mt-1">{formErrors.email}</p>
                )}
              </div>

              {/* Message Input */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-white/90 text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Hi Ajin, I'd like to talk about..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 transition-all duration-300 resize-none"
                  onKeyDown={handleTabInTextarea}
                  required
                ></textarea>
                {formErrors.message && (
                  <p className="text-accent text-sm mt-1">{formErrors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isAnimating}
                id="rewardId"
                className="group relative w-full sm:w-auto px-8 py-3 bg-accent text-white rounded-full font-medium text-base hover:bg-accent/90 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="group-hover:-translate-x-1 transition-transform duration-300">
                  Let&apos;s talk
                </span>
                <BsArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>

        {/* Popup Notification */}
        {showPopup && (
          <div className="fixed top-8 left-1/2 transform -translate-x-1/2 bg-accent text-white px-8 py-4 rounded-full shadow-2xl animate-bounce z-50">
            Your message has been sent successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
