import { useEffect } from "react";

export default function Toast({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed top-24 right-6 z-50 px-6 py-4 rounded-lg backdrop-blur-md border shadow-lg animate-fadeIn
      ${
        type === "success"
          ? "bg-green-500/10 border-green-400 text-green-400"
          : "bg-red-500/10 border-red-400 text-red-400"
      }`}
    >
      {message}
    </div>
  );
}