"use client";

import React, { useState } from "react";
import { sendEmail } from "@/utils/sendEmail";
import { Oval } from "react-loader-spinner";

const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await sendEmail({ name, email, phone, message });
    setSubmitting(false);
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
        className="w-full bg-neutral-200 mb-4 p-2 rounded-md focus:outline-none"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        disabled={submitting}
      />
      <input
        className="w-full bg-neutral-200  mb-4 p-2 rounded-md focus:outline-none"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        required
        disabled={submitting}
      />
      <input
        className="w-full bg-neutral-200  mb-4 p-2 rounded-md focus:outline-none"
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
        required
        disabled={submitting}
      />
      <textarea
        className="w-full bg-neutral-200  mb-4 p-2 rounded-md focus:outline-none"
        rows="7"
        placeholder="Your message"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        required
        disabled={submitting}
      />
      {!submitting ? (
        <button
          type="submit"
          className="w-[100px] text-white bg-gradient-to-br from-[#bb1c4b] to-[#630F28] rounded-sm p-2"
          disabled={submitting}
        >
          Submit
        </button>
      ) : (
        <Oval
          visible={true}
          height="45"
          width="45"
          color="#bb1c4b"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}
    </form>
  );
};

export default ContactForm;
