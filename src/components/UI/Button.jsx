function Button({ children, onClick, variant = "primary" }) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors duration-300";

  const variants = {
    primary: "bg-[#073D2B] text-white",
    secondary:
      "border border-[#073D2B] bg-transparent text-[#073D2B]",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;
