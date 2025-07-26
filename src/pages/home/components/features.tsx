export const Features = () => {
  interface Feature {
    icon: string;
    title: string;
    description: string;
  }

  const features: Feature[] = [
    {
      icon: "🚀",
      title: "Easy to Use",
      description:
        "Create a professional resume in minutes with our intuitive drag-and-drop editor",
    },
    {
      icon: "💼",
      title: "Professional Templates",
      description:
        "Choose from dozens of professionally designed templates for any industry",
    },
    {
      icon: "📄",
      title: "ATS Friendly",
      description:
        "Optimized for Applicant Tracking Systems to get your resume noticed",
    },
    {
      icon: "📱",
      title: "Mobile Responsive",
      description:
        "Your resume looks perfect on any device - desktop, tablet or mobile",
    },
    {
      icon: "💾",
      title: "Export Options",
      description:
        "Download your resume as PDF, DOCX or share it online with a custom link",
    },
    {
      icon: "🔒",
      title: "Secure & Private",
      description:
        "Your data is protected with bank-level security and privacy controls",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Powerful Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to create a standout resume that gets you hired
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
