import { useMemo, useState } from "react";
import { useLocation } from "react-router";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

import Icon from "../../components/shared/Icon";
import { useToast } from "../../components/shared/Toast";

const DEFAULT_PAGE_NAME = "Privacy Policy";

const DEFAULT_CONTENT = `
  <h2>1. Introduction</h2>
  <p>
    At Charles Prints, we value your privacy and are committed to protecting
    your personal information. This Privacy Policy explains what information
    we collect, how we use it, and the steps we take to keep it safe.
  </p>

  <h2>2. Information We Collect</h2>
  <p>We may collect the following types of information:</p>
  <ul>
    <li>Personal details (name, email address, phone number, shipping address)</li>
    <li>Account information (username, password, preferences)</li>
    <li>Payment information (processed securely via third-party providers)</li>
    <li>Browsing and order history (to improve your shopping experience)</li>
  </ul>

  <h2>3. How We Use Your Information</h2>
  <p>We use your information to:</p>
  <ul>
    <li>Process and deliver your orders</li>
    <li>Communicate with you about your account and purchases</li>
    <li>Improve our website and services</li>
    <li>Send marketing communications (only if you opt in)</li>
  </ul>

  <h2>4. Sharing Your Information</h2>
  <p>
    We do not sell, trade, or rent your personal information to third parties.
    We may share your information with trusted service providers who help us
    operate our business, such as payment processors and shipping companies.
  </p>

  <h2>5. Security</h2>
  <p>
    We take reasonable measures to protect your personal information from
    unauthorised access, use, or disclosure.
  </p>

  <h2>6. Changes to This Policy</h2>
  <p>
    We may update this Privacy Policy from time to time. Any changes will be
    posted on this page with the updated effective date.
  </p>
`;

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    ["link", "image"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ align: [] }],
    ["blockquote", "code-block"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "color",
  "background",
  "link",
  "image",
  "list",
  "bullet",
  "indent",
  "align",
  "blockquote",
  "code-block",
];

