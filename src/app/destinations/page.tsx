"use client";

import { useState } from 'react';
import { DestinationCard } from '@/components/ui/DestinationCard';

const DESTINATIONS = [
  {
    country: "USA",
    flagUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVtTNp3kXJiedhPDMOiEvlfXjgdl9vWRD-3q6T74EBAZyxKRlBZ6Q1gZMzic6jLFrfXK35DL10eGfpxWWZw8l6raOCvCllFvB1qLtmbRxK4aSbozFo9bAO2qjziO5zKOdVTQW_YKJQ8s161oAuMMKt6cY43vXRVv63is3o7Mgj8hm2O-I8lPHbE5btZtZQC29UXSuLfYXXoHQS8WK5EFFYIFcmXfFwC2Aw9OSr3ppOu0BM_zJmQKILfaT0dl1KiAdjEsrVe8VIhHki",
    region: "North America",
    avgTuition: "$20k - $50k/yr",
    workRights: "Up to 3 Years (STEM)",
    topUniversities: ["MIT", "Stanford University", "Harvard University"],
    icon: "account_balance"
  },
  {
    country: "Canada",
    flagUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6PWrfIsR9mxb2OCPNl5Q5-r-UhU6JKkPzEJyxnruZMFMgbn5is5zDFnobdWTzlrj-4M1D4Xb3I3iHAjmsu6N_MctWrcexJFkXM4hHOex1ryLR1vS-vJWr1d5VT8B9yiWKUiPplzjao1bwwLBHdog1LduCG0iPZ8KWLmxLViWJMTWtnZp2oNnwnnj0-hZ1kXdEP49VbZObl8V0AHmOyr7ukr15BQc32l4PtQhQOYKpsxki7vEOacrCHdRbFroiSPgrhlxRVqh1Fdv2",
    region: "North America",
    avgTuition: "CAD $15k - $30k/yr",
    workRights: "Up to 3 Years (PGWP)",
    topUniversities: ["University of Toronto", "UBC", "McGill University"],
    icon: "park"
  },
  {
    country: "Australia",
    flagUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfP3gNfQUCpQmGwLxtf-8QtWTzZ0f-6iyQWbKoxYxFvQkytiPLfSWNZwpRlA7hB4VBZTqp6DW8AVEtMkDTaF3IjZytWFlAjRjnjbESW9fed6m-701nMKByTwxZNdkxlFxbekH1sfVk75WG6_IpabrdFud95x38GF2WdSFxJEHKk1Txa4TVVCPePV1sAjVLqsAQ1B5AogsFnov9e6MXg4lVMOUYUhQ7jvPgvc0t5AhkA85GvoLf7WxEYNfAi9G0YHXYS4-iCJwatEgl",
    region: "Oceania",
    avgTuition: "AUD $20k - $45k/yr",
    workRights: "2 - 4 Years",
    topUniversities: ["University of Melbourne", "UNSW Sydney", "University of Sydney"],
    icon: "sailing"
  },
  {
    country: "Germany",
    flagUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
    region: "Europe",
    avgTuition: "Free / Low (Public)",
    workRights: "18 Months",
    topUniversities: ["TUM", "LMU Munich", "Heidelberg"],
    icon: "castle"
  },
  {
    country: "Sweden",
    flagUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/2560px-Flag_of_Sweden.svg.png",
    region: "Europe",
    avgTuition: "€8k - €15k/yr",
    workRights: "12 Months",
    topUniversities: ["Lund University", "KTH Royal Institute", "Uppsala University"],
    icon: "water"
  },
  {
    country: "Netherlands",
    flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/2560px-Flag_of_the_Netherlands.svg.png",
    region: "Europe",
    avgTuition: "€8k - €20k/yr",
    workRights: "1 Year (Orientation Year)",
    topUniversities: ["University of Amsterdam", "Delft University", "Wageningen"],
    icon: "directions_bike"
  },
  {
    country: "Finland",
    flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/2560px-Flag_of_Finland.svg.png",
    region: "Europe",
    avgTuition: "€10k - €18k/yr",
    workRights: "2 Years",
    topUniversities: ["University of Helsinki", "Aalto University", "University of Turku"],
    icon: "ac_unit"
  },
  {
    country: "Denmark",
    flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/2560px-Flag_of_Denmark.svg.png",
    region: "Europe",
    avgTuition: "€10k - €16k/yr",
    workRights: "3 Years",
    topUniversities: ["University of Copenhagen", "Aarhus University", "DTU"],
    icon: "waves"
  }
];

