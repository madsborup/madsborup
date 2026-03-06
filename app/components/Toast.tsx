import * as RadixToast from "@radix-ui/react-toast";

export const DEFAULT_TOAST_MESSAGES = {
  error: "Something went wrong",
  copyLink: "Copied link",
};

export interface ToastProps extends RadixToast.ToastProps {
  message: string;
}

export default function Toast({ message, ...props }: ToastProps) {
  return (
    <>
      <RadixToast.Root
        className="bg-black rounded-[10px] shadow-lg px-4 py-2 text-sm grid grid-cols-[1fr_max-content] grid-rows-[max-content_max-content] items-center [grid-template-areas:'title_action''description_action'] data-[state=open]:animate-slide-in data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-transform data-[swipe=cancel]:duration-200 data-[swipe=cancel]:ease-out data-[swipe=end]:animate-swipe-out"
        {...props}
        onSwipeStart={(e) => e.preventDefault()}
        onSwipeMove={(e) => e.preventDefault()}
        onSwipeEnd={(e) => e.preventDefault()}
      >
        {message ? (
          <RadixToast.Title className="[grid-area:title] mb-1 font-medium text-gray-100 text-sm">
            {message}
          </RadixToast.Title>
        ) : null}
      </RadixToast.Root>
      <RadixToast.Viewport className="fixed bottom-0 left-1/2 -translate-x-1/2 flex flex-col p-5 gap-3 w-max max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
    </>
  );
}
