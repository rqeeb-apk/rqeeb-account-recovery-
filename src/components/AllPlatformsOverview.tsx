import React from 'react';
import { PLATFORMS_DATA } from '../data/platformsData';
import { PlatformId } from '../types';
import { ExternalLink, ShieldAlert, ArrowLeft, KeyRound } from 'lucide-react';

interface AllPlatformsOverviewProps {
  onSelectPlatform: (id: PlatformId) => void;
}

export const AllPlatformsOverview: React.FC<AllPlatformsOverviewProps> = ({
  onSelectPlatform
}) => {
  const platforms = Object.values(PLATFORMS_DATA);

  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-sm mb-8" dir="rtl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">
            <ShieldAlert className="w-5 h-5 text-red-400" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              دليل الطوارئ الشامل لجميع المنصات الـ 7
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              روابط البوابات الرسمية لاسترداد الحسابات المخترقة وحل مشكلة قفل المخترق لكل تطبيق
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {platforms.map((platform) => (
          <div
            key={platform.id}
            className="border border-slate-200 rounded-xl p-4 flex flex-col justify-between gap-4 bg-slate-50/60 hover:bg-white hover:border-slate-300 hover:shadow-xs transition"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${platform.badgeColor}`}>
                  {platform.nameAr}
                </span>
                <span className="text-xs font-mono text-slate-400">{platform.nameEn}</span>
              </div>

              <h4 className="text-sm font-bold text-slate-900 leading-snug">
                {platform.primaryHackedTitle}
              </h4>

              <div className="text-xs text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 block flex items-center gap-1">
                  <KeyRound className="w-3.5 h-3.5 text-blue-600" />
                  <span>طريقة التجاوز:</span>
                </span>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {platform.bypassGoldenTrick.steps[0]?.stepDesc}
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between gap-2">
              <button
                onClick={() => onSelectPlatform(platform.id)}
                className="text-xs text-blue-600 hover:text-blue-800 font-bold flex items-center gap-1"
                id={`btn-view-guide-${platform.id}`}
              >
                <span>عرض الدليل المفصل</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>

              <a
                href={platform.officialRecoveryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 transition"
                id={`btn-direct-link-${platform.id}`}
              >
                <span>البوابة الرسمية</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
