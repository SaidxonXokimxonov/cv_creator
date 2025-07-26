export const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Choose a Template",
      description: "Select from our collection of professional resume templates"
    },
    {
      number: 2,
      title: "Fill in Your Details",
      description: "Add your personal, education, work experience and skills"
    },
    {
      number: 3,
      title: "Customize & Design",
      description: "Adjust colors, fonts and layout to match your personal brand"
    },
    {
      number: 4,
      title: "Download & Apply",
      description: "Download your resume and start applying for your dream job"
    }
  ];
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Creating a professional resume has never been easier. Follow these simple steps:
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col items-center mb-12 md:mb-0 w-full md:w-auto">
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xl font-bold z-10 relative">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-16 h-1 bg-indigo-200"></div>
                )}
              </div>
              <div className="text-center max-w-xs">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}