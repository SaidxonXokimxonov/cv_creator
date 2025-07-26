import { useState } from "react";

export const Templates = () => {
  interface Template {
    id: number;
    name: string;
    category: string;
  }
  const templates: Template[] = [
    { id: 1, name: "Professional", category: "Business" },
    { id: 2, name: "Modern", category: "Creative" },
    { id: 3, name: "Minimalist", category: "Simple" },
    { id: 4, name: "Executive", category: "Business" },
    { id: 5, name: "Creative", category: "Design" },
    { id: 6, name: "Academic", category: "Education" },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(templates.map((t) => t.category))),
  ];

  const filteredTemplates =
    activeCategory === "All"
      ? templates
      : templates.filter((t) => t.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Professional Resume Templates
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our collection of professionally designed templates to
            create a resume that stands out
          </p>
        </div>

        <div className="flex justify-center mb-12 flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2 rounded-full text-sm font-medium transition duration-300 ${
                activeCategory === category
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="bg-gray-200 border-2 border-dashed w-full h-48" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {template.name}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    {template.category}
                  </span>
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                    Use Template
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-indigo-600 text-indigo-600 font-bold px-8 py-3 rounded-lg hover:bg-indigo-600 hover:text-white transition duration-300">
            View All Templates
          </button>
        </div>
      </div>
    </section>
  );
};
