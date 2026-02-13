export default function LearningOutcomes() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-6xl font-black text-gray-900">学习成果</h2>
          <p className="text-lg text-gray-600 max-w-md">
            通过科学的教学方法和个性化的辅导，帮助每个孩子实现自己的成长目标
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-3">作品展示</h3>
              <p className="text-gray-300 mb-6">学员优秀作品集锦</p>
              <div className="w-full h-80 rounded-2xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Student%20creative%20project%20showcase%20display%2C%20children%20artwork%20and%20programming%20projects%20on%20exhibition%20wall%2C%20colorful%20and%20diverse%20student%20work%20samples%2C%20professional%20education%20photography%20with%20soft%20lighting%2C%20inspiring%20learning%20environment&width=600&height=600&seq=outcome1&orientation=squarish"
                  alt="作品展示"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 border border-emerald-100 hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-6">
              <i className="ri-global-line text-emerald-600"></i>
              <span className="text-sm font-medium text-emerald-700">在线学习</span>
            </div>
            <div className="flex items-center justify-center mb-6">
              <div className="w-32 h-32 flex items-center justify-center bg-emerald-500 rounded-3xl">
                <i className="ri-robot-2-line text-6xl text-white"></i>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-3 text-center">AI互动课堂</h3>
            <p className="text-gray-600 text-center mb-6">实时反馈 智能辅导</p>
            <button className="w-full py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer">
              立即体验
            </button>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-white rounded-3xl p-8 border border-amber-100 hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-6">
              <i className="ri-code-box-line text-amber-600"></i>
              <span className="text-sm font-medium text-amber-700">项目实践</span>
            </div>
            <div className="flex items-center justify-center mb-6">
              <div className="w-32 h-32 flex items-center justify-center bg-amber-500 rounded-3xl">
                <i className="ri-terminal-box-line text-6xl text-white"></i>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-3 text-center">编程实践</h3>
            <p className="text-gray-600 text-center mb-6">动手创作 激发创造力</p>
            <button className="w-full py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer">
              立即体验
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
