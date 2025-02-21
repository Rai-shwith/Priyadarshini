"use client";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNotification } from "@/context/NotificationContext";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = ({ text }) => {
  const recaptchaRef = useRef(null);
  const { triggerNotification } = useNotification();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const captchaToken = recaptchaRef.current.getValue(); // Get reCAPTCHA token
      if (!captchaToken) {
        triggerNotification("error", new Error("CAPTCHA verification failed!"));
        setLoading(false);
        return;
      }
      const form = new FormData();

      Object.keys(data).forEach((key) => {
        form.append(key, data[key]);
      });
      form.append("g-recaptcha-response", captchaToken); // Add the reCaptcha token to the form data

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyDX3vCBbnMy0UDGdhW7LocnP4TgIwig3CfjZZHLDSmH896XbE90LEtJ4ugTSKa0aPw/exec",
        {
          method: "POST",
          body: form,
        }
      );
      const result = await response.json();
      if (result.status != "Success") {
        console.log(result.message);
        if (result.message === "CAPTCHA verification failed") {
          console.error("CAPTCHA verification failed");
          return triggerNotification(
            "error",
            new Error("CAPTCHA verification failed!")
          );
        }
        triggerNotification(
          "error",
          new Error("There was an error sending the message!")
        );
        throw new Error("Failed to submit form");
      }

      console.log("Form successfully submitted:", data);
      triggerNotification("success", "Message successfully sent!");
      reset(); // Clears all input fields
      recaptchaRef.current.reset(); // Reset CAPTCHA
    } catch (error) {
      triggerNotification(
        "error",
        new Error("There was an error sending the message!")
      );
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-11/12 drop-shadow-lg bg-white shadow-lg rounded-lg p-6 my-6">
      <h2 className="text-2xl font-bold mb-4 text-center">{text.heading}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block font-medium">{text.fullName}</label>
          <input
            {...register("fullName", { required: "Name is required" })}
            type="text"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email  */}
        <div>
          <label className="block font-medium">{text.email}</label>
          <input
            {...register("email")}
            type="email"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block font-medium">{text.phone}</label>
          <input
            {...register("phone", { required: "Phone number is required" })}
            type="tel"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* Message Type */}
        <div>
          <label className="block font-medium">{text.messageType}</label>
          <select
            {...register("messageType", {
              required: "Message Type is required",
            })}
            className="w-full p-2 border rounded focus:ring-2m cursor-pointer focus:ring-blue-400"
          >
            <option value="">{text.selectMessageType}</option>
            <option value="general">{text.general}</option>
            <option value="admission">{text.admission}</option>
            <option value="fee">{text.fee}</option>
            <option value="events">{text.events}</option>
            <option value="complaints">{text.complaints}</option>
            <option value="suggestions">{text.suggestions}</option>
            <option value="others">{text.others}</option>
          </select>
          {errors.messageType && (
            <p className="text-red-500 text-sm">{errors.messageType.message}</p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label className="block font-medium">{text.message}</label>
          <input
            {...register("subject", { required: "Subject is required" })}
            type="text"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            placeholder="Enter subject"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm">{errors.subject.message}</p>
          )}
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label className="block font-medium">{text.contactMethod}</label>
          <div className="flex space-x-8">
            <label>
              <input
                {...register("contactMethod", {
                  required: "Preferred Contact Method is required",
                })}
                type="radio"
                value="email"
              />{" "}
              {text.emailContact}
            </label>
            <label>
              <input
                {...register("contactMethod", {
                  required: "Preferred Contact Method is required",
                })}
                type="radio"
                value="phone"
              />{" "}
              {text.phoneContact}
            </label>
            <label>
              <input
                {...register("contactMethod", {
                  required: "Preferred Contact Method is required",
                })}
                type="radio"
                value="whatsapp"
              />{" "}
              {text.whatsappContact}
            </label>
          </div>
          {errors.contactMethod && (
            <p className="text-red-500 text-sm">
              {errors.contactMethod.message}
            </p>
          )}
        </div>

        {/* Student Details (if applicable) */}
        <div className="bg-slate-200 px-4 pb-4 md:pb-6 pt-2 rounded-lg">
          <h3 className="text-lg font-semibold mt-4">{text.studentDetails}</h3>
          <div className="my-2">
            <label className="block font-medium">{text.studentName}</label>
            <input
              {...register("studentName")}
              type="text"
              className="w-full bg-slate-50 cursor-pointer p-2 my-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter student's name"
            />
          </div>

          {/* Grade/Class */}
          <div className="my-2">
            <label className="block font-medium">{text.grade}</label>
            <select
              {...register("grade")}
              className="w-full bg-slate-50 my-2 cursor-pointer p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            >
              <option value="">{text.selectGrade}</option>
              {[
                "LKG",
                "UKG",
                ...Array.from({ length: 12 }, (_, i) => i + 1),
              ].map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>
          </div>
        </div>

        <ReCAPTCHA
          className="flex justify-center md:justify-start"
          sitekey="6Ld1ItYqAAAAAEj3z-cMbbNQJqFmxVXCpFkn-_iC"
          ref={recaptchaRef}
        />
        <div className="w-full flex justify-center items-center">
          <button
            type="submit"
            className={`w-full md:w-fit  bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 cursor-pointer ${
              loading ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            {loading ? text.submitting : text.submit}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
