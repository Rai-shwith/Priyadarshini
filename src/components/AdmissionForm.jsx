import { useForm } from "react-hook-form";

const AdmissionForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="w-11/12 drop-shadow-lg bg-white shadow-lg rounded-lg p-6 my-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        School Admission Form
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Student Details */}
        <div>
          <label className="block font-medium">Student Name</label>
          <input
            {...register("studentName", { required: "Name is required" })}
            type="text"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          {errors.studentName && (
            <p className="text-red-500 text-sm">{errors.studentName.message}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Date of Birth</label>
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
            <label className="block font-medium">Gender</label>
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
        <h3 className="text-lg font-semibold mt-4">Parent/Guardian Details</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Father's Name</label>
            <input
              {...register("fatherName", {
                required: "Father's Name is required",
              })}
              type="text"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block font-medium">Father's Contact</label>
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
            <label className="block font-medium">Mother's Name</label>
            <input
              {...register("motherName")}
              type="text"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block font-medium">Mother's Contact</label>
            <input
              {...register("motherContact")}
              type="tel"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Address Section */}
        <h3 className="text-lg font-semibold mt-4">Address Details</h3>
        <div>
          <label className="block font-medium">Residential Address</label>
          <textarea
            {...register("address", { required: "Address is required" })}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          ></textarea>
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>

        {/* Admission Information */}

        <h3 className="text-lg font-semibold mt-4">Admission Information</h3>
        <div>
          <label className="block font-medium">Applying for Grade</label>
          <select
            {...register("grade", { required: "Select a grade" })}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Grade</option>
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
          <label className="block font-medium">Previous School Name</label>
          <input
            {...register("previousSchoolName")}
            type="text"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Upload Documents */}
        {/* <h3 className="text-lg font-semibold mt-4">Upload Documents</h3>
        <div>
          <label className="block font-medium">
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
          <label className="ml-2">I agree to the terms and conditions</label>
        </div>
        {errors.agreement && (
          <p className="text-red-500 text-sm">{errors.agreement.message}</p>
        )}
        <div className="w-full flex justify-center items-center">
          <button
            type="submit"
            className="w-full md:w-fit  bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
