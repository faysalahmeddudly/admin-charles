export default function DashboardPage() {
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
            <p className="text-sm text-[#94A3B8]">Admin</p>
            <i data-lucide="chevron-right" className="w-5 h-5 shrink-0"></i>
            <p className="font-bold text-sm text-[#334155] truncate">Dashboard</p>
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
        <main className="flex-1 p-3 sm:p-4 lg:p-6 bg-[#F8FAFC] flex flex-col gap-4 sm:gap-6 min-w-0">
          <div className="flex flex-col">
            <p className="font-bold text-[18px] leading-7 tracking-[-0.5px] sm:text-[20px] lg:text-[24px] lg:leading-8 lg:tracking-[-0.6px] text-[#0F172A]">Dashboard</p>
            <p className="text-[13px] leading-4.5 text-[#64748B]">Monday, 8 September 2026</p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="border border-[#E2E8F0]/80 shadow-[0_1px_3px_0_rgba(0,0,0,0.03)] rounded-[8px] p-3.5 sm:p-5 bg-white">
              <div className="flex items-center justify-between">
                <p className="font-bold text-xs text-[#64748B]">New order</p>
                <i data-lucide="lock" className="h-3.5 sm:h-[14px] shrink-0"></i>
              </div>
              <p className="font-bold text-lg sm:text-2xl lg:text-[26px] tracking-[-0.65px] text-[#0F172A]">90</p>
            </div>
            <div className="border border-[#E2E8F0]/80 shadow-[0_1px_3px_0_rgba(0,0,0,0.03)] rounded-[8px] p-3.5 sm:p-5 bg-white">
              <div className="flex items-center justify-between">
                <p className="font-bold text-xs text-[#64748B]">On Delivery</p>
                <i data-lucide="lock" className="h-3.5 sm:h-[14px] shrink-0"></i>
              </div>
              <p className="font-bold text-lg sm:text-2xl lg:text-[26px] tracking-[-0.65px] text-[#0F172A]">146</p>
            </div>
            <div className="border border-[#E2E8F0]/80 shadow-[0_1px_3px_0_rgba(0,0,0,0.03)] rounded-[8px] p-3.5 sm:p-5 bg-white">
              <div className="flex items-center justify-between">
                <p className="font-bold text-xs text-[#64748B]">New Draft</p>
                <i data-lucide="lock" className="h-3.5 sm:h-[14px] shrink-0"></i>
              </div>
              <p className="font-bold text-lg sm:text-2xl lg:text-[26px] tracking-[-0.65px] text-[#0F172A]">50</p>
            </div>
            <div className="border border-[#E2E8F0]/80 shadow-[0_1px_3px_0_rgba(0,0,0,0.03)] rounded-[8px] p-3.5 sm:p-5 bg-white">
              <div className="flex items-center justify-between">
                <p className="font-bold text-xs text-[#64748B]">Delivered</p>
                <i data-lucide="lock" className="h-3.5 sm:h-[14px] shrink-0"></i>
              </div>
              <p className="font-bold text-lg sm:text-2xl lg:text-[26px] tracking-[-0.65px] text-[#0F172A]">200</p>
            </div>
          </div>

          {/* Chart Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 border border-[#E2E8F0]/80 shadow-[0_1px_3px_0_rgba(0,0,0,0.03)] rounded-[8px] p-4 sm:p-5 bg-white flex flex-col gap-6 sm:gap-10 min-w-0">
              <div className="flex items-center justify-between">
                <p className="font-bold text-sm text-[#0F172A]">Order Flow</p>
                <div className="font-bold text-[11px] leading-4 text-[#94A3B8]">AUD</div>
              </div>

              <div id="orderFlowChart" className="min-w-0"></div>
            </div>
            <div className="border border-[#E2E8F0]/80 shadow-[0_1px_3px_0_rgba(0,0,0,0.03)] rounded-[8px] p-4 sm:p-5 bg-white m-0 min-w-0">
              <p className="font-bold text-sm text-[#0F172A] mb-6">Order status split</p>
              <div id="orderStatusChart" className="w-full mb-5 min-w-0"></div>
            </div>
          </div>

          {/* Recent orders & Draft Design Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 border border-[#E2E8F0]/80 shadow-[0_1px_3px_0_rgba(0,0,0,0.03)] rounded-[8px] p-4 sm:p-5 bg-white min-w-0">
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <p className="font-bold text-sm text-[#0F172A]">Recent orders</p>
                <button type="button" className="text-[#EA3829] font-bold text-xs shrink-0">View all</button>
              </div>
              <div className="overflow-x-auto scrollbar-thin -mx-4 px-4 sm:mx-0 sm:px-0">
                <div className="min-w-[640px] flex flex-col gap-5">
                  <div className="w-full grid grid-cols-5 items-center gap-2">
                    <p className="font-bold text-[13px] leading-5 text-[#0F172A] truncate">#96459761</p>
                    <p className="text-[13px] leading-5 text-[#334155] text-start truncate">Adil Hasan</p>
                    <p className="text-[13px] leading-5 text-[#64748B] text-start whitespace-nowrap">13 Sep 2026</p>
                    <div className="flex justify-start">
                      <p className="bg-[#FEF3C7] rounded-[6px] py-1 px-2.5 text-[#92400E] w-fit text-[11px] leading-4 whitespace-nowrap">Packaging</p>
                    </div>
                    <p className="font-bold text-[13px] leading-5 text-[#0F172A] text-right whitespace-nowrap">$945.00</p>
                  </div>
                  <div className="w-full grid grid-cols-5 items-center gap-2">
                    <p className="font-bold text-[13px] leading-5 text-[#0F172A] truncate">#96459761</p>
                    <p className="text-[13px] leading-5 text-[#334155] text-start truncate">Grace Mitchell</p>
                    <p className="text-[13px] leading-5 text-[#64748B] text-start whitespace-nowrap">12 Sep 2026</p>
                    <div className="flex justify-start">
                      <p className="bg-[#E0F2FE] rounded-[6px] py-1 px-2.5 text-[#075985] w-fit text-[11px] leading-4 whitespace-nowrap">On The Road</p>
                    </div>
                    <p className="font-bold text-[13px] leading-5 text-[#0F172A] text-right whitespace-nowrap">$472.00</p>
                  </div>
                  <div className="w-full grid grid-cols-5 items-start gap-2">
                    <p className="font-bold text-[13px] leading-5 text-[#0F172A] truncate">#96459730</p>
                    <p className="text-[13px] leading-5 text-[#334155] text-start truncate">Overdrive Archive Co.</p>
                    <p className="text-[13px] leading-5 text-[#64748B] text-start whitespace-nowrap">11 Sep 2026</p>
                    <div className="flex justify-start">
                      <p className="bg-[#FDE68A]/60 rounded-[6px] py-1 px-2.5 text-[#78350F] w-fit text-[11px] leading-4 whitespace-nowrap">Awaiting Approval</p>
                    </div>
                    <p className="font-bold text-[13px] leading-5 text-[#0F172A] text-right whitespace-nowrap">$2268.00</p>
                  </div>
                  <div className="w-full grid grid-cols-5 items-center gap-2">
                    <p className="font-bold text-[13px] leading-5 text-[#0F172A] truncate">#96459712</p>
                    <p className="text-[13px] leading-5 text-[#334155] text-start truncate">Liam Carter</p>
                    <p className="text-[13px] leading-5 text-[#64748B] text-start whitespace-nowrap">09 Sep 2026</p>
                    <div className="flex justify-start">
                      <p className="bg-[#D1FAE5] rounded-[6px] py-1 px-2.5 text-[#065F46] w-fit text-[11px] leading-4 whitespace-nowrap">Delivered</p>
                    </div>
                    <p className="font-bold text-[13px] leading-5 text-[#0F172A] text-right whitespace-nowrap">$345.00</p>
                  </div>
                  <div className="w-full grid grid-cols-5 items-center gap-2">
                    <p className="font-bold text-[13px] leading-5 text-[#0F172A] truncate">#96459705</p>
                    <p className="text-[13px] leading-5 text-[#334155] text-start truncate">Priya Nandakumar</p>
                    <p className="text-[13px] leading-5 text-[#64748B] text-start whitespace-nowrap">08 Sep 2026</p>
                    <div className="flex justify-start">
                      <p className="bg-[#F1F5F9] rounded-[6px] py-1 px-2.5 text-[#334155] w-fit text-[11px] leading-4 whitespace-nowrap">Order Placed</p>
                    </div>
                    <p className="font-bold text-[13px] leading-5 text-[#0F172A] text-right whitespace-nowrap">$525.00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-[#E2E8F0]/80 shadow-[0_1px_3px_0_rgba(0,0,0,0.03)] rounded-[8px] p-4 sm:p-5 bg-white min-w-0">
              <p className="font-bold text-sm text-[#0F172A] mb-5 sm:mb-5">Draft Design</p>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <i data-lucide="triangle-alert" className="h-4 shrink-0 text-[#F59E0B]"></i>
                  <p className="font-bold text-xs text-[#0F172A]">New Design On Draft <span className="font-normal text-[#475569]">Customer Name Emily</span></p>
                </div>
                <div className="flex items-center gap-2">
                  <i data-lucide="triangle-alert" className="h-4 shrink-0 text-[#F59E0B]"></i>
                  <p className="font-bold text-xs text-[#0F172A]">New Design On Draft <span className="font-normal text-[#475569]">Customer Name Emily</span></p>
                </div>
                <div className="flex items-center gap-2">
                  <i data-lucide="triangle-alert" className="h-4 shrink-0 text-[#F59E0B]"></i>
                  <p className="font-bold text-xs text-[#0F172A]">New Design On Draft <span className="font-normal text-[#475569]">Customer Name Emily</span></p>
                </div>
                <div className="flex items-center gap-2">
                  <i data-lucide="triangle-alert" className="h-4 shrink-0 text-[#F59E0B]"></i>
                  <p className="font-bold text-xs text-[#0F172A]">New Design On Draft <span className="font-normal text-[#475569]">Customer Name Emily</span></p>
                </div>
                <div className="flex items-center gap-2">
                  <i data-lucide="triangle-alert" className="h-4 shrink-0 text-[#F59E0B]"></i>
                  <p className="font-bold text-xs text-[#0F172A]">New Design On Draft <span className="font-normal text-[#475569]">Customer Name Emily</span></p>
                </div>
                <div className="flex items-center gap-2">
                  <i data-lucide="triangle-alert" className="h-4 shrink-0 text-[#F59E0B]"></i>
                  <p className="font-bold text-xs text-[#0F172A]">New Design On Draft <span className="font-normal text-[#475569]">Customer Name Emily</span></p>
                </div>
                <div className="flex items-center gap-2">
                  <i data-lucide="triangle-alert" className="h-4 shrink-0 text-[#F59E0B]"></i>
                  <p className="font-bold text-xs text-[#0F172A]">New Design On Draft <span className="font-normal text-[#475569]">Customer Name Emily</span></p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    </>
  );
}
