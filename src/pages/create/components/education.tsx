import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const educationSchema = z.object({
  education: z.array(
    z.object({
      school: z.string().min(2, "School name is required"),
      degree: z.string().min(2, "Degree is required"),
      fieldOfStudy: z.string().min(2, "Field of study is required"),
      startDate: z.string().min(4, "Start date is required"),
      endDate: z.string().min(4, "End date is required"),
    })
  ),
});

type EducationSchema = z.infer<typeof educationSchema>;

export function Education() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EducationSchema>({
    resolver: zodResolver(educationSchema),
    defaultValues: {
      education: [
        {
          school: "",
          degree: "",
          fieldOfStudy: "",
          startDate: "",
          endDate: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });

  const onSubmit = (data: EducationSchema) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-4xl mt-5 mx-auto p-8 bg-white rounded-xl shadow-lg space-y-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800">Education</h2>

      {fields.map((field, index) => (
        <div
          key={field.id}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 border p-6 rounded-xl shadow-sm relative"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              School / University
            </label>
            <input
              {...register(`education.${index}.school`)}
              className="mt-1 w-full border border-gray-300 rounded-md p-3 focus:border-purple-600 focus:ring-purple-600 shadow-sm"
              placeholder="Harvard University"
            />
            {errors.education?.[index]?.school && (
              <p className="text-red-500 text-sm mt-1">
                {errors.education[index].school?.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Degree
            </label>
            <input
              {...register(`education.${index}.degree`)}
              className="mt-1 w-full border border-gray-300 rounded-md p-3 focus:border-purple-600 focus:ring-purple-600 shadow-sm"
              placeholder="Bachelor of Science"
            />
            {errors.education?.[index]?.degree && (
              <p className="text-red-500 text-sm mt-1">
                {errors.education[index].degree?.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Field of Study
            </label>
            <input
              {...register(`education.${index}.fieldOfStudy`)}
              className="mt-1 w-full border border-gray-300 rounded-md p-3 focus:border-purple-600 focus:ring-purple-600 shadow-sm"
              placeholder="Computer Science"
            />
            {errors.education?.[index]?.fieldOfStudy && (
              <p className="text-red-500 text-sm mt-1">
                {errors.education[index].fieldOfStudy?.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Start Date
            </label>
            <input
              type="month"
              {...register(`education.${index}.startDate`)}
              className="mt-1 w-full border border-gray-300 rounded-md p-3 focus:border-purple-600 focus:ring-purple-600 shadow-sm"
            />
            {errors.education?.[index]?.startDate && (
              <p className="text-red-500 text-sm mt-1">
                {errors.education[index].startDate?.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              End Date
            </label>
            <input
              type="month"
              {...register(`education.${index}.endDate`)}
              className="mt-1 w-full border border-gray-300 rounded-md p-3 focus:border-purple-600 focus:ring-purple-600 shadow-sm"
            />
            {errors.education?.[index]?.endDate && (
              <p className="text-red-500 text-sm mt-1">
                {errors.education[index].endDate?.message}
              </p>
            )}
          </div>

          <div className="md:col-span-2 flex justify-end">
            <button
              type="button"
              onClick={() => remove(index)}
              className="mt-2 bg-red-100 text-red-600 font-medium px-4 py-2 rounded-md hover:bg-red-200 transition"
            >
              Delete Education
            </button>
          </div>
        </div>
      ))}

      <div className="flex justify-between items-center">
        <button
          type="button"
          onClick={() =>
            append({
              school: "",
              degree: "",
              fieldOfStudy: "",
              startDate: "",
              endDate: "",
            })
          }
          className="bg-white border border-purple-600 text-purple-600 font-medium px-6 py-2 rounded-xl shadow-sm hover:bg-purple-50 transition"
        >
          + Add Another Education
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
