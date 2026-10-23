import React from 'react';
import { AlertOctagon, ShieldX, Check } from 'lucide-react';

export const ScamWarning: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-red-900 to-rose-950 text-white rounded-2xl p-5 sm:p-6 shadow-sm mb-8" dir="rtl">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-red-800/80 border border-red-700 flex items-center justify-center shrink-0">
          <AlertOctagon className="w-7 h-7 text-red-300" />
        </div>

        <div className="space-y-2 flex-1">
          <div className="flex items-center gap-2">
            <span className="text-xs bg-red-500/30 text-red-200 border border-red-400/30 px-2.5 py-0.5 rounded-full font-bold">
              تحذير أمني عاجل وحاسم
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-white">
            احذر تماماً من المحتالين الذين يزعمون قدرتهم على استرجاع الحساب مقابل المال!
          </h3>

          <p className="text-xs sm:text-sm text-red-100/90 leading-relaxed">
            الجهة الوحيدة في العالم القادرة تقنياً ورسمياً على إعادة حساب Google هي <strong className="text-white underline">شركة Google نفسها</strong> عبر بوابة الاسترداد الآلية.
            أي شخص على تيليجرام أو إنستغرام أو واتساب أو وسائل التواصل الاجتماعي يدعي أنه "هاكر أخلاقي" أو "خبير استرداد" وسيسترجع حسابك مقابل بطاقات شحن أو تحويلات مالية هو <strong className="text-yellow-300">محتال بنسبة 100%</strong> يريد سرقة أموالك وبياناتك الإضافية.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs">
            <div className="flex items-center gap-2 bg-red-800/40 p-2.5 rounded-lg border border-red-700/50 text-red-100">
              <ShieldX className="w-4 h-4 text-red-300 shrink-0" />
              <span>لا تشارك رمز SMS مع أي شخص أبداً</span>
            </div>
            <div className="flex items-center gap-2 bg-red-800/40 p-2.5 rounded-lg border border-red-700/50 text-red-100">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>استخدم فقط روابط accounts.google.com الرسمية</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
