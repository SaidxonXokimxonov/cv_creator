export const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Perfect Resume?</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto text-indigo-100">
          Join over 500,000 professionals who have used our resume builder to land their dream jobs
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="bg-white text-indigo-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition duration-300 shadow-lg text-lg">
            Create Your Resume Now
          </button>
          <button className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition duration-300 text-lg">
            Browse Templates
          </button>
        </div>
      </div>
    </section>
  );
};
