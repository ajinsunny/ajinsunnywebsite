import { BsArrowRight } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Confetti from "react-confetti";

const Contact = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [confettiWidth, setConfettiWidth] = useState(0);
  const [confettiHeight, setConfettiHeight] = useState(0);
  const router = useRouter();

  useEffect(() => {
    // Ensure this code runs only in the client-side environment
    if (typeof window !== "undefined") {
      setConfettiWidth(window.innerWidth);
      setConfettiHeight(window.innerHeight);

      // Optionally, handle window resize
      const handleResize = () => {
        setConfettiWidth(window.innerWidth);
        setConfettiHeight(window.innerHeight);
      };

      window.addEventListener("resize", handleResize);

      // Clean up the event listener when the component unmounts
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  // Function to handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
      }),
    });

    if (response.ok) {
      console.log("Email sent successfully");
      setShowConfetti(true);
      setShowPopup(true);
      setTimeout(() => {
        setShowConfetti(false);
        setShowPopup(false);
        router.push("/");
      }, 2000);
    } else {
      console.log("Failed to send email");
    }
  };

  return (
    <div className="h-full bg-primary/30">
      <div
        className="container mx-auto py-32 text-center xl:text-left 
    flex items-center justify-center h-full"
      >
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <h2 className="h2 text-center mb-12">
            Let's <span className="text-accent">connect.</span>
          </h2>
          {/* form */}
          <form onSubmit={handleFormSubmit}>
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input name="name" placeholder="Name" className="input" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="textarea"
            ></textarea>
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </form>
        </div>
        {/* Popup Notification */}
        {showPopup && (
          <div className="popup">Your message has been sent successfully!</div>
        )}
        {/* Confetti Effect */}
        {showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            gravity={1}
          />
        )}
      </div>
    </div>
  );
};

export default Contact;
