"use client";

import { useState } from 'react';
import { DestinationCard } from '@/components/ui/DestinationCard';

const getFlagUrl = (code: string) => `https://flagcdn.com/w40/${code.toLowerCase()}.png`;

const DESTINATIONS = [
  {
    country: "Germany",
    flagUrl: getFlagUrl("de"),
    avgTuition: "€0–500/semester",
    workRights: "20 hrs/week",
    postStudy: "18-month job-seeker",
    prPathway: "5 years",
    badge: "🏆 Free Tuition Available"
  },
  {
    country: "Finland",
    flagUrl: getFlagUrl("fi"),
    avgTuition: "€10,000–18,000 / year",
    workRights: "Unlimited",
    postStudy: "2-year permit",
    prPathway: "4 years",
    badge: "Safe & Highly Ranked"
  },
  {
    country: "Italy",
    flagUrl: getFlagUrl("it"),
    avgTuition: "€1,000–4,000 / year",
    workRights: "20 hrs/week",
    postStudy: "1-year job-search",
    prPathway: "5 years",
    badge: "Low Tuition + Culture"
  },
  {
    country: "Sweden",
    flagUrl: getFlagUrl("se"),
    avgTuition: "€8,000–15,000 / year",
    workRights: "Unlimited",
    postStudy: "12-month permit",
    prPathway: "5 years",
    badge: "Strong Job Market"
  },
  {
    country: "Denmark",
    flagUrl: getFlagUrl("dk"),
    avgTuition: "€10,000–16,000 / year",
    workRights: "20 hrs/week",
    postStudy: "3-year permit",
    prPathway: "5 years",
    badge: "Highest EU Salaries"
  },
  {
    country: "Austria",
    flagUrl: getFlagUrl("at"),
    avgTuition: "€726–1,500 / semester",
    workRights: "20 hrs/week",
    postStudy: "12-month job-seeker",
    prPathway: "Red-White-Red Card",
    badge: "Very Low Tuition"
  },
  {
    country: "Czech Republic",
    flagUrl: getFlagUrl("cz"),
    avgTuition: "€1,000–5,000 / year",
    workRights: "During studies",
    postStudy: "Job-seeker available",
    prPathway: "5 years",
    badge: "Very Affordable"
  },
  {
    country: "Poland",
    flagUrl: getFlagUrl("pl"),
    avgTuition: "€2,000–4,000 / year",
    workRights: "Part-time allowed",
    postStudy: "Post-study permit",
    prPathway: "5 years",
    badge: "Budget-Friendly"
  },
  {
    country: "Croatia",
    flagUrl: getFlagUrl("hr"),
    avgTuition: "€1,500–4,000 / year",
    workRights: "20 hrs/week",
    postStudy: "Stay permit",
    prPathway: "5 years",
    badge: "Hidden Gem"
  },
  {
    country: "Malta",
    flagUrl: getFlagUrl("mt"),
    avgTuition: "€5,000–9,000 / year",
    workRights: "During study",
    postStudy: "EU residency path",
    prPathway: "EU pathway",
    badge: "English-First EU"
  },
  {
    country: "Ireland",
    flagUrl: getFlagUrl("ie"),
    avgTuition: "€10,000–25,000 / year",
    workRights: "20 hrs/week",
    postStudy: "2-year stay back",
    prPathway: "5 years",
    badge: "English-Speaking"
  },
  {
    country: "Netherlands",
    flagUrl: getFlagUrl("nl"),
    avgTuition: "€8,000–20,000 / year",
    workRights: "16 hrs/week",
    postStudy: "1-year orientation",
    prPathway: "5 years",
    badge: "Innovation Hub"
  },
  {
    country: "France",
    flagUrl: getFlagUrl("fr"),
    avgTuition: "€3,000–10,000 / year",
    workRights: "964 hrs/year",
    postStudy: "APS job-search",
    prPathway: "5 years",
    badge: "Low Public Tuition"
  },
  {
    country: "Hungary",
    flagUrl: getFlagUrl("hu"),
    avgTuition: "€2,000–6,000 / year",
    workRights: "During studies",
    postStudy: "Job-seeker",
    prPathway: "3 years",
    badge: "🎓 Scholarships Available"
  },
  {
    country: "Norway",
    flagUrl: getFlagUrl("no"),
    avgTuition: "€0 / year (public)",
    workRights: "20 hrs/week",
    postStudy: "Job-seeker available",
    prPathway: "3 years",
    badge: "Free Tuition Available"
  },
  {
    country: "Belgium",
    flagUrl: getFlagUrl("be"),
    avgTuition: "€4,000–9,000 / year",
    workRights: "20 hrs/week",
    postStudy: "Unlimited search",
    prPathway: "5 years",
    badge: "Central Europe Hub"
  },
  {
    country: "Spain",
    flagUrl: getFlagUrl("es"),
    avgTuition: "€1,500–7,000 / year",
    workRights: "20 hrs/week",
    postStudy: "1-year job-search",
    prPathway: "5 years",
    badge: "Affordable & Sunny"
  },
  {
    country: "Portugal",
    flagUrl: getFlagUrl("pt"),
    avgTuition: "€1,000–4,000 / year",
    workRights: "20 hrs/week",
    postStudy: "1-year job-search",
    prPathway: "5 years",
    badge: "Fastest-Growing EU"
  }
];

