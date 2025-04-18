"use client";
import Image from "next/image";
import { useRef } from "react";
import ContactImg from '@/assets/image/Contact.jpg';
import toast from "react-hot-toast";

export default function Contact() {
  // Use HTMLFormElement as the type for the ref
  const formRef = useRef<HTMLFormElement>(null);

  const handelFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.success("Message sent! 🎉");

    // clear the form if ref exists
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <div
      id="contact"
      className="h-auto p-10 bg-gradient-to-r from-gray-900 to-gray-950"
    >
      <div className="text-center mb-8">
        <p className="text-gray-500">Contact</p>
        <h2 className="text-4xl font-bold text-white">CONTACT WITH ME</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
        {/* Left Side */}
        <div className="flex flex-col space-y-4 p-6 bg-gray-950 shadow-lg rounded-lg">
          <Image
            src={ContactImg}
            alt="Contact"
            className="w-full h-44 mb-4 object-cover rounded-lg"
          />
          <div className="lg:flex lg:flex-col">
            <h2 className="text-lg font-semibold text-gray-500">
              Phone: <span className="text-gray-300 text-[16px] ">+8801614871378</span>
            </h2>
            <h2 className="text-lg font-semibold text-gray-500 text-[16px]">
              Or, Phone: <span className="text-gray-300 text-[16px]">+8801568706037</span>
            </h2>
            <h2 className="text-lg font-semibold text-gray-500 text-[16px]">
              E-mail:{" "}
              <span className="text-gray-300 text-[12px] sm:text-[16px]">ashrafulPathan3927@gmail.com</span>
            </h2>
            <h2 className="text-lg font-semibold text-gray-500 text-[16px]">
              Location:{" "}
              <span className="text-gray-300 text-[16px]">
                Bangladesh, Narayanganj
              </span>
            </h2>
          </div>
        </div>

        {/* Message Form */}
        <div className="lg:col-span-2 flex flex-col p-6 bg-gray-950 shadow-lg rounded-lg text-cyan-50 ">
          <form ref={formRef} onSubmit={handelFormSubmit} className="space-y-3">
            <div>
              <label htmlFor="name" className="block text-gray-100">NAME</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter Your Name"
                className="w-full p-3 mt-2 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-100">E-MAIL</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter Your E-mail"
                className="w-full p-3 mt-2 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-100">SUBJECT</label>
              <input
                type="text"
                name="subject"
                required
                placeholder="Enter Your Subject"
                className="w-full p-3 bg-transparent mt-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-100">YOUR MESSAGE</label>
              <textarea
                name="message"
                required
                placeholder="Enter Your Message"
                className="w-full p-3 bg-transparent mt-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-gray-200 p-3 rounded-lg border border-gray-700 hover:bg-gray-800 hover:text-white hover:shadow-md transition duration-300 ease-in-out"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
