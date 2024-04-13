"use client";

import React, { useState } from "react";
import { sendEmail } from "@/utils/sendEmail";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendEmail({ name, email, phone, message });
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col w-full max-w-[550px] items-center text-black"
    >
      <input
        className="w-full bg-neutral-200 mb-4 p-2 rounded-md"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        className="w-full bg-neutral-200  mb-4 p-2 rounded-md"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        className="w-full bg-neutral-200  mb-4 p-2 rounded-md"
        type="phone number"
        placeholder="Phone"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <textarea
        className="w-full bg-neutral-200  mb-4 p-2 rounded-md"
        rows="7"
        placeholder="Your message"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button
        type="submit"
        className="w-[100px] text-white bg-gradient-to-br from-[#bb1c4b] to-[#630F28] rounded-sm p-2"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
