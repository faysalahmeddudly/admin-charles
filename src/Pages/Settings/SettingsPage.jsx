export default function SettingsPage() {
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
            <a href="cms.html" className="flex items-center gap-2.5 p-3 rounded-[12px] text-[#94A3B8] hover:bg-[#EA3829] hover:text-white">
              <i data-lucide="monitor" className="h-4 shrink-0"></i>
              <p className="text-sm">Content / CMS</p>
            </a>
            <a href="settings.html" className="flex items-center gap-2.5 p-3 rounded-[12px] text-[#94A3B8] bg-[#EA3829] text-white">
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
            <p className="font-bold text-sm text-[#334155] truncate">Settings</p>
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
          <p className="font-bold text-[18px] leading-7 tracking-[-0.5px] sm:text-[20px] lg:text-[24px] lg:leading-8 lg:tracking-[-0.6px] text-[#0F172A]">Settings</p>

          <form action="#" id="settingsForm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div className="border border-[#E2E8F0]/80 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02)] p-4 sm:p-5 rounded-[8px] flex flex-col gap-4 bg-white min-w-0">
                <p className="font-bold text-[10px] sm:text-[11px] leading-4 tracking-[0.55px] text-[#64748B]">STORE DETAILS</p>

                <div className="flex flex-col gap-1">
                  <label htmlFor="storeName" className="text-xs text-[#475569]">Store name</label>
                  <input id="storeName" name="storeName" type="text" value="Charles Prints" className="py-2 px-3 text-sm text-[#1E293B] border border-[#E2E8F0] rounded-[8px] shadow-[0_1px_2px_0_rgba(0,0,0,0.05),inset_0_2px_4px_0_rgba(0,0,0,0.03)] outline-none w-full" />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="supportPhone" className="text-xs text-[#475569]">Support phone</label>
                  <input id="supportPhone" name="supportPhone" type="tel" value="+61 406 380 648" className="py-2 px-3 text-sm text-[#1E293B] border border-[#E2E8F0] rounded-[8px] shadow-[0_1px_2px_0_rgba(0,0,0,0.05),inset_0_2px_4px_0_rgba(0,0,0,0.03)] outline-none w-full" />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="supportEmail" className="text-xs text-[#475569]">Support email</label>
                  <input id="supportEmail" name="supportEmail" type="email" value="sales@charlesprints.com.au" className="py-2 px-3 text-sm text-[#1E293B] border border-[#E2E8F0] rounded-[8px] shadow-[0_1px_2px_0_rgba(0,0,0,0.05),inset_0_2px_4px_0_rgba(0,0,0,0.03)] outline-none w-full" />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="storeAddress" className="text-xs text-[#475569]">Address</label>
                  <input id="storeAddress" name="storeAddress" type="text" value="Unit 16, 71A Milperra Road, Revesby, NSW 2212" className="py-2 px-3 text-sm text-[#1E293B] border border-[#E2E8F0] rounded-[8px] shadow-[0_1px_2px_0_rgba(0,0,0,0.05),inset_0_2px_4px_0_rgba(0,0,0,0.03)] outline-none w-full" />
                </div>
              </div>

              <div className="border border-[#E2E8F0]/80 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02)] p-4 sm:p-5 rounded-[8px] bg-white min-w-0">
                <p className="font-bold text-[10px] sm:text-[11px] leading-4 tracking-[0.55px] text-[#64748B] mb-2">PAYMENT METHODS</p>

                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-3 py-2.5 border-b border-[#F1F5F9]">
                    <p className="text-[13px] text-[#334155]">PayPal</p>
                    <button type="button" data-payment-toggle data-on="true" aria-pressed="true" className="relative w-9 h-5 rounded-full bg-[#EA3829] transition-colors duration-150 shrink-0">
                      <span className="absolute top-[3px] w-3.5 h-3.5 bg-white rounded-full transition-all duration-150 right-1"></span>
                    </button>
                  </div>
                  <div className="flex items-center justify-between gap-3 py-2.5 border-b border-[#F1F5F9]">
                    <p className="text-[13px] text-[#334155]">Mastercard</p>
                    <button type="button" data-payment-toggle data-on="true" aria-pressed="true" className="relative w-9 h-5 rounded-full bg-[#EA3829] transition-colors duration-150 shrink-0">
                      <span className="absolute top-[3px] w-3.5 h-3.5 bg-white rounded-full transition-all duration-150 right-1"></span>
                    </button>
                  </div>
                  <div className="flex items-center justify-between gap-3 py-2.5 border-b border-[#F1F5F9]">
                    <p className="text-[13px] text-[#334155]">Visa</p>
                    <button type="button" data-payment-toggle data-on="true" aria-pressed="true" className="relative w-9 h-5 rounded-full bg-[#EA3829] transition-colors duration-150 shrink-0">
                      <span className="absolute top-[3px] w-3.5 h-3.5 bg-white rounded-full transition-all duration-150 right-1"></span>
                    </button>
                  </div>
                  <div className="flex items-center justify-between gap-3 py-2.5 border-b border-[#F1F5F9]">
                    <p className="text-[13px] text-[#334155]">Maestro</p>
                    <button type="button" data-payment-toggle data-on="true" aria-pressed="true" className="relative w-9 h-5 rounded-full bg-[#EA3829] transition-colors duration-150 shrink-0">
                      <span className="absolute top-[3px] w-3.5 h-3.5 bg-white rounded-full transition-all duration-150 right-1"></span>
                    </button>
                  </div>
                  <div className="flex items-center justify-between gap-3 py-2.5 border-b border-[#F1F5F9]">
                    <p className="text-[13px] text-[#334155]">Apple Pay</p>
                    <button type="button" data-payment-toggle data-on="true" aria-pressed="true" className="relative w-9 h-5 rounded-full bg-[#EA3829] transition-colors duration-150 shrink-0">
                      <span className="absolute top-[3px] w-3.5 h-3.5 bg-white rounded-full transition-all duration-150 right-1"></span>
                    </button>
                  </div>
                  <div className="flex items-center justify-between gap-3 py-2.5 border-b border-[#F1F5F9]">
                    <p className="text-[13px] text-[#334155]">Google Pay</p>
                    <button type="button" data-payment-toggle data-on="true" aria-pressed="true" className="relative w-9 h-5 rounded-full bg-[#EA3829] transition-colors duration-150 shrink-0">
                      <span className="absolute top-[3px] w-3.5 h-3.5 bg-white rounded-full transition-all duration-150 right-1"></span>
                    </button>
                  </div>
                  <div className="flex items-center justify-between gap-3 py-2.5">
                    <p className="text-[13px] text-[#334155]">Stripe</p>
                    <button type="button" data-payment-toggle data-on="true" aria-pressed="true" className="relative w-9 h-5 rounded-full bg-[#EA3829] transition-colors duration-150 shrink-0">
                      <span className="absolute top-[3px] w-3.5 h-3.5 bg-white rounded-full transition-all duration-150 right-1"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 border border-[#E2E8F0]/80 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02)] p-4 sm:p-5 rounded-[8px] bg-white min-w-0">
              <p className="font-bold text-[10px] sm:text-[11px] leading-4 tracking-[0.55px] text-[#64748B] mb-2">SHIPPING & CURRENCY</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="flex flex-col gap-1">
                  <label htmlFor="defaultCurrency" className="text-xs text-[#475569]">Default currency</label>
                  <div className="relative">
                    <select id="defaultCurrency" name="defaultCurrency" className="w-full appearance-none py-2 px-3 pr-9 text-sm text-[#1E293B] border border-[#E2E8F0] rounded-[8px] shadow-[0_1px_2px_0_rgba(0,0,0,0.05),inset_0_2px_4px_0_rgba(0,0,0,0.03)] outline-none">
                      <option>AUD ($)</option>
                      <option>USD ($)</option>
                      <option>NZD ($)</option>
                      <option>GBP (£)</option>
                      <option>EUR (€)</option>
                    </select>
                    <i data-lucide="chevron-down" className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B] pointer-events-none"></i>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="productionTime" className="text-xs text-[#475569]">Standard production time</label>
                  <input id="productionTime" name="productionTime" type="text" value="7-10 business days" className="py-2 px-3 text-sm text-[#1E293B] border border-[#E2E8F0] rounded-[8px] shadow-[0_1px_2px_0_rgba(0,0,0,0.05),inset_0_2px_4px_0_rgba(0,0,0,0.03)] outline-none w-full" />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="fulfillmentStages" className="text-xs text-[#475569]">Fulfillment stages shown to customers</label>
                  <input id="fulfillmentStages" name="fulfillmentStages" type="text" value="Order Placed, Packaging, On The Road, Delivered" className="py-2 px-3 text-sm text-[#1E293B] border border-[#E2E8F0] rounded-[8px] shadow-[0_1px_2px_0_rgba(0,0,0,0.05),inset_0_2px_4px_0_rgba(0,0,0,0.03)] outline-none w-full" />
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 border-t border-[#F3F4F6] flex flex-col sm:flex-row sm:justify-end gap-3">
              <button id="discardChanges" type="button" className="px-4 py-2 text-xs font-semibold border border-[#CBD5E1] rounded-[8px] text-[#334155] bg-white hover:bg-[#F8FAFC] transition-colors">Discard changes</button>

              <button type="submit" className="flex items-center justify-center gap-1.5 bg-[#EA3829] rounded-[8px] py-2 px-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.2)] hover:bg-[#D92F22] hover:shadow-[0_2px_4px_0_rgba(0,0,0,0.2)] transition-all duration-200">
                <span className="font-bold text-xs text-white">Save</span>
                <i data-lucide="arrow-right" className="h-3.5 w-3.5 text-white"></i>
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
    </>
  );
}
