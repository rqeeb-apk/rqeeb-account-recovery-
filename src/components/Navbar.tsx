import React, { useState } from 'react';
import { ShieldAlert, ExternalLink, Send, MessageCircle, Download, Smartphone } from 'lucide-react';
import { OWNER_CONTACT } from '../data/ownerData';
import { PlatformConfig } from '../types';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface NavbarProps {
  currentPlatform: PlatformConfig;
  onOpenInstallModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPlatform, onOpenInstallModal }) => {
  const { isInstallable, install } = usePWAInstall();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 to-rose-600 text-white flex items-center justify-center shadow-xs">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm sm:text-base md:text-lg font-extrabold text-slate-900 leading-tight">
                المهندس الاستشاري رقيب
              </h1>
              <span className="text-[10px] sm:text-xs bg-red-100 text-red-700 font-bold px-2 py-0.5 rounded-full border border-red-200">
                استرجاع الحسابات
              </span>
            </div>
            <p className="text-[11px] text-slate-500 hidden sm:block">
              {OWNER_CONTACT.brandName} • بوابات الطوارئ الرسمية لجميع المنصات
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* Notification Bell Button */}
          <a
            href="#notification-center-section"
            className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 transition cursor-pointer"
            id="nav-btn-notifications"
            title="التنبيهات الأمنية والتحديثات"
          >
            <span className="relative flex">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75 top-0 right-0"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600 top-0 right-0"></span>
            </span>
            <svg className="w-4 h-4 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </a>

          {/* In-App Install Button */}
          <button
            onClick={() => {
              if (isInstallable) {
                install();
              } else if (onOpenInstallModal) {
                onOpenInstallModal();
              }
            }}
            className="flex items-center gap-1.5 bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 text-xs font-bold px-2.5 sm:px-3 py-2 rounded-xl transition cursor-pointer"
            id="nav-btn-install-pwa"
            title="تثبيت المنصة في الجوال"
          >
            <Download className="w-3.5 h-3.5 text-blue-600" />
            <span className="hidden sm:inline">تثبيت التطبيق</span>
            <span className="sm:hidden text-[11px]">تثبيت</span>
          </button>

          {/* Telegram Bot */}
          <a
            href={OWNER_CONTACT.telegramBotUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 bg-sky-50 text-sky-700 hover:bg-sky-100 border border-sky-200 text-xs font-bold px-3 py-2 rounded-xl transition"
            id="nav-telegram-bot-link"
            title="بوت التيليجرام"
          >
            <Send className="w-3.5 h-3.5" />
            <span>بوت التيليجرام</span>
          </a>

          {/* Owner WhatsApp */}
          <a
            href={OWNER_CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold px-2.5 sm:px-3.5 py-2 rounded-xl transition shadow-xs"
            id="nav-owner-whatsapp"
            title="تواصل مع المهندس رقيب"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden md:inline">محادثة المهندس</span>
            <span className="md:hidden">واتساب</span>
          </a>

          {/* Direct Platform Link */}
          <a
            href={currentPlatform.officialRecoveryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-3 py-2 rounded-xl transition shadow-xs"
            id="btn-open-current-platform-nav"
          >
            <span>بوابة {currentPlatform.nameAr}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
};
