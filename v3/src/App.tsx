/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Benefits } from './components/Benefits';
import { Products } from './components/Products';
import { TechStack } from './components/TechStack';
import { UseCases } from './components/UseCases';
import { Steps } from './components/Steps';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans selection:bg-indigo-500/30">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Benefits />
        <Products />
        <TechStack />
        <UseCases />
        <Steps />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
