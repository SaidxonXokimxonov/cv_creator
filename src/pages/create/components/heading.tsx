import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import zod from "zod";

const headingSchema = zod.object({
  fullName: zod
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be at most 100 characters"),

  professionalTitle: zod
    .string()
    .min(2, "Title is required")
    .max(50, "Title too long"),

  email: zod.string().email("Invalid email address"),

  phone: zod
    .string()
    .min(7, "Phone number too short")
    .max(20, "Phone number too long"),

  address: zod.string().max(100, "Address too long").min(3, "Address is required"),

  linkedIn: zod.string().url("Must be a valid URL"),

  portfolio: zod.string().url("Must be a valid URL"),
});

type HeadingForm = zod.infer<typeof headingSchema>;

export function Heading() {
  const headingForm = useForm({ resolver: zodResolver(headingSchema) });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = headingForm;

  function onSubmit(value: HeadingForm) {
    console.log(value);
  }

  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit(onSubmit)}
        className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-semibold text-gray-800">
          Basic Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              {...register("fullName")}
              className="mt-1 w-full border border-gray-300 rounded-md p-3 focus:border-purple-600 focus:ring-purple-600 shadow-sm"
              placeholder="John Doe"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Professional Title
            </label>
            <input
              {...register("professionalTitle")}
              className="mt-1 w-full border border-gray-300 rounded-md p-3 focus:border-purple-600 focus:ring-purple-600 shadow-sm"
              placeholder="Frontend Developer"
            />
            {errors.professionalTitle && (
              <p className="text-red-500 text-sm mt-1">
                {errors.professionalTitle.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              {...register("email")}
              className="mt-1 w-full border border-gray-300 rounded-md p-3 focus:border-purple-600 focus:ring-purple-600 shadow-sm"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              {...register("phone")}
              className="mt-1 w-full border border-gray-300 rounded-md p-3 focus:border-purple-600 focus:ring-purple-600 shadow-sm"
              placeholder="+998 90 123 45 67"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              {...register("address")}
              className="mt-1 w-full border border-gray-300 rounded-md p-3 focus:border-purple-600 focus:ring-purple-600 shadow-sm"
              placeholder="Tashkent, Uzbekistan"
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">
                {errors.address.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              LinkedIn
            </label>
            <input
              {...register("linkedIn")}
              className="mt-1 w-full border border-gray-300 rounded-md p-3 focus:border-purple-600 focus:ring-purple-600 shadow-sm"
              placeholder="https://linkedin.com/in/username"
            />
            {errors.linkedIn && (
              <p className="text-red-500 text-sm mt-1">
                {errors.linkedIn.message}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Portfolio
            </label>
            <input
              {...register("portfolio")}
              className="mt-1 w-full border border-gray-300 rounded-md p-3 focus:border-purple-600 focus:ring-purple-600 shadow-sm"
              placeholder="https://yourportfolio.com"
            />
            {errors.portfolio && (
              <p className="text-red-500 text-sm mt-1">
                {errors.portfolio.message}
              </p>
            )}
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-2 px-6 rounded-xl shadow-md hover:opacity-90 transition"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
