import React from 'react';
import { 
  ShieldCheck, 
  ExternalLink, 
  MessageCircle, 
  Award, 
  CheckCircle2, 
  HelpCircle,
  PhoneCall,
  Sparkles,
  Lock
} from 'lucide-react';
import { OWNER_CONTACT } from '../data/ownerData';
import { PlatformConfig } from '../types';

interface AccountTargetBannerProps {
  currentPlatform: PlatformConfig;
}

export const AccountTargetBanner: React.FC<AccountTargetBannerProps> = ({ currentPlatform }) => {
  return (
    <section className="bg-gradient-to-b from-slate-900 via-slate-850 to-slate-900 text-white border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-xl mb-6 relative overflow-hidden" dir="rtl">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="space-y-3.5 flex-1">
          {/* Identity Badge */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-red-600 to-rose-600 text-white text-xs font-bold px-3.5 py-1 rounded-full shadow-sm">
              <Award className="w-4 h-4 text-amber-300" />
              <span>المهندس الاستشاري رقيب</span>
            </span>
            <span className="text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30 px-3 py-1 rounded-full flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>استشارات وحلول الأمان الرقمي</span>
            </span>
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${currentPlatform.badgeColor}`}>
              المنصة الحالية: {currentPlatform.nameAr}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-snug">
            المهندس الاستشاري رقيب — مرجعك الموثوق لاسترجاع وتأمين الحسابات
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            {currentPlatform.tagline}. نوفر لك الإرشادات الرسمية المعتمدة لفك أقفال المخترقين، تجاوز أكواد التحقق بخطوتين (2FA / PIN / Passkeys)، وإعادة الملكية الشرعية لحسابك عبر القنوات التقنية القانونية المباشرة.
          </p>

          {/* Pillars of Service */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="bg-slate-800/80 backdrop-blur p-3 rounded-2xl border border-slate-700/80 flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-white">روابط رسمية 100%</div>
                <div className="text-slate-400 text-[11px]">بوابات مشفرة تابعة للشركات</div>
              </div>
            </div>

            <div className="bg-slate-800/80 backdrop-blur p-3 rounded-2xl border border-slate-700/80 flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Lock className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-white">حل أقفال المخترقين</div>
                <div className="text-slate-400 text-[11px]">تجاوز مفاتيح الأمان والـ PIN</div>
              </div>
            </div>

            <div className="bg-slate-800/80 backdrop-blur p-3 rounded-2xl border border-slate-700/80 flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                <PhoneCall className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-white">دعم واستشارات مباشرة</div>
                <div className="text-slate-400 text-[11px]">{OWNER_CONTACT.phone}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Callout Box */}
        <div className="w-full lg:w-80 bg-slate-800/90 backdrop-blur p-5 rounded-2xl border border-slate-700 shadow-xl flex flex-col justify-center gap-3.5 shrink-0">
          <div className="text-xs font-bold text-slate-200 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>بوابة استرداد {currentPlatform.nameAr}</span>
            </span>
            <span className="text-[10px] text-emerald-400 font-mono font-bold">رسمي ومشفر</span>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            افتح البوابة الرسمية المعتمدة لشركة {currentPlatform.nameAr} لبدء خطوات التحقق واستعادة الحساب:
          </p>

          <a
            href={currentPlatform.officialRecoveryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition shadow-md hover:shadow-lg cursor-pointer"
            id="btn-launch-recovery-banner"
          >
            <span>بدء الاسترجاع في {currentPlatform.nameAr}</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          {/* Direct WhatsApp Consultation */}
          <div className="pt-2 border-t border-slate-700/80 flex items-center justify-between text-xs">
            <span className="text-slate-400">تحتاج مساعدة مباشرة؟</span>
            <a
              href={OWNER_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-300 hover:text-emerald-200 font-bold flex items-center gap-1 bg-emerald-600/20 px-2.5 py-1.5 rounded-lg border border-emerald-500/30 hover:bg-emerald-600/30 transition cursor-pointer"
              id="btn-banner-whatsapp-owner"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>محادثة المهندس رقيب</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
