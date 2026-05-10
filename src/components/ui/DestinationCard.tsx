import React from 'react';

interface DestinationCardProps {
  country: string;
  flagUrl: string;
  region: string;
  avgTuition: string;
  workRights: string;
  topUniversities: string[];
  icon: string;
}

export function DestinationCard({
  country,
  flagUrl,
  region,
  avgTuition,
  workRights,
  topUniversities,
  icon,
}: DestinationCardProps) {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0px_4px_20px_rgba(0,51,102,0.08)] hover:-translate-y-1 hover:shadow-[0px_8px_24px_rgba(0,51,102,0.12)] border border-transparent hover:border-[#E3F2FD] transition-all duration-300 relative overflow-hidden group cursor-pointer flex flex-col h-full">
      <div className="absolute -bottom-8 -right-8 w-48 h-48 opacity-5 pointer-events-none text-on-secondary-fixed">
        <span className="material-symbols-outlined text-[150px]">{icon}</span>
      </div>
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className="flex items-center gap-2 shrink-0">
          <h3 className="font-h2 text-h2 text-on-background">
            {country}
          </h3>
          <img 
            src={flagUrl} 
            alt={country} 
            className="w-8 h-5 object-cover rounded-sm inline-block shrink-0 shadow-sm" 
          />
        </div>
        <span className="bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps px-2 py-1 rounded-sm border border-surface-variant">
          {region}
        </span>
      </div>
      <div className="space-y-3 mb-8 relative z-10 flex-grow">
        <div className="flex justify-between border-b border-surface-variant/50 pb-2">
          <span className="font-body-md text-body-md text-on-surface-variant">Avg. Tuition</span>
          <span className="font-h3 text-h3 text-on-background text-base">{avgTuition}</span>
        </div>
        <div className="flex justify-between border-b border-surface-variant/50 pb-2">
          <span className="font-body-md text-body-md text-on-surface-variant">Work Rights</span>
          <span className="font-h3 text-h3 text-on-background text-base">{workRights}</span>
        </div>
      </div>
      <div className="relative z-10 mt-auto">
        <h4 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-2">Top Universities</h4>
        <ul className="font-body-md text-body-md text-on-surface space-y-1">
          {topUniversities.map((uni, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              {uni}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
