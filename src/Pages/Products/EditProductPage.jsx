import Icon from "../../components/shared/Icon";

export default function EditProductPage() {
  return (
    <>
      {/* Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-6 bg-[#F8FAFC] flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <Icon name="tag" className="w-4 h-4 text-[#52525B] shrink-0" />
            <Icon name="chevron-right" className="w-3 text-[#A1A1AA] shrink-0" />
            <p className="font-bold text-[20px] leading-7 tracking-[-0.5px] lg:text-[24px] lg:leading-8 lg:tracking-[-0.6px] text-[#0F172A]">Edit product</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 min-w-0">
              <div className="border border-[#E1E3E5] rounded-[8px] bg-white p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.08)]">
                {/* Title */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-bold text-xs text-[#27272A]">Title</label>
                  <input type="text" value="Heavy Tee - Box Fit 280GSM" className="w-full h-11 border border-[#D4D4D8] rounded-[8px] px-3 py-2 text-xs text-[#303030] outline-none" />
                </div>
              </div>

              <div className="border border-[#E1E3E5] rounded-[8px] bg-white p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.08)] mt-4">
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
                    <textarea className="w-full h-[140px] resize-none p-4 text-sm text-[#374151] outline-none">
The Heavy Tee 280GSM is engineered for premium streetwear drops and high-density screen printing or direct-to-garment (DTG) artwork. Crafted from 100% combed ringspun Australian cotton with a heavyweight 280 GSM fabric density, pre-shrunk to retain boxy silhouette after commercial laundry wash cycles.

Features 1-inch neck ribbing with twin-needle hem stitching and relaxed dropped shoulders for an authentic streetwear drape.</textarea
                    >
                  </div>
                </div>
              </div>

              <div className="border border-[#E1E3E5] rounded-[8px] bg-white p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.08)] mt-4">
                <p className="font-bold text-xs text-[#27272A]">Media</p>

                <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="relative w-full aspect-[150/137] rounded-[8px] overflow-hidden border border-[#E4E4E7] bg-[#111827]">
                    <img src="/assets/black-shirt.jpg" alt="Black Variant" className="w-full h-full object-cover" />

                    <span className="absolute bottom-3 left-3 text-[10px] leading-4 text-white bg-black/70 rounded py-[2px] px-[6px] rounded inline-flex"> 100x1024 </span>
                  </div>

                  <div className="relative w-full aspect-[150/137] rounded-[8px] overflow-hidden border border-[#E4E4E7] bg-[#111827]">
                    <img src="/assets/white-shirt.jpg" alt="White Variant" className="w-full h-full object-cover" />

                    <span className="absolute bottom-3 left-3 text-[10px] leading-4 text-white bg-black/70 rounded py-[2px] px-[6px] rounded inline-flex"> White Variant </span>
                  </div>

                  <div className="relative w-full aspect-[150/137] rounded-[8px] overflow-hidden border border-[#E4E4E7] bg-[#111827]">
                    <img src="/assets/green-shirt.jpg" alt="Forest Green" className="w-full h-full object-cover" />

                    <span className="absolute bottom-3 left-3 text-[10px] leading-4 text-white bg-black/70 rounded py-[2px] px-[6px] rounded inline-flex"> Forest Green </span>
                  </div>

                  <button type="button" onclick="document.getElementById('mediaUpload').click()" className="w-full aspect-[150/137] rounded-[8px] border-2 border-dashed border-[#D1D5DB] flex flex-col items-center justify-center gap-1 text-[#71717A] hover:border-[#A1A1AA]">
                    <input type="file" id="mediaUpload" className="hidden" accept="image/*,video/*,.glb,.gltf" multiple />

                    <Icon name="plus" className="w-6 h-6" />

                    <span className="text-xs leading-3.5 text-center px-1 text-[#374151] font-semibold">
                      Upload more<br />
                      <span className="text-[#9CA3AF] font-normal text-[10px]">PNG, JPG or WEBP</span>
                    </span>
                  </button>
                </div>
              </div>

              <div className="border border-[#E1E3E5] rounded-[8px] bg-white p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.08)] mt-4">
                <p className="font-bold text-xs text-[#27272A]">Category</p>

                <div className="relative mt-1.5">
                  <select className="w-full appearance-none border border-[#D1D5DB] rounded-[8px] bg-white pl-3 pr-16 py-2 text-xs text-[#334155] outline-none cursor-pointer">
                    <option value="apparel-tees" selected>Apparel &gt; Men's T-Shirts &amp; Tops</option>
                  </select>

                  <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5 pointer-events-none">
                    <Icon name="chevron-down" className="w-3.5 h-3.5 text-[#6B7280]" />
                    <Icon name="arrow-up-down" className="w-3.5 h-3.5 text-[#9CA3AF]" />
                  </div>
                </div>

                <div className="mt-1.5 text-[11px] leading-4 text-[#71717A]">Determines tax rates and adds metafields to improve search, filters, and cross-channel sales</div>
              </div>

              <div className="border border-[#E1E3E5] rounded-[8px] bg-white p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.08)] mt-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-bold text-xs text-[#27272A]">Pricing</p>
                  <span className="text-[11px] leading-4 font-medium text-[#166534] bg-[#A7F3D0] border border-[#A7F3D0] rounded-full px-2 py-0.5">Margin: 39.1% | Profit: $7.40/unit</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="" className="text-xs text-[#3F3F46]">Cost Price</label>

                    <div className="relative mt-1">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[#6B7280]">$</span>
                      <input type="number" step="0.01" min="0" value="11.50" className="w-full border border-[#D1D5DB] rounded-[8px] bg-white pl-7 pr-3 py-2 text-xs text-[#334155] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="" className="text-xs text-[#3F3F46]">Sale Price</label>

                    <div className="relative mt-1">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[#6B7280]">$</span>
                      <input type="number" step="0.01" min="0" value="18.90" className="w-full border border-[#D1D5DB] rounded-[8px] bg-white pl-7 pr-3 py-2 text-xs text-[#334155] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-[#E1E3E5] rounded-[8px] bg-white p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.08)] mt-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-bold text-[#27272A]">Sizes</p>
                  <span className="text-[11px] leading-4 text-[#71717A]">6 active sizes</span>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="w-8 h-8 flex items-center justify-center rounded-[6px] bg-[#18181B] text-white text-xs font-semibold">S</span>
                  <span className="w-8 h-8 flex items-center justify-center rounded-[6px] bg-[#18181B] text-white text-xs font-semibold">M</span>
                  <span className="w-8 h-8 flex items-center justify-center rounded-[6px] bg-[#18181B] text-white text-xs font-semibold">L</span>
                  <span className="w-8 h-8 flex items-center justify-center rounded-[6px] bg-[#18181B] text-white text-xs font-semibold">XL</span>
                  <span className="h-8 px-2.5 flex items-center justify-center rounded-[6px] bg-[#18181B] text-white text-xs font-semibold">2XL</span>
                  <span className="h-8 px-2.5 flex items-center justify-center rounded-[6px] bg-[#18181B] text-white text-xs font-semibold">3XL</span>

                  <button type="button" className="flex items-center gap-1.5 text-xs font-medium text-[#DC2626] cursor-pointer ml-1 border border-[#FCA5A5] border-dashed py-1 px-2 rounded">
                    <Icon name="plus" className="w-3.5 h-3.5 shrink-0" />
                    <span>Add size</span>
                  </button>
                </div>
              </div>

              <div className="border border-[#E1E3E5] rounded-[8px] bg-white p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.08)] mt-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-bold text-[#27272A]">Colors</p>
                  <span className="text-[11px] leading-4 text-[#71717A]">3 core catalog colors</span>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="h-8 pl-2 pr-3 flex items-center gap-1.5 rounded-full border border-[#D4D4D8] bg-white text-xs text-[#3F3F46]">
                    <span className="w-3.5 h-3.5 rounded-full bg-black"></span>
                    Black
                  </span>
                  <span className="h-8 pl-2 pr-3 flex items-center gap-1.5 rounded-full border border-[#D4D4D8] bg-white text-xs text-[#3F3F46]">
                    <span className="w-3.5 h-3.5 rounded-full bg-white border border-[#D4D4D8]"></span>
                    White
                  </span>
                  <span className="h-8 pl-2 pr-3 flex items-center gap-1.5 rounded-full border border-[#D4D4D8] bg-white text-xs text-[#3F3F46]">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#2F5D3F]"></span>
                    Forest Green
                  </span>

                  <button type="button" className="flex items-center gap-1.5 text-xs font-medium text-[#DC2626] cursor-pointer ml-1 border border-[#FCA5A5] border-dashed py-1 px-2 rounded">
                    <Icon name="plus" className="w-3.5 h-3.5 shrink-0" />
                    <span>Add color</span>
                  </button>
                </div>
              </div>

              <div className="border border-[#E1E3E5] rounded-[8px] bg-white p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.08)] mt-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-bold text-[#27272A]">Quantity</p>
                  <span className="text-[11px] leading-4 font-medium text-[#166534] bg-[#A7F3D0] border border-[#BBF7D0] rounded-full px-2 py-0.5"> In Stock </span>
                </div>

                <div className="flex items-center gap-2 text-[#3F3F46] border border-[#E4E4E7] rounded-[4px] px-2 py-1  focus:ring-1 focus:ring-[#DC2626] rounded-[8px] py-1 px-2">
                  <Icon name="package" className="w-4 h-4 shrink-0 text-[#71717A]" />

                  <div className="flex items-center gap-1">
                    <input type="number" value="480" min="0" className="w-20 text-xs text-[#3F3F46] focus:outline-none" />
                    <span className="text-xs">units</span>
                  </div>
                </div>
              </div>

              <div className="border border-[#E1E3E5] rounded-[8px] bg-white p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.08)] mt-4">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-bold text-xs text-[#27272A]">Search engine listing</p>
                  <button type="button" className="text-[#6B7280] hover:text-[#334155] cursor-pointer shrink-0">
                    <Icon name="pencil" className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="mt-2 flex flex-col gap-0.5 border border-[#E5E7EB] rounded-[8px] p-3">
                  <p className="text-xs text-[#6B7280] truncate">https://charlesprints.com.au/products/heavy-tee-box-fit-280gsm</p>
                  <p className="text-sm text-[#1D4ED8] truncate">Heavy Tee - Box Fit 280GSM | Custom Blank Apparel &amp; Print - Charles Prints</p>
                  <p className="text-xs text-[#4B5563] leading-4">Shop wholesale Heavy Tee Box Fit 280GSM. 100% combed Australian cotton, dropped shoulder relaxed fit. Perfect for DTG and screen printing in Sydney.</p>
                </div>
              </div>
            </div>
            <div className="min-w-0">
              <div className="border border-[#E1E3E5] rounded-[8px] bg-white p-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.08)]">
                <p className="font-bold text-xs text-[#27272A]">Status</p>

                <div className="relative mt-1.5">
                  <select className="w-full appearance-none border border-[#D1D5DB] rounded-[8px] bg-white pl-3 pr-16 py-2 text-xs text-[#334155] outline-none cursor-pointer">
                    <option value="active" selected>Active</option>
                    <option value="draft">Draft</option>
                    <option value="archived">Archived</option>
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
                      <option value="tshirt-heavyweight" selected>T-Shirt / Heavyweight Blank</option>
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
                      <option value="as-colour" selected>AS Colour / Charles Blanks</option>
                    </select>

                    <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5 pointer-events-none">
                      <Icon name="chevron-down" className="w-3.5 h-3.5 text-[#6B7280]" />
                      <Icon name="arrow-up-down" className="w-3.5 h-3.5 text-[#9CA3AF]" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <label className="text-xs text-[#3F3F46]">Collections</label>
                    <button type="button" className="text-[11px] font-medium text-[#EA3829] hover:text-[#c92e22]">+ Add</button>
                  </div>

                  <div className="w-full p-1.5 flex flex-col gap-1.5">
                    <span className="w-fit flex items-center gap-1 bg-[#F3F4F6] px-2 py-1 rounded-[4px] text-xs text-[#374151] border border-[#E5E7EB]">
                      Streetwear Blanks
                      <Icon name="x" className="w-3 h-3 text-[#71717Z] cursor-pointer" />
                    </span>

                    <span className="w-fit flex items-center gap-1 bg-[#F3F4F6] px-2 py-1 rounded-[4px] text-xs text-[#374151] border border-[#E5E7EB]">
                      Best Sellers 2026
                      <Icon name="x" className="w-3 h-3 text-[#71717Z] cursor-pointer" />
                    </span>

                    <span className="w-fit flex items-center gap-1 bg-[#F3F4F6] px-2 py-1 rounded-[4px] text-xs text-[#374151] border border-[#E5E7EB]">
                      Screen Print Ready
                      <Icon name="x" className="w-3 h-3 text-[#71717Z] cursor-pointer" />
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="text-xs text-[#3F3F46]">Tags</label>
                    <button type="button" className="text-[11px] font-medium text-[#EA3829] hover:text-[#c92e22]">+ Add</button>
                  </div>
                  <div className="w-full p-1.5 flex flex-wrap gap-1.5">
                    <span className="flex items-center gap-1 bg-[#FEF2F2] px-2 py-[5px] rounded-full text-xs leading-none text-[#B91C1C] border border-[#FECACA]">
                      heavyweight
                      <Icon name="x" className="w-3 h-3 text-[#B42318]/70 cursor-pointer" />
                    </span>

                    <span className="flex items-center gap-1 bg-[#FEF2F2] px-2 py-[5px] rounded-full text-xs leading-none text-[#B91C1C] border border-[#FECACA]">
                      280gsm
                      <Icon name="x" className="w-3 h-3 text-[#B42318]/70 cursor-pointer" />
                    </span>

                    <span className="flex items-center gap-1 bg-[#FEF2F2] px-2 py-[5px] rounded-full text-xs leading-none text-[#B91C1C] border border-[#FECACA]">
                      box-fit
                      <Icon name="x" className="w-3 h-3 text-[#B42318]/70 cursor-pointer" />
                    </span>

                    <span className="flex items-center gap-1 bg-[#FEF2F2] px-2 py-[5px] rounded-full text-xs leading-none text-[#B91C1C] border border-[#FECACA]">
                      dtg-optimized
                      <Icon name="x" className="w-3 h-3 text-[#B42318]/70 cursor-pointer" />
                    </span>

                    <span className="flex items-center gap-1 bg-[#FEF2F2] px-2 py-[5px] rounded-full text-xs leading-none text-[#B91C1C] border border-[#FECACA]">
                      100-cotton
                      <Icon name="x" className="w-3 h-3 text-[#B42318]/70 cursor-pointer" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="bg-[#DC2626] py-2.5 px-6 rounded-[8px] flex items-center justify-center gap-2 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
              <Icon name="check" className="w-3.5 h-3.5 text-white" />
              <span className="text-xs font-medium leading-none text-white">Save Changes</span>
            </button>
          </div>
        </main>
    </>
  );
}
