import Icon from "../../components/shared/Icon";

export default function CouponsPage() {
  return (
    <>
      {/* Content */}
      <main className="flex-1 p-3 sm:p-4 lg:p-6 bg-[#F8FAFC] flex flex-col gap-4 sm:gap-6 min-w-0">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <p className="font-bold text-[18px] leading-7 tracking-[-0.5px] sm:text-[20px] lg:text-[24px] lg:leading-8 lg:tracking-[-0.6px] text-[#0F172A]">Coupons & Discounts</p>
            <button id="newCouponBtn" type="button" className="bg-[#EA3829] text-white rounded-[8px] py-2 px-3 lg:px-4 flex items-center gap-1 lg:gap-2 shadow-[0_1px_2px_0_rgba(0,0,0,0.2)] hover:bg-[#D92F22] hover:shadow-[0_2px_4px_0_rgba(0,0,0,0.2)] transition-all duration-200 shrink-0">
              <Icon name="plus" className="w-4 h-4" />
              <span className="font-semibold text-[11px] lg:text-xs">New coupon</span>
            </button>
          </div>

          <div className="border border-[#E2E8F0]/80 rounded-[8px] overflow-hidden">
            <div className="overflow-x-auto overflow-y-auto scrollbar-thin">
              <table className="w-full min-w-[720px] text-left border-collapse bg-white">
                <thead className="sticky top-0 z-10">
                  <tr className="border-b border-[#E2E8F0]/80">
                    <th className="px-5 py-3 font-bold text-[11px] leading-4 tracking-[0.55px] text-[#94A3B8] whitespace-nowrap">CODE</th>
                    <th className="px-5 py-3 font-bold text-[11px] leading-4 tracking-[0.55px] text-[#94A3B8] whitespace-nowrap">DISCOUNT</th>
                    <th className="px-5 py-3 font-bold text-[11px] leading-4 tracking-[0.55px] text-[#94A3B8] whitespace-nowrap">SCOPE</th>
                    <th className="px-5 py-3 font-bold text-[11px] leading-4 tracking-[0.55px] text-[#94A3B8] whitespace-nowrap">USED</th>
                    <th className="px-5 py-3 font-bold text-[11px] leading-4 tracking-[0.55px] text-[#94A3B8] whitespace-nowrap">LIMIT</th>
                    <th className="px-5 py-3 font-bold text-[11px] leading-4 tracking-[0.55px] text-[#94A3B8] whitespace-nowrap">EXPIRES</th>
                    <th className="px-5 py-3 font-bold text-[11px] leading-4 tracking-[0.55px] text-[#94A3B8] whitespace-nowrap">STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-5 py-4 text-xs font-bold tracking-[0.3px] text-[#0F172A] whitespace-nowrap">WELCOME10</td>
                    <td className="px-5 py-4 text-xs text-[#334155] whitespace-nowrap">10% off</td>
                    <td className="px-5 py-4 text-xs text-[#475569] whitespace-nowrap">First order</td>
                    <td className="px-5 py-4 text-xs text-[#334155] whitespace-nowrap">482</td>
                    <td className="px-5 py-4 text-xs text-[#334155] whitespace-nowrap">—</td>
                    <td className="px-5 py-4 text-xs text-[#334155] whitespace-nowrap">31 Dec 2026</td>
                    <td className="px-5 py-4">
                      <span className="bg-[#DEF7EC] text-[#0E9F6E] px-3 py-1 rounded-full text-[11px] leading-4 cursor-pointer"> Active </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 text-xs font-bold tracking-[0.3px] text-[#0F172A] whitespace-nowrap">BULK50PLUS</td>
                    <td className="px-5 py-4 text-xs text-[#334155] whitespace-nowrap">8% off</td>
                    <td className="px-5 py-4 text-xs text-[#475569] whitespace-nowrap">Orders 50+ units</td>
                    <td className="px-5 py-4 text-xs text-[#334155] whitespace-nowrap">96</td>
                    <td className="px-5 py-4 text-xs text-[#334155] whitespace-nowrap">—</td>
                    <td className="px-5 py-4 text-xs text-[#334155] whitespace-nowrap">No expiry</td>
                    <td className="px-5 py-4">
                      <span className="bg-[#DEF7EC] text-[#0E9F6E] px-3 py-1 rounded-full text-[11px] leading-4 cursor-pointer"> Active </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 text-xs font-bold tracking-[0.3px] text-[#0F172A] whitespace-nowrap">SUMMER40</td>
                    <td className="px-5 py-4 text-xs text-[#334155] whitespace-nowrap">Up to 40% off</td>
                    <td className="px-5 py-4 text-xs text-[#475569] whitespace-nowrap">Summer Bulk Sale</td>
                    <td className="px-5 py-4 text-xs text-[#334155] whitespace-nowrap">210</td>
                    <td className="px-5 py-4 text-xs text-[#334155] whitespace-nowrap">500</td>
                    <td className="px-5 py-4 text-xs text-[#334155] whitespace-nowrap">30 Sep 2026</td>
                    <td className="px-5 py-4">
                      <span className="bg-[#DEF7EC] text-[#0E9F6E] px-3 py-1 rounded-full text-[11px] leading-4 cursor-pointer"> Active </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-4 text-xs font-bold tracking-[0.3px] text-[#0F172A] whitespace-nowrap">FREIGHTFREE</td>
                    <td className="px-5 py-4 text-xs text-[#334155] whitespace-nowrap">Free shipping</td>
                    <td className="px-5 py-4 text-xs text-[#475569] whitespace-nowrap">Orders over $300</td>
                    <td className="px-5 py-4 text-xs text-[#334155] whitespace-nowrap">143</td>
                    <td className="px-5 py-4 text-xs text-[#334155] whitespace-nowrap">—</td>
                    <td className="px-5 py-4 text-xs text-[#334155] whitespace-nowrap">No expiry</td>
                    <td className="px-5 py-4">
                      <span className="bg-[#F1F5F9] text-[#64748B] px-3 py-1 rounded-full text-[11px] leading-4 cursor-pointer"> Paused </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>

      {/* New Coupon Modal (must be in the DOM BEFORE the script that queries it) */}
    <div id="couponModal" className="fixed inset-0 z-50 hidden items-center justify-center bg-black/60 backdrop-blur-xs p-3 sm:p-4">
      <div className="bg-white w-full sm:w-[90%] md:max-w-[600px] max-h-[90vh] overflow-y-auto rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
        {/* Header */}
        <div className="flex items-start sm:items-center justify-between gap-3 px-4 sm:px-5 py-4 border-b border-[#E2E8F0]">
          <div className="min-w-0">
            <p className="font-bold text-[16px] leading-6 tracking-[-0.4px] text-[#0F172A]">Create New Coupon</p>
            <p className="text-xs text-[#64748B]">Set up a discount code customers can apply at checkout</p>
          </div>

          <button id="closeCouponModal" className="shrink-0">
            <Icon name="x" className="w-4 h-4 text-[#94A3B8]" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-5 space-y-4">
          {/* Coupon Code */}
          <div>
            <label className="text-xs font-bold text-[#1E293B]">Coupon Code <span className="text-[#EF4444]">*</span></label>
            <div className="relative mt-1">
              <input type="text" placeholder="SUMMER25" className="w-full py-2 px-3 pr-20 text-xs font-bold tracking-[0.5px] uppercase border border-[#E2E8F0] rounded-[8px] bg-[#F8FAFC] outline-none placeholder:text-[#94A3B8] placeholder:font-bold placeholder:normal-case text-[#0F172A]" />
            </div>
          </div>

          {/* Discount Type + Value */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-[#1E293B]">Discount Type <span className="text-[#EF4444]">*</span></label>

              <div className="relative mt-1">
                <select id="discountType" className="w-full appearance-none py-2 px-3 pr-10 text-xs text-[#334155] border border-[#E2E8F0] rounded-[8px] bg-[#F8FAFC] outline-none">
                  <option value="percentage">Percentage off</option>
                  <option value="fixed">Fixed amount off</option>
                  <option value="shipping">Free shipping</option>
                </select>

                <Icon name="chevron-down" className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B] pointer-events-none" />
              </div>
            </div>

            <div id="discountValueWrap">
              <label className="text-xs font-bold text-[#1E293B]">Discount Value <span className="text-[#EF4444]">*</span></label>
              <div className="relative mt-1">
                <input id="discountValue" type="number" min="0" placeholder="25" className="w-full py-2 px-3 pr-8 text-xs text-[#334155] border border-[#E2E8F0] rounded-[8px] bg-[#F8FAFC] outline-none placeholder:text-[#94A3B8]" />
                <span id="discountUnit" className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#94A3B8]">%</span>
              </div>
            </div>
          </div>

          {/* Scope */}
          <div>
            <label className="text-xs font-bold text-[#1E293B]">Applies To <span className="text-[#EF4444]">*</span></label>

            <div className="relative mt-1">
              <select className="w-full appearance-none py-2 px-3 pr-10 text-sm text-[#334155] border border-[#E2E8F0] rounded-[8px] bg-[#F8FAFC] outline-none">
                <option>All products</option>
                <option>First order only</option>
                <option>Specific collection</option>
                <option>Minimum order amount</option>
                <option>Minimum quantity (bulk)</option>
              </select>

              <Icon name="chevron-down" className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B] pointer-events-none" />
            </div>
          </div>

          {/* Usage Limit + Expiry */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-[#1E293B]">Usage Limit</label>
              <input type="number" min="0" placeholder="Unlimited" className="mt-1 w-full py-2 px-3 text-xs text-[#334155] border border-[#E2E8F0] rounded-[8px] bg-[#F8FAFC] outline-none placeholder:text-[#94A3B8]" />
            </div>

            <div>
              <label className="text-xs font-bold text-[#1E293B]">Expiry Date</label>
              <input type="date" className="mt-1 w-full py-2 px-3 text-xs text-[#334155] border border-[#E2E8F0] rounded-[8px] bg-[#F8FAFC] outline-none" />
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center justify-between border border-[#E2E8F0] rounded-[8px] p-3 gap-3">
            <div className="min-w-0">
              <p className="text-xs font-bold text-[#1E293B]">Activate immediately</p>
              <p className="text-[11px] leading-4 text-[#94A3B8]">Coupon can be used as soon as it's saved</p>
            </div>
            <button type="button" id="statusToggle" data-on="true" className="relative w-10 h-6 rounded-full bg-[#DC2626] transition-colors duration-200 shrink-0">
              <span className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 translate-x-4"></span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 px-4 sm:px-5 py-4 border-t border-[#E2E8F0]">
          <button id="cancelCouponModal" className="w-full sm:w-auto px-4 py-2 text-xs border border-[#CBD5E1] rounded-[8px] text-[#334155]">Cancel</button>

          <button className="w-full sm:w-auto flex items-center justify-center gap-1.5 bg-[#DC2626] rounded-[8px] py-2 px-5">
            <Icon name="ticket" className="h-4 text-white" />
            <span className="font-bold text-xs text-white">Create Coupon</span>
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
