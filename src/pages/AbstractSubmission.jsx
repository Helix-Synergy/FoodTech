import React, { useState, useEffect } from "react";
import axios from "axios";
import { banner_style } from "../Styles/styles";

const AbstractSubmission = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    address: "",
    state: "",
    country: "",
    university: "",
    email: "",
    affiliation: "",
    linkedin: "",
    twitter: "",
    abstractTitle: "",
    abstract: null,
    interestedIn: "",
    websiteDomain: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setForm((prevForm) => ({
        ...prevForm,
        websiteDomain: window.location.hostname,
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
    setForm({ ...form, [name]: type === "file" ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const formData = new FormData();
      Object.keys(form).forEach((key) => {
        if (key === "abstract" && form[key]) {
          formData.append(key, form[key]);
        } else if (key !== "abstract") {
          formData.append(key, form[key]);
        }
      });

      await axios.post(
        "https://backend-code-6vqy.onrender.com/abstract-submission",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      setStatus({
        type: "success",
        message: "Abstract submitted successfully!",
      });

      setForm({
        firstName: "",
        lastName: "",
        mobileNumber: "",
        address: "",
        state: "",
        country: "",
        university: "",
        email: "",
        affiliation: "",
        linkedin: "",
        twitter: "",
        abstractTitle: "",
        abstract: null,
        interestedIn: "",
        websiteDomain: form.websiteDomain,
      });
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          error.message ||
          "Submission failed. Please try again.",
      });
    }
    setLoading(false);
  };

const presentationOptions = [
  "Food Processing Technologies (HPP, PEF, Ultrasound, Ohmic)",
  "Food Engineering",
  "Thermal & Non-Thermal Preservation Methods",
  "Food Biotechnology - Enzymes & Fermentation",
  "Probiotics & Functional Foods Innovation",
  "Alternative Proteins: Plant-Based, Cultured & Fermentation-Derived",
  "Nutraceuticals & Bioactive Compounds",
  "Food Safety Management",
  "Food Quality Assurance & Shelf-Life Modeling",
  "Standards & Global Regulatory Compliance (FSSAI, FDA, EFSA)",
  "Food Fraud Detection & Analytical Technologies",
  "Food Processing & Green Technologies",
  "Plant–Microbiome Engineering",
  "Smart, Biodegradable & Edible Packaging",
  "Climate-Smart Food Systems & Life Cycle Assessment (LCA)",
  "IoT, Automation & Smart Manufacturing",
  "Data Analytics for Food Innovation",
  "Digital Twins, Predictive Modeling in Food Processing",
  "Precision Fermentation",
  "Cold Plasma Preservation",
];



  return (
    <div className="w-[90%] mx-auto p-4">
      <div
        className={`${banner_style} w-full mx-auto abstract-banner`}
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/side-view-people-studying-classroom_23-2150312812.jpg?semt=ais_hybrid&w=740&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-black-100 text-3xl sm:text-5xl md:text-6xl font-bold px-4">
          {/* Abstract Submission */}
        </h1>
      </div>

      <h2 className="text-2xl font-bold mb-4">Abstract Submission</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {status.message && (
          <div
            className={`w-full p-4 rounded-lg text-white text-center ${
              status.type === "success" ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {status.message}
          </div>
        )}

     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="flex flex-col gap-1">
    <label htmlFor="firstName" className="text-sm font-medium text-gray-700 text-left">
      First Name
    </label>
    <input
      name="firstName"
      value={form.firstName}
      onChange={handleChange}
      placeholder="First Name"
      required
      className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  </div>

  <div className="flex flex-col gap-1">
    <label htmlFor="lastName" className="text-sm font-medium text-gray-700 text-left">
      Last Name
    </label>
    <input
      name="lastName"
      value={form.lastName}
      onChange={handleChange}
      placeholder="Last Name"
      required
      className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
</div>

<div className="flex flex-col gap-1 mt-5">
  <label htmlFor="email" className="text-sm font-medium text-gray-700 text-left">
    Email
  </label>
  <input
    type="email"
    name="email"
    value={form.email}
    onChange={handleChange}
    placeholder="Email"
    required
    className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  />
</div>

<div className="flex flex-col gap-1 mt-5">
  <label htmlFor="phone" className="text-sm font-medium text-gray-700 text-left">
    Phone
  </label>
  <input
    name="phone"
    value={form.phone}
    onChange={handleChange}
    placeholder="Phone"
    className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  />
</div>

<div className="flex flex-col gap-1 mt-5">
  <label htmlFor="company" className="text-sm font-medium text-gray-700 text-left">
    Company / University
  </label>
  <input
    name="company"
    value={form.company}
    onChange={handleChange}
    placeholder="Company / University"
    className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
  />
</div>

<div className="flex flex-col gap-1 mt-5">
  <label htmlFor="message" className="text-sm font-medium text-gray-700 text-left">
    Your Message
  </label>
  <textarea
    name="message"
    value={form.message}
    onChange={handleChange}
    placeholder="Your Message"
    rows={4}
    required
    className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
  />
</div>

        <select
          name="interestedIn"
          value={form.interestedIn}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        >
          <option value="">Select Presentation Track</option>
          {presentationOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>

        <input
          name="abstractTitle"
          value={form.abstractTitle}
          onChange={handleChange}
          placeholder="Abstract Title"
          required
          className="w-full border p-2 rounded"
        />

        <div className="w-full">
          <label
            htmlFor="abstract"
            className="cursor-pointer px-4 py-2 bg-gray-100 text-one-700 rounded border border-gray-300 hover:bg-one-200 transition"
          >
            Upload only PDF
          </label>
          <input
            id="abstract"
            type="file"
            name="abstract"
            accept=".pdf"
            onChange={handleChange}
            required
            className="hidden"
          />

          {form.abstract && (
            <p className="mt-2 text-sm text-gray-600">
              Selected File: <strong>{form.abstract.name}</strong>
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-one text-white px-4 py-2 rounded"
        >
          {loading ? "Submitting..." : "Submit Abstract"}
        </button>

        <button className="bg-one ml-2 px-4 py-2 rounded">
          <a href="" download className="text-white">
            Download Demo Abstract
          </a>
        </button>
      </form>
    </div>
  );
};

export default AbstractSubmission;
