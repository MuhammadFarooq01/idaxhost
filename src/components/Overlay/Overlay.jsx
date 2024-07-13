const Overlay = ({ isOpen, onClose, zIndex = 40 }) => {
  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[998] min-w-screen max-h-screen w-full h-full  bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ zIndex: zIndex }}
      onClick={onClose}
    />
  );
};

export default Overlay;
