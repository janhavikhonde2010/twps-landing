import { useState } from "react";
import emailjs from "@emailjs/browser";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID", // 🔴 replace
        "YOUR_TEMPLATE_ID", // 🔴 replace
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY" // 🔴 replace
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        () => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="bg-[#053636] min-h-screen">

      {/* PAGE HEADER */}
      <div className="pt-28 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">
          CONTACT <span className="text-[#38E1A5]">US</span>
        </h1>
        <p className="text-[#EAF5F3] mt-3">
          Let’s start a conversation
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto mt-16 px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* LEFT – FORM */}
          <div className="md:col-span-2 bg-[#0A4A4A] rounded-3xl p-10 shadow-2xl border border-[#022A2A] relative">

            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#053636] text-white placeholder-[#EAF5F3] px-4 py-3 rounded-lg border border-[#022A2A] focus:outline-none focus:ring-2 focus:ring-[#41F28A]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#053636] text-white placeholder-[#EAF5F3] px-4 py-3 rounded-lg border border-[#022A2A] focus:outline-none focus:ring-2 focus:ring-[#41F28A]"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-[#053636] text-white placeholder-[#EAF5F3] px-4 py-3 rounded-lg border border-[#022A2A] focus:outline-none focus:ring-2 focus:ring-[#41F28A]"
              />

              <textarea
                name="message"
                rows={5}
                placeholder="Your message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#053636] text-white placeholder-[#EAF5F3] px-4 py-3 rounded-lg border border-[#022A2A] focus:outline-none focus:ring-2 focus:ring-[#41F28A]"
              />

              <button
                type="submit"
                className="bg-[#FF7A1A] hover:bg-[#ff8f3a] text-white font-semibold px-10 py-3 rounded-lg mt-4"
              >
                SEND MESSAGE
              </button>

            </form>
          </div>

          {/* RIGHT – INFO */}
          <div className="bg-[#FFFDF4] rounded-3xl p-8 shadow-xl border border-[#022A2A]">

            <span className="inline-block bg-[#053636] text-white px-6 py-2 rounded-full font-semibold mb-6">
              DROP IN OUR OFFICE
            </span>

            <p className="text-[#053636] text-sm leading-relaxed mb-6">
              Have questions about The Wise Parrot Growth OS?
              Our team is here to support your business journey.
            </p>

            <div className="space-y-4 text-sm text-[#053636]">

              <div className="flex items-center gap-3">
                📞 <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3">
                📍 <span>Pune, Maharashtra, India</span>
              </div>

              <div className="flex items-center gap-3">
                ✉️ <span>addlight2023@gmail.com</span>
              </div>

            </div>

            {/* Decorative dots */}
            <div className="mt-10 flex justify-center gap-3">
              <span className="w-3 h-3 bg-[#FF7A1A] rounded-full" />
              <span className="w-3 h-3 bg-[#41F28A] rounded-full" />
              <span className="w-3 h-3 bg-[#38E1A5] rounded-full" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
