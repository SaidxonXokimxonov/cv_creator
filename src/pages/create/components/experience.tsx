import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const experienceSchema = z.object({
  experiences: z.array(
    z.object({
      jobTitle: z.string().min(2, "Job title is required"),
      company: z.string().min(2, "Company is required"),
      startDate: z.string().min(4, "Start date is required"),
      endDate: z.string().min(4, "End date is required"),
      description: z.string().min(10, "Description is required"),
    })
  ),
});

type ExperienceSchema = z.infer<typeof experienceSchema>;

export function Experience() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExperienceSchema>({
    resolver: zodResolver(experienceSchema),
    defaultValues: {
      experiences: [
        {
          jobTitle: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiences",
  });

  const onSubmit = (data: ExperienceSchema) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-4xl mt-5 mx-auto p-8 bg-white rounded-xl shadow-lg space-y-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800">Work Experience</h2>

      {fields.map((field, index) => (
        <div
          key={field.id}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 border p-6 rounded-xl shadow-sm relative"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Job Title
            </label>
            <input
              {...register(`experiences.${index}.jobTitle`)}
              className="mt-1 w-full border border-gray-300 rounded-md p-3 focus:border-purple-600 focus:ring-purple-600 shadow-sm"
              placeholder="Senior Developer"
            />
            {errors.experiences?.[index]?.jobTitle && (
              <p className="text-red-500 text-sm mt-1">
                {errors.experiences[index].jobTitle?.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company
            </label>
            <input
              {...register(`experiences.${index}.company`)}
              className="mt-1 w-full border border-gray-300 rounded-md p-3 focus:border-purple-600 focus:ring-purple-600 shadow-sm"
              placeholder="Tech Corp"
            />
            {errors.experiences?.[index]?.company && (
              <p className="text-red-500 text-sm mt-1">
                {errors.experiences[index].company?.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Start Date
            </label>
            <input
              type="month"
              {...register(`experiences.${index}.startDate`)}
              className="mt-1 w-full border border-gray-300 rounded-md p-3 focus:border-purple-600 focus:ring-purple-600 shadow-sm"
            />
            {errors.experiences?.[index]?.startDate && (
              <p className="text-red-500 text-sm mt-1">
                {errors.experiences[index].startDate?.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              End Date
            </label>
            <input
              type="month"
              {...register(`experiences.${index}.endDate`)}
              className="mt-1 w-full border border-gray-300 rounded-md p-3 focus:border-purple-600 focus:ring-purple-600 shadow-sm"
            />
            {errors.experiences?.[index]?.endDate && (
              <p className="text-red-500 text-sm mt-1">
                {errors.experiences[index].endDate?.message}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              {...register(`experiences.${index}.description`)}
              className="mt-1 w-full border border-gray-300 rounded-md p-3 focus:border-purple-600 focus:ring-purple-600 shadow-sm"
              placeholder="Describe your role and achievements..."
            />
            {errors.experiences?.[index]?.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.experiences[index].description?.message}
              </p>
            )}
          </div>

          <div className="md:col-span-2 flex justify-end">
            <button
              type="button"
              onClick={() => remove(index)}
              className="mt-2 bg-red-100 text-red-600 font-medium px-4 py-2 rounded-md hover:bg-red-200 transition"
            >
              Delete Experience
            </button>
          </div>
        </div>
      ))}

      <div className="flex justify-between items-center">
        <button
          type="button"
          onClick={() =>
            append({
              jobTitle: "",
              company: "",
              startDate: "",
              endDate: "",
              description: "",
            })
          }
          className="bg-white border border-purple-600 text-purple-600 font-medium px-6 py-2 rounded-xl shadow-sm hover:bg-purple-50 transition"
        >
          + Add Another Experience
        </button>

        <button
          type="submit"
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-2 px-6 rounded-xl shadow-md hover:opacity-90 transition"
        >
          Save & Next
        </button>
      </div>
    </form>
  );
}

