import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Contact form data:", data);
    alert("Message sent!");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[500px] p-6 bg-white shadow-lg rounded-lg dark:bg-slate-800">
        <h2 className="text-2xl font-bold mb-4 text-center text-pink-700">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md outline-none"
              placeholder="Your Name"
              {...register("name", { required: true })}
            />
            {errors.name && <p className="text-sm text-red-600">Name is required</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-md outline-none"
              placeholder="Your Email"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-sm text-red-600">Email is required</p>}
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full px-3 py-2 border rounded-md outline-none"
              placeholder="Your Message"
              {...register("message", { required: true })}
            ></textarea>
            {errors.message && <p className="text-sm text-red-600">Message is required</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-pink-700 text-white px-4 py-2 rounded-md hover:bg-pink-900 duration-300 w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
