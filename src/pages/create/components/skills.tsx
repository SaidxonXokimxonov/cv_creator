import { useFieldArray, useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const skillSchema = z.object({
  skills: z.array(
    z.object({
      name: z.string().min(2, "Skill is required"),
    })
  ),
});
type Skill = {
  name: string;
};

type FormValues = {
  skills: Skill[];
};

export function Skills() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(skillSchema), // zod shu yerda ulanadi
    defaultValues: {
      skills: [{ name: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-4xl mt-5 mx-auto p-8 bg-white rounded-xl shadow-lg space-y-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800">Skills</h2>

      <div className="grid gap-4">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-md p-3 shadow-sm"
          >
            <input
              {...register(`skills.${index}.name`)}
              className="flex-1 border border-gray-300 rounded-md p-2 focus:border-purple-600 focus:ring-purple-600 text-sm"
              placeholder="e.g. JavaScript"
            />
            <button
              type="button"
              onClick={() => remove(index)}
              className="text-red-500 hover:text-red-700 text-sm"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {errors.skills?.length && (
        <p className="text-red-500 text-sm">Skill is required</p>
      )}

      <div className="flex justify-between items-center mt-4">
        <button
          type="button"
          onClick={() => append({ name: "" })}
          className="bg-white border border-purple-600 text-purple-600 font-medium px-6 py-2 rounded-xl shadow-sm hover:bg-purple-50 transition"
        >
          + Add Skill
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
