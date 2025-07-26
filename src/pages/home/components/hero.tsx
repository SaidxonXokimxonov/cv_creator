import { useNavigate } from "react-router-dom";

export const Hero = () => {
    const navigate = useNavigate()
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Create a Professional Resume in Minutes
          </h1>
          <p className="text-xl mb-8 text-indigo-100 max-w-lg">
            Stand out from the crowd with our easy-to-use resume builder. Choose from professional templates and land your dream job.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button onClick={()=> navigate('/create')} className="bg-white cursor-pointer text-indigo-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300 shadow-lg">
              Create Your Resume
            </button>

          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="bg-white rounded-xl shadow-2xl p-6 w-80 h-96 transform rotate-3 border-2 border-indigo-200">
              <div className="flex justify-between items-center mb-4">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <div>
                  <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-24"></div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="h-4 bg-indigo-100 rounded w-full"></div>
                <div className="h-4 bg-indigo-100 rounded w-5/6"></div>
                <div className="h-4 bg-indigo-100 rounded w-4/6"></div>
                <div className="h-4 bg-indigo-100 rounded w-3/4"></div>
              </div>
              
              <div className="mt-8">
                <div className="h-3 bg-gray-300 rounded w-20 mb-2"></div>
                <div className="grid grid-cols-2 gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="bg-gray-100 rounded p-2">
                      <div className="h-3 bg-gray-300 rounded w-3/4 mb-1"></div>
                      <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-6 w-72 h-80 transform -rotate-3 border-2 border-indigo-200 z-10">
              <div className="flex justify-between items-center mb-4">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <div>
                  <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-24"></div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="h-4 bg-indigo-100 rounded w-full"></div>
                <div className="h-4 bg-indigo-100 rounded w-5/6"></div>
                <div className="h-4 bg-indigo-100 rounded w-4/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