export default function LeagelPolicyEditiorpage() {
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();

  const editPage = location.state?.page || null;

  const initialTitle = editPage?.title || DEFAULT_PAGE_NAME;
  const initialContent = editPage?.content || DEFAULT_CONTENT;
  const initialStatus = editPage?.status || "Published";
  const initialUpdated = editPage?.updatedAt || "12 Aug 2026, 10:24 AM";

  const [status, setStatus] = useState(initialStatus);
  const [content, setContent] = useState(initialContent);
  const [isSaving, setIsSaving] = useState(false);

  const characterCount = useMemo(() => {
    if (typeof document === "undefined") return 0;
    const div = document.createElement("div");
    div.innerHTML = content;
    return div.textContent?.length || 0;
  }, [content]);

  const handleReset = () => {
    setStatus(initialStatus);
    setContent(initialContent);
  };

  const handleSave = () => {
    setIsSaving(true);

    const payload = { title: initialTitle, status, content };
    console.log("Save legal page:", payload);

    setTimeout(() => {
      setIsSaving(false);
      toast.success("Page saved successfully");
    }, 400);
  };

  const handlePreview = () => {
    console.log("Preview:", { title: initialTitle, content });
    toast.info("Preview is not available yet");
  };

  return (
    <>
      <main className="flex-1 p-3 sm:p-4 lg:p-6 bg-[#F8FAFC] flex flex-col gap-6 sm:gap-8 min-w-0">
        {/* =========================
            PAGE HEADER
        ========================= */}
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
          <div>
            <p className="font-bold text-[20px] leading-7 tracking-[-0.5px] lg:text-[24px] lg:leading-8 lg:tracking-[-0.6px] text-[#0F172A]">
              {initialTitle}
            </p>

            <p className="mt-1 text-xs text-[#64748B]">
              Update your store's legal page content. This will be shown on the storefront.
            </p>
          </div>

          {/* Right Actions */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Last Updated */}
            <div className="mr-2 flex items-center gap-2">
              <Icon name="history" className="w-4 h-4 text-[#71849e] shrink-0" />

              <div className="flex flex-col">
                <span className="text-[11px] leading-4 text-[#94A3B8]">Last updated</span>
                <span className="text-xs font-semibold text-[#334155]">{initialUpdated}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handlePreview}
              className="h-9 inline-flex items-center justify-center gap-2 border border-[#D1D5DB] rounded-[8px] bg-white px-4 text-xs font-medium text-[#374151] hover:bg-[#F8FAFC]"
            >
              <Icon name="eye" className="w-3.5 h-3.5" />
              Preview
            </button>

            <button
              type="button"
              onClick={handleSave}
              disabled={isSaving}
              className="h-9 inline-flex items-center justify-center gap-2 border border-[#EA1D2D] bg-[#EA1D2D] rounded-[8px] px-4 text-xs font-medium text-white disabled:opacity-60"
            >
              <Icon name="save" className="w-3.5 h-3.5" />
              {isSaving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>

        {/* =========================
            POLICY CARD
        ========================= */}
        <div className="border border-[#E1E3E5] rounded-[8px] bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.08)] overflow-hidden">
          <div className="flex items-center justify-between px-4 pt-4 sm:px-5">
            <p className="font-bold text-[11px] leading-4 tracking-[0.55px] text-[#64748B]">
              PAGE CONTENT
            </p>

            <div className="relative">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="appearance-none h-8 pl-3 pr-9 text-xs font-medium text-[#334155] border border-[#E2E8F0] rounded-[8px] bg-[#F8FAFC] outline-none cursor-pointer"
              >
                <option value="Published">Published</option>
                <option value="Draft">Draft</option>
              </select>

              <Icon
                name="chevron-down"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#64748B] pointer-events-none"
              />
            </div>
          </div>

          {/* Content Editor */}
          <div className="mt-4 px-4 sm:px-5 pb-4 sm:pb-5">
            <label className="font-bold text-xs text-[#27272A]">Content</label>

            <div className="mt-1.5 border border-[#D1D5DB] rounded-[8px] overflow-hidden">
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                modules={modules}
                formats={formats}
                placeholder="Write your policy content..."
              />

              <div className="flex h-9 items-center justify-between border-t border-[#E5E7EB] bg-[#F8FAFC] px-3 text-[11px] text-[#94A3B8]">
                <span>HTML</span>
                <span>{characterCount.toLocaleString()} characters</span>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex items-center justify-end gap-2.5 border-t border-[#E2E8F0]/80 px-4 py-4 sm:px-5">
            <button
              type="button"
              onClick={handleReset}
              className="h-9 inline-flex items-center justify-center gap-2 border border-[#D1D5DB] rounded-[8px] bg-white px-4 text-xs font-medium text-[#374151] hover:bg-[#F8FAFC]"
            >
              <Icon name="rotate-ccw" className="w-3.5 h-3.5" />
              Reset
            </button>

            <button
              type="button"
              onClick={handleSave}
              disabled={isSaving}
              className="h-9 inline-flex items-center justify-center gap-2 border border-[#EA1D2D] bg-[#EA1D2D] rounded-[8px] px-4 text-xs font-medium text-white disabled:opacity-60"
            >
              <Icon name="save" className="w-3.5 h-3.5" />
              {isSaving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>
      </main>

      {/* =========================
          QUILL OVERRIDES
          Matches project's text sizing / color tokens
      ========================= */}
      <style>{`
        .ql-toolbar.ql-snow {
          border: 0 !important;
          border-bottom: 1px solid #E5E7EB !important;
          padding: 10px 12px !important;
          background: #F8FAFC;
        }

        .ql-container.ql-snow {
          border: 0 !important;
          font-family: inherit;
        }

        .ql-editor {
          min-height: 420px;
          padding: 20px 16px !important;
          color: #334155;
          font-size: 12px;
          line-height: 1.7;
        }

        .ql-editor h1,
        .ql-editor h2,
        .ql-editor h3 {
          color: #0F172A;
          font-weight: 700;
        }

        .ql-editor h2 {
          margin-top: 18px;
          margin-bottom: 8px;
          font-size: 15px;
        }

        .ql-editor p {
          margin-bottom: 12px;
        }

        .ql-editor ul,
        .ql-editor ol {
          margin-bottom: 16px;
          padding-left: 22px;
        }

        .ql-snow .ql-picker {
          color: #64748B;
        }

        .ql-snow .ql-stroke {
          stroke: #64748B;
        }

        .ql-snow .ql-fill {
          fill: #64748B;
        }

        .ql-snow button:hover .ql-stroke,
        .ql-snow button.ql-active .ql-stroke {
          stroke: #EA1D2D;
        }

        .ql-snow button:hover .ql-fill,
        .ql-snow button.ql-active .ql-fill {
          fill: #EA1D2D;
        }

        @media (max-width: 640px) {
          .ql-toolbar.ql-snow {
            overflow-x: auto;
            white-space: nowrap;
          }

          .ql-editor {
            min-height: 320px;
            padding: 16px 12px !important;
          }
        }
      `}</style>
    </>
  );
}
