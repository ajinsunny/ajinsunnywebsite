import React, { useState, useEffect } from "react";

import { BsArrowRight } from "react-icons/bs";

import { useRouter } from "next/router";
import { useReward } from "react-rewards";
import Script from "next/script";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const router = useRouter();
  const { reward, isAnimating } = useReward("rewardId", "confetti", {
    angle: 90,
    spread: 60,
    startVelocity: 50,
    elementCount: 70,
    elementSize: 8,
  });

  const handleTabInTextarea = (e) => {
    if (e.key === "Tab" && !e.target.value) {
      e.preventDefault(); // Prevent the default tab action (focus next element)
      e.target.value = "Hi Ajin, I'd like to talk about "; // Set the default text
    }
  };

  // Function to handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormErrors({});

    try {
      const recaptchaToken = await grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        { action: "submit" }
      );
      const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
        recaptchaToken,
      };

      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email sent successfully, triggering confetti");
        reward();
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          router.push("/");
        }, 100);
      } else {
        const errorData = await response.json();
        if (errorData && errorData.errors && Array.isArray(errorData.errors)) {
          const transformedErrors = errorData.errors.reduce((acc, error) => {
            acc[error.path[0]] = error.message;
            return acc;
          }, {});
          setFormErrors(transformedErrors);
        } else {
          // Handle other types of errors or unexpected responses
        }
      }
    } catch (error) {
      console.error("ReCAPTCHA Error:", error);
      // Handle reCAPTCHA error
    }
  };

  return (
    <div className="h-full bg-primary/30">
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
      />
      <div
        className="container mx-auto py-32 text-center xl:text-left 
    flex items-center justify-center h-full"
      >
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <h2 className="h2 text-center mb-12">
            Let&apos;s <span className="text-accent">connect.</span>
          </h2>
          {/* form */}
          <form onSubmit={handleFormSubmit}>
            {/* Name input group */}
            <div className="flex flex-col w-full mb-4">
              <input name="name" placeholder="Your Name" className="input" />
              {formErrors.name && (
                <p className="error-message">{formErrors.name}</p>
              )}
            </div>

            {/* Email input group */}
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

            {/* Subject input group */}
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

            {/* Message input group */}
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

            {/* Submit button */}
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
