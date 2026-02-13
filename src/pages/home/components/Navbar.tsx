import { useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const navItems = [
    { name: '首页', href: '#home' },
    { name: '能力课程', href: '#ability-courses' },
    { name: '编程课程', href: '#programming' },
    { name: '营地活动', href: '#camps' },
    { name: 'AI课程', href: '#ai-courses' },
    { name: '关于我们', href: '#about' }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="https://public.readdy.ai/ai/img_res/77d51bdc-878a-4dbc-b21b-2de75b121b70.png"
                alt="绿满仓教育"
                className="h-12 w-auto object-contain"
              />
              <span className={`text-2xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                绿满仓教育
              </span>
            </div>

            <div className="flex items-center gap-12">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-base font-medium transition-all duration-200 hover:text-emerald-500 relative group ${
                    scrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-200 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowLoginModal(true)}
                className={`flex items-center gap-2 text-base font-medium transition-colors cursor-pointer ${
                  scrolled ? 'text-gray-700 hover:text-emerald-500' : 'text-white hover:text-emerald-300'
                }`}
              >
                <i className="ri-user-line text-lg"></i>
                用户登录
              </button>
              <a
                href="#contact"
                className="px-6 py-2.5 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition-colors shadow-md whitespace-nowrap cursor-pointer"
              >
                立即咨询
              </a>
            </div>
          </div>
        </div>
      </nav>

      {showLoginModal && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center" onClick={() => setShowLoginModal(false)}>
          <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">用户登录</h3>
              <button onClick={() => setShowLoginModal(false)} className="text-gray-400 hover:text-gray-600 cursor-pointer">
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">手机号</label>
                <input
                  type="tel"
                  placeholder="请输入手机号"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">密码</label>
                <input
                  type="password"
                  placeholder="请输入密码"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-colors whitespace-nowrap cursor-pointer"
              >
                登录
              </button>
              <div className="text-center text-sm text-gray-600">
                还没有账号？
                <a href="#register" className="text-emerald-500 hover:text-emerald-600 ml-1 cursor-pointer">
                  立即注册
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
