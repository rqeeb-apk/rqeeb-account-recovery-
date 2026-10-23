import React from 'react';
import { PlatformId } from '../types';
import { PLATFORMS_DATA } from '../data/platformsData';
import { 
  ShieldAlert, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface PlatformTabsProps {
  activePlatformId: PlatformId;
  onSelectPlatform: (id: PlatformId) => void;
}

export const PlatformTabs: React.FC<PlatformTabsProps> = ({
  activePlatformId,
  onSelectPlatform,
}) => {
  const platforms = Object.values(PLATFORMS_DATA);

  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs mb-6" dir="rtl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping"></span>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              اختر المنصة أو الحساب الذي تريد استرجاعه الآن:
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            دليل مخصص لكل منصة لحل مشكلة قفل المخترق (مفاتيح الأمان، كود 2FA، كود PIN، تغيير الإيميل)
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200 self-start">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>7 منصات مدعومة بالكامل</span>
        </div>
      </div>

      {/* Grid of Platform Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2.5">
        {platforms.map((platform) => {
          const isActive = platform.id === activePlatformId;
          return (
            <button
              key={platform.id}
              onClick={() => onSelectPlatform(platform.id)}
              className={`flex flex-col items-center text-center p-3 rounded-xl transition border cursor-pointer select-none relative group ${
                isActive
                  ? `${platform.activeTabClass} border-transparent ring-2 ring-offset-2 ring-slate-900`
                  : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300'
              }`}
              id={`tab-platform-${platform.id}`}
            >
              {isActive && (
                <span className="absolute -top-1.5 -left-1.5 bg-white text-slate-900 rounded-full p-0.5 shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </span>
              )}

              <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg mb-2 shadow-2xs">
                {platform.id === 'google' && (
                  <span className={isActive ? 'text-white' : 'text-red-600'}>G</span>
                )}
                {platform.id === 'facebook' && (
                  <span className={isActive ? 'text-white' : 'text-blue-600'}>f</span>
                )}
                {platform.id === 'instagram' && (
                  <span className={isActive ? 'text-white' : 'text-pink-600'}>IG</span>
                )}
                {platform.id === 'whatsapp' && (
                  <span className={isActive ? 'text-white' : 'text-emerald-600'}>WA</span>
                )}
                {platform.id === 'tiktok' && (
                  <span className={isActive ? 'text-white' : 'text-neutral-900'}>TT</span>
                )}
                {platform.id === 'snapchat' && (
                  <span className={isActive ? 'text-slate-900' : 'text-amber-500'}>👻</span>
                )}
                {platform.id === 'x' && (
                  <span className={isActive ? 'text-white' : 'text-slate-900 font-mono'}>𝕏</span>
                )}
              </div>

              <div className="text-xs font-bold leading-tight line-clamp-1">
                {platform.nameAr}
              </div>
              <div className={`text-[10px] mt-0.5 line-clamp-1 ${isActive ? 'opacity-90' : 'text-slate-500'}`}>
                {platform.nameEn}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};
