import { Link } from "react-router";
import Icon from "../../components/shared/Icon";
import SparklineChart from "../../components/charts/SparklineChart";

const ordersSparkline = [0, 0, 0, 15, 0, 30, 0, 25, 0, 50, 30, 0, 0, 0];
const itemsSparkline = [0, 0, 0, 0, 0, 10, 20, 10, 0, 0, 0, 0, 0, 0];
const salesSparkline = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const fulfilledSparkline = [0, 0, 0, 0, 0, 10, 20, 10, 0, 0, 0, 0, 0, 0];
const deliveredSparkline = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const timeSparkline = [0, 0, 0, 0, 0, 10, 20, 10, 0, 0, 0, 0, 0, 0];

export default function OrdersPage() {
  return (
    <>
      {/* Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-6 bg-[#F8FAFC] flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <p className="font-bold text-[20px] leading-7 tracking-[-0.5px] lg:text-[24px] lg:leading-8 lg:tracking-[-0.6px] text-[#0F172A]">Orders</p>
          </div>

          <div className="border border-[#E1E3E5] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] rounded-[8px] p-[14px] flex flex-col lg:flex-row lg:items-center gap-4">
            <div id="dateRangeWrap" className="relative flex-shrink-0">
              <button id="dateRangeBtn" type="button" className="h-8 px-3 border border-[#E1E3E5] rounded-[6px] flex items-center justify-center gap-2 text-[11px] text-[#334155] whitespace-nowrap">
                <Icon name="calendar-days" className="w-3 h-3 text-[#64748B]" />
                <span id="dateRangeLabel">30 days</span>
                <Icon name="chevron-down" className="w-3 h-3 text-[#94A3B8]" />
              </button>

              <div id="dateRangeMenu" className="hidden absolute left-0 top-[calc(100%+6px)] z-30 w-[160px] bg-white border border-[#E1E3E5] rounded-[8px] shadow-[0_4px_12px_0_rgba(0,0,0,0.08)] py-1">
                <button type="button" data-value="7 days" className="date-range-option w-full text-left px-3 py-2 text-[11px] text-[#334155] hover:bg-[#F8FAFC] flex items-center justify-between">7 days</button>
                <button type="button" data-value="30 days" className="date-range-option w-full text-left px-3 py-2 text-[11px] text-[#334155] hover:bg-[#F8FAFC] flex items-center justify-between">30 days</button>
                <button type="button" data-value="90 days" className="date-range-option w-full text-left px-3 py-2 text-[11px] text-[#334155] hover:bg-[#F8FAFC] flex items-center justify-between">90 days</button>
                <button type="button" data-value="This year" className="date-range-option w-full text-left px-3 py-2 text-[11px] text-[#334155] hover:bg-[#F8FAFC] flex items-center justify-between">This year</button>
              </div>
            </div>

            <div className="overflow-x-auto flex flex-nowrap justify-start gap-5 scrollbar-thin">
              <div className="flex-shrink-0 lg:border-l border-[#E5E7EB] px-4 flex items-center gap-2">
                <div className="flex flex-col gap-1">
                  <p className="text-xs text-[#5C5F62] border-b border-dotted border-[#8C9196] whitespace-nowrap">Orders</p>
                  <div className="flex items-center gap-1.5">
                    <p className="font-bold text-[13px] text-[#202223]">10</p>
                    <div className="flex items-center text-[#047857]">
                      <Icon name="move-right" className="w-[10px] -rotate-45" />
                      <p className="font-medium text-[11px]">67%</p>
                    </div>
                  </div>
                </div>
                <SparklineChart data={ordersSparkline} className="w-[50px] flex-shrink-0" />
              </div>

              <div className="flex-shrink-0 border-l border-[#E5E7EB] px-4 flex items-center gap-2">
                <div className="flex flex-col gap-1">
                  <p className="text-xs text-[#5C5F62] border-b border-dotted border-[#8C9196] whitespace-nowrap">Items ordered</p>
                  <div className="flex items-center gap-1.5">
                    <p className="font-bold text-[13px] text-[#202223]">323</p>
                    <div className="flex items-center text-[#047857]">
                      <Icon name="move-right" className="w-[10px] -rotate-45" />
                      <p className="font-medium text-[11px]">67%</p>
                    </div>
                  </div>
                </div>
                <SparklineChart data={itemsSparkline} className="w-[50px] flex-shrink-0" />
              </div>

              <div className="flex-shrink-0 border-l border-[#E5E7EB] px-4 flex items-center gap-2">
                <div className="flex flex-col gap-1">
                  <p className="text-xs text-[#5C5F62] border-b border-dotted border-[#8C9196] whitespace-nowrap">Sales reversals</p>
                  <div className="flex items-center gap-1.5">
                    <p className="font-bold text-[13px] text-[#202223]">$0</p>
                    <div className="flex items-center text-[#047857]">
                      <Icon name="move-right" className="w-[10px] -rotate-45" />
                      <p className="font-medium text-[11px]">100%</p>
                    </div>
                  </div>
                </div>
                <SparklineChart data={salesSparkline} className="w-[50px] flex-shrink-0" />
              </div>

              <div className="flex-shrink-0 border-l border-[#E5E7EB] px-4 flex items-center gap-2">
                <div className="flex flex-col gap-1">
                  <p className="text-xs text-[#5C5F62] border-b border-dotted border-[#8C9196] whitespace-nowrap">Orders fulfilled</p>
                  <div className="flex items-center gap-1.5">
                    <p className="font-bold text-[13px] text-[#202223]">8</p>
                    <div className="flex items-center text-[#047857]">
                      <Icon name="move-right" className="w-[10px] -rotate-45" />
                      <p className="font-medium text-[11px]">67%</p>
                    </div>
                  </div>
                </div>
                <SparklineChart data={fulfilledSparkline} className="w-[50px] flex-shrink-0" />
              </div>

              <div className="flex-shrink-0 border-l border-[#E5E7EB] px-4 flex items-center gap-2">
                <div className="flex flex-col gap-1">
                  <p className="text-xs text-[#5C5F62] border-b border-dotted border-[#8C9196] whitespace-nowrap">Orders delivered</p>
                  <div className="flex items-center gap-1.5">
                    <p className="font-bold text-[13px] text-[#202223]">0</p>
                    <div className="flex items-center text-[#047857]">
                      <p className="font-medium text-[11px]">100%</p>
                    </div>
                  </div>
                </div>
                <SparklineChart data={deliveredSparkline} className="w-[54px] flex-shrink-0" />
              </div>

              <div className="flex-shrink-0 border-l border-[#E5E7EB] px-4 flex items-center gap-2">
                <div className="flex flex-col gap-1">
                  <p className="text-xs text-[#5C5F62] border-b border-dotted border-[#8C9196] whitespace-nowrap">Order to fulfillment time</p>
                  <div className="flex items-center gap-1.5">
                    <p className="font-bold text-[13px] text-[#202223]">179 hours</p>
                    <div className="flex items-center text-[#047857]">
                      <Icon name="move-right" className="w-[10px] -rotate-45" />
                      <p className="font-medium text-[11px]">90%</p>
                    </div>
                  </div>
                </div>
                <SparklineChart data={timeSparkline} className="w-[54px] flex-shrink-0" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[8px] overflow-hidden">
            <form action="#" className="py-3.5 px-4 flex items-center">
              <div className="relative">
                <select className="appearance-none pl-3 pr-8 py-1.5 text-xs font-bold text-[#202223] bg-white outline-none cursor-pointer">
                  <option value="all">All</option>
                </select>
                <Icon name="chevrons-up-down" className="w-3.5 h-3.5 text-[#5C5F62] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              <div className="flex items-center gap-2">
                <Icon name="search" className="w-3.5 h-3.5 text-[#94A3B8]" />
                <input type="text" placeholder="Search and filter" className="outline-none text-xs text-[#334155] placeholder:text-[#94A3B8] w-[180px]" />
              </div>
            </form>
            <div className="overflow-y-auto">
              <table className="w-full text-left border-collapse">
                <thead className="sticky top-0 z-10">
                  <tr className="border-b border-t border-[#E2E8F0]/80">
                    <th className="px-3 py-2.5">
                      <label className="relative flex items-center cursor-pointer">
                        <input type="checkbox" className="peer sr-only" />
                        <span className="h-4 w-4 rounded-[3px] border border-[#C9CCCF] peer-checked:border-[#D92F22] peer-checked:bg-[#D92F22]"></span>

                        <svg className="absolute left-[2px] top-[2px] h-3 w-3 text-white opacity-0 peer-checked:opacity-100" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="3">
                          <path d="M4 10l4 4 8-8" />
                        </svg>
                      </label>
                    </th>
                    <th className="px-3 py-2.5 font-medium text-xs text-[#5C5F62] whitespace-nowrap text-center">Order</th>
                    <th className="px-3 py-2.5 font-medium text-xs text-[#5C5F62] whitespace-nowrap text-center">Date ↓</th>
                    <th className="px-3 py-2.5 font-medium text-xs text-[#5C5F62] whitespace-nowrap text-center">Customer</th>
                    <th className="px-3 py-2.5 font-medium text-xs text-[#5C5F62] whitespace-nowrap text-center">Channel</th>
                    <th className="px-3 py-2.5 font-medium text-xs text-[#5C5F62] whitespace-nowrap text-center">Total</th>
                    <th className="px-3 py-2.5 font-medium text-xs text-[#5C5F62] whitespace-nowrap text-center">Payment status</th>
                    <th className="px-3 py-2.5 font-medium text-xs text-[#5C5F62] whitespace-nowrap text-center">Fulfillment status</th>
                    <th className="px-3 py-2.5 font-medium text-xs text-[#5C5F62] whitespace-nowrap text-center">Items</th>
                    <th className="px-3 py-2.5 font-medium text-xs text-[#5C5F62] whitespace-nowrap text-center">Delivery status</th>
                    <th className="px-3 py-2.5 font-medium text-xs text-[#5C5F62] whitespace-nowrap text-center">Delivery method</th>
                  </tr>
                </thead>
                <tbody className="border-b-2 border-[#F1F2F3] divide-y divide-[#F1F2F3]">
                  <tr>
                    <td className="px-3 py-2.5">
                      <label className="relative flex items-center cursor-pointer">
                        <input type="checkbox" className="peer sr-only" />
                        <span className="h-4 w-4 rounded-[3px] border border-[#C9CCCF] peer-checked:border-[#D92F22] peer-checked:bg-[#D92F22]"></span>

                        <svg className="absolute left-[2px] top-[2px] h-3 w-3 text-white opacity-0 peer-checked:opacity-100" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="3">
                          <path d="M4 10l4 4 8-8" />
                        </svg>
                      </label>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] font-medium whitespace-nowrap text-center">
                      <Link to="/orders/details" className="hover:text-[#D92F22] transition-colors"> CP #1064</Link>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Tuesday at 11:19 am</td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] whitespace-nowrap text-center">Gathish Abraham</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Draft Orders</td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] font-medium whitespace-nowrap text-center">$214.39</td>
                    <td className="px-3 text-center align-middle">
                      <div className="flex items-center bg-[#E4E5E7] py-[2px] px-2 cursor-pointer rounded-full inline-flex gap-1.5">
                        <div className="h-[6px] w-[6px] rounded-full bg-[#5C5F62]"></div>
                        <p className="font-medium text-[11px] text-[#303030]">Paid</p>
                      </div>
                    </td>
                    <td className="px-3 text-center align-middle">
                      <div className="flex items-center bg-[#FEEDCC] py-[2px] px-2 cursor-pointer rounded-full inline-flex gap-1.5">
                        <div className="h-[6px] w-[6px] rounded-full bg-[#E08900]"></div>
                        <p className="font-medium text-[11px] text-[#825C00]">Unfulfilled</p>
                      </div>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">11 items</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Standard Shipping</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Store pickup</td>
                  </tr>

                  <tr>
                    <td className="px-3 py-2.5">
                      <label className="relative flex items-center cursor-pointer">
                        <input type="checkbox" className="peer sr-only" />
                        <span className="h-4 w-4 rounded-[3px] border border-[#C9CCCF] peer-checked:border-[#D92F22] peer-checked:bg-[#D92F22]"></span>

                        <svg className="absolute left-[2px] top-[2px] h-3 w-3 text-white opacity-0 peer-checked:opacity-100" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="3">
                          <path d="M4 10l4 4 8-8" />
                        </svg>
                      </label>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] font-medium whitespace-nowrap text-center">
                      <Link to="/orders/details" className="hover:text-[#D92F22] transition-colors"> CP #1064</Link>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Tuesday at 11:19 am</td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] whitespace-nowrap text-center">Gathish Abraham</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Draft Orders</td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] font-medium whitespace-nowrap text-center">$214.39</td>
                    <td className="px-3 text-center align-middle">
                      <div className="flex items-center bg-[#E4E5E7] py-[2px] px-2 cursor-pointer rounded-full inline-flex gap-1.5">
                        <div className="h-[6px] w-[6px] rounded-full bg-[#5C5F62]"></div>
                        <p className="font-medium text-[11px] text-[#303030]">Paid</p>
                      </div>
                    </td>
                    <td className="px-3 text-center align-middle">
                      <div className="flex items-center bg-[#FEEDCC] py-[2px] px-2 cursor-pointer rounded-full inline-flex gap-1.5">
                        <div className="h-[6px] w-[6px] rounded-full bg-[#E08900]"></div>
                        <p className="font-medium text-[11px] text-[#825C00]">Unfulfilled</p>
                      </div>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">11 items</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Standard Shipping</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Store pickup</td>
                  </tr>

                  <tr>
                    <td className="px-3 py-2.5">
                      <label className="relative flex items-center cursor-pointer">
                        <input type="checkbox" className="peer sr-only" />
                        <span className="h-4 w-4 rounded-[3px] border border-[#C9CCCF] peer-checked:border-[#D92F22] peer-checked:bg-[#D92F22]"></span>

                        <svg className="absolute left-[2px] top-[2px] h-3 w-3 text-white opacity-0 peer-checked:opacity-100" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="3">
                          <path d="M4 10l4 4 8-8" />
                        </svg>
                      </label>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] font-medium whitespace-nowrap text-center">
                      <Link to="/orders/details" className="hover:text-[#D92F22] transition-colors"> CP #1064</Link>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Tuesday at 11:19 am</td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] whitespace-nowrap text-center">Gathish Abraham</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Draft Orders</td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] font-medium whitespace-nowrap text-center">$214.39</td>
                    <td className="px-3 text-center align-middle">
                      <div className="flex items-center bg-[#E4E5E7] py-[2px] px-2 cursor-pointer rounded-full inline-flex gap-1.5">
                        <div className="h-[6px] w-[6px] rounded-full bg-[#5C5F62]"></div>
                        <p className="font-medium text-[11px] text-[#303030]">Paid</p>
                      </div>
                    </td>
                    <td className="px-3 text-center align-middle">
                      <div className="flex items-center bg-[#FEEDCC] py-[2px] px-2 cursor-pointer rounded-full inline-flex gap-1.5">
                        <div className="h-[6px] w-[6px] rounded-full bg-[#E08900]"></div>
                        <p className="font-medium text-[11px] text-[#825C00]">Unfulfilled</p>
                      </div>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">11 items</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Standard Shipping</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Store pickup</td>
                  </tr>

                  <tr>
                    <td className="px-3 py-2.5">
                      <label className="relative flex items-center cursor-pointer">
                        <input type="checkbox" className="peer sr-only" />
                        <span className="h-4 w-4 rounded-[3px] border border-[#C9CCCF] peer-checked:border-[#D92F22] peer-checked:bg-[#D92F22]"></span>

                        <svg className="absolute left-[2px] top-[2px] h-3 w-3 text-white opacity-0 peer-checked:opacity-100" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="3">
                          <path d="M4 10l4 4 8-8" />
                        </svg>
                      </label>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] font-medium whitespace-nowrap text-center">
                      <Link to="/orders/details" className="hover:text-[#D92F22] transition-colors"> CP #1064</Link>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Tuesday at 11:19 am</td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] whitespace-nowrap text-center">Gathish Abraham</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Draft Orders</td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] font-medium whitespace-nowrap text-center">$214.39</td>
                    <td className="px-3 text-center align-middle">
                      <div className="flex items-center bg-[#E4E5E7] py-[2px] px-2 cursor-pointer rounded-full inline-flex gap-1.5">
                        <div className="h-[6px] w-[6px] rounded-full bg-[#5C5F62]"></div>
                        <p className="font-medium text-[11px] text-[#303030]">Paid</p>
                      </div>
                    </td>
                    <td className="px-3 text-center align-middle">
                      <div className="flex items-center bg-[#FEEDCC] py-[2px] px-2 cursor-pointer rounded-full inline-flex gap-1.5">
                        <div className="h-[6px] w-[6px] rounded-full bg-[#E08900]"></div>
                        <p className="font-medium text-[11px] text-[#825C00]">Unfulfilled</p>
                      </div>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">11 items</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Standard Shipping</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Store pickup</td>
                  </tr>

                  <tr>
                    <td className="px-3 py-2.5">
                      <label className="relative flex items-center cursor-pointer">
                        <input type="checkbox" className="peer sr-only" />
                        <span className="h-4 w-4 rounded-[3px] border border-[#C9CCCF] peer-checked:border-[#D92F22] peer-checked:bg-[#D92F22]"></span>

                        <svg className="absolute left-[2px] top-[2px] h-3 w-3 text-white opacity-0 peer-checked:opacity-100" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="3">
                          <path d="M4 10l4 4 8-8" />
                        </svg>
                      </label>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] font-medium whitespace-nowrap text-center">
                      <Link to="/orders/details" className="hover:text-[#D92F22] transition-colors"> CP #1064</Link>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Tuesday at 11:19 am</td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] whitespace-nowrap text-center">Gathish Abraham</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Draft Orders</td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] font-medium whitespace-nowrap text-center">$214.39</td>
                    <td className="px-3 text-center align-middle">
                      <div className="flex items-center bg-[#E4E5E7] py-[2px] px-2 cursor-pointer rounded-full inline-flex gap-1.5">
                        <div className="h-[6px] w-[6px] rounded-full bg-[#5C5F62]"></div>
                        <p className="font-medium text-[11px] text-[#303030]">Paid</p>
                      </div>
                    </td>
                    <td className="px-3 text-center align-middle">
                      <div className="flex items-center bg-[#FEEDCC] py-[2px] px-2 cursor-pointer rounded-full inline-flex gap-1.5">
                        <div className="h-[6px] w-[6px] rounded-full bg-[#E08900]"></div>
                        <p className="font-medium text-[11px] text-[#825C00]">Unfulfilled</p>
                      </div>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">11 items</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Standard Shipping</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Store pickup</td>
                  </tr>

                  <tr>
                    <td className="px-3 py-2.5">
                      <label className="relative flex items-center cursor-pointer">
                        <input type="checkbox" className="peer sr-only" />
                        <span className="h-4 w-4 rounded-[3px] border border-[#C9CCCF] peer-checked:border-[#D92F22] peer-checked:bg-[#D92F22]"></span>

                        <svg className="absolute left-[2px] top-[2px] h-3 w-3 text-white opacity-0 peer-checked:opacity-100" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="3">
                          <path d="M4 10l4 4 8-8" />
                        </svg>
                      </label>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] font-medium whitespace-nowrap text-center">
                      <Link to="/orders/details" className="hover:text-[#D92F22] transition-colors"> CP #1064</Link>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Tuesday at 11:19 am</td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] whitespace-nowrap text-center">Gathish Abraham</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Draft Orders</td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] font-medium whitespace-nowrap text-center">$214.39</td>
                    <td className="px-3 text-center align-middle">
                      <div className="flex items-center bg-[#E4E5E7] py-[2px] px-2 cursor-pointer rounded-full inline-flex gap-1.5">
                        <div className="h-[6px] w-[6px] rounded-full bg-[#5C5F62]"></div>
                        <p className="font-medium text-[11px] text-[#303030]">Paid</p>
                      </div>
                    </td>
                    <td className="px-3 text-center align-middle">
                      <div className="flex items-center bg-[#FEEDCC] py-[2px] px-2 cursor-pointer rounded-full inline-flex gap-1.5">
                        <div className="h-[6px] w-[6px] rounded-full bg-[#E08900]"></div>
                        <p className="font-medium text-[11px] text-[#825C00]">Unfulfilled</p>
                      </div>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">11 items</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Standard Shipping</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Store pickup</td>
                  </tr>

                  <tr>
                    <td className="px-3 py-2.5">
                      <label className="relative flex items-center cursor-pointer">
                        <input type="checkbox" className="peer sr-only" />
                        <span className="h-4 w-4 rounded-[3px] border border-[#C9CCCF] peer-checked:border-[#D92F22] peer-checked:bg-[#D92F22]"></span>

                        <svg className="absolute left-[2px] top-[2px] h-3 w-3 text-white opacity-0 peer-checked:opacity-100" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="3">
                          <path d="M4 10l4 4 8-8" />
                        </svg>
                      </label>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] font-medium whitespace-nowrap text-center">
                      <Link to="/orders/details" className="hover:text-[#D92F22] transition-colors"> CP #1064</Link>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Tuesday at 11:19 am</td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] whitespace-nowrap text-center">Gathish Abraham</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Draft Orders</td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] font-medium whitespace-nowrap text-center">$214.39</td>
                    <td className="px-3 text-center align-middle">
                      <div className="flex items-center bg-[#E4E5E7] py-[2px] px-2 cursor-pointer rounded-full inline-flex gap-1.5">
                        <div className="h-[6px] w-[6px] rounded-full bg-[#5C5F62]"></div>
                        <p className="font-medium text-[11px] text-[#303030]">Paid</p>
                      </div>
                    </td>
                    <td className="px-3 text-center align-middle">
                      <div className="flex items-center bg-[#FEEDCC] py-[2px] px-2 cursor-pointer rounded-full inline-flex gap-1.5">
                        <div className="h-[6px] w-[6px] rounded-full bg-[#E08900]"></div>
                        <p className="font-medium text-[11px] text-[#825C00]">Unfulfilled</p>
                      </div>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">11 items</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Standard Shipping</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Store pickup</td>
                  </tr>

                  <tr>
                    <td className="px-3 py-2.5">
                      <label className="relative flex items-center cursor-pointer">
                        <input type="checkbox" className="peer sr-only" />
                        <span className="h-4 w-4 rounded-[3px] border border-[#C9CCCF] peer-checked:border-[#D92F22] peer-checked:bg-[#D92F22]"></span>

                        <svg className="absolute left-[2px] top-[2px] h-3 w-3 text-white opacity-0 peer-checked:opacity-100" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="3">
                          <path d="M4 10l4 4 8-8" />
                        </svg>
                      </label>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] font-medium whitespace-nowrap text-center">
                      <Link to="/orders/details" className="hover:text-[#D92F22] transition-colors"> CP #1064</Link>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Tuesday at 11:19 am</td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] whitespace-nowrap text-center">Gathish Abraham</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Draft Orders</td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] font-medium whitespace-nowrap text-center">$214.39</td>
                    <td className="px-3 text-center align-middle">
                      <div className="flex items-center bg-[#E4E5E7] py-[2px] px-2 cursor-pointer rounded-full inline-flex gap-1.5">
                        <div className="h-[6px] w-[6px] rounded-full bg-[#5C5F62]"></div>
                        <p className="font-medium text-[11px] text-[#303030]">Paid</p>
                      </div>
                    </td>
                    <td className="px-3 text-center align-middle">
                      <div className="flex items-center bg-[#FEEDCC] py-[2px] px-2 cursor-pointer rounded-full inline-flex gap-1.5">
                        <div className="h-[6px] w-[6px] rounded-full bg-[#E08900]"></div>
                        <p className="font-medium text-[11px] text-[#825C00]">Unfulfilled</p>
                      </div>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">11 items</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Standard Shipping</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Store pickup</td>
                  </tr>

                  <tr>
                    <td className="px-3 py-2.5">
                      <label className="relative flex items-center cursor-pointer">
                        <input type="checkbox" className="peer sr-only" />
                        <span className="h-4 w-4 rounded-[3px] border border-[#C9CCCF] peer-checked:border-[#D92F22] peer-checked:bg-[#D92F22]"></span>

                        <svg className="absolute left-[2px] top-[2px] h-3 w-3 text-white opacity-0 peer-checked:opacity-100" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="3">
                          <path d="M4 10l4 4 8-8" />
                        </svg>
                      </label>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] font-medium whitespace-nowrap text-center">
                      <Link to="/orders/details" className="hover:text-[#D92F22] transition-colors"> CP #1064</Link>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Tuesday at 11:19 am</td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] whitespace-nowrap text-center">Gathish Abraham</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Draft Orders</td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] font-medium whitespace-nowrap text-center">$214.39</td>
                    <td className="px-3 text-center align-middle">
                      <div className="flex items-center bg-[#E4E5E7] py-[2px] px-2 cursor-pointer rounded-full inline-flex gap-1.5">
                        <div className="h-[6px] w-[6px] rounded-full bg-[#5C5F62]"></div>
                        <p className="font-medium text-[11px] text-[#303030]">Paid</p>
                      </div>
                    </td>
                    <td className="px-3 text-center align-middle">
                      <div className="flex items-center bg-[#FEEDCC] py-[2px] px-2 cursor-pointer rounded-full inline-flex gap-1.5">
                        <div className="h-[6px] w-[6px] rounded-full bg-[#E08900]"></div>
                        <p className="font-medium text-[11px] text-[#825C00]">Unfulfilled</p>
                      </div>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">11 items</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Standard Shipping</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Store pickup</td>
                  </tr>

                  <tr>
                    <td className="px-3 py-2.5">
                      <label className="relative flex items-center cursor-pointer">
                        <input type="checkbox" className="peer sr-only" />
                        <span className="h-4 w-4 rounded-[3px] border border-[#C9CCCF] peer-checked:border-[#D92F22] peer-checked:bg-[#D92F22]"></span>

                        <svg className="absolute left-[2px] top-[2px] h-3 w-3 text-white opacity-0 peer-checked:opacity-100" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="3">
                          <path d="M4 10l4 4 8-8" />
                        </svg>
                      </label>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] font-medium whitespace-nowrap text-center">
                      <Link to="/orders/details" className="hover:text-[#D92F22] transition-colors"> CP #1064</Link>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Tuesday at 11:19 am</td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] whitespace-nowrap text-center">Gathish Abraham</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Draft Orders</td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] font-medium whitespace-nowrap text-center">$214.39</td>
                    <td className="px-3 text-center align-middle">
                      <div className="flex items-center bg-[#E4E5E7] py-[2px] px-2 cursor-pointer rounded-full inline-flex gap-1.5">
                        <div className="h-[6px] w-[6px] rounded-full bg-[#5C5F62]"></div>
                        <p className="font-medium text-[11px] text-[#303030]">Paid</p>
                      </div>
                    </td>
                    <td className="px-3 text-center align-middle">
                      <div className="flex items-center bg-[#FEEDCC] py-[2px] px-2 cursor-pointer rounded-full inline-flex gap-1.5">
                        <div className="h-[6px] w-[6px] rounded-full bg-[#E08900]"></div>
                        <p className="font-medium text-[11px] text-[#825C00]">Unfulfilled</p>
                      </div>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">11 items</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Standard Shipping</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Store pickup</td>
                  </tr>

                  <tr>
                    <td className="px-3 py-2.5">
                      <label className="relative flex items-center cursor-pointer">
                        <input type="checkbox" className="peer sr-only" />
                        <span className="h-4 w-4 rounded-[3px] border border-[#C9CCCF] peer-checked:border-[#D92F22] peer-checked:bg-[#D92F22]"></span>

                        <svg className="absolute left-[2px] top-[2px] h-3 w-3 text-white opacity-0 peer-checked:opacity-100" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="3">
                          <path d="M4 10l4 4 8-8" />
                        </svg>
                      </label>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] font-medium whitespace-nowrap text-center">
                      <Link to="/orders/details" className="hover:text-[#D92F22] transition-colors"> CP #1064</Link>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Tuesday at 11:19 am</td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] whitespace-nowrap text-center">Gathish Abraham</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Draft Orders</td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] font-medium whitespace-nowrap text-center">$214.39</td>
                    <td className="px-3 text-center align-middle">
                      <div className="flex items-center bg-[#E4E5E7] py-[2px] px-2 cursor-pointer rounded-full inline-flex gap-1.5">
                        <div className="h-[6px] w-[6px] rounded-full bg-[#5C5F62]"></div>
                        <p className="font-medium text-[11px] text-[#303030]">Paid</p>
                      </div>
                    </td>
                    <td className="px-3 text-center align-middle">
                      <div className="flex items-center bg-[#FEEDCC] py-[2px] px-2 cursor-pointer rounded-full inline-flex gap-1.5">
                        <div className="h-[6px] w-[6px] rounded-full bg-[#E08900]"></div>
                        <p className="font-medium text-[11px] text-[#825C00]">Unfulfilled</p>
                      </div>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">11 items</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Standard Shipping</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Store pickup</td>
                  </tr>

                  <tr>
                    <td className="px-3 py-2.5">
                      <label className="relative flex items-center cursor-pointer">
                        <input type="checkbox" className="peer sr-only" />
                        <span className="h-4 w-4 rounded-[3px] border border-[#C9CCCF] peer-checked:border-[#D92F22] peer-checked:bg-[#D92F22]"></span>

                        <svg className="absolute left-[2px] top-[2px] h-3 w-3 text-white opacity-0 peer-checked:opacity-100" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="3">
                          <path d="M4 10l4 4 8-8" />
                        </svg>
                      </label>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] font-medium whitespace-nowrap text-center">
                      <Link to="/orders/details" className="hover:text-[#D92F22] transition-colors"> CP #1064</Link>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Tuesday at 11:19 am</td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] whitespace-nowrap text-center">Gathish Abraham</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Draft Orders</td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] font-medium whitespace-nowrap text-center">$214.39</td>
                    <td className="px-3 text-center align-middle">
                      <div className="flex items-center bg-[#E4E5E7] py-[2px] px-2 cursor-pointer rounded-full inline-flex gap-1.5">
                        <div className="h-[6px] w-[6px] rounded-full bg-[#5C5F62]"></div>
                        <p className="font-medium text-[11px] text-[#303030]">Paid</p>
                      </div>
                    </td>
                    <td className="px-3 text-center align-middle">
                      <div className="flex items-center bg-[#FEEDCC] py-[2px] px-2 cursor-pointer rounded-full inline-flex gap-1.5">
                        <div className="h-[6px] w-[6px] rounded-full bg-[#E08900]"></div>
                        <p className="font-medium text-[11px] text-[#825C00]">Unfulfilled</p>
                      </div>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">11 items</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Standard Shipping</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Store pickup</td>
                  </tr>

                  <tr>
                    <td className="px-3 py-2.5">
                      <label className="relative flex items-center cursor-pointer">
                        <input type="checkbox" className="peer sr-only" />
                        <span className="h-4 w-4 rounded-[3px] border border-[#C9CCCF] peer-checked:border-[#D92F22] peer-checked:bg-[#D92F22]"></span>

                        <svg className="absolute left-[2px] top-[2px] h-3 w-3 text-white opacity-0 peer-checked:opacity-100" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="3">
                          <path d="M4 10l4 4 8-8" />
                        </svg>
                      </label>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] font-medium whitespace-nowrap text-center">
                      <Link to="/orders/details" className="hover:text-[#D92F22] transition-colors"> CP #1064</Link>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Tuesday at 11:19 am</td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] whitespace-nowrap text-center">Gathish Abraham</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Draft Orders</td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] font-medium whitespace-nowrap text-center">$214.39</td>
                    <td className="px-3 text-center align-middle">
                      <div className="flex items-center bg-[#E4E5E7] py-[2px] px-2 cursor-pointer rounded-full inline-flex gap-1.5">
                        <div className="h-[6px] w-[6px] rounded-full bg-[#5C5F62]"></div>
                        <p className="font-medium text-[11px] text-[#303030]">Paid</p>
                      </div>
                    </td>
                    <td className="px-3 text-center align-middle">
                      <div className="flex items-center bg-[#FEEDCC] py-[2px] px-2 cursor-pointer rounded-full inline-flex gap-1.5">
                        <div className="h-[6px] w-[6px] rounded-full bg-[#E08900]"></div>
                        <p className="font-medium text-[11px] text-[#825C00]">Unfulfilled</p>
                      </div>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">11 items</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Standard Shipping</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Store pickup</td>
                  </tr>

                  <tr>
                    <td className="px-3 py-2.5">
                      <label className="relative flex items-center cursor-pointer">
                        <input type="checkbox" className="peer sr-only" />
                        <span className="h-4 w-4 rounded-[3px] border border-[#C9CCCF] peer-checked:border-[#D92F22] peer-checked:bg-[#D92F22]"></span>

                        <svg className="absolute left-[2px] top-[2px] h-3 w-3 text-white opacity-0 peer-checked:opacity-100" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="3">
                          <path d="M4 10l4 4 8-8" />
                        </svg>
                      </label>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] font-medium whitespace-nowrap text-center">
                      <Link to="/orders/details" className="hover:text-[#D92F22] transition-colors"> CP #1064</Link>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Tuesday at 11:19 am</td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] whitespace-nowrap text-center">Gathish Abraham</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Draft Orders</td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] font-medium whitespace-nowrap text-center">$214.39</td>
                    <td className="px-3 text-center align-middle">
                      <div className="flex items-center bg-[#E4E5E7] py-[2px] px-2 cursor-pointer rounded-full inline-flex gap-1.5">
                        <div className="h-[6px] w-[6px] rounded-full bg-[#5C5F62]"></div>
                        <p className="font-medium text-[11px] text-[#303030]">Paid</p>
                      </div>
                    </td>
                    <td className="px-3 text-center align-middle">
                      <div className="flex items-center bg-[#FEEDCC] py-[2px] px-2 cursor-pointer rounded-full inline-flex gap-1.5">
                        <div className="h-[6px] w-[6px] rounded-full bg-[#E08900]"></div>
                        <p className="font-medium text-[11px] text-[#825C00]">Unfulfilled</p>
                      </div>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">11 items</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Standard Shipping</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Store pickup</td>
                  </tr>

                  <tr>
                    <td className="px-3 py-2.5">
                      <label className="relative flex items-center cursor-pointer">
                        <input type="checkbox" className="peer sr-only" />
                        <span className="h-4 w-4 rounded-[3px] border border-[#C9CCCF] peer-checked:border-[#D92F22] peer-checked:bg-[#D92F22]"></span>

                        <svg className="absolute left-[2px] top-[2px] h-3 w-3 text-white opacity-0 peer-checked:opacity-100" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="3">
                          <path d="M4 10l4 4 8-8" />
                        </svg>
                      </label>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] font-medium whitespace-nowrap text-center">
                      <Link to="/orders/details" className="hover:text-[#D92F22] transition-colors"> CP #1064</Link>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Tuesday at 11:19 am</td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] whitespace-nowrap text-center">Gathish Abraham</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Draft Orders</td>
                    <td className="px-3 py-2.5 text-xs text-[#202223] font-medium whitespace-nowrap text-center">$214.39</td>
                    <td className="px-3 text-center align-middle">
                      <div className="flex items-center bg-[#E4E5E7] py-[2px] px-2 cursor-pointer rounded-full inline-flex gap-1.5">
                        <div className="h-[6px] w-[6px] rounded-full bg-[#5C5F62]"></div>
                        <p className="font-medium text-[11px] text-[#303030]">Paid</p>
                      </div>
                    </td>
                    <td className="px-3 text-center align-middle">
                      <div className="flex items-center bg-[#FEEDCC] py-[2px] px-2 cursor-pointer rounded-full inline-flex gap-1.5">
                        <div className="h-[6px] w-[6px] rounded-full bg-[#E08900]"></div>
                        <p className="font-medium text-[11px] text-[#825C00]">Unfulfilled</p>
                      </div>
                    </td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">11 items</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Standard Shipping</td>
                    <td className="px-3 py-2.5 text-xs text-[#5C5F62] whitespace-nowrap text-center">Store pickup</td>
                  </tr>
                </tbody>
              </table>
              <button className="py-3 px-10 flex items-center cursor-pointer">
                <Icon name="chevron-right" className="h-3 text-[#5C5F62]" />
                <span className="text-xs text-[#5C5F62] pl-2">1-50</span>
              </button>
            </div>
          </div>
        </main>
    </>
  );
}
