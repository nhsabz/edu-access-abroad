import { LeadForm } from '@/components/ui/LeadForm';

export default function ServicesPage() {
  return (
    <>
      <section className="mb-xl relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-[0px_4px_20px_rgba(0,51,102,0.08)] mt-12 mx-8 max-w-[1280px] xl:mx-auto">
        <div className="absolute inset-0 z-0">
          <img alt="" className="w-full h-full object-cover opacity-[0.03] grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByAD2M28AShnqymCt1FjshCJLoOE5-LtUTLBzvf6iN7hdjN51PbM757zAaj_iet57q7hHCH4zngwq5KbaeTDRe3O3Haa7WiQXiMH2ltLxbNOw4yM8pwYwdEAtjsXuTjbYxG7J-YhBhS5Tk4RFNUglJIuvU1AA5h_rBYnMkMfgLy5JzSNg3Yw-4q2bZtvaWtWNozMjVG3e6CFYV7OHw_iE4jyAuYyqtL8ZS6qvq77euqDgOVWNbnefclDeauPlrnlpflbr95hkYUK5r"/>
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/90 to-transparent"></div>
        </div>
        <div className="relative z-10 p-12 md:p-16 max-w-3xl">
          <h1 className="font-h1 text-h1 text-on-background mb-4">Our Services</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Navigate your global education journey with clarity and confidence. Our comprehensive suite of services is designed to streamline every step, from initial counseling to your final visa approval.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative max-w-[1280px] mx-auto px-8 mb-xl">
        <div className="lg:col-span-8 space-y-lg">
          {/* Service 1 */}
          <article className="bg-surface-container-lowest rounded-xl p-8 shadow-[0px_4px_20px_rgba(0,51,102,0.08)] border border-transparent hover:border-secondary-fixed/50 transition-all duration-300 group" id="counseling">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[32px] text-on-secondary-container">school</span>
              </div>
              <div>
                <h2 className="font-h2 text-h2 text-on-background mb-2">Student Counseling</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Expert guidance to help you identify the right course and university that aligns with your career aspirations and academic profile.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-h3 text-h3 text-on-background mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">timeline</span>
                  Process Timeline
                </h3>
                <div className="relative border-l-2 border-surface-variant ml-3 space-y-6 pb-2">
                  <div className="relative pl-6">
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-surface-container-lowest border-2 border-primary"></div>
                    <h4 className="font-label-caps text-label-caps text-on-background uppercase mb-1">Step 1: Discovery</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm">Comprehensive assessment of your goals, academic history, and preferences.</p>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-surface-container-lowest border-2 border-primary"></div>
                    <h4 className="font-label-caps text-label-caps text-on-background uppercase mb-1">Step 2: Analysis</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm">We map your profile against global university requirements and trends.</p>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary border-2 border-primary"></div>
                    <h4 className="font-label-caps text-label-caps text-on-background uppercase mb-1">Step 3: Roadmap</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm">Delivery of a tailored shortlist and actionable application strategy.</p>
                  </div>
                </div>
              </div>
              <div className="bg-surface rounded-lg p-6 border border-surface-variant">
                <h3 className="font-h3 text-h3 text-on-background mb-4 text-lg flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">help_center</span>
                  Common Questions
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-label-caps text-label-caps text-on-background mb-1">Is the initial consultation free?</p>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm">Yes, our preliminary 30-minute discovery call is completely complementary.</p>
                  </div>
                  <div className="h-[1px] bg-outline-variant/30 w-full"></div>
                  <div>
                    <p className="font-label-caps text-label-caps text-on-background mb-1">How many universities will you suggest?</p>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm">We typically provide a curated list of 5-8 institutions spanning aspirational, target, and safe categories.</p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Service 2 */}
          <article className="bg-surface-container-lowest rounded-xl p-8 shadow-[0px_4px_20px_rgba(0,51,102,0.08)] border border-transparent hover:border-secondary-fixed/50 transition-all duration-300 group" id="test-prep">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[32px] text-on-primary-fixed">menu_book</span>
              </div>
              <div>
                <h2 className="font-h2 text-h2 text-on-background mb-2">English Test Prep</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Rigorous, targeted training programs for IELTS and TOEFL designed to help you achieve the required bands for your dream institution.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-h3 text-h3 text-on-background mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">timeline</span>
                  Process Timeline
                </h3>
                <div className="relative border-l-2 border-surface-variant ml-3 space-y-6 pb-2">
                  <div className="relative pl-6">
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-surface-container-lowest border-2 border-primary"></div>
                    <h4 className="font-label-caps text-label-caps text-on-background uppercase mb-1">Step 1: Diagnostics</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm">Full-length baseline test to identify specific strengths and weaknesses.</p>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-surface-container-lowest border-2 border-primary"></div>
                    <h4 className="font-label-caps text-label-caps text-on-background uppercase mb-1">Step 2: Core Training</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm">Intensive modules focusing on Reading, Writing, Listening, and Speaking.</p>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary border-2 border-primary"></div>
                    <h4 className="font-label-caps text-label-caps text-on-background uppercase mb-1">Step 3: Mock Exams</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm">Simulated test environments with personalized feedback from certified trainers.</p>
                  </div>
                </div>
              </div>
              <div className="bg-surface rounded-lg p-6 border border-surface-variant">
                <h3 className="font-h3 text-h3 text-on-background mb-4 text-lg flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">help_center</span>
                  Common Questions
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-label-caps text-label-caps text-on-background mb-1">Do you provide study materials?</p>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm">Yes, all students receive access to our proprietary digital library and official practice books.</p>
                  </div>
                  <div className="h-[1px] bg-outline-variant/30 w-full"></div>
                  <div>
                    <p className="font-label-caps text-label-caps text-on-background mb-1">How long are the prep courses?</p>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm">Courses range from 4-week intensive crash courses to 12-week comprehensive programs.</p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Service 3 */}
          <article className="bg-surface-container-lowest rounded-xl p-8 shadow-[0px_4px_20px_rgba(0,51,102,0.08)] border border-transparent hover:border-secondary-fixed/50 transition-all duration-300 group" id="admission">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[32px] text-on-secondary-container">assignment</span>
              </div>
              <div>
                <h2 className="font-h2 text-h2 text-on-background mb-2">Admission Process</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Meticulous management of your application components, ensuring your profile stands out to admissions committees.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-h3 text-h3 text-on-background mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">timeline</span>
                  Process Timeline
                </h3>
                <div className="relative border-l-2 border-surface-variant ml-3 space-y-6 pb-2">
                  <div className="relative pl-6">
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-surface-container-lowest border-2 border-primary"></div>
                    <h4 className="font-label-caps text-label-caps text-on-background uppercase mb-1">Step 1: Documentation</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm">Gathering transcripts, letters of recommendation, and financial proofs.</p>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-surface-container-lowest border-2 border-primary"></div>
                    <h4 className="font-label-caps text-label-caps text-on-background uppercase mb-1">Step 2: SOP/Essay Review</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm">Multiple rounds of editing for your Statement of Purpose and personal essays.</p>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary border-2 border-primary"></div>
                    <h4 className="font-label-caps text-label-caps text-on-background uppercase mb-1">Step 3: Submission &amp; Tracking</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm">Flawless submission of applications and continuous tracking of status.</p>
                  </div>
                </div>
              </div>
              <div className="bg-surface rounded-lg p-6 border border-surface-variant">
                <h3 className="font-h3 text-h3 text-on-background mb-4 text-lg flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">help_center</span>
                  Common Questions
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-label-caps text-label-caps text-on-background mb-1">Will you write my SOP for me?</p>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm">No, we provide structural guidance and extensive editorial feedback to ensure the voice remains authentically yours.</p>
                  </div>
                  <div className="h-[1px] bg-outline-variant/30 w-full"></div>
                  <div>
                    <p className="font-label-caps text-label-caps text-on-background mb-1">Do you assist with application fees?</p>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm">While we don't cover fees, we can often secure application fee waivers for our partner universities.</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Sidebar / Form */}
        <aside className="lg:col-span-4 relative">
          <div className="sticky top-[120px] bg-surface-container-lowest rounded-xl p-8 shadow-[0px_4px_20px_rgba(0,51,102,0.08)] border border-surface-variant/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">support_agent</span>
              </div>
              <h3 className="font-h3 text-h3 text-on-background">Talk to an Expert</h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm mb-6">
              Have specific questions? Leave your details and an education counselor will reach out within 24 hours.
            </p>
            <LeadForm />
            <div className="mt-6 pt-6 border-t border-outline-variant/30 flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">verified_user</span>
              <p className="font-body-md text-body-md text-on-surface-variant text-xs leading-relaxed">
                Your information is secure. We never share your data with third parties without explicit consent.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
