export default function ParentReviews() {
  const reviews = [
    {
      content: '孩子在绿满仓学习半年，逻辑思维能力提升明显，更加自信主动了',
      author: '李女士',
      platform: '大众点评',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20Asian%20mother%20smiling%20warmly%2C%20looking%20upward%20with%20hopeful%20expression%2C%20soft%20natural%20lighting%2C%20clean%20white%20background%2C%20shallow%20depth%20of%20field%2C%20professional%20photography%20style%2C%20positive%20and%20trustworthy%20atmosphere&width=500&height=600&seq=parent1&orientation=portrait'
    },
    {
      content: '老师非常专业负责，课程设计科学有趣，孩子每次上课都很期待',
      author: '王先生',
      platform: '美团',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20Asian%20father%20with%20gentle%20smile%2C%20side%20profile%20looking%20up%2C%20soft%20natural%20lighting%2C%20clean%20white%20background%2C%20shallow%20depth%20of%20field%2C%20professional%20photography%20style%2C%20warm%20and%20confident%20atmosphere&width=500&height=600&seq=parent2&orientation=portrait'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
            <span className="text-sm font-medium text-gray-700">家长真实评价</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12">
          {reviews.map((review, index) => (
            <div key={index} className="flex items-center gap-12">
              <div className="flex-1">
                <div className="mb-8">
                  <i className="ri-double-quotes-l text-6xl text-gray-300"></i>
                </div>
                <blockquote className="text-4xl font-serif text-gray-900 leading-relaxed mb-8">
                  {review.content}
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="font-bold text-lg text-gray-900">{review.author}</div>
                  <div className="flex items-center gap-1 px-3 py-1 bg-emerald-50 rounded-full">
                    <i className="ri-star-fill text-emerald-500 text-sm"></i>
                    <span className="text-sm font-medium text-emerald-700">{review.platform}</span>
                  </div>
                </div>
              </div>

              <div className="w-80 h-96">
                <img
                  src={review.image}
                  alt={review.author}
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
