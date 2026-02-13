import { useState } from 'react';

export default function VideoShowcase() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Bright%20modern%20educational%20classroom%20interior%20with%20students%20learning%2C%20warm%20natural%20lighting%20streaming%20through%20large%20windows%2C%20contemporary%20school%20environment%20with%20colorful%20learning%20materials%2C%20professional%20education%20photography%2C%20soft%20focus%20background%20creating%20depth&width=1600&height=800&seq=video-bg&orientation=landscape"
            alt="课堂背景"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-6xl font-black text-white mb-4 leading-tight">
                真实课堂 看得见的成长
              </h2>
            </div>
            <div className="text-right">
              <p className="text-xl text-white/90 leading-relaxed">
                观看学员课堂实录
              </p>
              <p className="text-xl text-white/90 leading-relaxed">
                感受绿满仓教学魅力
              </p>
            </div>
          </div>

          <div className="mt-12">
            <button
              onClick={() => setShowVideo(true)}
              className="inline-flex items-center gap-4 px-8 py-4 bg-white rounded-full hover:bg-gray-50 transition-all hover:scale-105 shadow-2xl cursor-pointer group"
            >
              <span className="text-lg font-semibold text-gray-900">观看视频</span>
              <div className="w-12 h-12 flex items-center justify-center bg-gray-900 rounded-full group-hover:bg-emerald-500 transition-colors">
                <i className="ri-play-fill text-2xl text-white"></i>
              </div>
            </button>
          </div>
        </div>
      </section>

      {showVideo && (
        <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center" onClick={() => setShowVideo(false)}>
          <div className="relative w-full max-w-5xl mx-8" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-emerald-400 transition-colors cursor-pointer"
            >
              <i className="ri-close-line text-4xl"></i>
            </button>
            <div className="relative pt-[56.25%] bg-gray-900 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <i className="ri-video-line text-6xl mb-4 opacity-50"></i>
                  <p className="text-lg opacity-75">视频播放器</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
