import React, { useState } from 'react';
import { usePushNotifications } from '../hooks/usePushNotifications';
import { 
  Bell, 
  BellRing, 
  ShieldAlert, 
  CheckCircle2, 
  Send, 
  AlertTriangle, 
  ExternalLink, 
  Sparkles, 
  RefreshCw, 
  Check, 
  Settings2, 
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
  Info
} from 'lucide-react';

export const NotificationCenter: React.FC = () => {
  const {
    isSupported,
    permission,
    settings,
    alerts,
    unreadCount,
    requestPermission,
    sendTestNotification,
    updateSetting,
    markAsRead,
    markAllAsRead,
  } = usePushNotifications();

  const [isSendingTest, setIsSendingTest] = useState(false);
  const [testSentMessage, setTestSentMessage] = useState<string | null>(null);
  const [showSettingsDrawer, setShowSettingsDrawer] = useState(false);
  const [filterType, setFilterType] = useState<'all' | 'critical' | 'update' | 'tip'>('all');

  const handleSendTest = async (type: 'critical' | 'update' | 'tip') => {
    setIsSendingTest(true);
    setTestSentMessage(null);
    try {
      const ok = await sendTestNotification(type);
      if (ok) {
        setTestSentMessage('تم إرسال التنبيه الفوري بنجاح! تفقد أعلى شاشة هاتفك أو جهازك.');
      } else {
        setTestSentMessage('تم تسجيل التنبيه في القائمة الداخلية. يرجى التأكد من الموافقة على إذن الإشعارات من المتصفح.');
      }
    } finally {
      setIsSendingTest(false);
      setTimeout(() => setTestSentMessage(null), 5000);
    }
  };

  const filteredAlerts = alerts.filter((alert) => {
    if (filterType === 'all') return true;
    return alert.type === filterType;
  });

  return (
    <section 
      id="notification-center-section" 
      className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-7 shadow-sm mb-8 scroll-mt-20" 
      dir="rtl"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-red-600 text-white flex items-center justify-center shadow-md shadow-amber-500/20 shrink-0">
            {permission === 'granted' ? (
              <BellRing className="w-6 h-6 animate-pulse" />
            ) : (
              <Bell className="w-6 h-6" />
            )}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">
                مركز التنبيهات والإشعارات الأمنية الفورية
              </h3>
              {unreadCount > 0 && (
                <span className="bg-red-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                  {unreadCount} تنبيه جديد
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              خدمة إرسال تنبيهات (Push Notifications) لإبلاغك بأي تحديثات جديدة في طرق الاسترجاع أو تحذيرات أمنية طارئة
            </p>
          </div>
        </div>

        {/* Permission Status Pill */}
        <div className="flex items-center gap-2 self-start sm:self-center">
          {permission === 'granted' ? (
            <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold px-3 py-1.5 rounded-xl">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>التنبيهات مفعلة على هذا الجهاز</span>
            </div>
          ) : permission === 'denied' ? (
            <div className="flex items-center gap-1.5 bg-red-50 text-red-800 border border-red-200 text-xs font-bold px-3 py-1.5 rounded-xl">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <span>محظورة في إعدادات المتصفح</span>
            </div>
          ) : (
            <button
              onClick={requestPermission}
              className="flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-xl transition shadow-sm hover:shadow cursor-pointer"
              id="btn-enable-push-notifications"
            >
              <BellRing className="w-4 h-4" />
              <span>تفعيل التنبيهات المباشرة</span>
            </button>
          )}
        </div>
      </div>

      {/* Action Banner / Notification Controls */}
      <div className="my-5 bg-gradient-to-r from-slate-900 via-slate-850 to-blue-950 text-white rounded-2xl p-5 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold bg-amber-400/20 text-amber-300 border border-amber-300/30 px-2.5 py-0.5 rounded-full">
                نظام البث الأمني المباشر
              </span>
              <span className="text-xs text-slate-300">
                إشعار فوري عند صدور أي ثغرة أو تحديث
              </span>
            </div>
            <h4 className="text-base font-bold text-white">
              جرب إرسال تنبيه تجريبي فوري إلى هاتفك أو جهازك الآن
            </h4>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
              اضغط على أحد الأزرار أدناه للتحقق من وصول التنبيهات إلى شريط إشعارات جهازك:
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleSendTest('critical')}
              disabled={isSendingTest}
              className="bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 shadow-sm cursor-pointer"
              id="btn-test-critical-alert"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>تنبيه أمني عاجل</span>
            </button>

            <button
              onClick={() => handleSendTest('update')}
              disabled={isSendingTest}
              className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 shadow-sm cursor-pointer"
              id="btn-test-recovery-update"
            >
              <RefreshCw className="w-4 h-4" />
              <span>تحديث طريقة استرجاع</span>
            </button>

            <button
              onClick={() => handleSendTest('tip')}
              disabled={isSendingTest}
              className="bg-slate-700 hover:bg-slate-600 disabled:opacity-50 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 shadow-sm cursor-pointer"
              id="btn-test-advisor-tip"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>نصيحة المهندس رقيب</span>
            </button>
          </div>
        </div>

        {/* Feedback Alert Toast */}
        {testSentMessage && (
          <div className="bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 p-3 rounded-xl text-xs flex items-center justify-between gap-2 animate-in fade-in">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{testSentMessage}</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-mono">الآن</span>
          </div>
        )}

        {/* Permission Denied Helper Note */}
        {permission === 'denied' && (
          <div className="bg-red-950/70 border border-red-500/50 text-red-200 p-3.5 rounded-xl text-xs flex items-start gap-2.5">
            <Info className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold block text-white">
                تم رفض إذن الإشعارات مسبقاً في متصفحك
              </span>
              <p className="text-red-200/90 leading-relaxed">
                لإعادة تفعيلها: اضغط على أيقونة القفل أو الإعدادات 🔒 بجانب رابط الموقع في شريط المتصفح، ثم فعّل خيار <strong>"الإشعارات (Notifications)"</strong> وأعد تحميل الصفحة.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Notification Categories Settings Toggle Drawer */}
      <div className="mb-5">
        <button
          onClick={() => setShowSettingsDrawer(!showSettingsDrawer)}
          className="text-xs text-slate-600 hover:text-slate-900 font-bold flex items-center gap-1.5 transition cursor-pointer"
          id="btn-toggle-notification-categories"
        >
          <Settings2 className="w-3.5 h-3.5 text-blue-600" />
          <span>تخصيص فئات التنبيهات التي ترغب باستلامها</span>
          {showSettingsDrawer ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        {showSettingsDrawer && (
          <div className="mt-3 p-4 bg-slate-50 border border-slate-200 rounded-2xl grid grid-cols-1 sm:grid-cols-3 gap-3 animate-in fade-in text-xs">
            {/* Category 1 */}
            <label className="flex items-center gap-2.5 p-3 bg-white rounded-xl border border-slate-200 cursor-pointer hover:border-slate-300 transition">
              <input
                type="checkbox"
                checked={settings.criticalAlerts}
                onChange={(e) => updateSetting('criticalAlerts', e.target.checked)}
                className="w-4 h-4 text-red-600 rounded focus:ring-red-500"
              />
              <div>
                <span className="font-bold text-slate-900 block">🚨 تنبيهات أمنية عاجلة</span>
                <span className="text-[11px] text-slate-500">حيل اختراق جديدة وثغرات الحسابات</span>
              </div>
            </label>

            {/* Category 2 */}
            <label className="flex items-center gap-2.5 p-3 bg-white rounded-xl border border-slate-200 cursor-pointer hover:border-slate-300 transition">
              <input
                type="checkbox"
                checked={settings.platformUpdates}
                onChange={(e) => updateSetting('platformUpdates', e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <div>
                <span className="font-bold text-slate-900 block">🔄 تحديثات طرق الاسترجاع</span>
                <span className="text-[11px] text-slate-500">روابط وبوابات استعادة جديدة</span>
              </div>
            </label>

            {/* Category 3 */}
            <label className="flex items-center gap-2.5 p-3 bg-white rounded-xl border border-slate-200 cursor-pointer hover:border-slate-300 transition">
              <input
                type="checkbox"
                checked={settings.securityTips}
                onChange={(e) => updateSetting('securityTips', e.target.checked)}
                className="w-4 h-4 text-amber-600 rounded focus:ring-amber-500"
              />
              <div>
                <span className="font-bold text-slate-900 block">💡 توجيهات المهندس رقيب</span>
                <span className="text-[11px] text-slate-500">نصائح حماية وتحصين الحسابات</span>
              </div>
            </label>
          </div>
        )}
      </div>

      {/* Filter Tabs & Alerts Feed */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="font-bold text-slate-700 ml-1">تصفية التنبيهات:</span>
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer ${
                filterType === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              الكل ({alerts.length})
            </button>
            <button
              onClick={() => setFilterType('critical')}
              className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer ${
                filterType === 'critical'
                  ? 'bg-red-600 text-white'
                  : 'bg-red-50 text-red-700 hover:bg-red-100'
              }`}
            >
              عاجل
            </button>
            <button
              onClick={() => setFilterType('update')}
              className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer ${
                filterType === 'update'
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
              }`}
            >
              تحديثات الاسترجاع
            </button>
            <button
              onClick={() => setFilterType('tip')}
              className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer ${
                filterType === 'tip'
                  ? 'bg-amber-600 text-white'
                  : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
              }`}
            >
              توجيهات
            </button>
          </div>

          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="text-xs text-blue-600 hover:text-blue-800 font-bold self-start sm:self-auto flex items-center gap-1 cursor-pointer"
            >
              <Check className="w-3.5 h-3.5" />
              <span>تحديد الكل كمقروء</span>
            </button>
          )}
        </div>

        {/* List of Security Alerts */}
        <div className="space-y-3">
          {filteredAlerts.length === 0 ? (
            <div className="text-center py-8 text-xs text-slate-500 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              لا توجد تنبيهات في هذا القسم حالياً.
            </div>
          ) : (
            filteredAlerts.map((alert) => (
              <div
                key={alert.id}
                onClick={() => markAsRead(alert.id)}
                className={`p-4 rounded-2xl border transition flex flex-col sm:flex-row items-start justify-between gap-3 cursor-pointer ${
                  !alert.read
                    ? 'bg-blue-50/40 border-blue-200 hover:border-blue-300 shadow-2xs'
                    : 'bg-slate-50/70 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                        alert.type === 'critical'
                          ? 'bg-red-100 text-red-700 border border-red-200'
                          : alert.type === 'update'
                          ? 'bg-blue-100 text-blue-700 border border-blue-200'
                          : 'bg-amber-100 text-amber-800 border border-amber-200'
                      }`}
                    >
                      {alert.type === 'critical' ? 'تحذير أمني عاجل' : alert.type === 'update' ? 'تحديث استرجاع' : 'توجيه تقني'}
                    </span>
                    {!alert.read && (
                      <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    )}
                    <span className="text-[11px] text-slate-400 font-medium">
                      {alert.date}
                    </span>
                  </div>

                  <h5 className="text-sm font-bold text-slate-900 leading-snug">
                    {alert.title}
                  </h5>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {alert.body}
                  </p>
                </div>

                {alert.actionUrl && (
                  <a
                    href={alert.actionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="self-stretch sm:self-center bg-white hover:bg-slate-100 text-blue-700 border border-slate-200 px-3.5 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition shrink-0 shadow-2xs"
                  >
                    <span>{alert.linkText || 'عرض التفاصيل'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
