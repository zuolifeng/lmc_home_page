export default function AchievementsSection() {
  const achievements = [
    { number: '5000+', label: '累计服务学员' },
    { number: '98%', label: '家长满意度' },
    { number: '50+', label: '专业教师团队' },
    { number: '15', label: '年教学经验' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-4 gap-16">
          {achievements.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-7xl font-black text-gray-800 mb-4">{item.number}</div>
              <div className="text-lg text-gray-500 font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
