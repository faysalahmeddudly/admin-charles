import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";
import { CheckCircle2, XCircle, AlertTriangle, Info, X } from "lucide-react";

const ToastContext = createContext(null);

const VARIANTS = {
  success: {
    icon: CheckCircle2,
    className: "border-emerald-200 bg-emerald-50 text-emerald-700",
    iconClassName: "text-emerald-500",
  },
  error: {
    icon: XCircle,
    className: "border-red-200 bg-red-50 text-red-700",
    iconClassName: "text-red-500",
  },
  warning: {
    icon: AlertTriangle,
    className: "border-amber-200 bg-amber-50 text-amber-700",
    iconClassName: "text-amber-500",
  },
  info: {
    icon: Info,
    className: "border-sky-200 bg-sky-50 text-sky-700",
    iconClassName: "text-sky-500",
  },
};

const DEFAULT_DURATION = 4000;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const timers = useRef(new Map());

  const dismissToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));

    const timeoutId = timers.current.get(id);
    if (timeoutId) {
      clearTimeout(timeoutId);
      timers.current.delete(id);
    }
  }, []);

  const showToast = useCallback(
    (message, options = {}) => {
      const { variant = "info", title, duration = DEFAULT_DURATION } = options;
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

      setToasts((prev) => [...prev, { id, message, title, variant }]);

      if (duration !== Infinity) {
        const timeoutId = setTimeout(() => dismissToast(id), duration);
        timers.current.set(id, timeoutId);
      }

      return id;
    },
    [dismissToast],
  );

  const toast = useMemo(
    () => ({
      show: showToast,
      success: (message, options) => showToast(message, { ...options, variant: "success" }),
      error: (message, options) => showToast(message, { ...options, variant: "error" }),
      warning: (message, options) => showToast(message, { ...options, variant: "warning" }),
      info: (message, options) => showToast(message, { ...options, variant: "info" }),
      dismiss: dismissToast,
    }),
    [showToast, dismissToast],
  );

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <ToastViewport toasts={toasts} onDismiss={dismissToast} />
    </ToastContext.Provider>
  );
}

function ToastViewport({ toasts, onDismiss }) {
  if (toasts.length === 0) return null;

  return (
    <div className="pointer-events-none fixed right-5 top-5 z-[100] flex w-full max-w-sm flex-col gap-2.5">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onDismiss={onDismiss} />
      ))}
    </div>
  );
}

function ToastItem({ toast, onDismiss }) {
  const { icon: Icon, className, iconClassName } = VARIANTS[toast.variant] || VARIANTS.info;

  return (
    <div
      role="alert"
      className={`app-toast-enter pointer-events-auto flex items-start gap-3 rounded-xl border px-4 py-3 text-sm font-medium shadow-lg backdrop-blur-sm ${className}`}
    >
      <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${iconClassName}`} />
      <div className="min-w-0 flex-1">
        {toast.title ? <p className="font-semibold">{toast.title}</p> : null}
        <p className="break-words leading-snug">{toast.message}</p>
      </div>
      <button
        type="button"
        onClick={() => onDismiss(toast.id)}
        className="shrink-0 rounded-md p-0.5 text-current/70 transition hover:text-current"
        aria-label="Dismiss notification"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
}
