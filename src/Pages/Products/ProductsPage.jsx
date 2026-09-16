import { Link } from "react-router";
import Icon from "../../components/shared/Icon";

export default function ProductsPage() {
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
              <p className="font-bold text-sm text-[#334155] truncate">Products</p>
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
          <div className="flex items-center justify-between gap-3">
            <p className="font-bold text-[20px] leading-7 tracking-[-0.5px] lg:text-[24px] lg:leading-8 lg:tracking-[-0.6px] text-[#0F172A]">Products</p>
            <Link to="/products/add" className="bg-[#EA3829] text-white rounded-[8px] py-2 px-3 lg:px-4 flex items-center gap-1 lg:gap-2 shadow-[0_1px_2px_0_rgba(0,0,0,0.2)] hover:bg-[#D92F22] hover:shadow-[0_2px_4px_0_rgba(0,0,0,0.2)] transition-all duration-200 shrink-0">
              <Icon name="plus" className="w-4 h-4 shrink-0" />
              <span className="font-semibold text-[11px] lg:text-xs whitespace-nowrap">Add product</span>
            </Link>
          </div>

          <div className="border border-[#E2E8F0]/80 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-white rounded-[8px] overflow-hidden min-w-0">
            <form action="#" className="py-3.5 px-4 flex flex-wrap items-center gap-3">
              <div className="relative shrink-0">
                <select className="appearance-none pl-3 pr-8 py-1.5 text-xs font-bold text-[#202223] bg-white outline-none cursor-pointer">
                  <option value="all">All</option>
                </select>
                <Icon name="chevrons-up-down" className="w-3.5 h-3.5 text-[#5C5F62] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              <div className="flex items-center gap-2 min-w-0 flex-1 sm:flex-none">
                <Icon name="search" className="w-3.5 h-3.5 text-[#94A3B8] shrink-0" />
                <input type="text" placeholder="Search and filter" className="outline-none text-xs text-[#334155] placeholder:text-[#94A3B8] w-full sm:w-[180px] min-w-0" />
              </div>
            </form>
            <div className="overflow-x-auto overflow-y-auto scrollbar-thin">
              <table className="w-full text-left border-collapse min-w-[880px]">
                <thead className="sticky top-0 z-10 bg-white">
                  <tr className="border-b border-t border-[#E2E8F0]/80">
                    <th className="px-4 py-3 font-bold text-[11px] leading-4 tracking-[0.55px] text-[#64748B] whitespace-nowrap">products</th>
                    <th className="px-4 py-3 font-bold text-[11px] leading-4 tracking-[0.55px] text-[#64748B] whitespace-nowrap">STATUS</th>
                    <th className="px-4 py-3 font-bold text-[11px] leading-4 tracking-[0.55px] text-[#64748B] whitespace-nowrap">Inventory</th>
                    <th className="px-4 py-3 font-bold text-[11px] leading-4 tracking-[0.55px] text-[#64748B] whitespace-nowrap">CATEGORY</th>
                    <th className="px-4 py-3 font-bold text-[11px] leading-4 tracking-[0.55px] text-[#64748B] whitespace-nowrap">COLORS</th>
                    <th className="px-4 py-3 font-bold text-[11px] leading-4 tracking-[0.55px] text-[#64748B] whitespace-nowrap">Product Type</th>
                    <th className="px-4 py-3 font-bold text-[11px] leading-4 tracking-[0.55px] text-[#64748B] whitespace-nowrap">Price</th>
                    <th className="px-4 py-3 font-bold text-[11px] leading-4 tracking-[0.55px] text-[#64748B] whitespace-nowrap"></th>
                  </tr>
                </thead>
                <tbody className="border-b-2 border-[#F1F2F3] divide-y divide-[#F1F2F3]">
                  <tr>
                    <td className="px-4 py-5">
                      <div className="flex items-center gap-2">
                        <img src="assets/shirt.png" alt="" className="h-9 shrink-0" />
                        <span className="text-xs text-[#0F172A] whitespace-nowrap">AS Colour 5001 Staple</span>
                      </div>
                    </td>
                    <td className="px-4 py-5">
                      <div className="bg-[#ECFDF5] py-[2px] px-2 inline-flex rounded-[8px]">
                        <p className="text-[11px] leading-4 text-[#047857]">Active</p>
                      </div>
                    </td>
                    <td className="px-4 py-5 text-xs text-[#475569] whitespace-nowrap">2,450</td>
                    <td className="px-4 py-5 text-xs text-[#64748B] whitespace-nowrap">ASC-5001-WBLK</td>
                    <td className="px-4 py-5 text-xs text-[#475569] whitespace-nowrap">8</td>
                    <td className="px-4 py-5 text-xs text-[#475569] whitespace-nowrap">Men · Crew Neck</td>
                    <td className="px-4 py-5 text-xs text-[#0F172A] whitespace-nowrap">$18.90</td>
                    <td className="px-4 py-5">
                      <div className="flex items-center gap-2">
                        <button type="button">
                          <Icon name="pencil" className="w-4 h-4 text-[#94A3B8]" />
                        </button>

                        <button type="button">
                          <Icon name="trash-2" className="w-4 h-4 text-[#94A3B8]" />
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-5">
                      <div className="flex items-center gap-2">
                        <img src="assets/shirt.png" alt="" className="h-9 shrink-0" />
                        <span className="text-xs text-[#0F172A] whitespace-nowrap">AS Colour 5001 Staple</span>
                      </div>
                    </td>
                    <td className="px-4 py-5">
                      <div className="bg-[#ECFDF5] py-[2px] px-2 inline-flex rounded-[8px]">
                        <p className="text-[11px] leading-4 text-[#047857]">Active</p>
                      </div>
                    </td>
                    <td className="px-4 py-5 text-xs text-[#475569] whitespace-nowrap">2,450</td>
                    <td className="px-4 py-5 text-xs text-[#64748B] whitespace-nowrap">ASC-5001-WBLK</td>
                    <td className="px-4 py-5 text-xs text-[#475569] whitespace-nowrap">8</td>
                    <td className="px-4 py-5 text-xs text-[#475569] whitespace-nowrap">Men · Crew Neck</td>
                    <td className="px-4 py-5 text-xs text-[#0F172A] whitespace-nowrap">$18.90</td>
                    <td className="px-4 py-5">
                      <div className="flex items-center gap-2">
                        <button type="button">
                          <Icon name="pencil" className="w-4 h-4 text-[#94A3B8]" />
                        </button>

                        <button type="button">
                          <Icon name="trash-2" className="w-4 h-4 text-[#94A3B8]" />
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-5">
                      <div className="flex items-center gap-2">
                        <img src="assets/shirt.png" alt="" className="h-9 shrink-0" />
                        <span className="text-xs text-[#0F172A] whitespace-nowrap">AS Colour 5001 Staple</span>
                      </div>
                    </td>
                    <td className="px-4 py-5">
                      <div className="bg-[#ECFDF5] py-[2px] px-2 inline-flex rounded-[8px]">
                        <p className="text-[11px] leading-4 text-[#047857]">Active</p>
                      </div>
                    </td>
                    <td className="px-4 py-5 text-xs text-[#475569] whitespace-nowrap">2,450</td>
                    <td className="px-4 py-5 text-xs text-[#64748B] whitespace-nowrap">ASC-5001-WBLK</td>
                    <td className="px-4 py-5 text-xs text-[#475569] whitespace-nowrap">8</td>
                    <td className="px-4 py-5 text-xs text-[#475569] whitespace-nowrap">Men · Crew Neck</td>
                    <td className="px-4 py-5 text-xs text-[#0F172A] whitespace-nowrap">$18.90</td>
                    <td className="px-4 py-5">
                      <div className="flex items-center gap-2">
                        <button type="button">
                          <Icon name="pencil" className="w-4 h-4 text-[#94A3B8]" />
                        </button>

                        <button type="button">
                          <Icon name="trash-2" className="w-4 h-4 text-[#94A3B8]" />
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-5">
                      <div className="flex items-center gap-2">
                        <img src="assets/shirt.png" alt="" className="h-9 shrink-0" />
                        <span className="text-xs text-[#0F172A] whitespace-nowrap">AS Colour 5001 Staple</span>
                      </div>
                    </td>
                    <td className="px-4 py-5">
                      <div className="bg-[#ECFDF5] py-[2px] px-2 inline-flex rounded-[8px]">
                        <p className="text-[11px] leading-4 text-[#047857]">Active</p>
                      </div>
                    </td>
                    <td className="px-4 py-5 text-xs text-[#475569] whitespace-nowrap">2,450</td>
                    <td className="px-4 py-5 text-xs text-[#64748B] whitespace-nowrap">ASC-5001-WBLK</td>
                    <td className="px-4 py-5 text-xs text-[#475569] whitespace-nowrap">8</td>
                    <td className="px-4 py-5 text-xs text-[#475569] whitespace-nowrap">Men · Crew Neck</td>
                    <td className="px-4 py-5 text-xs text-[#0F172A] whitespace-nowrap">$18.90</td>
                    <td className="px-4 py-5">
                      <div className="flex items-center gap-2">
                        <button type="button">
                          <Icon name="pencil" className="w-4 h-4 text-[#94A3B8]" />
                        </button>

                        <button type="button">
                          <Icon name="trash-2" className="w-4 h-4 text-[#94A3B8]" />
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-5">
                      <div className="flex items-center gap-2">
                        <img src="assets/shirt.png" alt="" className="h-9 shrink-0" />
                        <span className="text-xs text-[#0F172A] whitespace-nowrap">AS Colour 5001 Staple</span>
                      </div>
                    </td>
                    <td className="px-4 py-5">
                      <div className="bg-[#ECFDF5] py-[2px] px-2 inline-flex rounded-[8px]">
                        <p className="text-[11px] leading-4 text-[#047857]">Active</p>
                      </div>
                    </td>
                    <td className="px-4 py-5 text-xs text-[#475569] whitespace-nowrap">2,450</td>
                    <td className="px-4 py-5 text-xs text-[#64748B] whitespace-nowrap">ASC-5001-WBLK</td>
                    <td className="px-4 py-5 text-xs text-[#475569] whitespace-nowrap">8</td>
                    <td className="px-4 py-5 text-xs text-[#475569] whitespace-nowrap">Men · Crew Neck</td>
                    <td className="px-4 py-5 text-xs text-[#0F172A] whitespace-nowrap">$18.90</td>
                    <td className="px-4 py-5">
                      <div className="flex items-center gap-2">
                        <button type="button">
                          <Icon name="pencil" className="w-4 h-4 text-[#94A3B8]" />
                        </button>

                        <button type="button">
                          <Icon name="trash-2" className="w-4 h-4 text-[#94A3B8]" />
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-5">
                      <div className="flex items-center gap-2">
                        <img src="assets/shirt.png" alt="" className="h-9 shrink-0" />
                        <span className="text-xs text-[#0F172A] whitespace-nowrap">AS Colour 5001 Staple</span>
                      </div>
                    </td>
                    <td className="px-4 py-5">
                      <div className="bg-[#ECFDF5] py-[2px] px-2 inline-flex rounded-[8px]">
                        <p className="text-[11px] leading-4 text-[#047857]">Active</p>
                      </div>
                    </td>
                    <td className="px-4 py-5 text-xs text-[#475569] whitespace-nowrap">2,450</td>
                    <td className="px-4 py-5 text-xs text-[#64748B] whitespace-nowrap">ASC-5001-WBLK</td>
                    <td className="px-4 py-5 text-xs text-[#475569] whitespace-nowrap">8</td>
                    <td className="px-4 py-5 text-xs text-[#475569] whitespace-nowrap">Men · Crew Neck</td>
                    <td className="px-4 py-5 text-xs text-[#0F172A] whitespace-nowrap">$18.90</td>
                    <td className="px-4 py-5">
                      <div className="flex items-center gap-2">
                        <button type="button">
                          <Icon name="pencil" className="w-4 h-4 text-[#94A3B8]" />
                        </button>

                        <button type="button">
                          <Icon name="trash-2" className="w-4 h-4 text-[#94A3B8]" />
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-5">
                      <div className="flex items-center gap-2">
                        <img src="assets/shirt.png" alt="" className="h-9 shrink-0" />
                        <span className="text-xs text-[#0F172A] whitespace-nowrap">AS Colour 5001 Staple</span>
                      </div>
                    </td>
                    <td className="px-4 py-5">
                      <div className="bg-[#ECFDF5] py-[2px] px-2 inline-flex rounded-[8px]">
                        <p className="text-[11px] leading-4 text-[#047857]">Active</p>
                      </div>
                    </td>
                    <td className="px-4 py-5 text-xs text-[#475569] whitespace-nowrap">2,450</td>
                    <td className="px-4 py-5 text-xs text-[#64748B] whitespace-nowrap">ASC-5001-WBLK</td>
                    <td className="px-4 py-5 text-xs text-[#475569] whitespace-nowrap">8</td>
                    <td className="px-4 py-5 text-xs text-[#475569] whitespace-nowrap">Men · Crew Neck</td>
                    <td className="px-4 py-5 text-xs text-[#0F172A] whitespace-nowrap">$18.90</td>
                    <td className="px-4 py-5">
                      <div className="flex items-center gap-2">
                        <button type="button">
                          <Icon name="pencil" className="w-4 h-4 text-[#94A3B8]" />
                        </button>

                        <button type="button">
                          <Icon name="trash-2" className="w-4 h-4 text-[#94A3B8]" />
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-5">
                      <div className="flex items-center gap-2">
                        <img src="assets/shirt.png" alt="" className="h-9 shrink-0" />
                        <span className="text-xs text-[#0F172A] whitespace-nowrap">AS Colour 5001 Staple</span>
                      </div>
                    </td>
                    <td className="px-4 py-5">
                      <div className="bg-[#ECFDF5] py-[2px] px-2 inline-flex rounded-[8px]">
                        <p className="text-[11px] leading-4 text-[#047857]">Active</p>
                      </div>
                    </td>
                    <td className="px-4 py-5 text-xs text-[#475569] whitespace-nowrap">2,450</td>
                    <td className="px-4 py-5 text-xs text-[#64748B] whitespace-nowrap">ASC-5001-WBLK</td>
                    <td className="px-4 py-5 text-xs text-[#475569] whitespace-nowrap">8</td>
                    <td className="px-4 py-5 text-xs text-[#475569] whitespace-nowrap">Men · Crew Neck</td>
                    <td className="px-4 py-5 text-xs text-[#0F172A] whitespace-nowrap">$18.90</td>
                    <td className="px-4 py-5">
                      <div className="flex items-center gap-2">
                        <button type="button">
                          <Icon name="pencil" className="w-4 h-4 text-[#94A3B8]" />
                        </button>

                        <button type="button">
                          <Icon name="trash-2" className="w-4 h-4 text-[#94A3B8]" />
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-5">
                      <div className="flex items-center gap-2">
                        <img src="assets/shirt.png" alt="" className="h-9 shrink-0" />
                        <span className="text-xs text-[#0F172A] whitespace-nowrap">AS Colour 5001 Staple</span>
                      </div>
                    </td>
                    <td className="px-4 py-5">
                      <div className="bg-[#ECFDF5] py-[2px] px-2 inline-flex rounded-[8px]">
                        <p className="text-[11px] leading-4 text-[#047857]">Active</p>
                      </div>
                    </td>
                    <td className="px-4 py-5 text-xs text-[#475569] whitespace-nowrap">2,450</td>
                    <td className="px-4 py-5 text-xs text-[#64748B] whitespace-nowrap">ASC-5001-WBLK</td>
                    <td className="px-4 py-5 text-xs text-[#475569] whitespace-nowrap">8</td>
                    <td className="px-4 py-5 text-xs text-[#475569] whitespace-nowrap">Men · Crew Neck</td>
                    <td className="px-4 py-5 text-xs text-[#0F172A] whitespace-nowrap">$18.90</td>
                    <td className="px-4 py-5">
                      <div className="flex items-center gap-2">
                        <button type="button">
                          <Icon name="pencil" className="w-4 h-4 text-[#94A3B8]" />
                        </button>

                        <button type="button">
                          <Icon name="trash-2" className="w-4 h-4 text-[#94A3B8]" />
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-5">
                      <div className="flex items-center gap-2">
                        <img src="assets/shirt.png" alt="" className="h-9 shrink-0" />
                        <span className="text-xs text-[#0F172A] whitespace-nowrap">AS Colour 5001 Staple</span>
                      </div>
                    </td>
                    <td className="px-4 py-5">
                      <div className="bg-[#ECFDF5] py-[2px] px-2 inline-flex rounded-[8px]">
                        <p className="text-[11px] leading-4 text-[#047857]">Active</p>
                      </div>
                    </td>
                    <td className="px-4 py-5 text-xs text-[#475569] whitespace-nowrap">2,450</td>
                    <td className="px-4 py-5 text-xs text-[#64748B] whitespace-nowrap">ASC-5001-WBLK</td>
                    <td className="px-4 py-5 text-xs text-[#475569] whitespace-nowrap">8</td>
                    <td className="px-4 py-5 text-xs text-[#475569] whitespace-nowrap">Men · Crew Neck</td>
                    <td className="px-4 py-5 text-xs text-[#0F172A] whitespace-nowrap">$18.90</td>
                    <td className="px-4 py-5">
                      <div className="flex items-center gap-2">
                        <button type="button">
                          <Icon name="pencil" className="w-4 h-4 text-[#94A3B8]" />
                        </button>

                        <button type="button">
                          <Icon name="trash-2" className="w-4 h-4 text-[#94A3B8]" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button className="py-3 px-4 sm:px-10 flex items-center cursor-pointer">
                <Icon name="chevron-right" className="h-3 text-[#5C5F62]" />
                <span className="text-xs text-[#5C5F62] pl-2">1-50</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
