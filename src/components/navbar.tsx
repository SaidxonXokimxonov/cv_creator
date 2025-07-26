import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-indigo-600 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            ResumeCraft
          </div>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">Home</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">Templates</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">Features</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">Pricing</a>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-600 hover:text-indigo-600 font-medium">Sign In</button>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
            Get Started
          </button>
        </div>
        
        <button 
          className="md:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-3">
            <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">Home</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">Templates</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">Features</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">Pricing</a>
            <div className="pt-4 flex flex-col space-y-3">
              <button className="text-gray-600 hover:text-indigo-600 font-medium">Sign In</button>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
