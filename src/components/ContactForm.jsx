"use client";

import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaMapLocation,
  FaPhone,
  FaVoicemail,
} from "react-icons/fa6";

export const ContactUs = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    user_email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Success! Your message has been sent.");
          setFormData({ from_name: "", user_email: "", message: "" });
        },
        (error) => {
          setStatus("Error: Unable to send your message.");
          console.error("FAILED...", error.text);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section
      id="contact"
      className="container bg-black text-white/95 p-8 max-w-2xl mx-auto pt-20  w-full"
    >
      <h1 className="text-4xl font-bold mb-8">
        <span className="font-montserrat text-yellow-300/95">Get In Touch</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-yellow-300/95 mb-4">
            Send a Message
          </h2>
          <p className="mb-6 font-opensans">
            Feel free to get in touch with me. I'm always open to discussing new
            projects, creative ideas, or opportunities to be part of your
            vision.
          </p>
          <div className="space-y-2 font-montserrat">
            <p className="flex items-center">
              <span className="material-icons mr-2">
                <FaEnvelope />
              </span>
              masud20.bup@gmail.com
            </p>
            <p className="flex items-center">
              <span className="material-icons mr-2">
                <FaPhone />
              </span>
              01518941019
            </p>
            <p className="flex items-center">
              <span className="material-icons mr-2">
                <FaMapLocation />
              </span>
              Mirpur, Dhaka, Bangladesh
            </p>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-4 font-montserrat"
        >
          <input
            className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none focus:border-yellow-300"
            type="text"
            name="from_name"
            placeholder="Name"
            value={formData.from_name}
            onChange={handleChange}
            required
          />
          <input
            className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none focus:border-yellow-300"
            type="email"
            name="user_email"
            placeholder="Email"
            value={formData.user_email}
            onChange={handleChange}
            required
          />
          <textarea
            className="w-full bg-transparent border-b border-gray-500 py-2 focus:outline-none focus:border-yellow-300"
            name="message"
            rows="4"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className={`font-raleway bg-yellow-300/95 text-black font-bold py-2 px-4 rounded hover:bg-yellow-400 transition duration-300 ${
              isSending ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSending}
          >
            {isSending ? "Sending..." : "SEND MESSAGE"}
          </button>
        </form>
      </div>

      <AnimatePresence>
        {status && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`mt-4 text-center font-medium ${
              status.includes("Success") ? "text-green-600" : "text-red-600"
            }`}
            aria-live="polite"
          >
            {status}
          </motion.p>
        )}
      </AnimatePresence>
    </section>
  );
};
