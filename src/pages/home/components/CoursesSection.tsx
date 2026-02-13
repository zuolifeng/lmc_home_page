export default function CoursesSection() {
  const courses = [
    {
      id: 1,
      name: '能力课程',
      description: '全面提升孩子的思维能力、表达能力、创造力和领导力',
      age: '4-12岁',
      image: 'https://readdy.ai/api/search-image?query=Children%20developing%20cognitive%20and%20creative%20abilities%20in%20bright%20modern%20classroom%2C%20diverse%20kids%20aged%204-12%20engaged%20in%20hands-on%20learning%20activities%20with%20colorful%20educational%20materials%2C%20teacher%20guiding%20students%2C%20warm%20lighting%20and%20cheerful%20atmosphere%2C%20professional%20education%20photography&width=400&height=400&seq=course1&orientation=squarish',
      icon: 'ri-lightbulb-line'
    },
    {
      id: 2,
      name: '少儿编程',
      description: '通过图形化编程和项目实践，培养逻辑思维和问题解决能力',
      age: '6-14岁',
      image: 'https://readdy.ai/api/search-image?query=Young%20students%20learning%20block-based%20programming%20on%20computers%2C%20children%20aged%206-14%20creating%20colorful%20coding%20projects%2C%20modern%20technology%20classroom%20with%20bright%20screens%2C%20engaging%20STEM%20education%20environment%2C%20professional%20photography%20with%20vibrant%20colors&width=400&height=400&seq=course2&orientation=squarish',
      icon: 'ri-code-s-slash-line'
    },
    {
      id: 3,
      name: '夏令营',
      description: '户外探索、科学实验、团队协作，让孩子在实践中快乐成长',
      age: '7-15岁',
      image: 'https://readdy.ai/api/search-image?query=Children%20participating%20in%20summer%20camp%20outdoor%20activities%2C%20diverse%20kids%20aged%207-15%20doing%20team%20building%20exercises%20and%20nature%20exploration%2C%20sunny%20day%20with%20beautiful%20natural%20scenery%2C%20happy%20energetic%20atmosphere%2C%20professional%20camp%20photography&width=400&height=400&seq=course3&orientation=squarish',
      icon: 'ri-sun-line'
    },
    {
      id: 4,
      name: '冬令营',
      description: '冰雪运动、科技体验、文化探索，丰富多彩的冬季成长之旅',
      age: '7-15岁',
      image: 'https://readdy.ai/api/search-image?query=Children%20enjoying%20winter%20camp%20activities%20indoors%20and%20outdoors%2C%20kids%20aged%207-15%20participating%20in%20winter%20sports%20and%20educational%20workshops%2C%20cozy%20warm%20atmosphere%20with%20winter%20scenery%2C%20professional%20photography%20with%20soft%20lighting&width=400&height=400&seq=course4&orientation=squarish',
      icon: 'ri-snowy-line'
    },
    {
      id: 5,
      name: 'AI认知课程',
      description: '探索人工智能的奥秘，培养面向未来的科技素养和创新思维',
      age: '8-16岁',
      image: 'https://readdy.ai/api/search-image?query=Students%20learning%20about%20artificial%20intelligence%20and%20robotics%2C%20children%20aged%208-16%20interacting%20with%20AI%20technology%20and%20robots%20in%20modern%20classroom%2C%20futuristic%20educational%20environment%20with%20digital%20displays%2C%20professional%20STEM%20education%20photography&width=400&height=400&seq=course5&orientation=squarish',
      icon: 'ri-robot-line'
    }
  ];

  return (
    <section id="courses" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-5xl font-black text-gray-900 mb-3">精品课程</h2>
            <p className="text-xl text-emerald-600 font-semibold">全面提升孩子综合能力</p>
          </div>
          <a
            href="#all-courses"
            className="px-6 py-3 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-700 transition-colors whitespace-nowrap cursor-pointer"
          >
            查看全部课程
          </a>
        </div>

        <div className="grid grid-cols-5 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
              data-product-shop
            >
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-white/90 rounded-full shadow-lg">
                  <i className={`${course.icon} text-2xl text-emerald-500`}></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.name}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                  {course.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">适合年龄: {course.age}</span>
                  <a
                    href={`#course-${course.id}`}
                    className="text-emerald-600 font-medium text-sm hover:text-emerald-700 flex items-center gap-1 cursor-pointer"
                  >
                    了解详情
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
