import Icon from "../../components/shared/Icon";

export default function AddProductPage() {
  return (
    <>
      {/* Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-6 bg-[#F8FAFC] flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <Icon name="tag" className="w-4 h-4 text-[#52525B] shrink-0" />
            <Icon name="chevron-right" className="w-3 text-[#A1A1AA] shrink-0" />
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
                        <Icon name="sparkles" className="w-3 h-3" />
                      </button>

                      <div className="h-5 w-px bg-[#E5E7EB] ml-1.5 shrink-0"></div>

                      <div className="relative inline-flex items-center shrink-0">
                        <select className="appearance-none text-xs font-medium text-[#374151] bg-transparent outline-none cursor-pointer pr-5 px-1.5">
                          <option>Paragraph</option>
                        </select>

                        <Icon name="chevron-down" className="absolute right-0 w-3 h-3 text-[#6B7280] pointer-events-none stroke-[2]" />
                      </div>

                      <div className="h-5 w-px bg-[#E5E7EB] mx-1.5 shrink-0"></div>

                      <button className="font-bold text-xs mr-1.5 shrink-0">B</button>
                      <button className="italic text-xs mr-1.5 shrink-0">I</button>
                      <button className="underline text-xs mr-1.5 shrink-0">U</button>

                      <div className="relative inline-flex items-center shrink-0">
                        <select className="appearance-none text-xs font-bold text-[#374151] bg-transparent outline-none cursor-pointer pr-3">
                          <option>A</option>
                        </select>

                        <Icon name="chevron-down" className="absolute right-0 w-3 h-3 text-[#6B7280] pointer-events-none stroke-[2]" />
                      </div>

                      <div className="h-5 w-px bg-[#E5E7EB] mx-1.5 shrink-0"></div>

                      <details className="relative shrink-0">
                        <summary className="list-none flex items-center gap-1 text-xs cursor-pointer">
                          <Icon name="list" className="w-3 h-3" />
                          <Icon name="chevron-down" className="w-2 h-2 stroke-[3]" />
                        </summary>

                        <div className="absolute top-full mt-2 w-[150px] rounded-[8px] border border-[#E5E7EB] bg-white p-1 shadow-md z-10">
                          <button className="flex w-full items-center gap-2 px-2 py-2 text-xs hover:bg-[#F8FAFC]">
                            <Icon name="list" className="w-3 h-3" />
                            Bullet List
                          </button>

                          <button className="flex w-full items-center gap-2 px-2 py-2 text-xs hover:bg-[#F8FAFC]">
                            <Icon name="list-ordered" className="w-3 h-3" />
                            Numbered List
                          </button>
                        </div>
                      </details>

                      <div className="h-5 w-px bg-[#E5E7EB] mx-1.5 shrink-0"></div>

                      <button className="mr-1.5 shrink-0">
                        <Icon name="link" className="w-3 h-3" />
                      </button>

                      <button className="mr-1.5 shrink-0">
                        <Icon name="image" className="w-3 h-3" />
                      </button>

                      <button className="mr-1.5 shrink-0">
                        <Icon name="file-play" className="w-3 h-3" />
                      </button>

                      <button className="mr-1.5 shrink-0">
                        <Icon name="table" className="w-3 h-3" />
                      </button>

                      <button className="shrink-0">
                        <Icon name="ellipsis" className="w-3 h-3" />
                      </button>

                      <button className="ml-auto shrink-0 pl-1.5">
                        <Icon name="chevrons-left-right" className="w-3 h-3" />
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
                    <Icon name="chevron-down" className="w-3.5 h-3.5 text-[#6B7280]" />
                    <Icon name="arrow-up-down" className="w-3.5 h-3.5 text-[#9CA3AF]" />
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
                  <Icon name="plus-circle" className="w-3.5 h-3.5 shrink-0" />
                  <span>Add your product size</span>
                </button>
              </div>

              <div className="border border-[#E1E3E5] rounded-[8px] bg-white p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.08)] mt-4">
                <p className="text-xs text-[#3F3F46] mb-2">Add Color</p>

                <button type="button" className="flex items-center gap-2 text-xs text-[#6B7280] hover:text-[#334155] cursor-pointer">
                  <Icon name="plus-circle" className="w-3.5 h-3.5 shrink-0" />
                  <span>Add color</span>
                </button>
              </div>

              <div className="border border-[#E1E3E5] rounded-[8px] bg-white p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.08)] mt-4">
                <p className="text-xs text-[#3F3F46] mb-2">Add Quantity</p>

                <button type="button" className="flex items-center gap-2 text-xs text-[#6B7280] hover:text-[#334155] cursor-pointer">
                  <Icon name="plus-circle" className="w-3.5 h-3.5 shrink-0" />
                  <span>Add quantity</span>
                </button>
              </div>

              <div className="border border-[#E1E3E5] rounded-[8px] bg-white p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.08)] mt-4">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-bold text-xs text-[#27272A]">Search engine listing</p>
                  <button type="button" className="text-[#6B7280] hover:text-[#334155] cursor-pointer shrink-0">
                    <Icon name="pencil" className="w-3.5 h-3.5" />
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
                    <Icon name="chevron-down" className="w-3.5 h-3.5 text-[#6B7280]" />
                    <Icon name="arrow-up-down" className="w-3.5 h-3.5 text-[#9CA3AF]" />
                  </div>
                </div>
              </div>

              <div className="border border-[#E1E3E5] rounded-[8px] bg-white p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.08)] mt-4 flex flex-col gap-3">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-bold text-xs text-[#27272A]">Product organization</p>
                  <Icon name="circle-alert" className="w-2.5 h-2.5 text-[#A1A1AA] shrink-0" />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-xs text-[#3F3F46]">Type</label>

                  <div className="relative">
                    <select className="w-full appearance-none border border-[#D1D5DB] rounded-[8px] bg-white pl-3 pr-16 py-2 text-xs text-[#334155] outline-none cursor-pointer">
                      <option value="none">None</option>
                    </select>

                    <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5 pointer-events-none">
                      <Icon name="chevron-down" className="w-3.5 h-3.5 text-[#6B7280]" />
                      <Icon name="arrow-up-down" className="w-3.5 h-3.5 text-[#9CA3AF]" />
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
                      <Icon name="chevron-down" className="w-3.5 h-3.5 text-[#6B7280]" />
                      <Icon name="arrow-up-down" className="w-3.5 h-3.5 text-[#9CA3AF]" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-xs text-[#3F3F46]">Collections</label>
                  <div type="button" className="w-full border border-[#D1D5DB] rounded-[8px] bg-white p-1">
                    <button className="flex items-center gap-1 bg-[#F4F4F5] px-2 py-1 rounded-[4px]">
                      <Icon name="circle-plus" className="w-3.5 h-3.5 text-[#71717A] shrink-0" />
                      <span className="text-xs text-[#3F3F46]">Add collections</span>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-xs text-[#3F3F46]">Tags</label>
                  <div type="button" className="w-full border border-[#D1D5DB] rounded-[8px] bg-white p-1">
                    <button className="flex items-center gap-1 bg-[#F4F4F5] px-2 py-1 rounded-[4px]">
                      <Icon name="circle-plus" className="w-3.5 h-3.5 text-[#71717A] shrink-0" />
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
    </>
  );
}
