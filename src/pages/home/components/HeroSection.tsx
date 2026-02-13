import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: '培养未来',
      subtitle: '从能力开始',
      brand: '绿满仓教育',
      description: '专注少儿综合能力培养，通过科学的课程体系和创新的教学方法，激发孩子的潜能，培养面向未来的核心竞争力',
      image: 'https://readdy.ai/api/search-image?query=Happy%20diverse%20children%20aged%206-12%20actively%20participating%20in%20an%20interactive%20educational%20classroom%20with%20bright%20natural%20lighting%2C%20modern%20learning%20environment%2C%20kids%20raising%20hands%20and%20smiling%2C%20colorful%20educational%20materials%2C%20warm%20and%20inviting%20atmosphere%2C%20professional%20education%20photography%20style%2C%20shallow%20depth%20of%20field&width=800&height=600&seq=hero1&orientation=landscape'
    },
    {
      title: '编程思维',
      subtitle: '创造未来',
      brand: '少儿编程课程',
      description: '通过趣味化的编程教学，培养孩子的逻辑思维和创造力，让孩子在游戏中学习，在创作中成长',
      image: 'https://readdy.ai/api/search-image?query=Children%20learning%20programming%20and%20coding%20on%20computers%20in%20modern%20classroom%2C%20focused%20young%20students%20aged%208-12%20working%20on%20colorful%20coding%20projects%2C%20bright%20educational%20space%20with%20technology%20equipment%2C%20engaging%20STEM%20education%20scene%2C%20professional%20photography%20with%20soft%20lighting&width=800&height=600&seq=hero2&orientation=landscape'
    },
    {
      title: '探索世界',
      subtitle: '成就梦想',
      brand: '夏令营·冬令营',
      description: '丰富多彩的营地活动，让孩子在实践中学习，在团队中成长，培养独立自主和团队协作能力',
      image: 'https://readdy.ai/api/search-image?query=Children%20enjoying%20outdoor%20summer%20camp%20activities%2C%20diverse%20kids%20aged%207-13%20participating%20in%20team%20building%20exercises%2C%20sunny%20day%20with%20natural%20scenery%2C%20happy%20and%20energetic%20atmosphere%2C%20professional%20camp%20photography%2C%20vibrant%20colors%20and%20dynamic%20composition&width=800&height=600&seq=hero3&orientation=landscape'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="home" className="relative min-h-screen pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-amber-50 to-blue-50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30"></div>

      <div className="relative max-w-[1400px] mx-auto px-8 py-20">
        <div className="flex items-center gap-16 min-h-[600px]">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              <span className="text-sm font-medium text-gray-700">2025春季招生中</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-7xl font-black text-gray-900 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <h2 className="text-7xl font-black text-gray-900 leading-tight">
                {slides[currentSlide].subtitle}
              </h2>
              <h3 className="text-6xl font-black text-emerald-600 leading-tight">
                {slides[currentSlide].brand}
              </h3>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              {slides[currentSlide].description}
            </p>

            <div className="flex items-center gap-6 pt-4">
              <a
                href="#registration"
                className="px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors shadow-lg whitespace-nowrap cursor-pointer"
              >
                免费试听
              </a>
              <a
                href="#courses"
                className="text-gray-900 font-medium hover:text-emerald-600 transition-colors underline underline-offset-4 cursor-pointer"
              >
                查看课程
              </a>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                index === currentSlide
                  ? 'w-8 h-3 bg-emerald-500'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
