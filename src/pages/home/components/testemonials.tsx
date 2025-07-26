import { useEffect, useState } from "react";

export const Testimonials = () => {
  interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    avatar: string;
  }
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Manager",
      content:
        "I was able to create a professional resume in under 30 minutes. The templates are modern and the editor is so easy to use. Got interview calls within a week of using my new resume!",
      avatar: "👩‍💼",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Software Engineer",
      content:
        "As a developer, I appreciated the clean design and customization options. My resume now stands out and I landed a job at a FAANG company thanks to ResumeCraft!",
      avatar: "👨‍💻",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Graphic Designer",
      content:
        "The creative templates are exactly what I needed to showcase my design skills. I received so many compliments on my resume during interviews. Highly recommend!",
      avatar: "👩‍🎨",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            What Our Users Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of professionals who have landed their dream jobs
            with our resume builder
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white p-8 rounded-xl shadow-md transition-all duration-500 ${
                activeIndex === index ? "opacity-100 block" : "opacity-0 hidden"
              }`}
            >
              <div className="flex items-start">
                <div className="text-5xl mr-6">{testimonial.avatar}</div>
                <div>
                  <p className="text-gray-700 text-lg italic mb-6">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <h4 className="font-bold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  activeIndex === index ? "bg-indigo-600" : "bg-gray-300"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
