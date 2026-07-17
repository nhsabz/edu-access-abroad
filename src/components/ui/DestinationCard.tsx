import React from 'react';

interface DestinationCardProps {
  country: string;
  flagUrl: string;
  badge: string;
  avgTuition: string;
  workRights: string;
  postStudy: string;
  prPathway: string;
}

export function DestinationCard({
  country,
  flagUrl,
  badge,
  avgTuition,
  workRights,
  postStudy,
  prPathway,
}: DestinationCardProps) {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0px_4px_20px_rgba(0,51,102,0.08)] hover:-translate-y-1 hover:shadow-[0px_8px_24px_rgba(0,51,102,0.12)] border border-transparent hover:border-[#E3F2FD] transition-all duration-300 flex flex-col h-full">
      <div className="flex justify-between items-start mb-6 gap-2">
        <div className="flex items-center gap-2 shrink-0">
          <h3 className="text-xl md:text-2xl font-bold text-on-background">
            {country}
          </h3>
          <img 
            src={flagUrl} 
            alt={country} 
            className="w-8 h-5 object-cover rounded-sm inline-block shrink-0 shadow-sm" 
          />
        </div>
        {badge && (
          <span className="bg-primary-container text-on-primary-container font-label-caps text-label-caps px-2 py-1 rounded-sm border border-primary/20 text-[10px] text-right ml-auto leading-tight">
            {badge}
          </span>
        )}
      </div>
      <div className="space-y-3 mb-2 flex-grow">
        <div className="flex justify-between items-center border-b border-surface-variant/50 pb-2 gap-2">
          <span className="font-body-md text-body-md text-on-surface-variant whitespace-nowrap">Tuition</span>
          <span className="font-semibold text-on-background text-right leading-tight">{avgTuition}</span>
        </div>
        <div className="flex justify-between items-center border-b border-surface-variant/50 pb-2 gap-2">
          <span className="font-body-md text-body-md text-on-surface-variant whitespace-nowrap">Work Rights</span>
          <span className="font-semibold text-on-background text-right leading-tight">{workRights}</span>
        </div>
        <div className="flex justify-between items-center border-b border-surface-variant/50 pb-2 gap-2">
          <span className="font-body-md text-body-md text-on-surface-variant whitespace-nowrap">Post-Study</span>
          <span className="font-semibold text-on-background text-right leading-tight">{postStudy}</span>
        </div>
        <div className="flex justify-between items-center border-b border-surface-variant/50 pb-2 gap-2">
          <span className="font-body-md text-body-md text-on-surface-variant whitespace-nowrap">PR Pathway</span>
          <span className="font-semibold text-on-background text-right leading-tight">{prPathway}</span>
        </div>
      </div>
    </div>
  );
}
