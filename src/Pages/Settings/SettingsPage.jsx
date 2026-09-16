import Icon from "../../components/shared/Icon";

export default function SettingsPage() {
  return (
    <>
      {/* Main column */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Topbar */}
        <header className="p-3 sm:p-4 lg:p-6 flex items-center justify-between gap-2 px-3 sm:px-4 lg:px-6 border-b border-[#E2E8F0] bg-white sticky top-0 z-20">
          <div className="flex items-center gap-1 min-w-0">
            <p className="text-sm text-[#94A3B8] hidden sm:inline">Admin</p>
            <Icon name="chevron-right" className="w-5 h-5 hidden sm:inline shrink-0" />
            <p className="font-bold text-sm text-[#334155] truncate">Settings</p>
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
                    <Icon name="chevron-down" className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B] pointer-events-none" />
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
                <Icon name="arrow-right" className="h-3.5 w-3.5 text-white" />
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
