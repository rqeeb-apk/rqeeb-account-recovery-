import React, { useState } from 'react';
import { CheckCircle2, XCircle, Sparkles, ExternalLink } from 'lucide-react';
import { PlatformConfig } from '../types';

interface ReadinessAssessmentProps {
  currentPlatform: PlatformConfig;
}

export const ReadinessAssessment: React.FC<ReadinessAssessmentProps> = ({ currentPlatform }) => {
  const [hasPhone, setHasPhone] = useState<boolean | null>(true);
  const [hasOldDevice, setHasOldDevice] = useState<boolean | null>(true);
  const [hasOldPassword, setHasOldPassword] = useState<boolean | null>(true);
  const [hasUsualWifi, setHasUsualWifi] = useState<boolean | null>(true);

  // Calculate score
  let score = 0;
  if (hasPhone) score += 40;
  if (hasOldDevice) score += 30;
  if (hasOldPassword) score += 15;
  if (hasUsualWifi) score += 15;

  const getStatusText = (score: number) => {
    if (score >= 70) return { title: 'فرصة نجاح مرتفعة جداً (فوق 85%)', color: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-200' };
    if (score >= 40) return { title: 'فرصة نجاح متوسطة (ممكنة عبر التحقق اليدوي أو الهوية)', color: 'text-amber-700', bg: 'bg-amber-50', border: 'border-amber-200' };
    return { title: 'فرصة ضعيفة (تحتاج إلى جهازك القديم لتأكيد الهوية)', color: 'text-red-700', bg: 'bg-red-50', border: 'border-red-200' };
  };

  const status = getStatusText(score);

  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-sm mb-8" dir="rtl">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
          <Sparkles className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            مقياس جاهزية الاسترداد لحساب {currentPlatform.nameAr}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            أجب عن هذه الأسئلة البسيطة لتقييم فرصتك ومعرفة أفضل طريقة قبل فتح رابط الاسترداد
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Question 1: Phone */}
        <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
          <div className="text-xs font-bold text-slate-800">
            1. هل شريحة الهاتف الأصلية (مثل 7××××××12) معك حالياً وتستقبل رسائل ومكالمات؟
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setHasPhone(true)}
              className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1 cursor-pointer ${
                hasPhone === true
                  ? 'bg-emerald-600 text-white shadow-2xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>نعم، الرقم معي</span>
            </button>
            <button
              onClick={() => setHasPhone(false)}
              className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1 cursor-pointer ${
                hasPhone === false
                  ? 'bg-red-600 text-white shadow-2xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <XCircle className="w-3.5 h-3.5" />
              <span>لا، الرقم ليس معي</span>
            </button>
          </div>
        </div>

        {/* Question 2: Old Device */}
        <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
          <div className="text-xs font-bold text-slate-800">
            2. هل تقوم بالمحاولة من هاتفك أو جهازك الذي اعتدت فتح التطبيق منه؟
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setHasOldDevice(true)}
              className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1 cursor-pointer ${
                hasOldDevice === true
                  ? 'bg-emerald-600 text-white shadow-2xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>نعم، نفس جهازي</span>
            </button>
            <button
              onClick={() => setHasOldDevice(false)}
              className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1 cursor-pointer ${
                hasOldDevice === false
                  ? 'bg-red-600 text-white shadow-2xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <XCircle className="w-3.5 h-3.5" />
              <span>جهاز جديد / آخر</span>
            </button>
          </div>
        </div>

        {/* Question 3: Old Password */}
        <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
          <div className="text-xs font-bold text-slate-800">
            3. هل تتذكر أي كلمة مرور قديمة استخدمتها مع هذا الحساب؟
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setHasOldPassword(true)}
              className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1 cursor-pointer ${
                hasOldPassword === true
                  ? 'bg-emerald-600 text-white shadow-2xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>أتذكر كلمة سابقة</span>
            </button>
            <button
              onClick={() => setHasOldPassword(false)}
              className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1 cursor-pointer ${
                hasOldPassword === false
                  ? 'bg-red-600 text-white shadow-2xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <XCircle className="w-3.5 h-3.5" />
              <span>لا أتذكر أي كلمة</span>
            </button>
          </div>
        </div>

        {/* Question 4: Usual Wi-Fi */}
        <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
          <div className="text-xs font-bold text-slate-800">
            4. هل أنت متصل بنفس شبكة الإنترنت (الواي فاي) المعتادة في البيت أو العمل؟
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setHasUsualWifi(true)}
              className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1 cursor-pointer ${
                hasUsualWifi === true
                  ? 'bg-emerald-600 text-white shadow-2xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>نعم، شبكتي المعتادة</span>
            </button>
            <button
              onClick={() => setHasUsualWifi(false)}
              className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1 cursor-pointer ${
                hasUsualWifi === false
                  ? 'bg-red-600 text-white shadow-2xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <XCircle className="w-3.5 h-3.5" />
              <span>شبكة جديدة أو بيانات عامة</span>
            </button>
          </div>
        </div>
      </div>

      {/* Result Card */}
      <div className={`p-4 sm:p-5 rounded-xl border ${status.border} ${status.bg} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4`}>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-600">نسبة نجاح الاسترجاع المقدرة:</span>
            <span className={`text-base sm:text-lg font-bold ${status.color}`}>
              %{score} — {status.title}
            </span>
          </div>
          <p className="text-xs text-slate-600 max-w-xl leading-relaxed">
            {score >= 70
              ? `بما أن رقم هاتفك أو جهازك القديم متوفران، يمكنك استرداد حساب ${currentPlatform.nameAr} بنجاح باتباع طريقة التجاوز الرسمية.`
              : 'يوصى بالانتقال إلى نفس الجهاز والشبكة التي كنت تستخدمها لرفع نسبة النجاح قبل التقدم بطلب الاسترداد.'}
          </p>
        </div>

        <a
          href={currentPlatform.officialRecoveryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold py-2.5 px-4 rounded-xl flex items-center gap-2 transition shrink-0 shadow-xs"
        >
          <span>ابدأ استرجاع {currentPlatform.nameAr}</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