export default function DestinationsPage() {
  const [regionFilter, setRegionFilter] = useState("All");

  const filteredDestinations = DESTINATIONS; // removed region filter as all are Europe

  return (
    <>
      <main className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 py-xl overflow-hidden">
        {/* Header Section */}
        <section className="mb-lg text-center md:text-left">
          <h1 className="font-h1 text-h1 text-on-background mb-sm">Explore Global Destinations</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Discover top universities, compare tuition fees, and explore post-study opportunities across the world's most sought-after study locations.</p>
        </section>

        {/* Featured Destination Hero (Germany) */}
        <section className="mb-xl relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0px_4px_20px_rgba(0,51,102,0.08)] border border-transparent hover:border-secondary-fixed transition-colors duration-300 group">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
            {/* Content Area */}
            <div className="p-xl flex flex-col justify-center relative z-10 bg-surface-container-lowest">
              <div className="mb-md">
                <span className="inline-block bg-primary-container text-on-primary-container font-label-caps text-label-caps py-xs px-sm rounded-full mb-sm">Featured Destination</span>
                <h2 className="font-h1 text-h1 text-on-background mb-xs flex items-center gap-sm">
                  Germany
                  <img alt="Germany Flag" className="w-8 h-auto shadow-sm rounded-sm" src="https://flagcdn.com/w40/de.png"/>
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">Experience world-class education with free or low tuition, cutting-edge research facilities, and a strong economy.</p>
              </div>
              <div className="grid grid-cols-2 gap-md mb-lg">
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Avg. Tuition</p>
                  <p className="font-h3 text-h3 text-on-background">Free / Low (Public)</p>
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Post-Study Work</p>
                  <p className="font-h3 text-h3 text-on-background">18 Months</p>
                </div>
              </div>
              <a 
                href="https://www.study-in-germany.de/en/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative z-20 cursor-pointer bg-primary text-primary-foreground font-h3 text-h3 py-3 px-6 rounded-DEFAULT hover:opacity-90 transition-opacity w-fit flex items-center gap-2"
              >
                Explore German Universities
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
            {/* Image / Landmark Area */}
            <div className="relative bg-secondary-fixed hidden md:block overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&w=2070&q=80')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/50 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="mb-lg">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider mr-2">Filter By:</span>
            <div className="relative">
              <select 
                value={regionFilter}
                onChange={(e) => setRegionFilter(e.target.value)}
                className="appearance-none bg-surface-container-lowest border border-surface-variant text-on-surface font-body-md text-body-md py-2 pl-3 pr-10 rounded-DEFAULT focus:outline-none focus:border-secondary focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer"
              >
                <option value="All">Region (All)</option>
                <option value="Europe">Europe</option>
                <option value="North America">North America</option>
                <option value="Oceania">Oceania</option>
                <option value="Asia">Asia</option>
              </select>
              <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
            </div>
            {/* Kept existing disabled filters for UI purposes, could also be hooked up if data had enough variation */}
            <div className="relative opacity-60 cursor-not-allowed" title="Coming soon">
              <select disabled className="appearance-none bg-surface-container-lowest border border-surface-variant text-on-surface font-body-md text-body-md py-2 pl-3 pr-10 rounded-DEFAULT focus:outline-none transition-all cursor-not-allowed">
                <option>Tuition Fee (Any)</option>
              </select>
              <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
            </div>
            <div className="relative opacity-60 cursor-not-allowed" title="Coming soon">
              <select disabled className="appearance-none bg-surface-container-lowest border border-surface-variant text-on-surface font-body-md text-body-md py-2 pl-3 pr-10 rounded-DEFAULT focus:outline-none transition-all cursor-not-allowed">
                <option>Post-Study Work (Any)</option>
              </select>
              <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
            </div>
            <button 
              onClick={() => setRegionFilter("All")}
              className="ml-auto text-secondary font-label-caps text-label-caps flex items-center gap-1 hover:text-on-secondary-container transition-colors"
            >
              <span className="material-symbols-outlined text-sm">restart_alt</span>
              Clear Filters
            </button>
          </div>
        </section>

        {/* Destinations Grid (Bento style) */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-xl">
          {filteredDestinations.map((dest, i) => (
            <DestinationCard 
              key={i}
              country={dest.country}
              flagUrl={dest.flagUrl}
              badge={dest.badge}
              avgTuition={dest.avgTuition}
              workRights={dest.workRights}
              postStudy={dest.postStudy}
              prPathway={dest.prPathway}
            />
          ))}
        </section>
        
        {filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-on-surface-variant">No destinations found for the selected filters.</p>
          </div>
        )}
      </main>
    </>
  );
}
