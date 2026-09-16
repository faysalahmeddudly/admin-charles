import Icon from "../../components/shared/Icon";

export default function CustomersPage() {
  return (
    <>
      {/* Main column */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Topbar */}
        <header className="p-4 sm:p-6 lg:p-6 flex items-center justify-between gap-3 px-4 sm:px-6 border-b border-[#E2E8F0] bg-white sticky top-0 z-20">
          <div className="flex items-center gap-2 min-w-0">
            <button id="menuBtn" className="lg:hidden inline-flex shrink-0 items-center justify-center w-9 h-9 rounded-md border border-gray-300">
              <Icon name="menu" className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-1 min-w-0">
              <p className="hidden sm:block text-sm text-[#94A3B8] shrink-0">Admin</p>
              <Icon name="chevron-right" className="hidden sm:block w-5 h-5 shrink-0" />
              <p className="font-bold text-sm text-[#334155] truncate">Customers</p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-5 shrink-0">
            <div className="hidden md:flex items-center w-[200px] lg:w-[270px] h-9 px-3 gap-2 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC]">
              <Icon name="search" className="w-4 h-4 text-[#94A3B8] shrink-0" />
              <input type="text" placeholder="Search anything..." className="w-full bg-transparent outline-none text-sm text-[#334155] placeholder:text-[#94A3B8] min-w-0" />
            </div>

            <button className="md:hidden relative w-9 h-9 flex items-center justify-center shrink-0">
              <Icon name="search" className="w-5 h-5 text-[#64748B]" />
            </button>

            <button className="relative w-9 h-9 flex items-center justify-center shrink-0">
              <Icon name="bell" className="w-5 h-5 text-[#64748B]" />
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
                <Icon name="search" className="w-4 h-4 text-[#94A3B8] shrink-0" />
                <input type="text" name="customer_search" placeholder="Search customer..." className="w-full text-xs bg-transparent outline-none placeholder:text-[#94A3B8] min-w-0" />
              </div>

              <button type="button" className="border border-[#E2E8F0] rounded-[8px] px-2 lg:px-3 flex items-center gap-3 shrink-0">
                <Icon name="filter" className="w-[11px] text-[#64748B] shrink-0" />
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
    </>
  );
}
