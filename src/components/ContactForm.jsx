import { useState } from "react";
import ServiceDropdown from "./ServiceDropdown";

export default function ContactForm() {
  
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [service, setService] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.firstName.trim())
      newErrors.firstName = "First name is required";

    if (!form.lastName.trim())
      newErrors.lastName = "Last name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!service) {
      newErrors.service = "Please select a service";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log({ ...form, service });
      alert("Form submitted successfully!");
    }
  };


  return (
    <div className="w-full max-w-4xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="space-y-5 flex flex-col items-center"
      >
        {/* First + Last Name */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className={`w-full px-5 py-4 rounded-[16px]
bg-gradient-to-br from-white to-[#F0F0F0]
border border-transparent
focus:border-[#464646]
text-black/50 focus:text-black
font-['Inter'] text-[20px] font-medium
leading-[130%] tracking-[-1.4px]
outline-none transition-all duration-300 ${
                errors.firstName && "border-red-500"
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName}
              </p>
            )}
          </div>

          <div>
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className={`w-full px-5 py-4 rounded-[16px]
bg-gradient-to-br from-white to-[#F0F0F0]
border border-transparent
focus:border-[#464646]
text-black/50 focus:text-black
font-['Inter'] text-[20px] font-medium
leading-[130%] tracking-[-1.4px]
outline-none transition-all duration-300 ${
                errors.lastName && "border-red-500"
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName}
              </p>
            )}
          </div>
        </div>

        {/* Email + Phone */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className={`w-full px-5 py-4 rounded-[16px]
bg-gradient-to-br from-white to-[#F0F0F0]
border border-transparent
focus:border-[#464646]
text-black/50 focus:text-black
font-['Inter'] text-[20px] font-medium
leading-[130%] tracking-[-1.4px]
outline-none transition-all duration-300 ${
                errors.email && "border-red-500"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <input
              name="phone"
              value={form.phone}
              onChange={(e) => {
    const numericValue = e.target.value.replace(/\D/g, "");
    setForm({ ...form, phone: numericValue });
  }}
              placeholder="Phone"
              inputMode="numeric"
               pattern="[0-9]*"
              className={`w-full px-5 py-4 rounded-[16px]
bg-gradient-to-br from-white to-[#F0F0F0]
border border-transparent
focus:border-[#464646]
text-black/50 focus:text-black
font-['Inter'] text-[20px] font-medium
leading-[130%] tracking-[-1.4px]
outline-none transition-all duration-300 ${
                errors.phone && "border-red-500"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Service Dropdown */}
        <div className="w-full">
          <ServiceDropdown value={service} onChange={setService} />
          {errors.service && (
            <p className="text-red-500 text-sm mt-1">
              {errors.service}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="w-full">
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            placeholder="Message"
            className={`w-full px-5 py-4 rounded-[16px]
bg-gradient-to-br from-white to-[#F0F0F0]
border border-transparent
focus:border-[#464646]
text-black/50 focus:text-black
font-['Inter'] text-[20px] font-medium
leading-[130%] tracking-[-1.4px]
outline-none transition-all duration-300 ${
              errors.message && "border-red-500"
            }`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="px-6 py-3 bg-[#4A68FE] rounded-full text-white hover:scale-105 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}