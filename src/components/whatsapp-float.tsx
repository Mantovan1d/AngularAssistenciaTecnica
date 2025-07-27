// src/components/whatsapp-float.tsx
export const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5511996183253"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.87 11.87 0 0012 0a11.89 11.89 0 00-10.52 17.5L0 24l6.66-1.5A11.87 11.87 0 0012 24a11.89 11.89 0 008.52-20.52zM12 22a9.93 9.93 0 01-5.12-1.42l-.37-.22-3.95.89.84-3.85-.24-.4A9.94 9.94 0 1112 22zm5.1-7.55c-.28-.14-1.63-.8-1.88-.89s-.44-.14-.63.14-.72.89-.88 1.08-.33.21-.61.07a8.19 8.19 0 01-2.4-1.48 9 9 0 01-1.67-2.07c-.17-.28 0-.43.13-.57s.3-.33.45-.49a1.9 1.9 0 00.3-.49.51.51 0 000-.49c-.07-.14-.61-1.46-.84-2s-.45-.44-.61-.44-.34 0-.52 0a1 1 0 00-.72.33A3 3 0 006.9 9.07a5.27 5.27 0 001.1 3.46 11.62 11.62 0 005.3 4.4c.74.32 1.32.51 1.77.65a4.23 4.23 0 001.94.12 3.23 3.23 0 002.11-1.48 2.66 2.66 0 00.18-1.48c-.07-.14-.25-.21-.53-.35z" />
      </svg>
    </a>
  );
};
