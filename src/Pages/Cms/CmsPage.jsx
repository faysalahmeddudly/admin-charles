import Icon from "../../components/shared/Icon";

export default function CmsPage() {
  return (
    <>
      {/* Content */}
      <main className="flex-1 p-3 sm:p-4 lg:p-6 bg-[#F8FAFC] flex flex-col gap-6 sm:gap-8 min-w-0">
          <p className="font-bold text-[18px] leading-7 tracking-[-0.5px] sm:text-[20px] lg:text-[24px] lg:leading-8 lg:tracking-[-0.6px] text-[#0F172A]">Content / CMS</p>

          <form action="#" method="POST" id="cmsForm" className="flex flex-col gap-6 sm:gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="border border-[#E2E8F0]/80 p-4 sm:p-5 rounded-[8px] flex flex-col gap-[14px] bg-white">
                <p className="font-bold text-[11px] leading-4 tracking-[0.55px] text-[#64748B]">ANNOUNCEMENT BAR</p>

                <input type="text" name="announcement_line_1" value="" placeholder="Sign Up & Get 10% Off Your First Bulk Order" className="border border-[#E2E8F0] rounded-[8px] px-3 py-2 text-xs text-[#334155] outline-none placeholder:text-[#334155]" />
                <input type="text" name="announcement_line_2" value="" placeholder="AUSTRALIA WIDE · Sweatshop Free · Eco-Friendly · WRAP Certified" className="border border-[#E2E8F0] rounded-[8px] px-3 py-2 text-xs text-[#334155] outline-none placeholder:text-[#334155]" />
              </div>
              <div className="border border-[#E2E8F0]/80 p-4 sm:p-5 rounded-[8px] flex flex-col gap-[14px] bg-white">
                <div className="flex flex-col">
                  <p className="font-bold text-[11px] leading-4 tracking-[0.55px] text-[#64748B]">ANNOUNCEMENT BAR</p>
                  <p className="text-[11px] leading-4 tracking-[0.55px] text-[#94A3B8]">Smart collections in the nav menu, auto-populated by rule.</p>
                </div>

                <input type="text" name="shop_by_choice_1" value="" placeholder="New arrival — added in the last 14 days" className="border border-[#E2E8F0] rounded-[8px] px-3 py-2 text-xs text-[#334155] outline-none placeholder:text-[#334155]" />
                <input type="text" name="shop_by_choice_2" value="" placeholder="Best seller — top 12 by units sold (30d)" className="border border-[#E2E8F0] rounded-[8px] px-3 py-2 text-xs text-[#334155] outline-none placeholder:text-[#334155]" />
                <input type="text" name="shop_by_choice_3" value="" placeholder="Recently explored — per-customer browsing history" className="border border-[#E2E8F0] rounded-[8px] px-3 py-2 text-xs text-[#334155] outline-none placeholder:text-[#334155]" />
              </div>
            </div>

            <div className="border border-[#E2E8F0]/80 bg-white p-4 sm:p-5 rounded-[8px] flex flex-col gap-[14px]">
              <p className="font-bold text-[11px] leading-4 tracking-[0.55px] text-[#64748B]">HERO SLIDES</p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-[20px] lg:mx-16">
                {/* repeat per slide */}
                <div className="aspect-[4/3] overflow-hidden rounded-[8px]">
                  <img src="/assets/cms-1.png" alt="Hero slide 1" className="h-full w-full object-cover" />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-[8px]">
                  <img src="/assets/cms-1.png" alt="Hero slide 1" className="h-full w-full object-cover" />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-[8px]">
                  <img src="/assets/cms-1.png" alt="Hero slide 1" className="h-full w-full object-cover" />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-[8px]">
                  <img src="/assets/cms-1.png" alt="Hero slide 1" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>

            <div className="border border-[#E2E8F0]/80 rounded-[8px] flex flex-col gap-4 bg-white">
              <p className="font-bold text-[11px] leading-4 tracking-[0.55px] text-[#64748B] px-4 sm:px-5 pt-4 sm:pt-5">LEGAL & POLICY PAGES</p>

              <div className="border border-[#E2E8F0]/80 rounded-[8px] overflow-hidden mx-4 sm:mx-5">
                <div className="overflow-x-auto overflow-y-auto scrollbar-thin">
                  <table className="w-full min-w-[640px] text-left border-collapse bg-white">
                    <thead className="sticky top-0 z-10 bg-white">
                      <tr className="border-b border-[#E2E8F0]/80">
                        <th className="px-6 py-3.5 font-semibold text-[11px] leading-4 tracking-[0.55px] text-[#94A3B8] whitespace-nowrap">PAGE</th>
                        <th className="px-6 py-3.5 font-semibold text-[11px] leading-4 tracking-[0.55px] text-[#94A3B8] whitespace-nowrap">STATUS</th>
                        <th className="px-6 py-3.5 font-semibold text-[11px] leading-4 tracking-[0.55px] text-[#94A3B8] whitespace-nowrap">LAST UPDATED</th>
                        <th className="px-6 py-3.5 font-semibold text-[11px] leading-4 tracking-[0.55px] text-[#94A3B8] whitespace-nowrap"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F1F5F9]">
                      <tr className="legal-page-row" data-page="Terms and Conditions" data-status="Published" data-updated="12 Aug 2026" data-content="">
                        <td className="px-6 py-4 text-xs font-medium text-[#0F172A] whitespace-nowrap">Terms and Conditions</td>
                        <td className="px-6 py-4">
                          <span className="bg-[#D1FAE5] text-[#059669] px-2.5 py-[2px] rounded text-[11px] leading-4 cursor-pointer"> Published </span>
                        </td>
                        <td className="px-6 py-4 text-xs text-[#334155] whitespace-nowrap">12 Aug 2026</td>
                        <td className="px-6 py-4">
                          <div className="edit-legal-page text-[#E51E2B] text-xs cursor-pointer">Edit</div>
                        </td>
                      </tr>

                      <tr className="legal-page-row" data-page="Privacy Policy" data-status="Published" data-updated="12 Aug 2026" data-content="">
                        <td className="px-6 py-4 text-xs font-medium text-[#0F172A] whitespace-nowrap">Privacy Policy</td>
                        <td className="px-6 py-4">
                          <span className="bg-[#D1FAE5] text-[#059669] px-2.5 py-[2px] rounded text-[11px] leading-4 cursor-pointer"> Published </span>
                        </td>
                        <td className="px-6 py-4 text-xs text-[#334155] whitespace-nowrap">12 Aug 2026</td>
                        <td className="px-6 py-4">
                          <div className="edit-legal-page text-[#E51E2B] text-xs cursor-pointer">Edit</div>
                        </td>
                      </tr>

                      <tr className="legal-page-row" data-page="Shipping & Turnaround Times" data-status="Published" data-updated="01 Sep 2026" data-content="">
                        <td className="px-6 py-4 text-xs font-medium text-[#0F172A] whitespace-nowrap">Shipping & Turnaround Times</td>
                        <td className="px-6 py-4">
                          <span className="bg-[#D1FAE5] text-[#059669] px-2.5 py-[2px] rounded text-[11px] leading-4 cursor-pointer"> Published </span>
                        </td>
                        <td className="px-6 py-4 text-xs text-[#334155] whitespace-nowrap">01 Sep 2026</td>
                        <td className="px-6 py-4">
                          <div className="edit-legal-page text-[#E51E2B] text-xs cursor-pointer">Edit</div>
                        </td>
                      </tr>

                      <tr className="legal-page-row" data-page="Artwork Guidelines & Formats" data-status="Published" data-updated="28 Aug 2026" data-content="">
                        <td className="px-6 py-4 text-xs font-medium text-[#0F172A] whitespace-nowrap">Artwork Guidelines & Formats</td>
                        <td className="px-6 py-4">
                          <span className="bg-[#D1FAE5] text-[#059669] px-2.5 py-[2px] rounded text-[11px] leading-4 cursor-pointer"> Published </span>
                        </td>
                        <td className="px-6 py-4 text-xs text-[#334155] whitespace-nowrap">28 Aug 2026</td>
                        <td className="px-6 py-4">
                          <div className="edit-legal-page text-[#E51E2B] text-xs cursor-pointer">Edit</div>
                        </td>
                      </tr>

                      <tr className="legal-page-row" data-page="Wholesale Reseller Program" data-status="Draft" data-updated="20 Jul 2026" data-content="">
                        <td className="px-6 py-4 text-xs font-medium text-[#0F172A] whitespace-nowrap">Wholesale Reseller Program</td>
                        <td className="px-6 py-4">
                          <span className="bg-[#F1F5F9] text-[#475569] px-2.5 py-[2px] rounded text-[11px] leading-4 cursor-pointer"> Draft </span>
                        </td>
                        <td className="px-6 py-4 text-xs text-[#334155] whitespace-nowrap">20 Jul 2026</td>
                        <td className="px-6 py-4">
                          <div className="edit-legal-page text-[#E51E2B] text-xs cursor-pointer">Edit</div>
                        </td>
                      </tr>

                      <tr className="legal-page-row" data-page="Print Satisfaction Guarantee" data-status="Published" data-updated="15 Jun 2026" data-content="">
                        <td className="px-6 py-4 text-xs font-medium text-[#0F172A] whitespace-nowrap">Print Satisfaction Guarantee</td>
                        <td className="px-6 py-4">
                          <span className="bg-[#D1FAE5] text-[#059669] px-2.5 py-[2px] rounded text-[11px] leading-4 cursor-pointer"> Published </span>
                        </td>
                        <td className="px-6 py-4 text-xs text-[#334155] whitespace-nowrap">15 Jun 2026</td>
                        <td className="px-6 py-4">
                          <div className="edit-legal-page text-[#E51E2B] text-xs cursor-pointer">Edit</div>
                        </td>
                      </tr>

                      <tr className="legal-page-row" data-page="Online Quote Calculator" data-status="Published" data-updated="03 Sep 2026" data-content="">
                        <td className="px-6 py-4 text-xs font-medium text-[#0F172A] whitespace-nowrap">Online Quote Calculator</td>
                        <td className="px-6 py-4">
                          <span className="bg-[#D1FAE5] text-[#059669] px-2.5 py-[2px] rounded text-[11px] leading-4 cursor-pointer"> Published </span>
                        </td>
                        <td className="px-6 py-4 text-xs text-[#334155] whitespace-nowrap">03 Sep 2026</td>
                        <td className="px-6 py-4">
                          <div className="edit-legal-page text-[#E51E2B] text-xs cursor-pointer">Edit</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="h-0"></div>
            </div>

            <div className="border border-[#E2E8F0]/80 rounded-[8px] flex flex-col gap-4 bg-white">
              <p className="font-bold text-[11px] leading-4 tracking-[0.55px] text-[#64748B] px-4 sm:px-5 pt-4 sm:pt-5">FOOTER</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-4 sm:p-5 pt-0">
                <div className="border border-[#E2E8F0]/80 p-4 sm:p-5 rounded-[8px] flex flex-col gap-[14px] bg-white">
                  <p className="font-bold text-[11px] leading-4 tracking-[0.55px] text-[#64748B]">FOOTER · SHOP CATEGORIES</p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    <button type="button" className="bg-[#EDF2F7] border border-[#E2E8F0]/40 py-1 px-2.5 rounded-[6px] flex items-center justify-between gap-1 min-w-0">
                      <p className="text-xs text-[#334155] truncate">Men's Apparel</p>
                      <Icon name="x" className="h-2.5 text-[#94A3B8] shrink-0" />
                    </button>
                    <button type="button" className="bg-[#EDF2F7] border border-[#E2E8F0]/40 py-1 px-2.5 rounded-[6px] flex items-center justify-between gap-1 min-w-0">
                      <p className="text-xs text-[#334155] truncate">Women's Collection</p>
                      <Icon name="x" className="h-2.5 text-[#94A3B8] shrink-0" />
                    </button>
                    <button type="button" className="bg-[#EDF2F7] border border-[#E2E8F0]/40 py-1 px-2.5 rounded-[6px] flex items-center justify-between gap-1 min-w-0">
                      <p className="text-xs text-[#334155] truncate">Kid's & Youth</p>
                      <Icon name="x" className="h-2.5 text-[#94A3B8] shrink-0" />
                    </button>
                    <button type="button" className="bg-[#EDF2F7] border border-[#E2E8F0]/40 py-1 px-2.5 rounded-[6px] flex items-center justify-between gap-1 min-w-0">
                      <p className="text-xs text-[#334155] truncate">Unisex Hoodies</p>
                      <Icon name="x" className="h-2.5 text-[#94A3B8] shrink-0" />
                    </button>
                    <button type="button" className="bg-[#EDF2F7] border border-[#E2E8F0]/40 py-1 px-2.5 rounded-[6px] flex items-center justify-between gap-1 min-w-0">
                      <p className="text-xs text-[#334155] truncate">Accessories & Totes</p>
                      <Icon name="x" className="h-2.5 text-[#94A3B8] shrink-0" />
                    </button>
                    <button type="button" className="bg-[#EDF2F7] border border-[#E2E8F0]/40 py-1 px-2.5 rounded-[6px] flex items-center justify-between gap-1 min-w-0">
                      <p className="text-xs text-[#334155] truncate">AS Colour Official</p>
                      <Icon name="x" className="h-2.5 text-[#94A3B8] shrink-0" />
                    </button>
                    <button type="button" className="bg-[#EDF2F7] border border-[#E2E8F0]/40 py-1 px-2.5 rounded-[6px] flex items-center justify-between gap-1 min-w-0">
                      <p className="text-xs text-[#334155] truncate">Eco & Organic Range</p>
                      <Icon name="x" className="h-2.5 text-[#94A3B8] shrink-0" />
                    </button>
                    <button type="button" className="border border-dashed border-[#FCA5A5] py-1 px-2.5 rounded-[6px] flex items-center justify-center gap-1">
                      <Icon name="plus" className="h-2.5 text-[#E50914] shrink-0" />
                      <p className="text-xs text-[#E50914]">Add</p>
                    </button>
                  </div>
                </div>

                <div className="border border-[#E2E8F0]/80 p-4 sm:p-5 rounded-[8px] flex flex-col gap-[14px] bg-white">
                  <p className="font-bold text-[11px] leading-4 tracking-[0.55px] text-[#64748B]">CONTACT DETAILS</p>

                  <div className="flex flex-col gap-3">
                    <input type="tel" name="contact_phone" value="" placeholder="+61 (08) 392 843" className="border border-[#E2E8F0] rounded-[8px] px-3 py-2 text-xs text-[#334155] outline-none placeholder:text-[#334155]" />
                    <input type="email" name="contact_email" value="" placeholder="sales@charlesprints.com.au" className="border border-[#E2E8F0] rounded-[8px] px-3 py-2 text-xs text-[#334155] outline-none placeholder:text-[#334155]" />
                    <input type="text" name="contact_address" value="" placeholder="Unit 16, 71A Millar Road, Revesby, NSW 2212" className="border border-[#E2E8F0] rounded-[8px] px-3 py-2 text-xs text-[#334155] outline-none placeholder:text-[#334155]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-3">
              <button type="button" className="h-9 border border-[#D1D5DB] rounded-[8px] px-4 flex items-center justify-center">
                <span className="font-medium text-xs text-[#374151]"> Discard changes </span>
              </button>

              <button type="button" className="h-9 border border-[#EA1D2D] bg-[#EA1D2D] rounded-[8px] px-4 flex items-center justify-center gap-2">
                <span className="font-medium text-xs text-white"> Discard changes </span>
                <Icon name="move-right" className="h-[14px] w-[14px] text-white" />
              </button>
            </div>
          </form>
        </main>

    {/* Edit Legal Page Modal (must be in the DOM BEFORE the script that queries it) */}
    <div id="legalPageModal" className="fixed inset-0 z-50 hidden items-center justify-center bg-black/60 backdrop-blur-xs p-3 sm:p-4">
      <div className="bg-white w-full sm:w-[90%] md:max-w-[600px] max-h-[90vh] overflow-y-auto rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
        {/* Header */}
        <div className="flex items-start sm:items-center justify-between gap-3 px-4 sm:px-5 py-4 border-b border-[#E2E8F0]">
          <div className="min-w-0">
            <p id="legalPageModalTitle" className="font-bold text-[16px] leading-6 tracking-[-0.4px] text-[#0F172A]">Edit Page</p>
          </div>

          <button id="closeLegalPageModal" className="shrink-0">
            <Icon name="x" className="w-4 h-4 text-[#94A3B8]" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-5 space-y-4">
          {/* Status */}
          <div className="flex items-center gap-4">
            <label className="text-xs font-bold text-[#1E293B]">Status</label>

            <div className="relative mt-1">
              <select id="legalPageStatus" className="appearance-none py-2 px-3 pr-10 text-xs text-[#334155] border border-[#E2E8F0] rounded-[8px] bg-[#F8FAFC] outline-none">
                <option value="Published">Published</option>
                <option value="Draft">Draft</option>
              </select>

              <Icon name="chevron-down" className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B] pointer-events-none" />
            </div>
          </div>

          {/* Page Content */}
          <div>
            <textarea id="legalPageContent" rows="8" placeholder="Enter the page content here..." className="mt-1 w-full py-2 px-3 text-xs leading-5 text-[#334155] border border-[#E2E8F0] rounded-[8px] bg-[#F8FAFC] outline-none placeholder:text-[#94A3B8] resize-none scrollbar-thin"></textarea>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 px-4 sm:px-5 py-4 border-t border-[#E2E8F0]">
          <button id="cancelLegalPageModal" type="button" className="w-full sm:w-auto px-4 py-2 text-xs border border-[#CBD5E1] rounded-[8px] text-[#334155]">Cancel</button>

          <button id="saveLegalPageModal" type="button" className="w-full sm:w-auto flex items-center justify-center gap-1.5 bg-[#DC2626] rounded-[8px] py-2 px-5">
            <span className="font-bold text-xs text-white">Publish changes</span>
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
