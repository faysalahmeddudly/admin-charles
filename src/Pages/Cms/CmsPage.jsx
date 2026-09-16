import { useNavigate } from "react-router";
import Icon from "../../components/shared/Icon";

const LEGAL_PAGES = [
  { title: "Terms and Conditions", status: "Published", updatedAt: "12 Aug 2026" },
  { title: "Privacy Policy", status: "Published", updatedAt: "12 Aug 2026" },
  { title: "Shipping & Turnaround Times", status: "Published", updatedAt: "01 Sep 2026" },
  { title: "Artwork Guidelines & Formats", status: "Published", updatedAt: "28 Aug 2026" },
  { title: "Wholesale Reseller Program", status: "Draft", updatedAt: "20 Jul 2026" },
  { title: "Print Satisfaction Guarantee", status: "Published", updatedAt: "15 Jun 2026" },
  { title: "Online Quote Calculator", status: "Published", updatedAt: "03 Sep 2026" },
];

export default function CmsPage() {
  const navigate = useNavigate();

  const handleEditLegalPage = (page) => {
    navigate("/cms/legal/edit", { state: { page } });
  };

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
                      {LEGAL_PAGES.map((page) => (
                        <tr key={page.title} className="legal-page-row">
                          <td className="px-6 py-4 text-xs font-medium text-[#0F172A] whitespace-nowrap">{page.title}</td>
                          <td className="px-6 py-4">
                            {page.status === "Published" ? (
                              <span className="bg-[#D1FAE5] text-[#059669] px-2.5 py-[2px] rounded text-[11px] leading-4 cursor-pointer"> Published </span>
                            ) : (
                              <span className="bg-[#F1F5F9] text-[#475569] px-2.5 py-[2px] rounded text-[11px] leading-4 cursor-pointer"> Draft </span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-xs text-[#334155] whitespace-nowrap">{page.updatedAt}</td>
                          <td className="px-6 py-4">
                            <button
                              type="button"
                              onClick={() => handleEditLegalPage(page)}
                              className="edit-legal-page text-[#E51E2B] text-xs cursor-pointer"
                            >
                              Edit
                            </button>
                          </td>
                        </tr>
                      ))}
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
    </>
  );
}
