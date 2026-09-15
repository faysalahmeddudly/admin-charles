export default function AddProductPage() {
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
                <i data-lucide="tag" className="h-4"></i>
                <p className="text-sm">Products</p>
                <i data-lucide="chevron-down" className="ml-auto h-3 w-3"></i>
              </a>

              {/* submenu */}
              <div className="hidden group-hover:flex flex-col ml-5 mt-1 rounded-[8px] bg-[#111827]">
                <a href="product-categories.html" className="flex items-center gap-2 px-3 py-3 rounded-[8px] text-[#94A3B8] hover:bg-[#EA3829] hover:text-white">
                  <i data-lucide="tag" className="h-3.5"></i>
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
              <i data-lucide="chevron-right" className="hidden sm:block w-5 h-5 shrink-0 text-[#94A3B8]"></i>
              <a href="products.html" className="hidden sm:block text-sm text-[#94A3B8] shrink-0 hover:text-[#334155]">Products</a>
              <i data-lucide="chevron-right" className="hidden sm:block w-5 h-5 shrink-0 text-[#94A3B8]"></i>
              <p className="font-bold text-sm text-[#334155] truncate">Add product</p>
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
        <main className="flex-1 p-4 sm:p-6 lg:p-6 bg-[#F8FAFC] flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <i data-lucide="tag" className="w-4 h-4 text-[#52525B] shrink-0"></i>
            <i data-lucide="chevron-right" className="w-3 text-[#A1A1AA] shrink-0"></i>
            <p className="font-bold text-[20px] leading-7 tracking-[-0.5px] lg:text-[24px] lg:leading-8 lg:tracking-[-0.6px] text-[#0F172A]">Add product</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 min-w-0">
              <div className="border border-[#E1E3E5] rounded-[8px] bg-white p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.08)]">
                {/* Title */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-bold text-xs text-[#27272A]">Title</label>
                  <input type="text" value="" placeholder="Short sleeve t-shirt" className="w-full h-11 border border-[#D4D4D8] rounded-[8px] px-3 py-2 text-xs text-[#303030] outline-none" />
                </div>

                {/* Description */}
                <div className="mt-4 flex flex-col gap-1.5">
                  <label className="font-bold text-xs text-[#27272A]">Description</label>

                  <div className="border border-[#D1D5DB] rounded-[8px] overflow-hidden">
                    {/* Toolbar */}
                    <div className="h-12 border-b border-[#E5E7EB] flex items-center px-2 gap-0 text-[#4B5563] overflow-x-auto scrollbar-thin whitespace-nowrap">
                      <button className="shrink-0">
                        <i data-lucide="sparkles" className="w-3 h-3"></i>
                      </button>

                      <div className="h-5 w-px bg-[#E5E7EB] ml-1.5 shrink-0"></div>

                      <div className="relative inline-flex items-center shrink-0">
                        <select className="appearance-none text-xs font-medium text-[#374151] bg-transparent outline-none cursor-pointer pr-5 px-1.5">
                          <option>Paragraph</option>
                        </select>

                        <i data-lucide="chevron-down" className="absolute right-0 w-3 h-3 text-[#6B7280] pointer-events-none stroke-[2]"></i>
                      </div>

                      <div className="h-5 w-px bg-[#E5E7EB] mx-1.5 shrink-0"></div>

                      <button className="font-bold text-xs mr-1.5 shrink-0">B</button>
                      <button className="italic text-xs mr-1.5 shrink-0">I</button>
                      <button className="underline text-xs mr-1.5 shrink-0">U</button>

                      <div className="relative inline-flex items-center shrink-0">
                        <select className="appearance-none text-xs font-bold text-[#374151] bg-transparent outline-none cursor-pointer pr-3">
                          <option>A</option>
                        </select>

                        <i data-lucide="chevron-down" className="absolute right-0 w-3 h-3 text-[#6B7280] pointer-events-none stroke-[2]"></i>
                      </div>

                      <div className="h-5 w-px bg-[#E5E7EB] mx-1.5 shrink-0"></div>

                      <details className="relative shrink-0">
                        <summary className="list-none flex items-center gap-1 text-xs cursor-pointer">
                          <i data-lucide="list" className="w-3 h-3"></i>
                          <i data-lucide="chevron-down" className="w-2 h-2 stroke-[3]"></i>
                        </summary>

                        <div className="absolute top-full mt-2 w-[150px] rounded-[8px] border border-[#E5E7EB] bg-white p-1 shadow-md z-10">
                          <button className="flex w-full items-center gap-2 px-2 py-2 text-xs hover:bg-[#F8FAFC]">
                            <i data-lucide="list" className="w-3 h-3"></i>
                            Bullet List
                          </button>

                          <button className="flex w-full items-center gap-2 px-2 py-2 text-xs hover:bg-[#F8FAFC]">
                            <i data-lucide="list-ordered" className="w-3 h-3"></i>
                            Numbered List
                          </button>
                        </div>
                      </details>

                      <div className="h-5 w-px bg-[#E5E7EB] mx-1.5 shrink-0"></div>

                      <button className="mr-1.5 shrink-0">
                        <i data-lucide="link" className="w-3 h-3"></i>
                      </button>

                      <button className="mr-1.5 shrink-0">
                        <i data-lucide="image" className="w-3 h-3"></i>
                      </button>

                      <button className="mr-1.5 shrink-0">
                        <i data-lucide="file-play" className="w-3 h-3"></i>
                      </button>

                      <button className="mr-1.5 shrink-0">
                        <i data-lucide="table" className="w-3 h-3"></i>
                      </button>

                      <button className="shrink-0">
                        <i data-lucide="ellipsis" className="w-3 h-3"></i>
                      </button>

                      <button className="ml-auto shrink-0 pl-1.5">
                        <i data-lucide="chevrons-left-right" className="w-3 h-3"></i>
                      </button>
                    </div>

                    {/* Editor area */}
                    <textarea className="w-full h-[140px] resize-none p-4 text-sm text-[#374151] outline-none"></textarea>
                  </div>
                </div>
              </div>

              <div className="border border-[#E1E3E5] rounded-[8px] bg-white p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.08)] mt-4">
                <p className="font-bold text-xs text-[#27272A]">Media</p>
                <div className="mt-2 border-2 border-dashed border-[#D4D4D8] p-5 sm:p-8 rounded-[8px]">
                  <div className="flex flex-col gap-2 items-center">
                    <div className="flex flex-wrap items-center justify-center gap-2">
                      {/* Hidden input */}
                      <input type="file" id="mediaUpload" className="hidden" accept="image/*,video/*,.glb,.gltf" multiple />

                      {/* Upload button */}
                      <button type="button" onclick="document.getElementById('mediaUpload').click()" className="py-2 px-3 rounded-[4px] border border-[#D4D4D8] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] text-xs whitespace-nowrap">Upload new</button>

                      <button type="button" className="py-2 px-3">
                        <div className="text-xs text-[#3F3F46] whitespace-nowrap">Select existing</div>
                      </button>
                    </div>
                    <p className="text-[11px] leading-4 text-[#71717A] text-center">Accepts images, videos, or 3D models</p>
                  </div>
                </div>
              </div>

              <div className="border border-[#E1E3E5] rounded-[8px] bg-white p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.08)] mt-4">
                <p className="font-bold text-xs text-[#27272A]">Category</p>

                <div className="relative mt-1.5">
                  <select className="w-full appearance-none border border-[#D1D5DB] rounded-[8px] bg-white pl-3 pr-16 py-2 text-xs text-[#334155] outline-none cursor-pointer">
                    <option value="active">Choose a product category</option>
                  </select>

                  <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5 pointer-events-none">
                    <i data-lucide="chevron-down" className="w-3.5 h-3.5 text-[#6B7280]"></i>
                    <i data-lucide="arrow-up-down" className="w-3.5 h-3.5 text-[#9CA3AF]"></i>
                  </div>
                </div>

                <div className="mt-1.5 text-[11px] leading-4 text-[#71717A]">Determines tax rates and adds metafields to improve search, filters, and cross-channel sales</div>
              </div>

              <div className="border border-[#E1E3E5] rounded-[8px] bg-white p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.08)] mt-4">
                <p className="font-bold text-xs text-[#27272A] mb-3">Pricing</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="" className="text-xs text-[#3F3F46]">Cost Price</label>

                    <div className="relative mt-1">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[#6B7280]">$</span>
                      <input type="number" step="0.01" min="0" value="0.00" className="w-full border border-[#D1D5DB] rounded-[8px] bg-white pl-7 pr-3 py-2 text-xs text-[#334155] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="" className="text-xs text-[#3F3F46]">Sale Price</label>

                    <div className="relative mt-1">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[#6B7280]">$</span>
                      <input type="number" step="0.01" min="0" value="0.00" className="w-full border border-[#D1D5DB] rounded-[8px] bg-white pl-7 pr-3 py-2 text-xs text-[#334155] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-[#E1E3E5] rounded-[8px] bg-white p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.08)] mt-4">
                <p className="text-xs text-[#3F3F46] mb-2">Add Size</p>

                <button type="button" className="flex items-center gap-2 text-xs text-[#6B7280] hover:text-[#334155] cursor-pointer">
                  <i data-lucide="plus-circle" className="w-3.5 h-3.5 shrink-0"></i>
                  <span>Add your product size</span>
                </button>
              </div>

              <div className="border border-[#E1E3E5] rounded-[8px] bg-white p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.08)] mt-4">
                <p className="text-xs text-[#3F3F46] mb-2">Add Color</p>

                <button type="button" className="flex items-center gap-2 text-xs text-[#6B7280] hover:text-[#334155] cursor-pointer">
                  <i data-lucide="plus-circle" className="w-3.5 h-3.5 shrink-0"></i>
                  <span>Add color</span>
                </button>
              </div>

              <div className="border border-[#E1E3E5] rounded-[8px] bg-white p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.08)] mt-4">
                <p className="text-xs text-[#3F3F46] mb-2">Add Quantity</p>

                <button type="button" className="flex items-center gap-2 text-xs text-[#6B7280] hover:text-[#334155] cursor-pointer">
                  <i data-lucide="plus-circle" className="w-3.5 h-3.5 shrink-0"></i>
                  <span>Add quantity</span>
                </button>
              </div>

              <div className="border border-[#E1E3E5] rounded-[8px] bg-white p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.08)] mt-4">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-bold text-xs text-[#27272A]">Search engine listing</p>
                  <button type="button" className="text-[#6B7280] hover:text-[#334155] cursor-pointer shrink-0">
                    <i data-lucide="pencil" className="w-3.5 h-3.5"></i>
                  </button>
                </div>

                <p className="text-xs text-[#71717A] mt-2">Add a title and description to see how this product might appear in a search engine listing</p>
              </div>
            </div>
            <div className="min-w-0">
              <div className="border border-[#E1E3E5] rounded-[8px] bg-white p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.08)]">
                <p className="font-bold text-xs text-[#27272A]">Status</p>

                <div className="relative mt-1.5">
                  <select className="w-full appearance-none border border-[#D1D5DB] rounded-[8px] bg-white pl-3 pr-16 py-2 text-xs text-[#334155] outline-none cursor-pointer">
                    <option value="active">Active</option>
                  </select>

                  <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5 pointer-events-none">
                    <i data-lucide="chevron-down" className="w-3.5 h-3.5 text-[#6B7280]"></i>
                    <i data-lucide="arrow-up-down" className="w-3.5 h-3.5 text-[#9CA3AF]"></i>
                  </div>
                </div>
              </div>

              <div className="border border-[#E1E3E5] rounded-[8px] bg-white p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.08)] mt-4 flex flex-col gap-3">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-bold text-xs text-[#27272A]">Product organization</p>
                  <i data-lucide="circle-alert" className="w-2.5 h-2.5 text-[#A1A1AA] shrink-0"></i>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-xs text-[#3F3F46]">Type</label>

                  <div className="relative">
                    <select className="w-full appearance-none border border-[#D1D5DB] rounded-[8px] bg-white pl-3 pr-16 py-2 text-xs text-[#334155] outline-none cursor-pointer">
                      <option value="none">None</option>
                    </select>

                    <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5 pointer-events-none">
                      <i data-lucide="chevron-down" className="w-3.5 h-3.5 text-[#6B7280]"></i>
                      <i data-lucide="arrow-up-down" className="w-3.5 h-3.5 text-[#9CA3AF]"></i>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-xs text-[#3F3F46]">Vendor</label>
                  <div className="relative">
                    <select className="w-full appearance-none border border-[#D1D5DB] rounded-[8px] bg-white pl-3 pr-16 py-2 text-xs text-[#334155] outline-none cursor-pointer">
                      <option value="none">None</option>
                    </select>

                    <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5 pointer-events-none">
                      <i data-lucide="chevron-down" className="w-3.5 h-3.5 text-[#6B7280]"></i>
                      <i data-lucide="arrow-up-down" className="w-3.5 h-3.5 text-[#9CA3AF]"></i>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-xs text-[#3F3F46]">Collections</label>
                  <div type="button" className="w-full border border-[#D1D5DB] rounded-[8px] bg-white p-1">
                    <button className="flex items-center gap-1 bg-[#F4F4F5] px-2 py-1 rounded-[4px]">
                      <i data-lucide="circle-plus" className="w-3.5 h-3.5 text-[#71717A] shrink-0"></i>
                      <span className="text-xs text-[#3F3F46]">Add collections</span>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-xs text-[#3F3F46]">Tags</label>
                  <div type="button" className="w-full border border-[#D1D5DB] rounded-[8px] bg-white p-1">
                    <button className="flex items-center gap-1 bg-[#F4F4F5] px-2 py-1 rounded-[4px]">
                      <i data-lucide="circle-plus" className="w-3.5 h-3.5 text-[#71717A] shrink-0"></i>
                      <span className="text-xs text-[#3F3F46]">Add tags</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="bg-[#D4D4D8] py-2.5 px-6 rounded-[8px] flex items-center justify-center">
              <span className="text-xs leading-none text-[#A1A1AA]"> Save </span>
            </button>
          </div>
        </main>
      </div>
    </div>
    </>
  );
}
