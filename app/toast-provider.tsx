"use client";

import { createContext, useContext, useState, useRef } from "react";
import Toast, { ToastProps } from "./components/Toast";
import { Provider as RadixToastProvider } from "@radix-ui/react-toast";

const DEFAULT_DURATION = 4000;

type ToastContext = {
  openToast: (toast: ToastProps, duration?: number, keepOpen?: boolean) => void;
  closeToast: () => void;
};

const Context = createContext<ToastContext | undefined>(undefined);

export default function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState<ToastProps>({
    message: "",
  });
  const [duration, setDuration] = useState(DEFAULT_DURATION);
  const timerRef = useRef(0);

  const openToast = (
    toast: ToastProps,
    duration?: number,
    keepOpen?: boolean,
  ) => {
    setOpen(false);
    setToast(toast);

    keepOpen
      ? setDuration(9999999)
      : duration
        ? setDuration(duration)
        : setDuration(DEFAULT_DURATION);

    window.clearTimeout(timerRef.current);

    timerRef.current = window.setTimeout(() => {
      setOpen(true);
    }, 100);
  };

  return (
    <Context.Provider value={{ openToast, closeToast: () => setOpen(false) }}>
      <RadixToastProvider duration={duration}>
        {children}
        <Toast open={open} onOpenChange={setOpen} {...toast} />
      </RadixToastProvider>
    </Context.Provider>
  );
}

export const useToast = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error("useToast must be used inside ToastProvider");
  }

  return context;
};
