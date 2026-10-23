/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PlatformId } from './types';
import { PLATFORMS_DATA } from './data/platformsData';
import { Navbar } from './components/Navbar';
import { PWAInstallBanner } from './components/PWAInstallBanner';
import { PlatformTabs } from './components/PlatformTabs';
import { AccountTargetBanner } from './components/AccountTargetBanner';
import { OwnerContactCard } from './components/OwnerContactCard';
import { CriticalHackedSolution } from './components/CriticalHackedSolution';
import { ReadinessAssessment } from './components/ReadinessAssessment';
import { InteractiveTroubleshooter } from './components/InteractiveTroubleshooter';
import { StepByStepGuide } from './components/StepByStepGuide';
import { AllPlatformsOverview } from './components/AllPlatformsOverview';
import { PostRecoverySecurity } from './components/PostRecoverySecurity';
import { OfficialLinksCard } from './components/OfficialLinksCard';
import { ScamWarning } from './components/ScamWarning';
import { Footer } from './components/Footer';

export default function App() {
  const [activePlatformId, setActivePlatformId] = useState<PlatformId>('google');

  const currentPlatform = PLATFORMS_DATA[activePlatformId] || PLATFORMS_DATA.google;

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 font-sans selection:bg-red-100 selection:text-red-900 antialiased">
      <Navbar currentPlatform={currentPlatform} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 space-y-4 sm:space-y-6">
        {/* PWA Mobile & Desktop Install Banner */}
        <PWAInstallBanner />

        {/* Identity & Main Advisory Banner: المهندس الاستشاري رقيب */}
        <AccountTargetBanner currentPlatform={currentPlatform} />

        {/* Platform Selector Tabs */}
        <PlatformTabs 
          activePlatformId={activePlatformId} 
          onSelectPlatform={(id) => {
            setActivePlatformId(id);
            window.scrollTo({ top: 120, behavior: 'smooth' });
          }} 
        />

        {/* Owner Contact Card (Phone +967785502919, Email, Websites, Telegram Bot) */}
        <OwnerContactCard />

        {/* Immediate Platform-Specific Hacked Solution (Passkey, 2FA, PIN, etc.) */}
        <CriticalHackedSolution currentPlatform={currentPlatform} />

        {/* Readiness assessment and success probability */}
        <ReadinessAssessment currentPlatform={currentPlatform} />

        {/* Interactive troubleshooter for common platform hurdles */}
        <InteractiveTroubleshooter currentPlatform={currentPlatform} />

        {/* Step-by-step roadmap */}
        <StepByStepGuide currentPlatform={currentPlatform} />

        {/* All Platforms Emergency Matrix */}
        <AllPlatformsOverview 
          onSelectPlatform={(id) => {
            setActivePlatformId(id);
            window.scrollTo({ top: 120, behavior: 'smooth' });
          }} 
        />

        {/* Post recovery security checklist */}
        <PostRecoverySecurity currentPlatform={currentPlatform} />

        {/* Official Direct Links */}
        <OfficialLinksCard currentPlatform={currentPlatform} />

        {/* Universal Scam Warning */}
        <ScamWarning />
      </main>

      <Footer />
    </div>
  );
}
