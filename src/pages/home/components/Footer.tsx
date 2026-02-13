export default function Footer() {
  const footerLinks = [
    {
      title: '课程体系',
      links: ['能力课程', '少儿编程', 'AI认知课程', '素质拓展']
    },
    {
      title: '营地活动',
      links: ['夏令营', '冬令营', '周末营', '研学旅行']
    },
    {
      title: '关于我们',
      links: ['机构介绍', '师资团队', '教学环境', '联系我们']
    },
    {
      title: '帮助中心',
      links: ['常见问题', '报名流程', '退费政策', '隐私政策']
    }
  ];

  const socialLinks = [
    { icon: 'ri-wechat-fill', name: '微信', color: 'hover:text-emerald-500' },
    { icon: 'ri-weibo-fill', name: '微博', color: 'hover:text-red-500' },
    { icon: 'ri-tiktok-fill', name: '抖音', color: 'hover:text-gray-900' },
    { icon: 'ri-book-mark-fill', name: '小红书', color: 'hover:text-red-400' }
  ];

  return (
    <footer className="bg-gradient-to-br from-emerald-500 via-teal-400 to-cyan-400 text-white pt-20 pb-8">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-4 gap-12 mb-16">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-4">{section.title}</h3>
              <div className="w-12 h-0.5 bg-white/30 mb-6"></div>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={`#${link}`}
                      className="text-white/80 hover:text-white transition-colors text-sm cursor-pointer"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-5xl font-black mb-2">绿满仓教育</div>
              <div className="flex items-center gap-3">
                <div className="w-16 h-0.5 bg-white/50"></div>
                <span className="text-sm text-white/80">让每个孩子都能发光</span>
              </div>
            </div>

            <div className="text-right">
              <div className="text-sm text-white/80 mb-4">© 2025 绿满仓教育 版权所有</div>
              <div className="flex items-center gap-4 justify-end">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={`#${social.name}`}
                    className={`w-10 h-10 flex items-center justify-center bg-white/20 rounded-full ${social.color} transition-all hover:bg-white/30 cursor-pointer`}
                    title={social.name}
                  >
                    <i className={`${social.icon} text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/20 text-center">
          <a
            href="https://readdy.ai/?ref=logo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer"
          >
            Powered by Readdy
          </a>
        </div>
      </div>
    </footer>
  );
}
