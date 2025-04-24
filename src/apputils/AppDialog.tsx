import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useEffect } from "react";

interface AppDialogInterface {
  start?: "CENTER" | "LEFT";
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
}

function AppDialog({
  start = "CENTER",
  isOpen,
  onClose,
  children,
  title,
}: AppDialogInterface) {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (isOpen) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      body.style.position = "fixed";
      body.style.width = "100%";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
      body.style.position = "";
      body.style.width = "";
    }

    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
      body.style.position = "";
      body.style.width = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`fixed inset-0 z-50 flex items-center ${
            start === "CENTER" ? "justify-center" : "justify-end"
          } bg-black/60 backdrop-blur-md`}
        >
          <motion.div
            initial={
              start === "CENTER"
                ? { opacity: 0, scale: 0.9 }
                : { opacity: 0, x: 100 }
            }
            animate={
              start === "CENTER"
                ? { opacity: 1, scale: 1 }
                : { opacity: 1, x: 0 }
            }
            exit={
              start === "CENTER"
                ? { opacity: 0, scale: 0.9 }
                : { opacity: 0, x: 100 }
            }
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`${
              start === "CENTER"
                ? "min-w-[20vw] min-h-[25vh] rounded"
                : "h-full min-w-[22vw] "
            } bg-background shadow-2xl overflow-hidden flex flex-col`}
          >
            <div className="p-3 bg-foreground/5 flex items-center justify-between border-b border-foreground/10">
              <p className="text-base font-semibold text-foreground">{title}</p>
              <button
                onClick={onClose}
                className="w-7 h-7 hover:bg-foreground/10 rounded-full flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 text-sm text-foreground/80  h-full">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AppDialog;
