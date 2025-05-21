"use client";
import Image from "next/image";
import { useRef } from "react";
import ContactImg from '@/assets/image/Contact.jpg';
import toast from "react-hot-toast";
import * as motion from "motion/react-client"

export default function Contact() {
  // Use HTMLFormElement as the type for the ref
  const formRef = useRef<HTMLFormElement>(null);

  const handelFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name:string = event.target.Name.value;
    const email:string = event.target.email.value;
    const subject:string = event.target.subject.value;
    const message:string = event.target.message.value;
    console.log(name,email,subject,message);
    
    // Collect all data
    const Message = {name,email,subject,message};

    fetch('https://ashraful-server.onrender.com/mail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Message),
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        toast.success("🥳 Your massage is successfully send! 🎉");
    })
    .catch((error) => {
        console.error('Error:', error);
        toast.error("⚠️ Your massage is not send! cake your internet");
    });

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

      <div className="flex flex-col md:flex-row justify-center gap-8 items-center md:items-start max-w-screen-xl mx-auto">
        {/* Left Side */}
        <div 
        data-aos="fade-right"
        className="flex flex-col  p-6 bg-gray-950 shadow-lg gap-4 rounded-lg w-[98vw] sm:w-[400px] h-[500px] ">
          <div className="relative group">
          <Image
            src={ContactImg}
            alt="Contact"
            className="w-full h-44 rounded-lg object-cover cursor-pointer hover:blur-xs transition duration-300  "
          />
            <p className="text-blue-700 font-bold absolute text-2xl top-[40%] left-[22%] hidden group-hover:flex transition duration-300">
              Contact With Me
            </p>
          </div>
          <div className="lg:flex lg:flex-col">
            <h2 className="text-lg font-semibold text-gray-500">
              Phone: 
            </h2>
              <p className="text-gray-300 text-[16px] ">+8801614871378</p>
            <h2 className="text-lg font-semibold text-gray-500 text-[16px]">
              Or, Phone: 
            </h2>
              <p className="text-gray-300 text-[16px]">+8801568706037</p>
            <h2 className="text-lg font-semibold text-gray-500 text-[16px]">
              E-mail:
            </h2>
              <p className="text-gray-300 text-[16px]">ashrafulPathan3927@gmail.com</p>
            <h2 className="text-lg font-semibold text-gray-500 text-[16px]">
              Location:
            </h2>
            <p className="text-gray-300 text-[16px]">Bangladesh, Narayanganj</p>
          </div>
        </div>

        {/* Message Form */}
        <div 
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1300"
        className="lg:col-span-2 flex flex-col p-6 bg-gray-950 shadow-lg rounded-lg text-cyan-50 w-[98vw] sm:w-[90%] lg:w-[80%] xl:w-[60%] ">
          <form ref={formRef} onSubmit={handelFormSubmit} className="space-y-3">
            <div>
              <label htmlFor="name" className="block text-gray-100">NAME</label>
              <input
                type="text"
                name="Name"
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