export default function DestinationsPage() {
  const [regionFilter, setRegionFilter] = useState("All");

  const filteredDestinations = DESTINATIONS.filter(dest => {
    if (regionFilter === "All") return true;
    return dest.region === regionFilter;
  });

  return (
    <>
      <main className="max-w-[1280px] mx-auto px-8 py-xl">
        {/* Header Section */}
        <section className="mb-lg text-center md:text-left">
          <h1 className="font-h1 text-h1 text-on-background mb-sm">Explore Global Destinations</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Discover top universities, compare tuition fees, and explore post-study opportunities across the world's most sought-after study locations.</p>
        </section>

        {/* Featured Destination Hero (UK) */}
        <section className="mb-xl relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0px_4px_20px_rgba(0,51,102,0.08)] border border-transparent hover:border-secondary-fixed transition-colors duration-300 group">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
            {/* Content Area */}
            <div className="p-xl flex flex-col justify-center relative z-10 bg-surface-container-lowest">
              <div className="mb-md">
                <span className="inline-block bg-primary-container text-on-primary-container font-label-caps text-label-caps py-xs px-sm rounded-full mb-sm">Featured Destination</span>
                <h2 className="font-h1 text-h1 text-on-background mb-xs flex items-center gap-sm">
                  United Kingdom
                  <img alt="UK Flag" className="w-8 h-auto shadow-sm rounded-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqY9ScdP8gc0hSuBX7hzW4FBwDdXwXVLBAjwqOVL8hbk0EumTt0hrdIvfsXEHJ1wJotPDcj_6PyE7JW-tjVf06gQO48jCSZ19Iw3w4PyBENEa8VjY8f6vfSBKZTvbU8y2MS5RKMlIFt5xOWz4S7YQV3URDnGVSNXVW7I_waCiMqMJZHH3ZXZnvhhzTS0zFdaJ51tBn7tt-33ZqjEfFSEwcKwYjkr-W2WOSI42AzeZiW9hzbLq7ADLffBoTnQMhYMfLsbqMHu2cgWk7"/>
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">Experience world-class education steeped in history, with cutting-edge research facilities and vibrant student cities.</p>
              </div>
              <div className="grid grid-cols-2 gap-md mb-lg">
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Avg. Tuition</p>
                  <p className="font-h3 text-h3 text-on-background">£15k - £35k / yr</p>
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Post-Study Work</p>
                  <p className="font-h3 text-h3 text-on-background">Up to 2 Years</p>
                </div>
              </div>
              <button className="bg-primary text-primary-foreground font-h3 text-h3 py-3 px-6 rounded-DEFAULT hover:opacity-90 transition-opacity w-fit flex items-center gap-2">
                Explore UK Universities
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
            {/* Image / Landmark Area */}
            <div className="relative bg-secondary-fixed hidden md:block overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBPiQ909nnZb-U9piMPlwSTkCdcmd__qFp0uOMCxlj5rPz_iB-st7BEeS2rvhSUaHP6pILCcDZr_XYO8owHyZzVtJDz7LDN9AWGNv-3JB4R3_mlCSETfo77aexg7G_eRr_6ytIRRTIGiBQF5N3dZmo5kaCxdZYDAT5CJK-_Tvk0D8VdDsYBHVHlKJZOa6wCi-SLXP6_P9fWrG2v7EiDcLHHBf2N2wp8aec0JwF6Mahi3BdFGKyLQYxK1Q5gGtjn4MJhf86xQNKWQlHF')" }}></div>
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
              region={dest.region}
              avgTuition={dest.avgTuition}
              workRights={dest.workRights}
              topUniversities={dest.topUniversities}
              icon={dest.icon}
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
