import Icon from "../../components/shared/Icon";
import OrderFlowChart from "../../components/charts/OrderFlowChart";
import OrderStatusDonut from "../../components/charts/OrderStatusDonut";

const orderFlowData = [
  { label: "Mon", value: 3500 },
  { label: "Tue", value: 4300 },
  { label: "Wed", value: 3200 },
  { label: "Thu", value: 7000 },
  { label: "Fri", value: 5200 },
  { label: "Sat", value: 4100 },
  { label: "Sun", value: 3800 },
];

const orderStatusData = [
  { label: "In Production", value: 38, color: "#EF4444" },
  { label: "Awaiting Approval", value: 14, color: "#F59E0B" },
  { label: "Shipped", value: 26, color: "#0EA5E9" },
  { label: "Delivered", value: 61, color: "#10B981" },
];

export default function DashboardPage() {
  return (
    <>
      {/* Content */}
        <main className="flex-1 p-3 sm:p-4 lg:p-6 bg-[#F8FAFC] flex flex-col gap-4 sm:gap-6 min-w-0">
          <div className="flex flex-col">
            <p className="font-bold text-[18px] leading-7 tracking-[-0.5px] sm:text-[20px] lg:text-[24px] lg:leading-8 lg:tracking-[-0.6px] text-[#0F172A]">Dashboard</p>
            <p className="text-[13px] leading-4.5 text-[#64748B]">Monday, 8 September 2026</p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="border border-[#E2E8F0]/80 shadow-[0_1px_3px_0_rgba(0,0,0,0.03)] rounded-[8px] p-3.5 sm:p-5 bg-white">
              <div className="flex items-center justify-between">
                <p className="font-bold text-xs text-[#64748B]">New order</p>
                <Icon name="lock" className="h-3.5 sm:h-[14px] shrink-0" />
              </div>
              <p className="font-bold text-lg sm:text-2xl lg:text-[26px] tracking-[-0.65px] text-[#0F172A]">90</p>
            </div>
            <div className="border border-[#E2E8F0]/80 shadow-[0_1px_3px_0_rgba(0,0,0,0.03)] rounded-[8px] p-3.5 sm:p-5 bg-white">
              <div className="flex items-center justify-between">
                <p className="font-bold text-xs text-[#64748B]">On Delivery</p>
                <Icon name="lock" className="h-3.5 sm:h-[14px] shrink-0" />
              </div>
              <p className="font-bold text-lg sm:text-2xl lg:text-[26px] tracking-[-0.65px] text-[#0F172A]">146</p>
            </div>
            <div className="border border-[#E2E8F0]/80 shadow-[0_1px_3px_0_rgba(0,0,0,0.03)] rounded-[8px] p-3.5 sm:p-5 bg-white">
              <div className="flex items-center justify-between">
                <p className="font-bold text-xs text-[#64748B]">New Draft</p>
                <Icon name="lock" className="h-3.5 sm:h-[14px] shrink-0" />
              </div>
              <p className="font-bold text-lg sm:text-2xl lg:text-[26px] tracking-[-0.65px] text-[#0F172A]">50</p>
            </div>
            <div className="border border-[#E2E8F0]/80 shadow-[0_1px_3px_0_rgba(0,0,0,0.03)] rounded-[8px] p-3.5 sm:p-5 bg-white">
              <div className="flex items-center justify-between">
                <p className="font-bold text-xs text-[#64748B]">Delivered</p>
                <Icon name="lock" className="h-3.5 sm:h-[14px] shrink-0" />
              </div>
              <p className="font-bold text-lg sm:text-2xl lg:text-[26px] tracking-[-0.65px] text-[#0F172A]">200</p>
            </div>
          </div>

          {/* Chart Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 border border-[#E2E8F0]/80 shadow-[0_1px_3px_0_rgba(0,0,0,0.03)] rounded-[8px] p-4 sm:p-5 bg-white flex flex-col gap-6 sm:gap-10 min-w-0">
              <div className="flex items-center justify-between">
                <p className="font-bold text-sm text-[#0F172A]">Order Flow</p>
                <div className="font-bold text-[11px] leading-4 text-[#94A3B8]">AUD</div>
              </div>

              <div className="min-w-0">
                <OrderFlowChart data={orderFlowData} />
              </div>
            </div>
            <div className="border border-[#E2E8F0]/80 shadow-[0_1px_3px_0_rgba(0,0,0,0.03)] rounded-[8px] p-4 sm:p-5 bg-white m-0 min-w-0">
              <p className="font-bold text-sm text-[#0F172A] mb-6">Order status split</p>
              <div className="w-full mb-5 min-w-0">
                <OrderStatusDonut data={orderStatusData} />
              </div>
            </div>
          </div>

          {/* Recent orders & Draft Design Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 border border-[#E2E8F0]/80 shadow-[0_1px_3px_0_rgba(0,0,0,0.03)] rounded-[8px] p-4 sm:p-5 bg-white min-w-0">
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <p className="font-bold text-sm text-[#0F172A]">Recent orders</p>
                <button type="button" className="text-[#EA3829] font-bold text-xs shrink-0">View all</button>
              </div>
              <div className="overflow-x-auto scrollbar-thin -mx-4 px-4 sm:mx-0 sm:px-0">
                <div className="min-w-[640px] flex flex-col gap-5">
                  <div className="w-full grid grid-cols-5 items-center gap-2">
                    <p className="font-bold text-[13px] leading-5 text-[#0F172A] truncate">#96459761</p>
                    <p className="text-[13px] leading-5 text-[#334155] text-start truncate">Adil Hasan</p>
                    <p className="text-[13px] leading-5 text-[#64748B] text-start whitespace-nowrap">13 Sep 2026</p>
                    <div className="flex justify-start">
                      <p className="bg-[#FEF3C7] rounded-[6px] py-1 px-2.5 text-[#92400E] w-fit text-[11px] leading-4 whitespace-nowrap">Packaging</p>
                    </div>
                    <p className="font-bold text-[13px] leading-5 text-[#0F172A] text-right whitespace-nowrap">$945.00</p>
                  </div>
                  <div className="w-full grid grid-cols-5 items-center gap-2">
                    <p className="font-bold text-[13px] leading-5 text-[#0F172A] truncate">#96459761</p>
                    <p className="text-[13px] leading-5 text-[#334155] text-start truncate">Grace Mitchell</p>
                    <p className="text-[13px] leading-5 text-[#64748B] text-start whitespace-nowrap">12 Sep 2026</p>
                    <div className="flex justify-start">
                      <p className="bg-[#E0F2FE] rounded-[6px] py-1 px-2.5 text-[#075985] w-fit text-[11px] leading-4 whitespace-nowrap">On The Road</p>
                    </div>
                    <p className="font-bold text-[13px] leading-5 text-[#0F172A] text-right whitespace-nowrap">$472.00</p>
                  </div>
                  <div className="w-full grid grid-cols-5 items-start gap-2">
                    <p className="font-bold text-[13px] leading-5 text-[#0F172A] truncate">#96459730</p>
                    <p className="text-[13px] leading-5 text-[#334155] text-start truncate">Overdrive Archive Co.</p>
                    <p className="text-[13px] leading-5 text-[#64748B] text-start whitespace-nowrap">11 Sep 2026</p>
                    <div className="flex justify-start">
                      <p className="bg-[#FDE68A]/60 rounded-[6px] py-1 px-2.5 text-[#78350F] w-fit text-[11px] leading-4 whitespace-nowrap">Awaiting Approval</p>
                    </div>
                    <p className="font-bold text-[13px] leading-5 text-[#0F172A] text-right whitespace-nowrap">$2268.00</p>
                  </div>
                  <div className="w-full grid grid-cols-5 items-center gap-2">
                    <p className="font-bold text-[13px] leading-5 text-[#0F172A] truncate">#96459712</p>
                    <p className="text-[13px] leading-5 text-[#334155] text-start truncate">Liam Carter</p>
                    <p className="text-[13px] leading-5 text-[#64748B] text-start whitespace-nowrap">09 Sep 2026</p>
                    <div className="flex justify-start">
                      <p className="bg-[#D1FAE5] rounded-[6px] py-1 px-2.5 text-[#065F46] w-fit text-[11px] leading-4 whitespace-nowrap">Delivered</p>
                    </div>
                    <p className="font-bold text-[13px] leading-5 text-[#0F172A] text-right whitespace-nowrap">$345.00</p>
                  </div>
                  <div className="w-full grid grid-cols-5 items-center gap-2">
                    <p className="font-bold text-[13px] leading-5 text-[#0F172A] truncate">#96459705</p>
                    <p className="text-[13px] leading-5 text-[#334155] text-start truncate">Priya Nandakumar</p>
                    <p className="text-[13px] leading-5 text-[#64748B] text-start whitespace-nowrap">08 Sep 2026</p>
                    <div className="flex justify-start">
                      <p className="bg-[#F1F5F9] rounded-[6px] py-1 px-2.5 text-[#334155] w-fit text-[11px] leading-4 whitespace-nowrap">Order Placed</p>
                    </div>
                    <p className="font-bold text-[13px] leading-5 text-[#0F172A] text-right whitespace-nowrap">$525.00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-[#E2E8F0]/80 shadow-[0_1px_3px_0_rgba(0,0,0,0.03)] rounded-[8px] p-4 sm:p-5 bg-white min-w-0">
              <p className="font-bold text-sm text-[#0F172A] mb-5 sm:mb-5">Draft Design</p>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Icon name="triangle-alert" className="h-4 shrink-0 text-[#F59E0B]" />
                  <p className="font-bold text-xs text-[#0F172A]">New Design On Draft <span className="font-normal text-[#475569]">Customer Name Emily</span></p>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="triangle-alert" className="h-4 shrink-0 text-[#F59E0B]" />
                  <p className="font-bold text-xs text-[#0F172A]">New Design On Draft <span className="font-normal text-[#475569]">Customer Name Emily</span></p>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="triangle-alert" className="h-4 shrink-0 text-[#F59E0B]" />
                  <p className="font-bold text-xs text-[#0F172A]">New Design On Draft <span className="font-normal text-[#475569]">Customer Name Emily</span></p>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="triangle-alert" className="h-4 shrink-0 text-[#F59E0B]" />
                  <p className="font-bold text-xs text-[#0F172A]">New Design On Draft <span className="font-normal text-[#475569]">Customer Name Emily</span></p>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="triangle-alert" className="h-4 shrink-0 text-[#F59E0B]" />
                  <p className="font-bold text-xs text-[#0F172A]">New Design On Draft <span className="font-normal text-[#475569]">Customer Name Emily</span></p>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="triangle-alert" className="h-4 shrink-0 text-[#F59E0B]" />
                  <p className="font-bold text-xs text-[#0F172A]">New Design On Draft <span className="font-normal text-[#475569]">Customer Name Emily</span></p>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="triangle-alert" className="h-4 shrink-0 text-[#F59E0B]" />
                  <p className="font-bold text-xs text-[#0F172A]">New Design On Draft <span className="font-normal text-[#475569]">Customer Name Emily</span></p>
                </div>
              </div>
            </div>
          </div>
        </main>
    </>
  );
}
