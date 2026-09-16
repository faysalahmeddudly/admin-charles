import Icon from "../../components/shared/Icon";

export default function TicketsPage() {
  return (
    <>
      {/* Main column */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Topbar */}
        <header className="p-3 sm:p-4 lg:p-6 flex items-center justify-between gap-2 px-3 sm:px-4 lg:px-6 border-b border-[#E2E8F0] bg-white sticky top-0 z-20">
          <div className="flex items-center gap-1 min-w-0">
            <p className="text-sm text-[#94A3B8] hidden sm:inline">Admin</p>
            <Icon name="chevron-right" className="w-5 h-5 hidden sm:inline shrink-0" />
            <p className="font-bold text-sm text-[#334155] truncate">Support Tickets</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-5 shrink-0">
            <div className="hidden md:flex items-center w-[180px] lg:w-[270px] h-9 px-3 gap-2 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC]">
              <Icon name="search" className="w-4 h-4 text-[#94A3B8] shrink-0" />
              <input type="text" placeholder="Search anything..." className="w-full bg-transparent outline-none text-sm text-[#334155] placeholder:text-[#94A3B8]" />
            </div>

            <button className="relative w-9 h-9 flex items-center justify-center shrink-0">
              <Icon name="bell" className="w-5 h-5 text-[#64748B]" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#EA3829] rounded-full"></span>
            </button>

            <button id="menuBtn" className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-gray-300 shrink-0">
              <Icon name="menu" className="w-5 h-5" />
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
                          <Icon name="chevron-down" className="w-3 h-3" />
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
                          <Icon name="chevron-down" className="w-3 h-3" />
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
                          <Icon name="chevron-down" className="w-3 h-3" />
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
                          <Icon name="chevron-down" className="w-3 h-3" />
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
                          <Icon name="chevron-down" className="w-3 h-3" />
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
                          <Icon name="chevron-down" className="w-3 h-3" />
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
                          <Icon name="chevron-down" className="w-3 h-3" />
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
                          <Icon name="chevron-down" className="w-3 h-3" />
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
                          <Icon name="chevron-down" className="w-3 h-3" />
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
                          <Icon name="chevron-down" className="w-3 h-3" />
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
    </>
  );
}
