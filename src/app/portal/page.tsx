"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface Application {
  id: string;
  university: string;
  course?: string;
  status: string;
}

export default function PortalPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [applications, setApplications] = useState<Application[]>([]);
  const [fetchingApps, setFetchingApps] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    const fetchApplications = async () => {
      if (user) {
        try {
          const q = query(collection(db, "applications"), where("userId", "==", user.uid));
          const querySnapshot = await getDocs(q);
          const apps: Application[] = [];
          querySnapshot.forEach((doc) => {
            apps.push({ id: doc.id, ...doc.data() } as Application);
          });
          setApplications(apps);
        } catch (error) {
          console.error("Error fetching applications:", error);
        } finally {
          setFetchingApps(false);
        }
      }
    };

    if (user) {
      fetchApplications();
    }
  }, [user]);

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="flex flex-1 items-center justify-center min-h-[50vh]">
        <p className="text-on-surface-variant animate-pulse">Loading portal...</p>
      </div>
    );
  }

  if (!user) {
    return null; // Next.js is redirecting in the useEffect
  }

  return (
    <div className="flex flex-1 pt-2 max-w-[1280px] mx-auto w-full">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-surface-container-lowest border-r border-surface-variant flex-shrink-0 hidden lg:flex flex-col py-[48px] px-[24px] custom-shadow z-40">
        <div className="mb-[80px] px-[12px]">
          <p className="font-label-caps text-label-caps text-on-surface-variant mb-[4px]">STUDENT PORTAL</p>
          <h2 className="font-h3 text-h3 text-on-surface">My Dashboard</h2>
        </div>
        <nav className="flex flex-col gap-[12px] flex-1">
          <a className="flex items-center gap-[12px] px-[12px] py-2 rounded-lg bg-surface-container text-primary font-body-md text-body-md font-semibold" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            Overview
          </a>
          <a className="flex items-center gap-[12px] px-[12px] py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors font-body-md text-body-md" href="#">
            <span className="material-symbols-outlined">folder_open</span>
            Document Vault
          </a>
          <a className="flex items-center gap-[12px] px-[12px] py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors font-body-md text-body-md" href="#">
            <span className="material-symbols-outlined">flight_takeoff</span>
            Applications
          </a>
          <a className="flex items-center gap-[12px] px-[12px] py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors font-body-md text-body-md" href="#">
            <span className="material-symbols-outlined">lightbulb</span>
            Recommendations
          </a>
          
          <button onClick={handleLogout} className="flex items-center gap-[12px] px-[12px] py-2 mt-4 rounded-lg text-error hover:bg-error-container transition-colors font-body-md text-body-md text-left">
            <span className="material-symbols-outlined">logout</span>
            Logout
          </button>
        </nav>
        {/* Counselor Widget Mini */}
        <div className="mt-auto bg-surface-container-low rounded-xl p-[12px] flex items-center gap-[12px] cursor-pointer hover:bg-surface-container transition-colors">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
            {user.email ? user.email[0].toUpperCase() : "U"}
          </div>
          <div className="overflow-hidden">
            <p className="font-body-md text-sm font-semibold text-on-surface truncate">{user.email}</p>
            <p className="font-label-caps text-[10px] text-on-surface-variant flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#26D367] block"></span> Online
            </p>
          </div>
        </div>
      </aside>
      
      {/* Main Content Area */}
      <main className="flex-1 p-[24px] lg:p-[80px] overflow-y-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-[48px] gap-[24px]">
          <div>
            <h1 className="font-h1 text-h1 text-on-surface mb-[4px]">Welcome back.</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Here is the latest update on your study abroad journey.</p>
          </div>
          <button className="flex items-center gap-[4px] bg-surface-container-lowest border border-outline-variant text-secondary px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all font-body-md text-body-md">
            <span className="material-symbols-outlined">edit_document</span>
            Edit Profile
          </button>
        </div>
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[24px] lg:gap-[48px]">
          {/* Application Tracker Card (Spans 2 cols) */}
          <div className="col-span-1 md:col-span-2 bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(0,51,102,0.08)] p-[24px] lg:p-[48px] border border-surface-variant flex flex-col relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 opacity-[0.03] pointer-events-none">
              <svg className="text-secondary" fill="none" height="200" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" width="200"><path d="M3 21h18M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16M9 9h6M9 13h6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>
            <div className="flex justify-between items-center mb-[24px] relative z-10">
              <h3 className="font-h3 text-h3 text-on-surface flex items-center gap-[12px]">
                <span className="material-symbols-outlined text-primary-container">school</span>
                Active Applications
              </h3>
              <a className="text-secondary hover:text-secondary-fixed-variant font-body-md text-sm underline decoration-1 underline-offset-4" href="#">View All</a>
            </div>
            <div className="flex flex-col gap-[12px] relative z-10">
              {fetchingApps ? (
                <p className="text-sm text-on-surface-variant">Loading applications...</p>
              ) : applications.length > 0 ? (
                applications.map((app) => (
                  <div key={app.id} className="flex items-center justify-between p-[12px] rounded-lg border border-outline-variant hover:border-[#E3F2FD] hover:shadow-sm transition-all bg-surface-bright">
                    <div className="flex items-center gap-[12px]">
                      <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary font-h3">
                        {app.university.substring(0, 3).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-body-md text-body-md font-semibold text-on-surface">{app.university}</p>
                        <p className="font-body-md text-sm text-on-surface-variant">{app.course || "General Application"}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-[24px]">
                      <span className={`px-3 py-1 rounded-full font-label-caps text-label-caps whitespace-nowrap ${
                        app.status === 'Accepted' ? 'bg-[#26D367]/10 text-[#1e8a46]' : 'bg-[#ff8c00]/10 text-[#904d00]'
                      }`}>
                        {app.status}
                      </span>
                      <span className="material-symbols-outlined text-outline">chevron_right</span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-on-surface-variant">No active applications found.</p>
              )}
            </div>
          </div>
          
          {/* Document Vault Card */}
          <div className="col-span-1 bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(0,51,102,0.08)] p-[24px] lg:p-[48px] border border-surface-variant flex flex-col">
            <h3 className="font-h3 text-h3 text-on-surface mb-[24px] flex items-center gap-[12px]">
              <span className="material-symbols-outlined text-secondary">inventory_2</span>
              Document Vault
            </h3>
            <div className="border-2 border-dashed border-outline-variant rounded-lg p-[24px] text-center mb-[24px] hover:border-secondary transition-colors cursor-pointer bg-surface-bright">
              <span className="material-symbols-outlined text-tertiary text-3xl mb-[4px]">cloud_upload</span>
              <p className="font-body-md text-sm text-on-surface">Drag &amp; drop files or <span className="text-secondary font-semibold">browse</span></p>
              <p className="font-label-caps text-[10px] text-on-surface-variant mt-[4px]">PDF, JPG up to 10MB</p>
            </div>
            <div className="flex flex-col gap-[4px] overflow-y-auto max-h-[150px] pr-2">
              <div className="flex items-center justify-between py-2 border-b border-surface-variant">
                <div className="flex items-center gap-[4px] text-on-surface font-body-md text-sm">
                  <span className="material-symbols-outlined text-secondary text-sm">description</span>
                  Official Transcript.pdf
                </div>
                <span className="material-symbols-outlined text-[#26D367] text-sm">check_circle</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-surface-variant">
                <div className="flex items-center gap-[4px] text-on-surface font-body-md text-sm">
                  <span className="material-symbols-outlined text-secondary text-sm">badge</span>
                  Passport Copy.jpg
                </div>
                <span className="material-symbols-outlined text-[#26D367] text-sm">check_circle</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-[4px] text-on-surface-variant font-body-md text-sm">
                  <span className="material-symbols-outlined text-outline text-sm">pending_actions</span>
                  IELTS Score Report
                </div>
                <span className="font-label-caps text-[10px] text-error bg-error-container px-2 py-0.5 rounded">Missing</span>
              </div>
            </div>
          </div>
          
          {/* Personalized Recommendations */}
          <div className="col-span-1 md:col-span-2 xl:col-span-3 bg-surface-container-lowest rounded-xl shadow-[0px_4px_20px_rgba(0,51,102,0.08)] p-[24px] lg:p-[48px] border border-surface-variant">
            <div className="flex justify-between items-center mb-[24px]">
              <h3 className="font-h3 text-h3 text-on-surface flex items-center gap-[12px]">
                <span className="material-symbols-outlined text-primary-container">explore</span>
                Recommended for You
              </h3>
              <div className="flex gap-[4px]">
                <button className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center text-on-surface hover:bg-surface-container"><span className="material-symbols-outlined text-sm">arrow_left</span></button>
                <button className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center text-on-surface hover:bg-surface-container"><span className="material-symbols-outlined text-sm">arrow_right</span></button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
              <div className="rounded-xl overflow-hidden border border-surface-variant hover:shadow-md hover:border-[#E3F2FD] transition-all group cursor-pointer bg-surface-bright">
                <div className="h-32 bg-surface-container relative overflow-hidden">
                  <img alt="University" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKivE-WwZx-QtF3stq-0XM9ZrMKHyDRAPnM6M6FV3TB3hDc4-fjvByBv3xylqUBtZtc9mZZULHNcy3yKgZkqPqIJmr00cn4BWNoFraGmQO3t0GovhlnFXSq_UpV6ocRKSHkdWgOfgOEADR9wd78z8MVyZnaWeT5oUYIM64aJYZunEs7hmjNe7_SqpnETwZJnWO-UpHTlDc37rdIGQk5ZkGQWSAJw67d0de1CjKojRpqpOcc_mRyI_SMEQw-UZNwxSEoLFmC1OhROfy"/>
                  <div className="absolute top-2 right-2 bg-surface-container-lowest/90 backdrop-blur px-2 py-1 rounded font-label-caps text-[10px] text-on-surface font-bold shadow-sm">95% Match</div>
                </div>
                <div className="p-[12px]">
                  <h4 className="font-body-md font-semibold text-on-surface truncate">University of Melbourne</h4>
                  <p className="font-body-md text-sm text-on-surface-variant mb-[12px]">Australia • Top 50 Global</p>
                  <div className="flex flex-wrap gap-[4px]">
                    <span className="bg-surface-container text-on-surface-variant px-2 py-0.5 rounded font-label-caps text-[10px]">No IELTS Req</span>
                    <span className="bg-surface-container text-on-surface-variant px-2 py-0.5 rounded font-label-caps text-[10px]">Scholarship Avail</span>
                  </div>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-surface-variant hover:shadow-md hover:border-[#E3F2FD] transition-all group cursor-pointer bg-surface-bright hidden md:block">
                <div className="h-32 bg-surface-container relative overflow-hidden">
                  <img alt="University" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAVAq_yeZovrxiF4HFdMeEOcwrYlZhQuJl0CBNzqxdrF5WuizTlWzc-7t-ZwL3QclnYMfoglGEGvu_bK80XWZiCdp09rXrmWpg2XaQ6YYeCIwCtMr5yui7U8_Lkz2a8GLEwLxzoo_VHKuoGIdFTmKIEDPjzOjG99ftdGO6EeJ76JSMuUVBKYVSACNSDTKDz0-Y3ZADlo_rNddp4cgPObrxKUJ9qUMqlx0La3KV3pbijGp0_bcirr2rgcMzHb9rk-cx0wmaZhIcrppk"/>
                  <div className="absolute top-2 right-2 bg-surface-container-lowest/90 backdrop-blur px-2 py-1 rounded font-label-caps text-[10px] text-on-surface font-bold shadow-sm">88% Match</div>
                </div>
                <div className="p-[12px]">
                  <h4 className="font-body-md font-semibold text-on-surface truncate">NUS Singapore</h4>
                  <p className="font-body-md text-sm text-on-surface-variant mb-[12px]">Singapore • Tech Hub</p>
                  <div className="flex flex-wrap gap-[4px]">
                    <span className="bg-surface-container text-on-surface-variant px-2 py-0.5 rounded font-label-caps text-[10px]">Fast Track</span>
                  </div>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-surface-variant hover:shadow-md hover:border-[#E3F2FD] transition-all group cursor-pointer bg-surface-bright hidden lg:block">
                <div className="h-32 bg-surface-container relative overflow-hidden">
                  <img alt="University" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKWzZxpw_OYazzj5buNyIcnlIFxArrrwJ41WRa20YGY5CdfzQS5KDX46WQb0VEEJ7V90W9nqubxksJ3tTQ9tdqsE2SuWeDOsPMDdLfR76VYL1nE393Xdky5kVVydq1Q3Fjz1QDJEgC_CWEZvcYf5jV2N0mUAgeR41jGNB_hRTK2s10Zg5QoWAE7nIy6k4QLvWMylIJsEsELtyCk52d_Hr08WEQx5EuT5RjPn0gukOMeytY4OWkXOfL21VHlPArS6bG6yhKeMlqVShs"/>
                  <div className="absolute top-2 right-2 bg-surface-container-lowest/90 backdrop-blur px-2 py-1 rounded font-label-caps text-[10px] text-on-surface font-bold shadow-sm">82% Match</div>
                </div>
                <div className="p-[12px]">
                  <h4 className="font-body-md font-semibold text-on-surface truncate">Trinity College</h4>
                  <p className="font-body-md text-sm text-on-surface-variant mb-[12px]">Ireland • High Employability</p>
                  <div className="flex flex-wrap gap-[4px]">
                    <span className="bg-surface-container text-on-surface-variant px-2 py-0.5 rounded font-label-caps text-[10px]">Work Visa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
