export default function WeChatSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-8 text-center">
        <h2 className="text-4xl font-black text-gray-900 mb-4">关注我们</h2>
        <p className="text-lg text-gray-600 mb-12">
          扫码关注绿满仓教育公众号 获取更多课程资讯与优惠活动
        </p>

        <div className="inline-block bg-white p-8 rounded-3xl shadow-lg">
          <div className="w-64 h-64 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
            <img
              src="https://readdy.ai/api/search-image?query=WeChat%20QR%20code%20placeholder%20with%20green%20theme%2C%20simple%20clean%20design%20with%20WeChat%20logo%2C%20professional%20business%20style%2C%20white%20background%2C%20modern%20minimalist%20aesthetic&width=300&height=300&seq=qrcode&orientation=squarish"
              alt="微信公众号二维码"
              className="w-full h-full object-cover object-top rounded-2xl"
            />
          </div>
          <div className="flex items-center justify-center gap-2 mb-2">
            <i className="ri-wechat-fill text-2xl text-emerald-500"></i>
            <span className="text-lg font-bold text-gray-900">绿满仓教育</span>
          </div>
          <p className="text-sm text-gray-500">长按识别二维码</p>
        </div>
      </div>
    </section>
  );
}
