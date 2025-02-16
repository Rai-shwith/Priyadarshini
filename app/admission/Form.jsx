"use client";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNotification } from "@/context/NotificationContext";
import ReCAPTCHA from "react-google-recaptcha";

const Form =  ({ searchParams,text}) => {
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
        "https://script.google.com/macros/s/AKfycbzxxPSPUiLsk3ATwnFmHpuGwbsQayvOU1YNZ1c01uRFuQnQeIBPEXOknqOKmpTUrqwKAw/exec",
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
      <div className="w-11/12 drop-shadow-lg bg-white shadow-lg rounded-lg p-6 my-6 ">
        <h2 className="text-2xl font-bold mb-4 text-center">{text.heading}</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Student Details */}
          <div>
            <label className="block font-semibold">{text.studentName}</label>
            <input
              {...register("studentName", { required: "Name is required" })}
              type="text"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            {errors.studentName && (
              <p className="text-red-500 text-sm">
                {errors.studentName.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">{text.dob}</label>
              <input
                {...register("dob", { required: "DOB is required" })}
                type="date"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
              {errors.dob && (
                <p className="text-red-500 text-sm">{errors.dob.message}</p>
              )}
            </div>

            <div>
              <label className="block font-semibold">{text.gender}</label>
              <select
                {...register("gender", { required: "Gender is required" })}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 text-sm">{errors.gender.message}</p>
              )}
            </div>
          </div>

          {/* Parent/Guardian Details */}
          <h3 className="text-lg font-semibold mt-4">{text.parentsDetails}</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">{text.fatherName}</label>
              <input
                {...register("fatherName", {
                  required: "Father's Name is required",
                })}
                type="text"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block font-semibold">
                {text.fatherContact}
              </label>
              <input
                {...register("fatherContact", {
                  required: "Contact is required",
                })}
                type="tel"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
              {errors.fatherContact && (
                <p className="text-red-500 text-sm">
                  {errors.fatherContact.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">{text.motherName}</label>
              <input
                {...register("motherName")}
                type="text"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block font-semibold">
                {text.motherContact}
              </label>
              <input
                {...register("motherContact")}
                type="tel"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block font-semibold">{text.email}</label>
              <input
                {...register("email")}
                type="email"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Address Section */}
          <h3 className="text-lg font-semibold mt-4">{text.addressDetails}</h3>
          <div>
            <label className="block font-semibold">{text.address}</label>
            <textarea
              {...register("address", { required: "Address is required" })}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            ></textarea>
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>

          {/* Admission Information */}

          <h3 className="text-lg font-semibold mt-4">{text.admissionInfo}</h3>
          <div>
            <label className="block font-semibold">{text.applyingGrade}</label>
            <select
              {...register("grade", { required: "Select a grade" })}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            >
              <option value="">{text.selectGrade}</option>
              {[..."LKG UKG 1 2 3 4 5 6 7 8 9 10".split(" ")].map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>
            {errors.grade && (
              <p className="text-red-500 text-sm">{errors.grade.message}</p>
            )}
          </div>

          {/* Previous School Name */}
          <div>
            <label className="block font-semibold">
              {text.previousSchoolName}
            </label>
            <input
              {...register("previousSchoolName")}
              type="text"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Upload Documents */}
          {/* <h3 className="text-lg font-semibold mt-4">Upload Documents</h3>
        <div>
          <label className="block font-semibold">
            Birth Certificate (PDF/Image)
          </label>
          <input
            {...register("birthCertificate", {
              required: "Birth Certificate is required",
            })}
            type="file"
            accept=".pdf,.jpg,.png"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          {errors.birthCertificate && (
            <p className="text-red-500 text-sm">
              {errors.birthCertificate.message}
            </p>
          )}
        </div> */}

          {/* Agreement & Submission */}
          <div className="flex items-center mt-4">
            <input
              {...register("agreement", {
                required: "You must agree to the terms",
              })}
              type="checkbox"
              className="w-5 h-5"
            />
            <label className="ml-2">{text.tac}</label>
          </div>
          {errors.agreement && (
            <p className="text-red-500 text-sm">{errors.agreement.message}</p>
          )}
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

export default Form;
