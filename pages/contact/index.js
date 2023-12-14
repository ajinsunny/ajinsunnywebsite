import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/router";
import { useReward } from "react-rewards";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();
  const { reward, isAnimating } = useReward("rewardId", "confetti", {
    angle: 90,
    spread: 60,
    startVelocity: 50,
    elementCount: 70,
    elementSize: 8,
  });

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
      console.log("Email sent successfully, triggering confetti");
      reward(); // Trigger confetti
      setShowPopup(true);
      setTimeout(() => {
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
            <div className="flex flex-col gap-y-4 w-full">
              <input name="name" placeholder="Your Name" className="input" />
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                className="input"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Topic of your message"
              className="input"
            />
            <textarea
              name="message"
              placeholder="Hi Ajin, I'd like to talk about..."
              className="textarea"
            ></textarea>
            <button
              type="submit"
              disabled={isAnimating}
              id="rewardId"
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
      </div>
    </div>
  );
};

export default Contact;
