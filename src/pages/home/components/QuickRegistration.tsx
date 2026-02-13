import { useState } from 'react';

export default function QuickRegistration() {
  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    course: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams({
        childName: formData.childName,
        childAge: formData.childAge,
        course: formData.course,
        phone: formData.phone
      }).toString();

      const response = await fetch('https://readdy.ai/api/form/d67eqndt1k61917clc40', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ childName: '', childAge: '', course: '', phone: '' });
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="registration" className="relative -mt-16 z-10">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <form id="quick-registration-form" data-readdy-form onSubmit={handleSubmit} className="flex items-end gap-6">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">孩子姓名</label>
              <input
                type="text"
                name="childName"
                value={formData.childName}
                onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                placeholder="请输入孩子姓名"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">孩子年龄</label>
              <input
                type="text"
                name="childAge"
                value={formData.childAge}
                onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                placeholder="请输入年龄"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">意向课程</label>
              <select
                name="course"
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm cursor-pointer"
              >
                <option value="">请选择课程</option>
                <option value="能力课程">能力课程</option>
                <option value="少儿编程">少儿编程</option>
                <option value="夏令营">夏令营</option>
                <option value="冬令营">冬令营</option>
                <option value="AI认知课程">AI认知课程</option>
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">联系电话</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="请输入手机号"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-colors shadow-md whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? '提交中...' : '立即预约'}
            </button>
          </form>

          {submitStatus === 'success' && (
            <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-700 text-sm">
              预约成功！我们会尽快与您联系。
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              提交失败，请稍后重试。
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
