import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    const templateParams = {
      user_name: formData.get("user_name"),
      user_email: formData.get("user_email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    // 🔹 MAIN EMAIL (to you)
    emailjs
      .send(
        "service_plyaizj",
        "template_s3b88bo",
        templateParams,
        "LH9yDN-xjYv7ZXdgg"
      )
      .then(() => {
        // 🔹 AUTO-REPLY EMAIL (to user)
        emailjs.send(
          "service_plyaizj",
          "template_nztzhgo",
          templateParams,
          "LH9yDN-xjYv7ZXdgg"
        );

        form.current.reset();

        toast.success("Message sent successfully! ✅", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Failed to send message. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      });
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you — feel free to reach out for projects,
          collaborations, or any queries!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me 🚀
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-4 flex flex-col space-y-4"
        >
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>

        {/* ✅ WHATSAPP BUTTON (NO API REQUIRED) */}
        <a
  href={`https://wa.me/918218309142?text=${encodeURIComponent(
    "Hello Deepak,\nI visited your portfolio and would like to connect with you."
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-md font-semibold hover:bg-green-600 transition"
>
  Chat with me on WhatsApp
</a>

      </div>

      {/* Footer Text */}
      <p className="mt-10 text-gray-400 text-sm text-center">
        © 2025 <span className="text-white font-semibold">Deepak Sharma</span>.
        All rights reserved.
      </p>
    </section>
  );
};

export default Contact;
