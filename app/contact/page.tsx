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
    const subjectInput = form.elements.namedItem("subject") as HTMLInputElement;
    const messageInput = form.elements.namedItem(
      "message"
    ) as HTMLTextAreaElement;

    const formData = {
      name: nameInput?.value || "",
      email: emailInput?.value || "",
      subject: subjectInput?.value || "",
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
    <div className="h-full bg-primary/30">
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
      />
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* Text & Form */}
        <div className="flex flex-col w-full max-w-[700px]">
          <h2 className="h2 text-center mb-12">
            Let&apos;s <span className="text-accent">connect.</span>
          </h2>
          <form onSubmit={handleFormSubmit}>
            {/* Name Input */}
            <div className="flex flex-col w-full mb-4">
              <input
                name="name"
                placeholder="Your Name"
                className="input"
                onFocus={executeRecaptcha}
              />
              {formErrors.name && (
                <p className="error-message">{formErrors.name}</p>
              )}
            </div>
            {/* Email Input */}
            <div className="flex flex-col w-full mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                className="input"
              />
              {formErrors.email && (
                <p className="error-message">{formErrors.email}</p>
              )}
            </div>
            {/* Subject Input */}
            <div className="flex flex-col w-full mb-4">
              <input
                type="text"
                name="subject"
                placeholder="Topic of your message"
                className="input"
              />
              {formErrors.subject && (
                <p className="error-message">{formErrors.subject}</p>
              )}
            </div>
            {/* Message Input */}
            <div className="flex flex-col w-full mb-4">
              <textarea
                name="message"
                placeholder="Hi Ajin, I'd like to talk about..."
                className="textarea"
                onKeyDown={handleTabInTextarea}
              ></textarea>
              {formErrors.message && (
                <p className="error-message">{formErrors.message}</p>
              )}
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isAnimating}
              id="rewardId"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </form>
        </div>
        {/* Popup Notification */}
        {showPopup && (
          <div className="popup">Your message has been sent successfully!</div>
        )}
      </div>
    </div>
  );
};

export default Contact;
