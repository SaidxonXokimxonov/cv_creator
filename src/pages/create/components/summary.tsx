import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const summarySchema = z.object({
  summary: z.string().min(10, "Summary must be at least 10 characters long"),
});

type SummarySchema = z.infer<typeof summarySchema>;

export function Summary() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SummarySchema>({
    resolver: zodResolver(summarySchema),
    defaultValues: {
      summary: "",
    },
  });

  const onSubmit = (data: SummarySchema) => {
    console.log("Summary:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-4xl mt-5 mx-auto p-8 bg-white rounded-xl shadow-lg space-y-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800">Professional Summary</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Summary
        </label>
        <textarea
          {...register("summary")}
          rows={6}
          className="mt-1 w-full border border-gray-300 rounded-md p-3 focus:border-purple-600 focus:ring-purple-600 shadow-sm resize-none"
          placeholder="E.g. A passionate frontend developer with 2+ years of experience..."
        />
        {errors.summary && (
          <p className="text-red-500 text-sm mt-1">
            {errors.summary.message}
          </p>
        )}
      </div>

      <div className="flex justify-end">
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
