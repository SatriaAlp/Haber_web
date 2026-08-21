/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { FeaturedMenu } from "./components/FeaturedMenu";
import { Experience } from "./components/Experience";
import { EventWedding } from "./components/EventWedding";
import { EventLandingPage } from "./components/event/EventLandingPage";
import { Gallery } from "./components/Gallery";
import { ReservationCTA } from "./components/ReservationCTA";
import { Location } from "./components/Location";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { WeddingLandingPage } from "./components/wedding/WeddingLandingPage";

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<"home" | "wedding" | "event">(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname.toLowerCase();
      const search = window.location.search.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (
        path === "/wedding" ||
        path.startsWith("/wedding/") ||
        path === "/elmour" ||
        search.includes("page=wedding") ||
        hash === "#wedding-page"
      ) {
        return "wedding";
      }
      if (path === "/event" || path.startsWith("/event/") || search.includes("page=event")) {
        return "event";
      }
    }
    return "home";
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      const search = window.location.search.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (
        path === "/wedding" ||
        path.startsWith("/wedding/") ||
        path === "/elmour" ||
        search.includes("page=wedding") ||
        hash === "#wedding-page"
      ) {
        setCurrentRoute("wedding");
      } else if (path === "/event" || path.startsWith("/event/") || search.includes("page=event")) {
        setCurrentRoute("event");
      } else {
        setCurrentRoute("home");
      }
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  if (currentRoute === "wedding") {
    return <WeddingLandingPage />;
  }

  if (currentRoute === "event") {
    return <EventLandingPage />;
  }

  return (
    <div className="min-h-screen bg-white text-[#1F2937] flex flex-col font-sans selection:bg-[#B88E2F]/25 selection:text-[#18110E]">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Landing Sections */}
      <main id="main-content" className="flex-1">
        <Hero />
        <Experience />
        <Gallery />
        <About />
        <FeaturedMenu />
        <EventWedding />
        <ReservationCTA />
        <Location />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
}
