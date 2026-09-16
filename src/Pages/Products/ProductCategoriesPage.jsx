import Icon from "../../components/shared/Icon";

export default function ProductCategoriesPage() {
  return (
    <>
      {/* Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-6 bg-[#F8FAFC] flex flex-col gap-6 min-w-0">
          <div className="flex items-center justify-between gap-3">
            <p className="font-bold text-[20px] leading-7 tracking-[-0.5px] lg:text-[24px] lg:leading-8 lg:tracking-[-0.6px] text-[#0F172A]">Products</p>

            <button id="addCategoryBtn" type="button" className="bg-[#EA3829] text-white rounded-[8px] py-2 px-3 lg:px-4 flex items-center gap-1 lg:gap-2 shadow-[0_1px_2px_0_rgba(0,0,0,0.2)] hover:bg-[#D92F22] hover:shadow-[0_2px_4px_0_rgba(0,0,0,0.2)] transition-all duration-200 shrink-0">
              <Icon name="plus" className="w-4 h-4 shrink-0" />
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
                      <Icon name="pencil" className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mt-3">
                    <span className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#475569] text-xs rounded-[4px] px-2.5 py-1 border border-[#E2E8F0]/80">
                      Crew Neck
                      <Icon name="x" className="w-3 h-3 text-[#94A3B8] cursor-pointer" />
                    </span>

                    <span className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#475569] text-xs rounded-[4px] px-2.5 py-1 border border-[#E2E8F0]/80">
                      V-Neck
                      <Icon name="x" className="w-3 h-3 text-[#94A3B8] cursor-pointer" />
                    </span>

                    <span className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#475569] text-xs rounded-[4px] px-2.5 py-1 border border-[#E2E8F0]/80">
                      Boxy/Oversized
                      <Icon name="x" className="w-3 h-3 text-[#94A3B8] cursor-pointer" />
                    </span>

                    <button className="text-xs font-medium text-[#EA3829] bg-white rounded rounded-[4px] flex items-center px-2.5 py-1 border border-dashed border-[#FCA5A5]">
                      <Icon name="plus" className="w-3 h-3" />
                      Add
                    </button>
                  </div>
                </div>

                <div className="border border-[#E2E8F0]/90 shadow-[0_1px_2px_0_rgba(0,0,0,0.03)] p-4 bg-white rounded-[8px]">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-semibold text-[13px] leading-4 text-[#1E293B]">Women</p>

                    <button type="button" className="text-[#94A3B8] hover:text-[#334155] cursor-pointer shrink-0">
                      <Icon name="pencil" className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mt-3">
                    <span className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#475569] text-xs rounded-[4px] px-2.5 py-1 border border-[#E2E8F0]/80">
                      Crew Neck
                      <Icon name="x" className="w-3 h-3 text-[#94A3B8] cursor-pointer" />
                    </span>

                    <span className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#475569] text-xs rounded-[4px] px-2.5 py-1 border border-[#E2E8F0]/80">
                      V-Neck
                      <Icon name="x" className="w-3 h-3 text-[#94A3B8] cursor-pointer" />
                    </span>

                    <span className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#475569] text-xs rounded-[4px] px-2.5 py-1 border border-[#E2E8F0]/80">
                      Boxy/Oversized
                      <Icon name="x" className="w-3 h-3 text-[#94A3B8] cursor-pointer" />
                    </span>

                    <button className="text-xs font-medium text-[#EA3829] bg-white rounded rounded-[4px] flex items-center px-2.5 py-1 border border-dashed border-[#FCA5A5]">
                      <Icon name="plus" className="w-3 h-3" />
                      Add
                    </button>
                  </div>
                </div>

                <div className="border border-[#E2E8F0]/90 shadow-[0_1px_2px_0_rgba(0,0,0,0.03)] p-4 bg-white rounded-[8px]">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-semibold text-[13px] leading-4 text-[#1E293B]">Kid's & Youth</p>

                    <button type="button" className="text-[#94A3B8] hover:text-[#334155] cursor-pointer shrink-0">
                      <Icon name="pencil" className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mt-3">
                    <span className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#475569] text-xs rounded-[4px] px-2.5 py-1 border border-[#E2E8F0]/80">
                      Crew Neck
                      <Icon name="x" className="w-3 h-3 text-[#94A3B8] cursor-pointer" />
                    </span>

                    <span className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#475569] text-xs rounded-[4px] px-2.5 py-1 border border-[#E2E8F0]/80">
                      V-Neck
                      <Icon name="x" className="w-3 h-3 text-[#94A3B8] cursor-pointer" />
                    </span>

                    <button className="text-xs font-medium text-[#EA3829] bg-white rounded rounded-[4px] flex items-center px-2.5 py-1 border border-dashed border-[#FCA5A5]">
                      <Icon name="plus" className="w-3 h-3" />
                      Add
                    </button>
                  </div>
                </div>

                <div className="border border-[#E2E8F0]/90 shadow-[0_1px_2px_0_rgba(0,0,0,0.03)] p-4 bg-white rounded-[8px]">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-semibold text-[13px] leading-4 text-[#1E293B]">Unisex Hoodies</p>

                    <button type="button" className="text-[#94A3B8] hover:text-[#334155] cursor-pointer shrink-0">
                      <Icon name="pencil" className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="border border-[#E2E8F0]/90 shadow-[0_1px_2px_0_rgba(0,0,0,0.03)] p-4 bg-white rounded-[8px]">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-semibold text-[13px] leading-4 text-[#1E293B]">Accessories & Totes</p>

                    <button type="button" className="text-[#94A3B8] hover:text-[#334155] cursor-pointer shrink-0">
                      <Icon name="pencil" className="w-3.5 h-3.5" />
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
                    <Icon name="plus" className="w-4 h-4 shrink-0" />
                    <span className="font-semibold text-[11px] lg:text-xs whitespace-nowrap">Add Attributes</span>
                  </button>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="border border-[#E2E8F0]/90 shadow-[0_1px_2px_0_rgba(0,0,0,0.03)] p-4 bg-white rounded-[8px]">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-semibold text-[13px] leading-4 text-[#1E293B]">Fit</p>

                      <button type="button" className="text-[#94A3B8] hover:text-[#334155] cursor-pointer shrink-0">
                        <Icon name="pencil" className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mt-3">
                      <span className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#475569] text-xs rounded-[4px] px-2.5 py-1 border border-[#E2E8F0]/80">
                        Slim Fit
                        <Icon name="x" className="w-3 h-3 text-[#94A3B8] cursor-pointer" />
                      </span>

                      <span className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#475569] text-xs rounded-[4px] px-2.5 py-1 border border-[#E2E8F0]/80">
                        Regular Fit
                        <Icon name="x" className="w-3 h-3 text-[#94A3B8] cursor-pointer" />
                      </span>

                      <span className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#475569] text-xs rounded-[4px] px-2.5 py-1 border border-[#E2E8F0]/80">
                        Relax Fit
                        <Icon name="x" className="w-3 h-3 text-[#94A3B8] cursor-pointer" />
                      </span>

                      <button className="text-xs font-medium text-[#EA3829] bg-white rounded rounded-[4px] flex items-center px-2.5 py-1 border border-dashed border-[#FCA5A5]">
                        <Icon name="plus" className="w-3 h-3" />
                        Add
                      </button>
                    </div>
                  </div>

                  <div className="border border-[#E2E8F0]/90 shadow-[0_1px_2px_0_rgba(0,0,0,0.03)] p-4 bg-white rounded-[8px]">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-semibold text-[13px] leading-4 text-[#1E293B]">Fit</p>

                      <button type="button" className="text-[#94A3B8] hover:text-[#334155] cursor-pointer shrink-0">
                        <Icon name="pencil" className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mt-3">
                      <span className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#475569] text-xs rounded-[4px] px-2.5 py-1 border border-[#E2E8F0]/80">
                        Shorter
                        <Icon name="x" className="w-3 h-3 text-[#94A3B8] cursor-pointer" />
                      </span>

                      <span className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#475569] text-xs rounded-[4px] px-2.5 py-1 border border-[#E2E8F0]/80">
                        Taller
                        <Icon name="x" className="w-3 h-3 text-[#94A3B8] cursor-pointer" />
                      </span>

                      <button className="text-xs font-medium text-[#EA3829] bg-white rounded rounded-[4px] flex items-center px-2.5 py-1 border border-dashed border-[#FCA5A5]">
                        <Icon name="plus" className="w-3 h-3" />
                        Add
                      </button>
                    </div>
                  </div>

                  <div className="border border-[#E2E8F0]/90 shadow-[0_1px_2px_0_rgba(0,0,0,0.03)] p-4 bg-white rounded-[8px]">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-semibold text-[13px] leading-4 text-[#1E293B]">Neckline</p>

                      <button type="button" className="text-[#94A3B8] hover:text-[#334155] cursor-pointer shrink-0">
                        <Icon name="pencil" className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mt-3">
                      <span className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#475569] text-xs rounded-[4px] px-2.5 py-1 border border-[#E2E8F0]/80">
                        Crew Neck
                        <Icon name="x" className="w-3 h-3 text-[#94A3B8] cursor-pointer" />
                      </span>

                      <span className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#475569] text-xs rounded-[4px] px-2.5 py-1 border border-[#E2E8F0]/80">
                        V-Neck
                        <Icon name="x" className="w-3 h-3 text-[#94A3B8] cursor-pointer" />
                      </span>

                      <span className="flex items-center gap-1.5 bg-[#F1F5F9] text-[#475569] text-xs rounded-[4px] px-2.5 py-1 border border-[#E2E8F0]/80">
                        Boxy/Oversized
                        <Icon name="x" className="w-3 h-3 text-[#94A3B8] cursor-pointer" />
                      </span>

                      <button className="text-xs font-medium text-[#EA3829] bg-white rounded rounded-[4px] flex items-center px-2.5 py-1 border border-dashed border-[#FCA5A5]">
                        <Icon name="plus" className="w-3 h-3" />
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

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
            <Icon name="x" className="w-4 h-4 text-[#94A3B8]" />
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
            <Icon name="plus" className="h-4 text-white" />
            <span className="font-bold text-xs text-white">Save Category</span>
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
