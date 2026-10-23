import React from 'react';
import { PlatformConfig } from '../types';
import { LifeBuoy, ExternalLink } from 'lucide-react';

interface OfficialLinksCardProps {
  currentPlatform: PlatformConfig;
}

export const OfficialLinksCard: React.FC<OfficialLinksCardProps> = ({ currentPlatform }) => {
  const links = currentPlatform.officialLinks;

  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-sm mb-8" dir="rtl">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
          <LifeBuoy className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            الروابط الرسمية المعتمدة لـ {currentPlatform.nameAr}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            جميع هذه الروابط رسمية ومباشرة ومشفرة من الشركة الأم
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-4 rounded-xl border transition flex flex-col justify-between gap-3 group ${
              link.isPrimary
                ? 'bg-blue-50/70 border-blue-300 hover:border-blue-400 hover:bg-blue-50'
                : 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100/70'
            }`}
            id={`btn-official-link-${idx}`}
          >
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span
                  className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                    link.isPrimary
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {link.badge}
                </span>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition">
                {link.title}
              </h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {link.desc}
              </p>
            </div>

            <div className="text-[11px] font-mono text-blue-700 flex items-center gap-1" dir="ltr">
              <span className="truncate">{link.url}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
