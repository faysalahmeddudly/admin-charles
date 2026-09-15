export default function StudioEmbroideryPage() {
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
            <a href="studio.html" className="flex items-center gap-2.5 p-3 rounded-[12px] text-[#94A3B8] bg-[#EA3829] text-white">
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
              <p className="font-bold text-sm text-[#334155] truncate">Design Studio Assets</p>
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
            <p className="font-bold text-[20px] leading-7 tracking-[-0.5px] lg:text-[24px] lg:leading-8 lg:tracking-[-0.6px] text-[#0F172A]">Design Studio Assets</p>

            <div className="flex items-center gap-[6px] shrink-0">
              <a href="studio.html" className="py-1.5 px-3 flex items-center gap-1.5">
                <i data-lucide="image" className="w-3.5 shrink-0"></i>
                <span className="font-semibold text-xs text-[#1F2937] whitespace-nowrap">DTF</span>
              </a>
              <a href="studio-embroidery.html" className="border border-[#E5E7EB] rounded-full py-1.5 px-3 flex items-center gap-1.5">
                <img src="assets/Embroidery.png" alt="Image" className="h-3.5 shrink-0" />
                <span className="font-medium text-xs text-[#4B5563] whitespace-nowrap">Embroidery</span>
              </a>
            </div>
          </div>

          <div className="border border-[#E2E8F0] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] rounded-[8px] bg-white">
            <div className="p-4 sm:p-6 border-b border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3">
              <p className="font-bold text-[16px] leading-6 text-[#0F172A]">Embroidery Design Library</p>

              <button id="uploadBtn" type="button" className="bg-[#EA3829] text-white rounded-[8px] py-2 px-3 lg:px-4 flex items-center gap-1 lg:gap-2 shadow-[0_1px_2px_0_rgba(0,0,0,0.2)] hover:bg-[#D92F22] hover:shadow-[0_2px_4px_0_rgba(0,0,0,0.2)] transition-all duration-200 shrink-0">
                <i data-lucide="download" className="w-4 h-4 shrink-0"></i>
                <span className="font-semibold text-[11px] lg:text-xs whitespace-nowrap">Upload asset</span>
              </button>
            </div>

            <div className="p-4 sm:p-6 flex flex-col gap-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-bold text-[11px] leading-4 tracking-[0.55px] text-[#94A3B8]">MY UPLOADS</p>
                <buton type="button" className="flex items-center gap-[2px] text-[#DC2626] text-xs shrink-0">
                  <i data-lucide="plus" className="w-3"></i>
                  New Library
                </buton>
              </div>

              <div className="flex items-start gap-1.5">
                <i data-lucide="folder" className="w-4 text-[#94A3B8] shrink-0"></i>
                <div className="flex flex-col gap-1 mt-1 flex-1 min-w-0">
                  <p className="font-bold text-xs text-[#1E293B]">Store Designs</p>
                  <div className="flex items-center justify-between gap-2 w-full">
                    <div className="flex items-center gap-2 cursor-pointer group min-w-0">
                      <i data-lucide="chevron-right" className="w-3 text-[#CBD5E1] group-hover:text-[#DC2626] transition-colors shrink-0"></i>
                      <p className="text-xs text-[#334155] group-hover:text-[#DC2626] transition-colors truncate">Animals</p>
                    </div>
                    <p className="text-[#94A3B8] text-xs shrink-0">869</p>
                  </div>
                  <buton type="button" className="flex items-center gap-[2px] text-[#DC2626] text-xs">
                    <i data-lucide="plus" className="w-3"></i>
                    Add category
                  </buton>
                </div>
              </div>

              <div className="flex items-start gap-1.5">
                <i data-lucide="folder" className="w-4 text-[#DC2626] shrink-0"></i>
                <div className="flex flex-col gap-1 mt-1 flex-1 min-w-0">
                  <p className="font-bold text-xs text-[#DC2626]">Store Designs</p>
                  <div className="flex items-center justify-between gap-2 w-full">
                    <div className="flex items-center gap-2 cursor-pointer group min-w-0">
                      <i data-lucide="chevron-right" className="w-3 text-[#DC2626] shrink-0"></i>
                      <p className="text-xs text-[#DC2626] truncate">Animals</p>
                    </div>
                    <p className="text-[#94A3B8] text-xs shrink-0">1950</p>
                  </div>

                  <div className="flex items-center justify-between gap-2 w-full">
                    <div className="flex items-center gap-2 cursor-pointer group min-w-0">
                      <i data-lucide="chevron-right" className="w-3 text-[#CBD5E1] group-hover:text-[#DC2626] transition-colors shrink-0"></i>
                      <p className="text-xs text-[#334155] group-hover:text-[#DC2626] transition-colors truncate">Arts and Culture</p>
                    </div>
                    <p className="text-[#94A3B8] text-xs shrink-0">860</p>
                  </div>

                  <div className="flex items-center justify-between gap-2 w-full">
                    <div className="flex items-center gap-2 cursor-pointer group min-w-0">
                      <i data-lucide="chevron-right" className="w-3 text-[#CBD5E1] group-hover:text-[#DC2626] transition-colors shrink-0"></i>
                      <p className="text-xs text-[#334155] group-hover:text-[#DC2626] transition-colors truncate">Building and Environment</p>
                    </div>
                    <p className="text-[#94A3B8] text-xs shrink-0">640</p>
                  </div>

                  <div className="flex items-center justify-between gap-2 w-full">
                    <div className="flex items-center gap-2 cursor-pointer group min-w-0">
                      <i data-lucide="chevron-right" className="w-3 text-[#CBD5E1] group-hover:text-[#DC2626] transition-colors shrink-0"></i>
                      <p className="text-xs text-[#334155] group-hover:text-[#DC2626] transition-colors truncate">Business</p>
                    </div>
                    <p className="text-[#94A3B8] text-xs shrink-0">720</p>
                  </div>

                  <div className="flex items-center justify-between gap-2 w-full">
                    <div className="flex items-center gap-2 cursor-pointer group min-w-0">
                      <i data-lucide="chevron-right" className="w-3 text-[#CBD5E1] group-hover:text-[#DC2626] transition-colors shrink-0"></i>
                      <p className="text-xs text-[#334155] group-hover:text-[#DC2626] transition-colors truncate">Celebrations</p>
                    </div>
                    <p className="text-[#94A3B8] text-xs shrink-0">510</p>
                  </div>

                  <div className="flex items-center justify-between gap-2 w-full">
                    <div className="flex items-center gap-2 cursor-pointer group min-w-0">
                      <i data-lucide="chevron-right" className="w-3 text-[#CBD5E1] group-hover:text-[#DC2626] transition-colors shrink-0"></i>
                      <p className="text-xs text-[#334155] group-hover:text-[#DC2626] transition-colors truncate">Clothing</p>
                    </div>
                    <p className="text-[#94A3B8] text-xs shrink-0">430</p>
                  </div>

                  <div className="flex items-center justify-between gap-2 w-full">
                    <div className="flex items-center gap-2 cursor-pointer group min-w-0">
                      <i data-lucide="chevron-right" className="w-3 text-[#CBD5E1] group-hover:text-[#DC2626] transition-colors shrink-0"></i>
                      <p className="text-xs text-[#334155] group-hover:text-[#DC2626] transition-colors truncate">Decorative</p>
                    </div>
                    <p className="text-[#94A3B8] text-xs shrink-0">980</p>
                  </div>

                  <div className="flex items-center justify-between gap-2 w-full">
                    <div className="flex items-center gap-2 cursor-pointer group min-w-0">
                      <i data-lucide="chevron-right" className="w-3 text-[#CBD5E1] group-hover:text-[#DC2626] transition-colors shrink-0"></i>
                      <p className="text-xs text-[#334155] group-hover:text-[#DC2626] transition-colors truncate">Elements</p>
                    </div>
                    <p className="text-[#94A3B8] text-xs shrink-0">350</p>
                  </div>

                  <div className="flex items-center justify-between gap-2 w-full">
                    <div className="flex items-center gap-2 cursor-pointer group min-w-0">
                      <i data-lucide="chevron-right" className="w-3 text-[#CBD5E1] group-hover:text-[#DC2626] transition-colors shrink-0"></i>
                      <p className="text-xs text-[#334155] group-hover:text-[#DC2626] transition-colors truncate">Fantasy and Themes</p>
                    </div>
                    <p className="text-[#94A3B8] text-xs shrink-0">610</p>
                  </div>

                  <div className="flex items-center justify-between gap-2 w-full">
                    <div className="flex items-center gap-2 cursor-pointer group min-w-0">
                      <i data-lucide="chevron-right" className="w-3 text-[#CBD5E1] group-hover:text-[#DC2626] transition-colors shrink-0"></i>
                      <p className="text-xs text-[#334155] group-hover:text-[#DC2626] transition-colors truncate">Food</p>
                    </div>
                    <p className="text-[#94A3B8] text-xs shrink-0">470</p>
                  </div>

                  <div className="flex items-center justify-between gap-2 w-full">
                    <div className="flex items-center gap-2 cursor-pointer group min-w-0">
                      <i data-lucide="chevron-right" className="w-3 text-[#CBD5E1] group-hover:text-[#DC2626] transition-colors shrink-0"></i>
                      <p className="text-xs text-[#334155] group-hover:text-[#DC2626] transition-colors truncate">Government</p>
                    </div>
                    <p className="text-[#94A3B8] text-xs shrink-0">220</p>
                  </div>
                  <buton type="button" className="flex items-center gap-[2px] text-[#DC2626] text-xs">
                    <i data-lucide="plus" className="w-3"></i>
                    Add category
                  </buton>
                </div>
              </div>
            </div>

            <div className="px-4 sm:px-6 pb-6 flex flex-col gap-4">
              <div className="flex items-center gap-2 border border-[#E2E8F0] rounded-[8px] px-3 py-2 bg-white">
                <i data-lucide="search" className="w-4 h-4 text-[#94A3B8] shrink-0"></i>
                <input type="text" placeholder="Enter search term here..." className="w-full bg-transparent outline-none text-xs text-[#334155] placeholder:text-[#94A3B8] min-w-0" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="border border-[#E2E8F0] rounded-[8px]">
                  <div className="aspect-square shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.03)] flex items-center justify-center max-h-[144px] w-full p-3">
                    <img src="assets/whitetail-deer.png" alt="Whitetail Deer" className="max-h-full max-w-full object-contain" />
                  </div>
                  <div className="pb-[10px] px-[10px]">
                    <div className="flex flex-col mt-3">
                      <p className="font-bold text-xs text-[#0F172A]">Whitetail Deer</p>
                      <p className="font-bold text-[11px] leading-4 text-[#94A3B8]">Clipart PNG · 340 uses</p>
                    </div>
                    <button type="button" className="mt-5 border border-[#E5E7EB] rounded-[8px] p-[6px] w-full flex items-center justify-center hover:text-[#D92F22] hover:border-[#D92F22] transition duration-200">
                      <i data-lucide="trash" className="w-[14px]"></i>
                    </button>
                  </div>
                </div>

                <div className="border border-[#E2E8F0] rounded-[8px]">
                  <div className="aspect-square shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.03)] flex items-center justify-center max-h-[144px] w-full p-3">
                    <img src="assets/whitetail-deer.png" alt="Whitetail Deer" className="max-h-full max-w-full object-contain" />
                  </div>
                  <div className="pb-[10px] px-[10px]">
                    <div className="flex flex-col mt-3">
                      <p className="font-bold text-xs text-[#0F172A]">Whitetail Deer</p>
                      <p className="font-bold text-[11px] leading-4 text-[#94A3B8]">Clipart PNG · 340 uses</p>
                    </div>
                    <button type="button" className="mt-5 border border-[#E5E7EB] rounded-[8px] p-[6px] w-full flex items-center justify-center hover:text-[#D92F22] hover:border-[#D92F22] transition duration-200">
                      <i data-lucide="trash" className="w-[14px]"></i>
                    </button>
                  </div>
                </div>

                <div className="border border-[#E2E8F0] rounded-[8px]">
                  <div className="aspect-square shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.03)] flex items-center justify-center max-h-[144px] w-full p-3">
                    <img src="assets/whitetail-deer.png" alt="Whitetail Deer" className="max-h-full max-w-full object-contain" />
                  </div>
                  <div className="pb-[10px] px-[10px]">
                    <div className="flex flex-col mt-3">
                      <p className="font-bold text-xs text-[#0F172A]">Whitetail Deer</p>
                      <p className="font-bold text-[11px] leading-4 text-[#94A3B8]">Clipart PNG · 340 uses</p>
                    </div>
                    <button type="button" className="mt-5 border border-[#E5E7EB] rounded-[8px] p-[6px] w-full flex items-center justify-center hover:text-[#D92F22] hover:border-[#D92F22] transition duration-200">
                      <i data-lucide="trash" className="w-[14px]"></i>
                    </button>
                  </div>
                </div>

                <div className="border border-[#E2E8F0] rounded-[8px]">
                  <div className="aspect-square shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.03)] flex items-center justify-center max-h-[144px] w-full p-3">
                    <img src="assets/whitetail-deer.png" alt="Whitetail Deer" className="max-h-full max-w-full object-contain" />
                  </div>
                  <div className="pb-[10px] px-[10px]">
                    <div className="flex flex-col mt-3">
                      <p className="font-bold text-xs text-[#0F172A]">Whitetail Deer</p>
                      <p className="font-bold text-[11px] leading-4 text-[#94A3B8]">Clipart PNG · 340 uses</p>
                    </div>
                    <button type="button" className="mt-5 border border-[#E5E7EB] rounded-[8px] p-[6px] w-full flex items-center justify-center hover:text-[#D92F22] hover:border-[#D92F22] transition duration-200">
                      <i data-lucide="trash" className="w-[14px]"></i>
                    </button>
                  </div>
                </div>

                <button type="button" className="border-2 border-dashed border-[#E2E8F0] text-[#94A3B8] flex flex-col items-center rounded-[8px] p-6">
                  <i data-lucide="plus" className="w-4 mb-1"></i>
                  <span className="text-xs">Add asset</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1 flex-wrap px-4">
                <button type="button" className="text-xs text-[#94A3B8] px-2 py-1 hover:text-[#334155] flex items-center">
                  <i data-lucide="chevrons-left" className="h-3"></i>
                  Previous
                </button>
                <button type="button" className="text-xs rounded-[6px] w-6 h-6 flex items-center justify-center text-white bg-[#DC2626] font-bold">1</button>
                <button type="button" className="text-xs bg-white text-[#334155] rounded-[6px] w-6 h-6 flex items-center justify-center hover:text-white hover:bg-[#DC2626] hover:font-bold">2</button>
                <button type="button" className="text-xs bg-white text-[#334155] rounded-[6px] w-6 h-6 flex items-center justify-center hover:text-white hover:bg-[#DC2626] hover:font-bold">3</button>
                <button type="button" className="text-xs bg-white text-[#334155] rounded-[6px] w-6 h-6 flex items-center justify-center hover:text-white hover:bg-[#DC2626] hover:font-bold">4</button>
                <button type="button" className="text-xs bg-white text-[#334155] rounded-[6px] w-6 h-6 flex items-center justify-center hover:text-white hover:bg-[#DC2626] hover:font-bold">5</button>
                <button type="button" className="text-xs bg-white text-[#334155] rounded-[6px] w-6 h-6 flex items-center justify-center hover:text-white hover:bg-[#DC2626] hover:font-bold">194</button>
                <button type="button" className="text-xs bg-white text-[#334155] rounded-[6px] w-6 h-6 flex items-center justify-center hover:text-white hover:bg-[#DC2626] hover:font-bold">195</button>
                <button type="button" className="text-xs text-[#94A3B8] px-2 py-1 hover:text-[#334155] flex items-center">
                  Next
                  <i data-lucide="chevrons-right" className="h-3"></i>
                </button>
              </div>
            </div>

            <div className="border-t border-[#E2E8F0] py-4 px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-1.5">
                <i data-lucide="circle-alert" className="w-3 mt-[1px] text-[#3B82F6] shrink-0"></i>
                <p className="text-xs text-[#94A3B8]"><span className="text-[#0F172A] font-bold">1,950</span> assets in "Animals" across 195 pages</p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button type="button" className="px-4 py-2 text-xs border border-[#E2E8F0] rounded-[8px] text-[#334155] bg-white">Discard</button>
                <button type="button" className="flex items-center gap-1.5 bg-[#DC2626] rounded-[8px] py-2 px-4">
                  <span className="font-bold text-xs text-white">Save Library</span>
                  <i data-lucide="arrow-right" className="h-3.5 w-3.5 text-white"></i>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>

    {/* Upload Modal (must be in the DOM BEFORE the script that queries it) */}
    <div id="uploadModal" className="fixed inset-0 z-50 hidden items-center justify-center bg-black/60 backdrop-blur-xs p-4">
      <div className="bg-white w-[calc(100%-32px)] sm:w-[90%] md:max-w-[600px] max-h-[90vh] overflow-y-auto rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
        {/* Header */}
        <div className="flex items-start sm:items-center justify-between gap-3 px-5 py-4 border-b border-[#E2E8F0]">
          <div className="min-w-0">
            <p className="font-bold text-[16px] leading-6 tracking-[-0.4px] text-[#0F172A]">Upload Asset to Library</p>
            <p className="text-xs text-[#64748B]">Add artwork, clipart, or graphics to the Design Studio stock library</p>
          </div>

          <button id="closeModal" className="shrink-0">
            <i data-lucide="x" className="w-4 h-4 text-[#94A3B8]"></i>
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4">
          {/* Asset Title */}
          <div>
            <label className="text-xs font-bold text-[#1E293B]">Asset Title <span className="text-[#EF4444]">*</span></label>
            <input type="text" name="" value="" placeholder="Vintage Timber Wolf Crest" className="mt-1 w-full py-2 px-3 text-xs border border-[#E2E8F0] rounded-[8px] bg-[#F8FAFC] outline-none placeholder:text-[#0F172A]" />
          </div>

          {/* Selects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-[#1E293B]">Library Section <span className="text-[#EF4444]">*</span></label>

              <div className="relative mt-1">
                <select className="w-full appearance-none py-2 px-3 pr-10 text-sm text-[#334155] border border-[#E2E8F0] rounded-[8px] bg-[#F8FAFC] outline-none">
                  <option>Stock Designs</option>
                </select>

                <i data-lucide="chevron-down" className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B] pointer-events-none"></i>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-[#1E293B]">Category <span className="text-[#EF4444]">*</span></label>

              <div className="relative mt-1">
                <select className="w-full appearance-none text-xs text-[#334155] border border-[#E2E8F0] rounded-[8px] py-2 px-3 pr-8 bg-[#F8FAFC] outline-none">
                  <option>Animals (1,950)</option>
                </select>

                <i data-lucide="chevron-down" className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#64748B] pointer-events-none"> </i>
              </div>
            </div>
          </div>

          {/* Upload Box */}
          <div>
            <label className="text-xs font-bold text-[#1E293B]">Asset File <span className="text-[#EF4444]">*</span></label>

            <div className="mt-1 p-5 border border-2 border-dashed border-[#E2E8F0] rounded-[8px] flex flex-col items-center justify-center">
              <div className="h-10 w-10 bg-[#FEF2F2] flex items-center justify-center rounded-full">
                <i data-lucide="upload-cloud" className="h-4 text-[#DC2626]"></i>
              </div>

              <p className="text-xs font-bold text-[#1E293B] mt-[6px] text-center">Click to browse or drag and drop file here</p>
              <p className="text-[11px] leading-4 text-[#94A3B8] text-center">Supports transparent PNG, SVG, AI, PDF, EPS up to 50MB (300 DPI recommended)</p>
            </div>
          </div>

          {/* Uploaded File */}
          <div className="border border-[#E2E8F0] rounded-[8px] p-3 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 sm:justify-between">
            <div className="flex items-stretch gap-3 min-w-0">
              <div className="bg-[#2B3B52] text-white text-[10px] leading-4 font-bold text-white rounded tracking-[0.5px] text-white px-2.5 flex items-center shrink-0">PNG</div>

              <div className="min-w-0">
                <p className="text-xs font-bold text-[#0F172A] truncate">timber_wolf_crest_300dpi.png</p>
                <p className="text-[11px] leading-4 text-[#94A3B8]">2.4 MB • 300 DPI • 3500×4200px</p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 justify-end">
              <button type="button" className="border border-[#A7F3D0] rounded-full bg-[#ECFDF5] px-2 py-1 flex items-center justify-center">
                <span className="text-[#047857] font-bold text-[10px] leading-3"> Ready </span>
              </button>

              <button type="button">
                <i data-lucide="trash" className="h-3 text-[#94A3B8]"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 px-5 py-4 border-t border-[#E2E8F0]">
          <button id="cancelModal" className="w-full sm:w-auto px-4 py-2 text-xs border border-[#CBD5E1] rounded-[8px] text-[#334155]">Cancel</button>

          <button className="w-full sm:w-auto flex items-center gap-1.5 bg-[#DC2626] rounded-[8px] py-2 px-5">
            <i data-lucide="download" className="h-4 text-white"></i>
            <span className="font-bold text-xs text-white">Upload & Save Asset</span>
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
