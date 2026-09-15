export default function CustomersPage() {
  return (
    <>
      <div className="flex min-h-screen font-[Inter]">
      {/* Sidebar */}
      <aside id="sidebar" className="fixed inset-y-0 left-0 z-50 w-[260px] sm:w-[280px] lg:w-[302px] -translate-x-full bg-[#070D19] border-r border-[#151E30] transition-transform duration-200 ease-in-out lg:static lg:translate-x-0 lg:shrink-0 flex flex-col justify-between overflow-y-auto">
        <div>
          <div className="flex items-center justify-between p-4 sm:p-6 lg:justify-center">
            <img src="assets/logo.png" alt="Logo" className="h-9 sm:h-10 lg:h-16 w-auto rounded-lg" />
            <button id="closeSidebarBtn" className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-md text-[#94A3B8] hover:bg-[#111827]">
              <i data-lucide="x" className="w-5 h-5"></i>
            </button>
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
            <a href="customers.html" className="flex items-center gap-2.5 p-3 rounded-[12px] text-[#94A3B8] bg-[#EA3829] text-white">
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
            <a href="cms.html" className="flex items-center gap-2.5 p-3 rounded-[12px] text-[#94A3B8] hover:bg-[#EA3829] hover:text-white">
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
          <div className="h-8 w-8 shrink-0 bg-[#EA3829] flex items-center justify-center rounded-full">
            <span className="font-bold text-[12px] leading-4 tracking-[-0.3px] text-white">SM</span>
          </div>
          <div className="flex flex-col gap-[2px] min-w-0">
            <p className="font-bold text-[13px] leading-4 text-white truncate">Sarah Miller</p>
            <p className="text-[11px] leading-3.5 text-[#94A3B8] truncate">Store Manager</p>
          </div>
        </div>
      </aside>

      {/* Overlay (mobile only) */}
      <div id="overlay" className="fixed inset-0 bg-black/30 z-40 hidden lg:hidden"></div>

      {/* Main column */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Topbar */}
        <header className="p-4 sm:p-6 lg:p-6 flex items-center justify-between gap-3 px-4 sm:px-6 border-b border-[#E2E8F0] bg-white sticky top-0 z-20">
          <div className="flex items-center gap-2 min-w-0">
            <button id="menuBtn" className="lg:hidden inline-flex shrink-0 items-center justify-center w-9 h-9 rounded-md border border-gray-300">
              <i data-lucide="menu" className="w-5 h-5"></i>
            </button>
            <div className="flex items-center gap-1 min-w-0">
              <p className="hidden sm:block text-sm text-[#94A3B8] shrink-0">Admin</p>
              <i data-lucide="chevron-right" className="hidden sm:block w-5 h-5 shrink-0"></i>
              <p className="font-bold text-sm text-[#334155] truncate">Customers</p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-5 shrink-0">
            <div className="hidden md:flex items-center w-[200px] lg:w-[270px] h-9 px-3 gap-2 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC]">
              <i data-lucide="search" className="w-4 h-4 text-[#94A3B8] shrink-0"></i>
              <input type="text" placeholder="Search anything..." className="w-full bg-transparent outline-none text-sm text-[#334155] placeholder:text-[#94A3B8] min-w-0" />
            </div>

            <button className="md:hidden relative w-9 h-9 flex items-center justify-center shrink-0">
              <i data-lucide="search" className="w-5 h-5 text-[#64748B]"></i>
            </button>

            <button className="relative w-9 h-9 flex items-center justify-center shrink-0">
              <i data-lucide="bell" className="w-5 h-5 text-[#64748B]"></i>
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#EA3829] rounded-full"></span>
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-6 bg-[#F8FAFC] flex flex-col gap-6 min-w-0">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="font-bold text-[20px] leading-7 tracking-[-0.5px] lg:text-[24px] lg:leading-8 lg:tracking-[-0.6px] text-[#0F172A]">Customers</p>
            <form action="#" className="flex flex-wrap gap-2 lg:gap-4">
              <div className="border border-[#E2E8F0] rounded-[8px] p-2 lg:p-3 flex items-center gap-2 lg:gap-3 w-[160px] sm:w-[220px] lg:w-[280px]">
                <i data-lucide="search" className="w-4 h-4 text-[#94A3B8] shrink-0"></i>
                <input type="text" name="customer_search" placeholder="Search customer..." className="w-full text-xs bg-transparent outline-none placeholder:text-[#94A3B8] min-w-0" />
              </div>

              <button type="button" className="border border-[#E2E8F0] rounded-[8px] px-2 lg:px-3 flex items-center gap-3 shrink-0">
                <i data-lucide="filter" className="w-[11px] text-[#64748B] shrink-0"></i>
                <span className="hidden lg:block text-[#334155] font-semibold text-xs">Filters</span>
              </button>
            </form>
          </div>

          <div className="border border-[#E2E8F0]/80 rounded-[8px] overflow-hidden min-w-0">
            <div className="overflow-x-auto overflow-y-auto scrollbar-thin">
              <table className="w-full text-left border-collapse bg-white min-w-[760px]">
                <thead className="sticky top-0 z-10 bg-white">
                  <tr className="border-b border-[#E2E8F0]/80">
                    <th className="px-5 py-3 font-bold text-[11px] leading-4 tracking-[0.55px] text-[#94A3B8] whitespace-nowrap">NAME</th>
                    <th className="px-5 py-3 font-bold text-[11px] leading-4 tracking-[0.55px] text-[#94A3B8] whitespace-nowrap">EMAIL</th>
                    <th className="px-5 py-3 font-bold text-[11px] leading-4 tracking-[0.55px] text-[#94A3B8] whitespace-nowrap">ORDERS</th>
                    <th className="px-5 py-3 font-bold text-[11px] leading-4 tracking-[0.55px] text-[#94A3B8] whitespace-nowrap">TOTAL SPENT</th>
                    <th className="px-5 py-3 font-bold text-[11px] leading-4 tracking-[0.55px] text-[#94A3B8] whitespace-nowrap">LAST ORDER</th>
                    <th className="px-5 py-3 font-bold text-[11px] leading-4 tracking-[0.55px] text-[#94A3B8] whitespace-nowrap">TAG</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-5 py-4 text-xs font-bold text-[#0F172A] whitespace-nowrap">Adil Hasan</td>
                    <td className="px-5 py-4 text-xs text-[#475569] whitespace-nowrap">adil@example.com</td>
                    <td className="px-5 py-4 text-xs text-[#475569] whitespace-nowrap">4</td>
                    <td className="px-5 py-4 text-xs text-[#0F172A] font-bold whitespace-nowrap">$1,820</td>
                    <td className="px-5 py-4 text-xs text-[#475569] whitespace-nowrap">13 Sep 2026</td>
                    <td className="px-5 py-4">
                      <span className="bg-[#F1F5F9] text-[#475569] px-3 py-1 rounded-full text-[11px] leading-4 cursor-pointer whitespace-nowrap"> Retail </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 text-xs font-bold text-[#0F172A] whitespace-nowrap">Overdrive Archive Co.</td>
                    <td className="px-5 py-4 text-xs text-[#475569] whitespace-nowrap">orders@overdrivearchive.com</td>
                    <td className="px-5 py-4 text-xs text-[#475569] whitespace-nowrap">9</td>
                    <td className="px-5 py-4 text-xs text-[#0F172A] font-bold whitespace-nowrap">$12,480</td>
                    <td className="px-5 py-4 text-xs text-[#475569] whitespace-nowrap">11 Sep 2026</td>
                    <td className="px-5 py-4">
                      <span className="bg-[#FEE2E2]/60 text-[#DC2626] px-3 py-1 rounded-full text-[11px] leading-4 cursor-pointer whitespace-nowrap"> Bulk </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 text-xs font-bold text-[#0F172A] whitespace-nowrap">Grace Mitchell</td>
                    <td className="px-5 py-4 text-xs text-[#475569] whitespace-nowrap">grace.m@example.com</td>
                    <td className="px-5 py-4 text-xs text-[#475569] whitespace-nowrap">2</td>
                    <td className="px-5 py-4 text-xs text-[#0F172A] font-bold whitespace-nowrap">$640</td>
                    <td className="px-5 py-4 text-xs text-[#475569] whitespace-nowrap">12 Sep 2026</td>
                    <td className="px-5 py-4">
                      <span className="bg-[#F1F5F9] text-[#475569] px-3 py-1 rounded-full text-[11px] leading-4 cursor-pointer whitespace-nowrap"> Retail </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 text-xs font-bold text-[#0F172A] whitespace-nowrap">Second Wave Merch</td>
                    <td className="px-5 py-4 text-xs text-[#475569] whitespace-nowrap">hello@secondwave.co</td>
                    <td className="px-5 py-4 text-xs text-[#475569] whitespace-nowrap">14</td>
                    <td className="px-5 py-4 text-xs text-[#0F172A] font-bold whitespace-nowrap">$24,310</td>
                    <td className="px-5 py-4 text-xs text-[#475569] whitespace-nowrap">05 Sep 2026</td>
                    <td className="px-5 py-4">
                      <span className="bg-[#FEE2E2]/60 text-[#DC2626] px-3 py-1 rounded-full text-[11px] leading-4 cursor-pointer whitespace-nowrap"> Bulk </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 text-xs font-bold text-[#0F172A] whitespace-nowrap">Liam Carter</td>
                    <td className="px-5 py-4 text-xs text-[#475569] whitespace-nowrap">liam.carter@example.com</td>
                    <td className="px-5 py-4 text-xs text-[#475569] whitespace-nowrap">1</td>
                    <td className="px-5 py-4 text-xs text-[#0F172A] font-bold whitespace-nowrap">$345</td>
                    <td className="px-5 py-4 text-xs text-[#475569] whitespace-nowrap">09 Sep 2026</td>
                    <td className="px-5 py-4">
                      <span className="bg-[#F1F5F9] text-[#475569] px-3 py-1 rounded-full text-[11px] leading-4 cursor-pointer whitespace-nowrap"> Retail </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
    </>
  );
}
