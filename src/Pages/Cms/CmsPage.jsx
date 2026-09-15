export default function CmsPage() {
  return (
    <>
      <div className="flex min-h-screen font-[Inter]">
      {/* Sidebar */}
      <aside id="sidebar" className="fixed inset-y-0 left-0 z-50 w-[260px] sm:w-[280px] lg:w-[302px] -translate-x-full bg-[#070D19] border-r border-[#151E30] transition-transform duration-200 ease-in-out lg:static lg:translate-x-0 lg:shrink-0 flex flex-col justify-between overflow-y-auto">
        <div>
          <div className="flex items-center justify-center p-4 sm:p-6">
            <img src="assets/logo.png" alt="Logo" className="h-10 lg:h-16 w-auto rounded-lg" />
          </div>

          <nav className="px-4 sm:px-6 lg:px-10 flex flex-col gap-1">
            <a href="index.html" className="flex items-center gap-2.5 p-3 rounded-[12px] text-[#94A3B8] hover:bg-[#EA3829] hover:text-white">
              <i data-lucide="layout-dashboard" className="h-4 shrink-0"></i>
              <p className="text-sm">Dashboard</p>
            </a>
            <a href="order.html" className="flex items-center gap-2.5 p-3 rounded-[12px] text-[#94A3B8] hover:bg-[#EA3829] hover:text-white">
              <i data-lucide="lock" className="h-4 shrink-0"></i>
              <p className="text-sm">Orders</p>
            </a>
            <div className="group">
              <a href="products.html" className="flex items-center gap-2.5 p-3 rounded-[12px] text-[#94A3B8] hover:bg-[#EA3829] hover:text-white">
                <i data-lucide="tag" className="h-4 shrink-0"></i>
                <p className="text-sm">Products</p>
                <i data-lucide="chevron-down" className="ml-auto h-3 w-3 shrink-0"></i>
              </a>

              {/* submenu */}
              <div className="hidden group-hover:flex flex-col ml-5 mt-1 rounded-[8px] bg-[#111827]">
                <a href="product-categories.html" className="flex items-center gap-2 px-3 py-3 rounded-[8px] text-[#94A3B8] hover:bg-[#EA3829] hover:text-white">
                  <i data-lucide="tag" className="h-3.5 shrink-0"></i>
                  <p className="text-xs">Categories & Attributes</p>
                </a>
              </div>
            </div>
            <a href="studio.html" className="flex items-center gap-2.5 p-3 rounded-[12px] text-[#94A3B8] hover:bg-[#EA3829] hover:text-white">
              <i data-lucide="image" className="h-4 shrink-0"></i>
              <p className="text-sm">Design Studio Assets</p>
            </a>
            <a href="customers.html" className="flex items-center gap-2.5 p-3 rounded-[12px] text-[#94A3B8] hover:bg-[#EA3829] hover:text-white">
              <i data-lucide="user-round" className="h-4 shrink-0"></i>
              <p className="text-sm">Customers</p>
            </a>
            <a href="coupons.html" className="flex items-center gap-2.5 p-3 rounded-[12px] text-[#94A3B8] hover:bg-[#EA3829] hover:text-white">
              <i data-lucide="ticket" className="h-4 shrink-0"></i>
              <p className="text-sm">Coupons & Discounts</p>
            </a>
            <a href="tickets.html" className="flex items-center gap-2.5 p-3 rounded-[12px] text-[#94A3B8] hover:bg-[#EA3829] hover:text-white">
              <i data-lucide="life-buoy" className="h-4 shrink-0"></i>
              <p className="text-sm">Support Tickets</p>
            </a>
            <a href="cms.html" className="flex items-center gap-2.5 p-3 rounded-[12px] text-[#94A3B8] bg-[#EA3829] text-white">
              <i data-lucide="monitor" className="h-4 shrink-0"></i>
              <p className="text-sm">Content / CMS</p>
            </a>
            <a href="settings.html" className="flex items-center gap-2.5 p-3 rounded-[12px] text-[#94A3B8] hover:bg-[#EA3829] hover:text-white">
              <i data-lucide="settings" className="h-4 shrink-0"></i>
              <p className="text-sm">Settings</p>
            </a>
          </nav>
        </div>

        <div className="bg-[#050913] p-4 sm:p-6 flex gap-3 items-center">
          <div className="h-8 w-8 bg-[#EA3829] flex items-center justify-center rounded-full shrink-0">
            <span className="font-bold text-[12px] leading-4 tracking-[-0.3px] text-white">SM</span>
          </div>
          <div className="flex flex-col gap-[2px] min-w-0">
            <p className="font-bold text-[13px] leading-4 text-white truncate">Sarah Miller</p>
            <p className="text-[11px] leading-3.5 text-[#94A3B8] truncate">Store Manager</p>
          </div>
        </div>
      </aside>

      {/* Overlay (mobile only) */}
      <div id="overlay" className="fixed inset-0 bg-black/30 z-30 hidden lg:hidden"></div>

      {/* Main column */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Topbar */}
        <header className="p-3 sm:p-4 lg:p-6 flex items-center justify-between gap-2 px-3 sm:px-4 lg:px-6 border-b border-[#E2E8F0] bg-white sticky top-0 z-20">
          <div className="flex items-center gap-1 min-w-0">
            <p className="text-sm text-[#94A3B8] hidden sm:inline">Admin</p>
            <i data-lucide="chevron-right" className="w-5 h-5 hidden sm:inline shrink-0"></i>
            <p className="font-bold text-sm text-[#334155] truncate">Content / CMS</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-5 shrink-0">
            <div className="hidden md:flex items-center w-[180px] lg:w-[270px] h-9 px-3 gap-2 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC]">
              <i data-lucide="search" className="w-4 h-4 text-[#94A3B8] shrink-0"></i>
              <input type="text" placeholder="Search anything..." className="w-full bg-transparent outline-none text-sm text-[#334155] placeholder:text-[#94A3B8]" />
            </div>

            <button className="relative w-9 h-9 flex items-center justify-center shrink-0">
              <i data-lucide="bell" className="w-5 h-5 text-[#64748B]"></i>
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#EA3829] rounded-full"></span>
            </button>

            <button id="menuBtn" className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-gray-300 shrink-0">
              <i data-lucide="menu" className="w-5 h-5"></i>
            </button>
          </div>
        </header>

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
                      <i data-lucide="x" className="h-2.5 text-[#94A3B8] shrink-0"></i>
                    </button>
                    <button type="button" className="bg-[#EDF2F7] border border-[#E2E8F0]/40 py-1 px-2.5 rounded-[6px] flex items-center justify-between gap-1 min-w-0">
                      <p className="text-xs text-[#334155] truncate">Women's Collection</p>
                      <i data-lucide="x" className="h-2.5 text-[#94A3B8] shrink-0"></i>
                    </button>
                    <button type="button" className="bg-[#EDF2F7] border border-[#E2E8F0]/40 py-1 px-2.5 rounded-[6px] flex items-center justify-between gap-1 min-w-0">
                      <p className="text-xs text-[#334155] truncate">Kid's & Youth</p>
                      <i data-lucide="x" className="h-2.5 text-[#94A3B8] shrink-0"></i>
                    </button>
                    <button type="button" className="bg-[#EDF2F7] border border-[#E2E8F0]/40 py-1 px-2.5 rounded-[6px] flex items-center justify-between gap-1 min-w-0">
                      <p className="text-xs text-[#334155] truncate">Unisex Hoodies</p>
                      <i data-lucide="x" className="h-2.5 text-[#94A3B8] shrink-0"></i>
                    </button>
                    <button type="button" className="bg-[#EDF2F7] border border-[#E2E8F0]/40 py-1 px-2.5 rounded-[6px] flex items-center justify-between gap-1 min-w-0">
                      <p className="text-xs text-[#334155] truncate">Accessories & Totes</p>
                      <i data-lucide="x" className="h-2.5 text-[#94A3B8] shrink-0"></i>
                    </button>
                    <button type="button" className="bg-[#EDF2F7] border border-[#E2E8F0]/40 py-1 px-2.5 rounded-[6px] flex items-center justify-between gap-1 min-w-0">
                      <p className="text-xs text-[#334155] truncate">AS Colour Official</p>
                      <i data-lucide="x" className="h-2.5 text-[#94A3B8] shrink-0"></i>
                    </button>
                    <button type="button" className="bg-[#EDF2F7] border border-[#E2E8F0]/40 py-1 px-2.5 rounded-[6px] flex items-center justify-between gap-1 min-w-0">
                      <p className="text-xs text-[#334155] truncate">Eco & Organic Range</p>
                      <i data-lucide="x" className="h-2.5 text-[#94A3B8] shrink-0"></i>
                    </button>
                    <button type="button" className="border border-dashed border-[#FCA5A5] py-1 px-2.5 rounded-[6px] flex items-center justify-center gap-1">
                      <i data-lucide="plus" className="h-2.5 text-[#E50914] shrink-0"></i>
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
                <i data-lucide="move-right" className="h-[14px] w-[14px] text-white"></i>
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>

    {/* Edit Legal Page Modal (must be in the DOM BEFORE the script that queries it) */}
    <div id="legalPageModal" className="fixed inset-0 z-50 hidden items-center justify-center bg-black/60 backdrop-blur-xs p-3 sm:p-4">
      <div className="bg-white w-full sm:w-[90%] md:max-w-[600px] max-h-[90vh] overflow-y-auto rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
        {/* Header */}
        <div className="flex items-start sm:items-center justify-between gap-3 px-4 sm:px-5 py-4 border-b border-[#E2E8F0]">
          <div className="min-w-0">
            <p id="legalPageModalTitle" className="font-bold text-[16px] leading-6 tracking-[-0.4px] text-[#0F172A]">Edit Page</p>
          </div>

          <button id="closeLegalPageModal" className="shrink-0">
            <i data-lucide="x" className="w-4 h-4 text-[#94A3B8]"></i>
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

              <i data-lucide="chevron-down" className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B] pointer-events-none"></i>
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
