export default function ProductCategoriesPage() {
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
              <p className="font-bold text-sm text-[#334155] truncate">Products</p>
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
          <div className="flex items-center justify-between gap-3">
            <p className="font-bold text-[20px] leading-7 tracking-[-0.5px] lg:text-[24px] lg:leading-8 lg:tracking-[-0.6px] text-[#0F172A]">Products</p>

            <button id="addCategoryBtn" type="button" className="bg-[#EA3829] text-white rounded-[8px] py-2 px-3 lg:px-4 flex items-center gap-1 lg:gap-2 shadow-[0_1px_2px_0_rgba(0,0,0,0.2)] hover:bg-[#D92F22] hover:shadow-[0_2px_4px_0_rgba(0,0,0,0.2)] transition-all duration-200 shrink-0">
              <i data-lucide="plus" className="w-4 h-4 shrink-0"></i>
              <span className="font-semibold text-[11px] lg:text-xs whitespace-nowrap">Add category</span>
            </button>
          </div>

          <div className="mt-6">
            <p className="mb-3 font-bold text-[11px] leading-4 tracking-[0.55px] text-[#94A3B8]">SHOP BY CATEGORIES</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex flex-col gap-3 min-w-0">
                <div className="border border-[#E2E8F0]/90 shadow-[0_1px_2px_0_rgba(0,0,0,0.03)] p-4 bg-white rounded-[8px]">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-semibold text-[13px] leading-4 text-[#1E293B]">Men</p>

                    <button type="button" className="text-[#94A3B8] hover:text-[#334155] cursor-pointer shrink-0">
                      <i data-lucide="pencil" className="w-3.5 h-3.5"></i>
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mt-3">
                    <span className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#475569] text-xs rounded-[4px] px-2.5 py-1 border border-[#E2E8F0]/80">
                      Crew Neck
                      <i data-lucide="x" className="w-3 h-3 text-[#94A3B8] cursor-pointer"></i>
                    </span>

                    <span className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#475569] text-xs rounded-[4px] px-2.5 py-1 border border-[#E2E8F0]/80">
                      V-Neck
                      <i data-lucide="x" className="w-3 h-3 text-[#94A3B8] cursor-pointer"></i>
                    </span>

                    <span className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#475569] text-xs rounded-[4px] px-2.5 py-1 border border-[#E2E8F0]/80">
                      Boxy/Oversized
                      <i data-lucide="x" className="w-3 h-3 text-[#94A3B8] cursor-pointer"></i>
                    </span>

                    <button className="text-xs font-medium text-[#EA3829] bg-white rounded rounded-[4px] flex items-center px-2.5 py-1 border border-dashed border-[#FCA5A5]">
                      <i data-lucide="plus" className="w-3 h-3"></i>
                      Add
                    </button>
                  </div>
                </div>

                <div className="border border-[#E2E8F0]/90 shadow-[0_1px_2px_0_rgba(0,0,0,0.03)] p-4 bg-white rounded-[8px]">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-semibold text-[13px] leading-4 text-[#1E293B]">Women</p>

                    <button type="button" className="text-[#94A3B8] hover:text-[#334155] cursor-pointer shrink-0">
                      <i data-lucide="pencil" className="w-3.5 h-3.5"></i>
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mt-3">
                    <span className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#475569] text-xs rounded-[4px] px-2.5 py-1 border border-[#E2E8F0]/80">
                      Crew Neck
                      <i data-lucide="x" className="w-3 h-3 text-[#94A3B8] cursor-pointer"></i>
                    </span>

                    <span className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#475569] text-xs rounded-[4px] px-2.5 py-1 border border-[#E2E8F0]/80">
                      V-Neck
                      <i data-lucide="x" className="w-3 h-3 text-[#94A3B8] cursor-pointer"></i>
                    </span>

                    <span className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#475569] text-xs rounded-[4px] px-2.5 py-1 border border-[#E2E8F0]/80">
                      Boxy/Oversized
                      <i data-lucide="x" className="w-3 h-3 text-[#94A3B8] cursor-pointer"></i>
                    </span>

                    <button className="text-xs font-medium text-[#EA3829] bg-white rounded rounded-[4px] flex items-center px-2.5 py-1 border border-dashed border-[#FCA5A5]">
                      <i data-lucide="plus" className="w-3 h-3"></i>
                      Add
                    </button>
                  </div>
                </div>

                <div className="border border-[#E2E8F0]/90 shadow-[0_1px_2px_0_rgba(0,0,0,0.03)] p-4 bg-white rounded-[8px]">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-semibold text-[13px] leading-4 text-[#1E293B]">Kid's & Youth</p>

                    <button type="button" className="text-[#94A3B8] hover:text-[#334155] cursor-pointer shrink-0">
                      <i data-lucide="pencil" className="w-3.5 h-3.5"></i>
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mt-3">
                    <span className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#475569] text-xs rounded-[4px] px-2.5 py-1 border border-[#E2E8F0]/80">
                      Crew Neck
                      <i data-lucide="x" className="w-3 h-3 text-[#94A3B8] cursor-pointer"></i>
                    </span>

                    <span className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#475569] text-xs rounded-[4px] px-2.5 py-1 border border-[#E2E8F0]/80">
                      V-Neck
                      <i data-lucide="x" className="w-3 h-3 text-[#94A3B8] cursor-pointer"></i>
                    </span>

                    <button className="text-xs font-medium text-[#EA3829] bg-white rounded rounded-[4px] flex items-center px-2.5 py-1 border border-dashed border-[#FCA5A5]">
                      <i data-lucide="plus" className="w-3 h-3"></i>
                      Add
                    </button>
                  </div>
                </div>

                <div className="border border-[#E2E8F0]/90 shadow-[0_1px_2px_0_rgba(0,0,0,0.03)] p-4 bg-white rounded-[8px]">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-semibold text-[13px] leading-4 text-[#1E293B]">Unisex Hoodies</p>

                    <button type="button" className="text-[#94A3B8] hover:text-[#334155] cursor-pointer shrink-0">
                      <i data-lucide="pencil" className="w-3.5 h-3.5"></i>
                    </button>
                  </div>
                </div>

                <div className="border border-[#E2E8F0]/90 shadow-[0_1px_2px_0_rgba(0,0,0,0.03)] p-4 bg-white rounded-[8px]">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-semibold text-[13px] leading-4 text-[#1E293B]">Accessories & Totes</p>

                    <button type="button" className="text-[#94A3B8] hover:text-[#334155] cursor-pointer shrink-0">
                      <i data-lucide="pencil" className="w-3.5 h-3.5"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="border border-[#E2E8F0] rounded-[8px] p-5 flex flex-col justify-between min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                  <div className="flex flex-col gap-1 sm:max-w-[220px]">
                    <p className="font-bold text-[11px] leading-4 tracking-[0.55px] text-[#94A3B8]">FILTER ATTRIBUTES</p>
                    <p className="text-[11px] leading-4 tracking-[0.55px] text-[#94A3B8]">Powers the size, color and fit filters on the Shop page.</p>
                  </div>

                  <button type="button" className="bg-[#EA3829] text-white rounded-[8px] py-2 px-3 lg:px-4 flex items-center gap-1 lg:gap-2 shadow-[0_1px_2px_0_rgba(0,0,0,0.2)] hover:bg-[#D92F22] hover:shadow-[0_2px_4px_0_rgba(0,0,0,0.2)] transition-all duration-200 shrink-0 self-start">
                    <i data-lucide="plus" className="w-4 h-4 shrink-0"></i>
                    <span className="font-semibold text-[11px] lg:text-xs whitespace-nowrap">Add Attributes</span>
                  </button>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="border border-[#E2E8F0]/90 shadow-[0_1px_2px_0_rgba(0,0,0,0.03)] p-4 bg-white rounded-[8px]">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-semibold text-[13px] leading-4 text-[#1E293B]">Fit</p>

                      <button type="button" className="text-[#94A3B8] hover:text-[#334155] cursor-pointer shrink-0">
                        <i data-lucide="pencil" className="w-3.5 h-3.5"></i>
                      </button>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mt-3">
                      <span className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#475569] text-xs rounded-[4px] px-2.5 py-1 border border-[#E2E8F0]/80">
                        Slim Fit
                        <i data-lucide="x" className="w-3 h-3 text-[#94A3B8] cursor-pointer"></i>
                      </span>

                      <span className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#475569] text-xs rounded-[4px] px-2.5 py-1 border border-[#E2E8F0]/80">
                        Regular Fit
                        <i data-lucide="x" className="w-3 h-3 text-[#94A3B8] cursor-pointer"></i>
                      </span>

                      <span className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#475569] text-xs rounded-[4px] px-2.5 py-1 border border-[#E2E8F0]/80">
                        Relax Fit
                        <i data-lucide="x" className="w-3 h-3 text-[#94A3B8] cursor-pointer"></i>
                      </span>

                      <button className="text-xs font-medium text-[#EA3829] bg-white rounded rounded-[4px] flex items-center px-2.5 py-1 border border-dashed border-[#FCA5A5]">
                        <i data-lucide="plus" className="w-3 h-3"></i>
                        Add
                      </button>
                    </div>
                  </div>

                  <div className="border border-[#E2E8F0]/90 shadow-[0_1px_2px_0_rgba(0,0,0,0.03)] p-4 bg-white rounded-[8px]">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-semibold text-[13px] leading-4 text-[#1E293B]">Fit</p>

                      <button type="button" className="text-[#94A3B8] hover:text-[#334155] cursor-pointer shrink-0">
                        <i data-lucide="pencil" className="w-3.5 h-3.5"></i>
                      </button>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mt-3">
                      <span className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#475569] text-xs rounded-[4px] px-2.5 py-1 border border-[#E2E8F0]/80">
                        Shorter
                        <i data-lucide="x" className="w-3 h-3 text-[#94A3B8] cursor-pointer"></i>
                      </span>

                      <span className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#475569] text-xs rounded-[4px] px-2.5 py-1 border border-[#E2E8F0]/80">
                        Taller
                        <i data-lucide="x" className="w-3 h-3 text-[#94A3B8] cursor-pointer"></i>
                      </span>

                      <button className="text-xs font-medium text-[#EA3829] bg-white rounded rounded-[4px] flex items-center px-2.5 py-1 border border-dashed border-[#FCA5A5]">
                        <i data-lucide="plus" className="w-3 h-3"></i>
                        Add
                      </button>
                    </div>
                  </div>

                  <div className="border border-[#E2E8F0]/90 shadow-[0_1px_2px_0_rgba(0,0,0,0.03)] p-4 bg-white rounded-[8px]">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-semibold text-[13px] leading-4 text-[#1E293B]">Neckline</p>

                      <button type="button" className="text-[#94A3B8] hover:text-[#334155] cursor-pointer shrink-0">
                        <i data-lucide="pencil" className="w-3.5 h-3.5"></i>
                      </button>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mt-3">
                      <span className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#475569] text-xs rounded-[4px] px-2.5 py-1 border border-[#E2E8F0]/80">
                        Crew Neck
                        <i data-lucide="x" className="w-3 h-3 text-[#94A3B8] cursor-pointer"></i>
                      </span>

                      <span className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#475569] text-xs rounded-[4px] px-2.5 py-1 border border-[#E2E8F0]/80">
                        V-Neck
                        <i data-lucide="x" className="w-3 h-3 text-[#94A3B8] cursor-pointer"></i>
                      </span>

                      <span className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#475569] text-xs rounded-[4px] px-2.5 py-1 border border-[#E2E8F0]/80">
                        Boxy/Oversized
                        <i data-lucide="x" className="w-3 h-3 text-[#94A3B8] cursor-pointer"></i>
                      </span>

                      <button className="text-xs font-medium text-[#EA3829] bg-white rounded rounded-[4px] flex items-center px-2.5 py-1 border border-dashed border-[#FCA5A5]">
                        <i data-lucide="plus" className="w-3 h-3"></i>
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>

    {/* Add Category Modal (must be in the DOM BEFORE the script that queries it) */}
    <div id="categoryModal" className="fixed inset-0 z-50 hidden items-center justify-center bg-black/60 backdrop-blur-xs p-3 sm:p-4">
      <div className="bg-white w-full sm:w-[90%] md:max-w-[560px] max-h-[90vh] overflow-y-auto rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
        {/* Header */}
        <div className="flex items-start sm:items-center justify-between gap-3 px-4 sm:px-5 py-4 border-b border-[#E2E8F0]">
          <div className="min-w-0">
            <p className="font-bold text-[16px] leading-6 tracking-[-0.4px] text-[#0F172A]">Add Category</p>
            <p className="text-xs text-[#64748B]">Create a new product category with a cover image or video</p>
          </div>

          <button id="closeCategoryModal" className="shrink-0">
            <i data-lucide="x" className="w-4 h-4 text-[#94A3B8]"></i>
          </button>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-5 space-y-4">
          {/* Name of Category */}
          <div>
            <label className="text-xs font-bold text-[#1E293B]">Name of Catagory</label>
            <input type="text" placeholder="T-shirt" className="mt-1 w-full py-2.5 px-3 text-sm text-[#334155] border border-[#E2E8F0] rounded-[8px] bg-white outline-none placeholder:text-[#94A3B8]" />
          </div>

          {/* Media */}
          <div>
            <label className="text-xs font-bold text-[#1E293B]">Media</label>

            <label htmlFor="categoryMediaInput" className="mt-1 flex flex-col items-center justify-center gap-2 border-2 border-dashed border-[#CBD5E1] rounded-[10px] py-10 px-4 bg-[#F8FAFC] cursor-pointer hover:bg-[#F1F5F9] transition-colors duration-150">
              <span id="categoryUploadBtn" className="pointer-events-none inline-flex items-center gap-1.5 border border-[#E2E8F0] rounded-[8px] bg-white py-1.5 px-3 text-xs font-semibold text-[#334155] shadow-[0_1px_2px_0_rgba(0,0,0,0.03)]">
                Upload new
              </span>
              <span className="text-xs text-[#94A3B8]">Accepts images, videos, or 3D models</span>
              <input id="categoryMediaInput" type="file" accept="image/*,video/*,.glb,.gltf,.usdz" className="hidden" />
            </label>

            <p id="categoryMediaFileName" className="mt-2 text-xs text-[#475569] hidden"></p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 px-4 sm:px-5 py-4 border-t border-[#E2E8F0]">
          <button id="cancelCategoryModal" className="w-full sm:w-auto px-4 py-2 text-xs border border-[#CBD5E1] rounded-[8px] text-[#334155]">Cancel</button>

          <button className="w-full sm:w-auto flex items-center justify-center gap-1.5 bg-[#EA3829] hover:bg-[#D92F22] rounded-[8px] py-2 px-5 transition-colors duration-150">
            <i data-lucide="plus" className="h-4 text-white"></i>
            <span className="font-bold text-xs text-white">Save Category</span>
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
