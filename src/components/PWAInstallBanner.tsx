import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { 
  Download, 
  Smartphone, 
  Monitor, 
  Share2, 
  PlusSquare, 
  CheckCircle2, 
  X, 
  Sparkles, 
  HelpCircle,
  Laptop
} from 'lucide-react';

export const PWAInstallBanner: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, isAndroid, install } = usePWAInstall();
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [activeGuideTab, setActiveGuideTab] = useState<'android' | 'ios' | 'desktop'>(
    isIOS ? 'ios' : isAndroid ? 'android' : 'desktop'
  );

  return (
    <>
      {/* Prominent Responsive Installation Card */}
      <section className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-2xl p-4 sm:p-5 shadow-lg border border-blue-500/30 mb-6" dir="rtl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-right w-full sm:w-auto">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-500 to-emerald-400 text-white flex items-center justify-center shrink-0 shadow-md">
              <Download className="w-6 h-6 animate-bounce" />
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2.5 py-0.5 rounded-full">
                  تطبيق جوال وكمبيوتر PWA
                </span>
                {isInstalled && (
                  <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>مثبت لديك</span>
                  </span>
                )}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                تثبيت منصة "المهندس الاستشاري رقيب" كتطبيق في جهازك
              </h3>
              <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
                يعمل على جميع أجهزة أندرويد، آيفون، الكمبيوتر وسطح المكتب بدون متجر تطبيقات!
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-end">
            {/* Native Install Button (when supported by browser) */}
            {isInstallable && (
              <button
                onClick={install}
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl flex items-center justify-center gap-2 transition shadow-md hover:shadow-lg cursor-pointer"
                id="btn-pwa-native-install"
              >
                <Download className="w-4 h-4" />
                <span>تحميل وتثبيت الآن (تلقائي)</span>
              </button>
            )}

            {/* Guide Button for iOS or manual install */}
            <button
              onClick={() => setShowGuideModal(true)}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl flex items-center justify-center gap-2 transition cursor-pointer"
              id="btn-pwa-guide-modal"
            >
              <Smartphone className="w-4 h-4 text-sky-300" />
              <span>طريقة التثبيت على الهاتف</span>
            </button>
          </div>
        </div>
      </section>

      {/* Guide Modal */}
      {showGuideModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 overflow-y-auto" dir="rtl">
          <div className="bg-slate-900 border border-slate-700 text-white rounded-3xl max-w-lg w-full p-6 shadow-2xl relative space-y-5 animate-in fade-in zoom-in duration-200">
            {/* Close button */}
            <button
              onClick={() => setShowGuideModal(false)}
              className="absolute top-4 left-4 text-slate-400 hover:text-white p-1.5 rounded-full hover:bg-slate-800 transition"
              id="btn-close-pwa-modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <Download className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  خطوات تثبيت المنصة على جهازك
                </h4>
                <p className="text-xs text-slate-400">
                  تطبيق سريع وخفيف بدون استهلاك ذاكرة الهاتف
                </p>
              </div>
            </div>

            {/* Device Tabs */}
            <div className="grid grid-cols-3 gap-2 bg-slate-800 p-1.5 rounded-xl text-xs font-bold">
              <button
                onClick={() => setActiveGuideTab('android')}
                className={`py-2 px-3 rounded-lg transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeGuideTab === 'android'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>أندرويد</span>
              </button>
              <button
                onClick={() => setActiveGuideTab('ios')}
                className={`py-2 px-3 rounded-lg transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeGuideTab === 'ios'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>آيفون (iOS)</span>
              </button>
              <button
                onClick={() => setActiveGuideTab('desktop')}
                className={`py-2 px-3 rounded-lg transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeGuideTab === 'desktop'
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Laptop className="w-3.5 h-3.5" />
                <span>الكمبيوتر</span>
              </button>
            </div>

            {/* Tab Instructions Content */}
            {activeGuideTab === 'ios' && (
              <div className="space-y-3 bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60 text-xs sm:text-sm text-slate-300">
                <div className="font-bold text-sky-400 text-sm mb-2 flex items-center gap-1.5">
                  <Share2 className="w-4 h-4" />
                  <span>طريقة التثبيت على أجهزة iPhone و iPad (متصفح Safari):</span>
                </div>
                <div className="flex items-start gap-3 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                  <span>افتح هذا الموقع في متصفح **Safari** على جهاز الآيفون.</span>
                </div>
                <div className="flex items-start gap-3 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                  <span>اضغط على أيقونة **المشاركة** (زر المربع الذي يخرج منه سهم للأعلى ⬆️ أسفل الشاشة).</span>
                </div>
                <div className="flex items-start gap-3 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                  <span>انزل للأسفل واضغط على: **"إضافة إلى الشاشة الرئيسية" (Add to Home Screen)**.</span>
                </div>
                <div className="flex items-start gap-3 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">4</span>
                  <span>اضغط على كلمة **"إضافة" (Add)** أعلى اليمين. سيظهر رمز المنصة فوراً على شاشة هاتفك مثل أي تطبيق!</span>
                </div>
              </div>
            )}

            {activeGuideTab === 'android' && (
              <div className="space-y-3 bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60 text-xs sm:text-sm text-slate-300">
                <div className="font-bold text-emerald-400 text-sm mb-2 flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4" />
                  <span>طريقة التثبيت على هواتف Android (Chrome / Edge / Samsung):</span>
                </div>
                <div className="flex items-start gap-3 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                  <span>اضغط على النقاط الثلاث (⋮) أعلى أو أسفل متصفح كروم.</span>
                </div>
                <div className="flex items-start gap-3 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                  <span>اختر **"تثبيت التطبيق" (Install App)** أو **"إضافة إلى الشاشة الرئيسية"**.</span>
                </div>
                <div className="flex items-start gap-3 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                  <span>وافق على التثبيت، وسيفتح التطبيق بشاشة كاملة وبسرعة فائقة.</span>
                </div>

                {isInstallable && (
                  <div className="pt-2">
                    <button
                      onClick={async () => {
                        await install();
                        setShowGuideModal(false);
                      }}
                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition shadow-md"
                    >
                      <Download className="w-4 h-4" />
                      <span>تثبيت الآن بنقرة واحدة</span>
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeGuideTab === 'desktop' && (
              <div className="space-y-3 bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60 text-xs sm:text-sm text-slate-300">
                <div className="font-bold text-purple-400 text-sm mb-2 flex items-center gap-1.5">
                  <Laptop className="w-4 h-4" />
                  <span>طريقة التثبيت على الكمبيوتر وسطح المكتب (Windows / Mac / Linux):</span>
                </div>
                <div className="flex items-start gap-3 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <span className="w-6 h-6 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                  <span>في شريط عنوان المتصفح (Chrome أو Edge)، ستجد أيقونة تثبيت صغيرة (شاشة مع سهم للأسفل ⬇️) إلى يمين الرابط.</span>
                </div>
                <div className="flex items-start gap-3 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <span className="w-6 h-6 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                  <span>اضغط عليها ثم اختر **"تثبيت" (Install)**.</span>
                </div>
                <div className="flex items-start gap-3 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <span className="w-6 h-6 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                  <span>سيتم إنشاء أيقونة على سطح المكتب لفتح المنصة بضغطة زر واحدة.</span>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowGuideModal(false)}
              className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-2 px-4 rounded-xl text-xs transition cursor-pointer"
            >
              إغلاق
            </button>
          </div>
        </div>
      )}
    </>
  );
};
