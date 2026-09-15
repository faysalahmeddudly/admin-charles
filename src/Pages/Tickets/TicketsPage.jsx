export default function TicketsPage() {
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
            <a href="tickets.html" className="flex items-center gap-2.5 p-3 rounded-[12px] text-[#94A3B8] bg-[#EA3829] text-white">
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
            <p className="font-bold text-sm text-[#334155] truncate">Support Tickets</p>
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
          <p className="font-bold text-[18px] leading-7 tracking-[-0.5px] sm:text-[20px] lg:text-[24px] lg:leading-8 lg:tracking-[-0.6px] text-[#0F172A]">Support Tickets</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[10px] sm:gap-[14px]">
            <div className="p-[10px] sm:p-[14px] rounded-[8px] shadow-[0_1px_2px_0_rgba(0,0,0,0.02) border border-[#E2E8F0]/90 flex flex-col items-center gap-1 min-w-0">
              <p className="font-medium text-[11px] leading-4 tracking-[-0.28px] text-[#64748B] text-center">Order Issues</p>
              <p className="font-bold text-[18px] leading-7 text-[#0F172A]">1</p>
            </div>
            <div className="p-[10px] sm:p-[14px] rounded-[8px] shadow-[0_1px_2px_0_rgba(0,0,0,0.02) border border-[#E2E8F0]/90 flex flex-col items-center gap-1 min-w-0">
              <p className="font-medium text-[11px] leading-4 tracking-[-0.28px] text-[#64748B] text-center">Delivery</p>
              <p className="font-bold text-[18px] leading-7 text-[#0F172A]">1</p>
            </div>
            <div className="p-[10px] sm:p-[14px] rounded-[8px] shadow-[0_1px_2px_0_rgba(0,0,0,0.02) border border-[#E2E8F0]/90 flex flex-col items-center gap-1 min-w-0">
              <p className="font-medium text-[11px] leading-4 tracking-[-0.28px] text-[#64748B] text-center">Return & Refund</p>
              <p className="font-bold text-[18px] leading-7 text-[#0F172A]">1</p>
            </div>
            <div className="p-[10px] sm:p-[14px] rounded-[8px] shadow-[0_1px_2px_0_rgba(0,0,0,0.02) border border-[#E2E8F0]/90 flex flex-col items-center gap-1 min-w-0">
              <p className="font-medium text-[11px] leading-4 tracking-[-0.28px] text-[#64748B] text-center">Payment & Promos</p>
              <p className="font-bold text-[18px] leading-7 text-[#0F172A]">1</p>
            </div>
            <div className="p-[10px] sm:p-[14px] rounded-[8px] shadow-[0_1px_2px_0_rgba(0,0,0,0.02) border border-[#E2E8F0]/90 flex flex-col items-center gap-1 min-w-0">
              <p className="font-medium text-[11px] leading-4 tracking-[-0.28px] text-[#64748B] text-center">Account</p>
              <p className="font-bold text-[18px] leading-7 text-[#0F172A]">1</p>
            </div>
            <div className="p-[10px] sm:p-[14px] rounded-[8px] shadow-[0_1px_2px_0_rgba(0,0,0,0.02) border border-[#E2E8F0]/90 flex flex-col items-center gap-1 min-w-0">
              <p className="font-medium text-[11px] leading-4 tracking-[-0.28px] text-[#64748B] text-center">Suggestion/Dispute</p>
              <p className="font-bold text-[18px] leading-7 text-[#0F172A]">0</p>
            </div>
          </div>

          <div className="border border-[#E2E8F0]/80 rounded-[8px] overflow-hidden">
            <div className="overflow-x-auto overflow-y-auto scrollbar-thin">
              <table className="w-full min-w-[900px] text-left border-collapse bg-white">
                <thead className="sticky top-0 z-10 bg-white">
                  <tr className="border-b border-[#E2E8F0]/80">
                    <th className="px-5 py-3 font-normal text-[11px] leading-4 tracking-[0.55px] text-[#94A3B8] whitespace-nowrap">TICKET</th>
                    <th className="px-5 py-3 font-normal text-[11px] leading-4 tracking-[0.55px] text-[#94A3B8] whitespace-nowrap">SUBJECT</th>
                    <th className="px-5 py-3 font-normal text-[11px] leading-4 tracking-[0.55px] text-[#94A3B8] whitespace-nowrap">CATEGORY</th>
                    <th className="px-5 py-3 font-normal text-[11px] leading-4 tracking-[0.55px] text-[#94A3B8] whitespace-nowrap">CUSTOMER</th>
                    <th className="px-5 py-3 font-normal text-[11px] leading-4 tracking-[0.55px] text-[#94A3B8] whitespace-nowrap">PRIORITY</th>
                    <th className="px-5 py-3 font-normal text-[11px] leading-4 tracking-[0.55px] text-[#94A3B8] whitespace-nowrap">STATUS</th>
                    <th className="px-5 py-3 font-normal text-[11px] leading-4 tracking-[0.55px] text-[#94A3B8] whitespace-nowrap">DATE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-5 py-4 text-xs text-[#64748B] whitespace-nowrap">TCK-3311</td>
                    <td className="px-5 py-4 text-xs font-bold text-[#0F172A] whitespace-nowrap">Print smudged on delivery</td>
                    <td className="px-5 py-4 text-xs text-[#334155] whitespace-nowrap">Return & Refund</td>
                    <td className="px-5 py-4 text-xs text-[#1E293B] whitespace-nowrap">Jordan Blake</td>
                    <td className="px-5 py-4">
                      <div className="relative inline-block">
                        <select className="priority-select appearance-none cursor-pointer px-3 py-1 rounded-full text-[11px] font-medium whitespace-nowrap border-0 outline-none pr-6" onchange="updateSelectColor(this, priorityStyles)">
                          <option value="High">High</option>
                          <option value="Medium">Medium</option>
                          <option value="Low">Low</option>
                        </select>
                        <span className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 rounded-md text-[#8B5CF6]">
                          <i data-lucide="chevron-down" className="w-3 h-3"></i>
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <div className="relative inline-block">
                        <select className="status-select appearance-none cursor-pointer px-3 py-1 rounded-full text-[11px] font-medium whitespace-nowrap border-0 outline-none pr-6" onchange="updateSelectColor(this, statusStyles)">
                          <option value="Open">Open</option>
                          <option value="Pending">Pending</option>
                          <option value="Resolved">Resolved</option>
                        </select>
                        <span className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 rounded-md text-[#8B5CF6]">
                          <i data-lucide="chevron-down" className="w-3 h-3"></i>
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-xs text-[#334155] whitespace-nowrap">13 Sep 2026</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 text-xs text-[#64748B] whitespace-nowrap">TCK-3309</td>
                    <td className="px-5 py-4 text-xs font-bold text-[#0F172A] whitespace-nowrap">Change shipping address</td>
                    <td className="px-5 py-4 text-xs text-[#334155] whitespace-nowrap">Order Issues</td>
                    <td className="px-5 py-4 text-xs text-[#1E293B] whitespace-nowrap">Priya Nandakumar</td>
                    <td className="px-5 py-4">
                      <div className="relative inline-block">
                        <select className="priority-select appearance-none cursor-pointer px-3 py-1 rounded-full text-[11px] font-medium whitespace-nowrap border-0 outline-none pr-6" onchange="updateSelectColor(this, priorityStyles)">
                          <option value="High">High</option>
                          <option value="Medium">Medium</option>
                          <option value="Low">Low</option>
                        </select>
                        <span className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 rounded-md text-[#8B5CF6]">
                          <i data-lucide="chevron-down" className="w-3 h-3"></i>
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <div className="relative inline-block">
                        <select className="status-select appearance-none cursor-pointer px-3 py-1 rounded-full text-[11px] font-medium whitespace-nowrap border-0 outline-none pr-6" onchange="updateSelectColor(this, statusStyles)">
                          <option value="Open">Open</option>
                          <option value="Pending">Pending</option>
                          <option value="Resolved">Resolved</option>
                        </select>
                        <span className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 rounded-md text-[#8B5CF6]">
                          <i data-lucide="chevron-down" className="w-3 h-3"></i>
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-xs text-[#334155] whitespace-nowrap">12 Sep 2026</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 text-xs text-[#64748B] whitespace-nowrap">TCK-3305</td>
                    <td className="px-5 py-4 text-xs font-bold text-[#0F172A] whitespace-nowrap">Coupon not applying at checkout</td>
                    <td className="px-5 py-4 text-xs text-[#334155] whitespace-nowrap">Payment & Promos</td>
                    <td className="px-5 py-4 text-xs text-[#1E293B] whitespace-nowrap">Liam Carter</td>
                    <td className="px-5 py-4">
                      <div className="relative inline-block">
                        <select className="priority-select appearance-none cursor-pointer px-3 py-1 rounded-full text-[11px] font-medium whitespace-nowrap border-0 outline-none pr-6" onchange="updateSelectColor(this, priorityStyles)">
                          <option value="High">High</option>
                          <option value="Medium">Medium</option>
                          <option value="Low">Low</option>
                        </select>
                        <span className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 rounded-md text-[#8B5CF6]">
                          <i data-lucide="chevron-down" className="w-3 h-3"></i>
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <div className="relative inline-block">
                        <select className="status-select appearance-none cursor-pointer px-3 py-1 rounded-full text-[11px] font-medium whitespace-nowrap border-0 outline-none pr-6" onchange="updateSelectColor(this, statusStyles)">
                          <option value="Open">Open</option>
                          <option value="Pending">Pending</option>
                          <option value="Resolved">Resolved</option>
                        </select>
                        <span className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 rounded-md text-[#8B5CF6]">
                          <i data-lucide="chevron-down" className="w-3 h-3"></i>
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-xs text-[#334155] whitespace-nowrap">11 Sep 2026</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 text-xs text-[#64748B] whitespace-nowrap">TCK-3298</td>
                    <td className="px-5 py-4 text-xs font-bold text-[#0F172A] whitespace-nowrap">Bulk order still in packaging</td>
                    <td className="px-5 py-4 text-xs text-[#334155] whitespace-nowrap">Delivery</td>
                    <td className="px-5 py-4 text-xs text-[#1E293B] whitespace-nowrap">Overdrive Archive Co.</td>
                    <td className="px-5 py-4">
                      <div className="relative inline-block">
                        <select className="priority-select appearance-none cursor-pointer px-3 py-1 rounded-full text-[11px] font-medium whitespace-nowrap border-0 outline-none pr-6" onchange="updateSelectColor(this, priorityStyles)">
                          <option value="High">High</option>
                          <option value="Medium">Medium</option>
                          <option value="Low">Low</option>
                        </select>
                        <span className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 rounded-md text-[#8B5CF6]">
                          <i data-lucide="chevron-down" className="w-3 h-3"></i>
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <div className="relative inline-block">
                        <select className="status-select appearance-none cursor-pointer px-3 py-1 rounded-full text-[11px] font-medium whitespace-nowrap border-0 outline-none pr-6" onchange="updateSelectColor(this, statusStyles)">
                          <option value="Open">Open</option>
                          <option value="Pending">Pending</option>
                          <option value="Resolved">Resolved</option>
                        </select>
                        <span className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 rounded-md text-[#8B5CF6]">
                          <i data-lucide="chevron-down" className="w-3 h-3"></i>
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-xs text-[#334155] whitespace-nowrap">09 Sep 2026</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 text-xs text-[#64748B] whitespace-nowrap">TCK-3291</td>
                    <td className="px-5 py-4 text-xs font-bold text-[#0F172A] whitespace-nowrap">Can't reset account password</td>
                    <td className="px-5 py-4 text-xs text-[#334155] whitespace-nowrap">Account</td>
                    <td className="px-5 py-4 text-xs text-[#1E293B] whitespace-nowrap">Grace Mitchell</td>
                    <td className="px-5 py-4">
                      <div className="relative inline-block">
                        <select className="priority-select appearance-none cursor-pointer px-3 py-1 rounded-full text-[11px] font-medium whitespace-nowrap border-0 outline-none pr-6" onchange="updateSelectColor(this, priorityStyles)">
                          <option value="High">High</option>
                          <option value="Medium">Medium</option>
                          <option value="Low">Low</option>
                        </select>
                        <span className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 rounded-md text-[#8B5CF6]">
                          <i data-lucide="chevron-down" className="w-3 h-3"></i>
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <div className="relative inline-block">
                        <select className="status-select appearance-none cursor-pointer px-3 py-1 rounded-full text-[11px] font-medium whitespace-nowrap border-0 outline-none pr-6" onchange="updateSelectColor(this, statusStyles)">
                          <option value="Open">Open</option>
                          <option value="Pending">Pending</option>
                          <option value="Resolved">Resolved</option>
                        </select>
                        <span className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 rounded-md text-[#8B5CF6]">
                          <i data-lucide="chevron-down" className="w-3 h-3"></i>
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-xs text-[#334155] whitespace-nowrap">07 Sep 2026</td>
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
