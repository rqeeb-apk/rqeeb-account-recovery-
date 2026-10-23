import React, { useState, useEffect } from 'react';
import { PlatformConfig } from '../types';
import { Shield, CheckSquare, Square, ExternalLink } from 'lucide-react';

interface PostRecoverySecurityProps {
  currentPlatform: PlatformConfig;
}

export const PostRecoverySecurity: React.FC<PostRecoverySecurityProps> = ({ currentPlatform }) => {
  const checklist = currentPlatform.postSecurityChecklist;
  const [completedItems, setCompletedItems] = useState<string[]>([]);

  useEffect(() => {
    setCompletedItems([]);
  }, [currentPlatform.id]);

  const toggleItem = (id: string) => {
    if (completedItems.includes(id)) {
      setCompletedItems(completedItems.filter((item) => item !== id));
    } else {
      setCompletedItems([...completedItems, id]);
    }
  };

  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-sm mb-8" dir="rtl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              قائمة التحصين وطرد المخترق بعد استرجاع {currentPlatform.nameAr}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              قم بإنهاء هذه الخطوات خلال الدقائق الأولى من استعادة الحساب لمنع المخترق من العودة ثانية
            </p>
          </div>
        </div>

        <div className="text-xs font-semibold bg-purple-50 text-purple-700 px-3 py-1 rounded-full border border-purple-200 hidden sm:block">
          تم إنجاز {completedItems.length} من {checklist.length}
        </div>
      </div>

      <div className="space-y-3">
        {checklist.map((item) => {
          const isDone = completedItems.includes(item.id);
          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`flex items-start justify-between gap-4 p-3.5 rounded-xl border transition cursor-pointer select-none ${
                isDone
                  ? 'bg-emerald-50/60 border-emerald-300 text-slate-900'
                  : 'bg-slate-50 border-slate-200 hover:bg-slate-100/80 text-slate-700'
              }`}
              id={`checklist-item-${item.id}`}
            >
              <div className="flex items-start gap-3">
                <button
                  type="button"
                  className="mt-0.5 text-slate-400 hover:text-slate-600 focus:outline-none"
                >
                  {isDone ? (
                    <CheckSquare className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <Square className="w-5 h-5 text-slate-400" />
                  )}
                </button>
                <div>
                  <h4 className={`text-xs sm:text-sm font-bold ${isDone ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1 bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 shadow-2xs shrink-0"
                  title="فتح إعدادات الأمان الرسمية"
                >
                  <span>فتح</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
