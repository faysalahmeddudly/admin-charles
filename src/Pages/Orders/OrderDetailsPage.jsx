export default function OrderDetailsPage() {
  return (
    <>
      <div className="flex min-h-screen font-[Inter]">
      {/* Sidebar */}
      <aside id="sidebar" className="fixed inset-y-0 left-0 z-50 w-[302px] -translate-x-full bg-[#070D19] border-r border-[#151E30] transition-transform duration-200 ease-in-out lg:static lg:translate-x-0 lg:shrink-0 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-center p-6">
            <img src="assets/logo.png" alt="Logo" className="sm:h-10 lg:h-16 w-auto rounded-lg" />
          </div>

          <nav className="px-10 flex flex-col gap-1">
            <a href="index.html" className="flex items-center gap-2.5 p-3 rounded-[12px] text-[#94A3B8] hover:bg-[#EA3829] hover:text-white">
              <i data-lucide="layout-dashboard" className="h-4"></i>
              <p className="text-sm">Dashboard</p>
            </a>
            <a href="order.html" className="flex items-center gap-2.5 p-3 rounded-[12px] text-[#94A3B8] bg-[#EA3829] text-white">
              <i data-lucide="lock" className="h-4"></i>
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

                    <a href="product-categories.html"
                    className="flex items-center gap-2 px-3 py-3 rounded-[8px] text-[#94A3B8] hover:bg-[#EA3829] hover:text-white">
                        <i data-lucide="tag" className="h-3.5"></i>
                        <p className="text-xs">Categories & Attributes</p>
                    </a>
                </div>
            </div>
            <a href="studio.html" className="flex items-center gap-2.5 p-3 rounded-[12px] text-[#94A3B8] hover:bg-[#EA3829] hover:text-white">
              <i data-lucide="image" className="h-4"></i>
              <p className="text-sm">Design Studio Assets</p>
            </a>
            <a href="customers.html" className="flex items-center gap-2.5 p-3 rounded-[12px] text-[#94A3B8] hover:bg-[#EA3829] hover:text-white">
              <i data-lucide="user-round" className="h-4"></i>
              <p className="text-sm">Customers</p>
            </a>
            <a href="coupons.html" className="flex items-center gap-2.5 p-3 rounded-[12px] text-[#94A3B8] hover:bg-[#EA3829] hover:text-white">
              <i data-lucide="ticket" className="h-4"></i>
              <p className="text-sm">Coupons & Discounts</p>
            </a>
            <a href="tickets.html" className="flex items-center gap-2.5 p-3 rounded-[12px] text-[#94A3B8] hover:bg-[#EA3829] hover:text-white">
              <i data-lucide="life-buoy" className="h-4"></i>
              <p className="text-sm">Support Tickets</p>
            </a>
            <a href="cms.html" className="flex items-center gap-2.5 p-3 rounded-[12px] text-[#94A3B8] hover:bg-[#EA3829] hover:text-white">
              <i data-lucide="monitor" className="h-4"></i>
              <p className="text-sm">Content / CMS</p>
            </a>
            <a href="settings.html" className="flex items-center gap-2.5 p-3 rounded-[12px] text-[#94A3B8] hover:bg-[#EA3829] hover:text-white">
              <i data-lucide="settings" className="h-4"></i>
              <p className="text-sm">Settings</p>
            </a>
          </nav>
        </div>

        <div className="bg-[#050913] p-6 flex gap-3 items-center">
          <div className="h-8 w-8 bg-[#EA3829] flex items-center justify-center rounded-full">
            <span className="font-bold text-[12px] leading-4 tracking-[-0.3px] text-white">SM</span>
          </div>
          <div className="flex flex-col gap-[2px]">
            <p className="font-bold text-[13px] leading-4 text-white">Sarah Miller</p>
            <p className="text-[11px] leading-3.5 text-[#94A3B8]">Store Manager</p>
          </div>
        </div>
      </aside>

      {/* Overlay (mobile only) */}
      <div id="overlay" className="fixed inset-0 bg-black/30 z-30 hidden lg:hidden"></div>

      {/* Main column */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Topbar */}
        <header className="p-4 sm:p-6 lg:p-6 flex items-center justify-between px-4 sm:px-6 border-b border-[#E2E8F0] bg-white sticky top-0 z-20">
          <div className="flex items-center gap-1">
            <p className="text-sm text-[#94A3B8]">Admin</p>
            <i data-lucide="chevron-right" className="w-5 h-5"></i>
            <p className="font-bold text-sm text-[#334155]">Orders</p>
          </div>
          <div className="flex items-center gap-3 lg:gap-5">
            <div className="hidden sm:flex items-center w-[270px] h-9 px-3 gap-2 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC]">
              <i data-lucide="search" className="w-4 h-4 text-[#94A3B8]"></i>
              <input type="text" placeholder="Search anything..." className="w-full bg-transparent outline-none text-sm text-[#334155] placeholder:text-[#94A3B8]" />
            </div>

            <button className="relative w-9 h-9 flex items-center justify-center">
              <i data-lucide="bell" className="w-5 h-5 text-[#64748B]"></i>
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#EA3829] rounded-full"></span>
            </button>

            <button id="menuBtn" className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-gray-300">
              <i data-lucide="menu" className="w-5 h-5"></i>
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-6 bg-[#F8FAFC] flex flex-col gap-6">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
            <div className="flex flex-col gap-1">
              <div className="flex items-center flex-wrap gap-y-1.5">
                <a href="order.html" className="inline-flex items-center">
                  <i data-lucide="move-left" className="w-6 p-1"></i>
                </a>

                <p className="font-bold text-[20px] texr-[#111827] pl-1">#1015</p>
                <div className="bg-[#BBF7D0] rounded-full flex items-center gap-[6px] py-[2px] px-2 ml-1.5">
                  <div className="h-[6px] w-[6px] bg-[#16A34A] rounded-full"></div>
                  <span className="font-bold text-xs text-[#111827]">Paid</span>
                </div>
                <div className="bg-[#BBF7D0] rounded-full flex items-center gap-[6px] py-[2px] px-2 ml-1.5">
                  <div className="h-[6px] w-[6px] bg-[#16A34A] rounded-full"></div>
                  <span className="font-bold text-xs text-[#111827]">Fulfilled</span>
                </div>
                <div className="bg-[#E5E7EB] text-[#374151] rounded-full py-[2px] px-2 ml-1.5 inline-flex items-center">
                  <span className="font-bold text-xs">Archived</span>
                </div>
              </div>
              <p className="text-xs text-[#616161] ml-7">6 March 2026 at 5:36 pm from Draft Orders</p>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
              <button type="button" className="shrink-0 border border-[#D1D5DB] rounded-[8px] py-1.5 px-3 bg-white">
                <span className="text-[#1F2937] font-bold text-xs">Refund</span>
              </button>
              <button type="button" className="shrink-0 border border-[#D1D5DB] rounded-[8px] py-1.5 px-3 bg-white">
                <span className="text-[#1F2937] font-bold text-xs">Return</span>
              </button>
              <button type="button" className="shrink-0 border border-[#D1D5DB] rounded-[8px] py-1.5 px-3 bg-white flex items-center gap-1">
                <span className="text-[#1F2937] font-bold text-xs">More actions</span>
                <i data-lucide="chevron-down" className="w-4 mt-[1px] text-[#6B7280]"></i>
              </button>
              <div className="shrink-0 flex items-center border border-[#D1D5DB] rounded-[8px] overflow-hidden bg-white">
                <button type="button" className="w-[36px] h-[36px] flex items-center justify-center">
                  <i data-lucide="chevron-up" className="w-4 h-4 text-[#6B7280]"></i>
                </button>

                <div className="w-px h-[36px] bg-[#D1D5DB]"></div>

                <button type="button" className="w-[36px] h-[36px] flex items-center justify-center">
                  <i data-lucide="chevron-down" className="w-4 h-4 text-[#6B7280]"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <div className="bg-white border border-[#E1E3E5] rounded-[8px]">
                <div className="p-4 border-b border-[#E1E3E5]">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2 flex-wrap">
                      <i data-lucide="archive" className="w-4 text-[#374151]"></i>
                      <p className="font-bold text-sm text-[#111827]">Fulfilled (6)</p>
                      <p className="text-xs text-[#616161]">#1015-F1</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button type="button">
                        <i data-lucide="ellipsis" className="w-4 text-[#6B7280]"></i>
                      </button>
                      <button type="button" className="border border-[#D1D5DB] py-1 px-2.5 rounded-[8px]">
                        <p className="text-xs font-bold text-[#1F2937] whitespace-nowrap">Update delivery Status</p>
                      </button>
                    </div>
                  </div>
                  <div className="mt-2.5 flex flex-col">
                    <div className="flex items-center gap-2">
                      <i data-lucide="calendar" className="w-3 text-[#6B7280]"></i>
                      <p className="text-xs text-[#616161]">#616161</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <i data-lucide="box" className="w-3 text-[#6B7280]"></i>
                      <p className="text-xs text-[#616161]">Other tracking: <span className="text-[#005BD3]">31122025</span></p>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex flex-col gap-8">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-[14px]">
                      <div className="bg-[#111111] rounded-[8px] p-2.5 shrink-0">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 2L2 5.5L4.5 10L6 9V21C6 21.55 6.45 22 7 22H17C17.55 22 18 21.55 18 21V9L19.5 10L22 5.5L16 2C16 3.1 14.2 4 12 4C9.8 4 8 3.1 8 2Z" fill="#9AA5B1" />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <p className="font-bold text-xs text-[#111827]">Black Tee (Men's - 220GSM)</p>
                        <p className="text-xs text-[#616161]">L / Single Side</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 pl-[42px] sm:pl-0">
                      <div className="flex">
                        <p className="text-[#303030] text-xs font-medium">$16.50</p>
                        <p className="text-[#616161] text-[11px] leading-4 ml-1 line-through">$18.99</p>
                        <p className="text-[#616161] text-xs ml-1.5">× 2</p>
                      </div>
                      <p className="font-semibold text-xs text-[#111827]">$33.00</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-[14px]">
                      <div className="bg-[#3B2219] rounded-[8px] p-2.5 shrink-0">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 2L2 5.5L4.5 10L6 9V21C6 21.55 6.45 22 7 22H17C17.55 22 18 21.55 18 21V9L19.5 10L22 5.5L16 2C16 3.1 14.2 4 12 4C9.8 4 8 3.1 8 2Z" fill="#9AA5B1" />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <p className="font-bold text-xs text-[#111827]">Dark Chocolate Tee (Men's - 220GSM)</p>
                        <p className="text-xs text-[#616161]">L / Single Side</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 pl-[42px] sm:pl-0">
                      <div className="flex">
                        <p className="text-[#303030] text-xs font-medium">$16.50</p>
                        <p className="text-[#616161] text-[11px] leading-4 ml-1 line-through">$18.99</p>
                        <p className="text-[#616161] text-xs ml-1.5">× 2</p>
                      </div>
                      <p className="font-semibold text-xs text-[#111827]">$33.00</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-[14px]">
                      <div className="bg-white border border-[#D1D5DB] rounded-[8px] p-2 shrink-0">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 2L2 5.5L4.5 10L6 9V21C6 21.55 6.45 22 7 22H17C17.55 22 18 21.55 18 21V9L19.5 10L22 5.5L16 2C16 3.1 14.2 4 12 4C9.8 4 8 3.1 8 2Z" fill="#9AA5B1" />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <p className="font-bold text-xs text-[#111827]">White Tee (Men's - 220GSM)</p>
                        <p className="text-xs text-[#616161]">L / Single Side</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 pl-[42px] sm:pl-0">
                      <div className="flex">
                        <p className="text-[#303030] text-xs font-medium">$16.50</p>
                        <p className="text-[#616161] text-[11px] leading-4 ml-1 line-through">$18.99</p>
                        <p className="text-[#616161] text-xs ml-1.5">× 2</p>
                      </div>
                      <p className="font-semibold text-xs text-[#111827]">$33.00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-[#E1E3E5] rounded-[8px] mt-4 p-4">
                <div className="flex items-center gap-1">
                  <i data-lucide="circle-check" className="w-4 h-4 text-[#111827]"></i>
                  <p className="text-[#111827] font-bold text-sm">Paid</p>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 w-full">
                    <p className="text-xs text-[#4B5563]">Subtotal</p>
                    <p className="text-xs text-[#4B5563] flex-1 min-w-[100px] text-left sm:text-center">6 items</p>
                    <p className="text-xs text-[#4B5563]">$99.00</p>
                  </div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 w-full">
                    <p className="text-xs text-[#4B5563] shrink-0">Shipping</p>
                    <p className="text-xs text-[#4B5563] flex-1 min-w-[140px]">Standard Shipping Charge (1.8 kg: Items 1.8 kg, Package 0.0 kg)</p>
                    <p className="text-xs text-[#4B5563] shrink-0">$12.00</p>
                  </div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 w-full">
                    <p className="text-xs text-[#4B5563]">Taxes</p>
                    <p className="text-xs text-[#4B5563] flex-1 min-w-[100px]">GST 10%</p>
                    <p className="text-xs text-[#4B5563]">$11.10</p>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <p className="font-bold text-[13px] leading-4 text-[#111827]">Total</p>
                    <p className="font-bold text-[13px] leading-4 text-[#111827]">$122.10</p>
                  </div>
                  <div className="flex items-center justify-between w-full mt-1.5">
                    <p className="text-xs leading-4 text-[#4B5563]">Paid</p>
                    <p className="text-xs leading-4 text-[#4B5563]">$122.10</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-[#E1E3E5] rounded-[8px] mt-4 p-4">
                <div className="flex items-center justify-between">
                  <p className="font-bold text-sm text-[#111827]">Metafields</p>
                  <div className="flex items-center gap-3">
                    <button className="text-[#005BD3] font-medium text-xs leading-4">View all</button>
                    <div className="py-1 px-2 5 border border-[#D1D5DB] rounded-[8px]">
                      <span className="font-bold text-xs text-[#1F2937]">Add definition</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-2 mt-3">
                  <p className="text-xs text-[#475569]">antigro_printfle_info</p>
                  <input type="text" className="w-full sm:w-[260px] h-8 border border-[#D1D5DB] rounded-[8px] px-3 text-xs text-[#111827] outline-none" />
                </div>
              </div>

              <p className="font-bold text-sm text-[#111827] mt-4">Timeline</p>

              <div className="bg-white border border-[#E1E3E5] rounded-[8px] mt-4 p-4">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-[#E2E8F0] flex items-center justify-center shrink-0">
                    <span className="text-[10px] font-bold text-[#475569]">CP</span>
                  </div>

                  <input type="text" placeholder="Leave a comment..." className="flex-1 text-xs text-[#334155] placeholder:text-[#94A3B8] outline-none min-w-0" />
                </div>

                <div className="border-t border-[#F3F4F6] mt-2 pt-2 pl-8 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <button type="button">
                      <i data-lucide="smile" className="w-4 h-4 text-[#94A3B8]"></i>
                    </button>
                    <button type="button">
                      <i data-lucide="at-sign" className="w-4 h-4 text-[#94A3B8]"></i>
                    </button>

                    <button type="button">
                      <i data-lucide="hash" className="w-4 h-4 text-[#94A3B8]"></i>
                    </button>

                    <button type="button">
                      <i data-lucide="paperclip" className="w-4 h-4 text-[#94A3B8]"></i>
                    </button>
                  </div>
                  <button type="button" className="bg-[#E2E8F0] rounded-[8px] px-4 py-1.5 text-xs font-bold text-[#94A3B8] shrink-0">Post</button>
                </div>
              </div>

              <div className="my-4">
                <p className="text-[11px] leading-4 text-[#616161] text-right">Only you and other staff can see comments</p>
              </div>

              <div className="relative flex flex-col gap-5">
                {/* Timeline line */}
                <div className="absolute left-[3.5px] top-[5px] bottom-1 w-px bg-[#E5E7EB]"></div>

                {/* Item */}
                <div className="relative pl-6">
                  <div className="absolute left-0 top-[5px] h-2 w-2 rounded-full bg-[#94A3B8]"></div>

                  <div className="flex items-center justify-between flex-wrap gap-1">
                    <p className="font-bold text-[11px] text-[#616161]">17 March</p>
                    <p className="text-[11px] text-[#616161]">5:09 pm</p>
                  </div>

                  <p className="mt-2 text-xs text-[#334155]">You sent a shipping update email to Zi Hadi (<span className="text-[#005BD3] break-all">hadizingisa@hotmail.com</span>).</p>

                  <button className="mt-2 border border-[#D1D5DB] rounded-[6px] px-2 py-1 text-[11px] text-[#334155]">View email</button>
                </div>

                {/* Item */}
                <div className="relative pl-6">
                  <div className="absolute left-0 top-[5px] h-2 w-2 rounded-full bg-[#94A3B8]"></div>

                  <div className="flex items-center justify-between">
                    <p className="font-bold text-[11px] text-[#616161]">12 March</p>
                  </div>

                  <div className="mt-2 flex flex-col gap-2">
                    <div className="flex justify-between items-start gap-2 flex-wrap">
                      <p className="text-xs text-[#334155]">This order was archived.</p>
                      <span className="text-[11px] text-[#616161] shrink-0">12:58 pm</span>
                    </div>

                    <div className="flex justify-between items-start gap-2 flex-wrap">
                      <p className="text-xs text-[#334155]">
                        You marked 6 items as fulfilled from Unit 16, 71A Millar Road, Revesby, NSW 2212.
                        <i data-lucide="chevron-down" className="inline w-3 h-3"></i>
                      </p>
                      <span className="text-[11px] text-[#616161] shrink-0">12:58 pm</span>
                    </div>
                  </div>
                </div>

                {/* Item */}
                <div className="relative pl-6">
                  <div className="flex items-center justify-between flex-wrap gap-1">
                    <p className="font-bold text-[11px] text-[#616161]">10 March</p>
                    <p className="text-[11px] text-[#616161]">12:02 am</p>
                  </div>

                  <p className="mt-2 text-xs text-[#334155]">
                    $119.66 AUD was added to your
                    <span className="bg-[#E2E8F0] rounded px-1">Mar 10, 2026</span>
                    payout.
                  </p>
                </div>

                {/* Item */}
                <div className="relative pl-6">
                  <div className="absolute left-0 top-[5px] h-2 w-2 rounded-full bg-[#94A3B8]"></div>

                  <div className="flex items-center justify-between flex-wrap gap-1">
                    <p className="font-bold text-[11px] text-[#616161]">6 March</p>
                    <p className="text-[11px] text-[#616161]">5:36 pm</p>
                  </div>

                  <div className="mt-2 flex flex-col gap-2">
                    <p className="text-xs text-[#334155]">Order confirmation email was sent to Zi Hadi (<span className="text-[#005BD3] break-all">hadizingisa@hotmail.com</span>).</p>

                    <button className="w-fit border border-[#D1D5DB] rounded-[6px] px-2 py-1 text-[11px] text-[#334155] my-1">View email</button>

                    <p className="text-xs text-[#334155]">
                      $119.66 AUD will be added to your Mar 10, 2026 payout.
                      <i data-lucide="chevron-down" className="inline w-3 h-3"></i>
                    </p>

                    <p className="text-xs text-[#334155]">
                      A $122.10 AUD payment was processed using a Mastercard ending in 6612 via Apple Pay.
                      <i data-lucide="chevron-down" className="inline w-3 h-3"></i>
                    </p>

                    <p className="text-xs text-[#334155]">Confirmation #Q2HCIRV7 was generated for this order.</p>

                    <p className="text-xs text-[#334155]">
                      This order was created for Zi Hadi from draft order
                      <span className="bg-[#E2E8F0] rounded px-1">#D24</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white border border-[#E1E3E5] rounded-[8px] p-4">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-xs text-[#111827]">Tags</p>
                  <button type="button">
                    <i data-lucide="pencil" className="w-3 h-3 text-[#6B7280]"></i>
                  </button>
                </div>
                <p className="mt-3 text-xs text-[#616161]">No notes from customer</p>
              </div>

              <div className="bg-white border border-[#E1E3E5] rounded-[8px] mt-4 p-4 flex flex-col gap-[14px]">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-xs text-[#111827]">Customer</p>
                  <button type="button">
                    <i data-lucide="ellipsis" className="w-3 h-3 text-[#6B7280]"></i>
                  </button>
                </div>

                <div className="flex flex-col gap-[2px]">
                  <p className="text-[#005BD3] font-medium text-xs">Zi Hadi</p>
                  <p className="text-xs text-[#616161]">1 order</p>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="text-[#1F2937] font-bold text-[11px] tracking-[0.55px]">CONTACT INFORMATION</p>
                  <p className="text-[#005BD3] text-xs break-all">hadizingisa@hotmail.com</p>
                  <p className="text-xs text-[#616161]">No phone number</p>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="text-[#1F2937] font-bold text-[11px] tracking-[0.55px]">SHIPPING ADDRESS</p>
                  <div className="flex flex-col">
                    <p className="text-xs text-[#616161] font-medium">Zi Hadi</p>
                    <p className="text-xs text-[#616161]">unit 8/122 Epsom Avenue</p>
                    <p className="text-xs text-[#616161]">Belmont WA 6104</p>
                    <p className="text-xs text-[#616161]">Australia</p>
                    <p className="text-xs text-[#616161]">+61 499 214 874</p>
                  </div>
                  <button type="button" className="text-[#005BD3] text-xs mt-[2px] text-start">View map</button>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="text-[#1F2937] font-bold text-[11px] tracking-[0.55px]">BILLING ADDRESS</p>
                  <div className="flex flex-col">
                    <p className="text-xs text-[#616161] font-medium">Zingisa Hadi</p>
                    <p className="text-xs text-[#616161]">Unit 8/122 epsom avenue</p>
                    <p className="text-xs text-[#616161]">Belmont WA 6104</p>
                    <p className="text-xs text-[#616161]">Australia</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-[#E1E3E5] rounded-[8px] mt-4 p-4">
                <p className="font-semibold text-xs text-[#111827]">Conversion summary</p>

                <div className="mt-3 flex flex-col gap-2.5">
                  <div className="flex items-center gap-2.5">
                    <i data-lucide="shopping-bag" className="w-4 h-4 text-[#6B7280] shrink-0"></i>
                    <p className="text-xs text-[#374151]">This is their 1st order</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <i data-lucide="link" className="w-4 h-4 text-[#6B7280] shrink-0"></i>
                    <p className="text-xs text-[#374151]">1st session was direct to your store</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <i data-lucide="shopping-cart" className="w-4 h-4 text-[#6B7280] shrink-0"></i>
                    <p className="text-xs text-[#374151]">3 sessions over 2 days</p>
                  </div>
                </div>

                <button type="button" className="text-[#005BD3] font-medium mt-3 text-xs">View conversion details</button>
              </div>

              <div className="bg-white border border-[#E1E3E5] rounded-[8px] mt-4 p-4">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-xs text-[#111827]">Order risk</p>
                  <i data-lucide="card-sim" className="w-3 h-3 text-[#64748B]"></i>
                </div>

                <div className="mt-3 h-2 w-full bg-[#E5E7EB] rounded-full overflow-hidden">
                  <div className="h-full w-[33%] bg-[#138A4B] rounded-full"></div>
                </div>

                <div className="mt-1.5 flex justify-between">
                  <span className="font-bold text-[11px] leading-4 text-[#111827]">Low</span>
                  <span className="text-[11px] leading-4 text-[#616161]">Medium</span>
                  <span className="text-[11px] leading-4 text-[#616161]">High</span>
                </div>

                <div className="mt-3 text-xs text-[#616161]">Chargeback risk is low. You can fulfill this order.</div>
              </div>

              <div className="bg-white border border-[#E1E3E5] rounded-[8px] mt-4 p-4">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-xs text-[#111827]">Tags</p>
                  <button type="button">
                    <i data-lucide="pencil" className="w-3 h-3 text-[#6B7280]"></i>
                  </button>
                </div>
                <input type="text" className="mt-3 w-full border border-[#D1D5DB] rounded-[8px] px-3 py-1.5 text-xs text-[#111827] outline-none" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    </>
  );
}
