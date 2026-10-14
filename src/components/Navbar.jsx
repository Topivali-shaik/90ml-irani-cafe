
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/90ml-logo2.png";

const navItems = [
  { label: "Home", to: "/", icon: "⌂" },
  { label: "Menu", to: "/#menu", icon: "♜" },
  { label: "Our Story", to: "/#story", icon: "▤" },
  { label: "Gallery", to: "/#gallery", icon: "▧" },
  { label: "Visit Us", to: "/#visit-us", icon: "♧" },
  { label: "Franchise", to: "/get-franchise", icon: "♙" },
  { label: "Contact", to: "/#contact", icon: "☎" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const franchiseButton =
    "flex items-center justify-center gap-3 rounded-full bg-[#073D2B] px-5 py-3 font-serif text-base text-[#FFF8E9] shadow-md transition-colors duration-300 hover:bg-[#0A5038]";

  return (
    <header
      id="home"
      className="sticky navbar-wave-shadowtop-0 z-50 w-full bg-[#F8F0DF] text-[#073D2B] shadow-[0_14px_24px_rgba(48,30,12,0.28)]"
    >
      {/* Thin brand borders */}
      <div className="h-[3px] bg-[#073D2B]" />
      <div className="h-[2px] bg-[#A43E20]" />

      {/* Header row */}
      <div className="mx-auto flex min-h-[86px] max-w-[1500px] items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:min-h-[100px] lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          aria-label="90ML Irani Cafe home"
          onClick={() => setMenuOpen(false)}
          className="shrink-0"
        >
          <img
            src={logo}
            alt="90ML Irani Cafe"
            className="h-auto w-[105px] object-contain sm:w-[125px] lg:w-[145px]"
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden flex-1 items-center justify-center lg:flex"
        >
          {navItems.slice(0, 6).map((item, index) => (
            <div key={item.label} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 h-10 w-px bg-[#D8C5A5] xl:mx-4" />
              )}

              <Link
                to={item.to}
                className={`flex flex-col items-center gap-1 px-3 py-2 transition-colors xl:px-4 ${
                  index === 0
                    ? "rounded-full bg-[#073D2B] px-6 text-[#FFF8E9]"
                    : "hover:text-[#A43E20]"
                }`}
              >
                <span className="text-xl" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="whitespace-nowrap font-serif text-sm">
                  {item.label}
                </span>
              </Link>
            </div>
          ))}
        </nav>

        {/* Desktop franchise button */}
        <Link
          to="/get-franchise"
          className={`${franchiseButton} hidden shrink-0 lg:flex`}
        >
          Get Franchise <span aria-hidden="true">→</span>
        </Link>

        {/* Mobile franchise button */}
        <Link
          to="/get-franchise"
          className={`${franchiseButton} ml-auto min-h-[46px] shrink-0 px-4 text-sm sm:px-6 sm:text-base lg:hidden`}
        >
          Get Franchise
          <span className="text-lg" aria-hidden="true">→</span>
        </Link>

        {/* Hamburger / close button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className="flex h-[46px] w-[46px] shrink-0 flex-col items-center justify-center gap-[5px] rounded-full border border-[#E1D4BD] bg-[#FFF8E9] shadow-sm transition-transform hover:scale-105 sm:h-[52px] sm:w-[52px] lg:hidden"
        >
          <span
            className={`h-[2px] w-5 bg-[#073D2B] transition-transform ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-5 bg-[#073D2B] transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-5 bg-[#073D2B] transition-transform ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown panel */}
      {menuOpen && (
        <div className="absolute left-0 top-full w-full border-t border-[#E4D7C0] bg-[#F8F0DF] px-4 pb-6 pt-3 shadow-[0_18px_30px_rgba(45,30,12,0.2)] sm:px-6 lg:hidden">

          <nav aria-label="Mobile navigation">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={`flex min-h-[66px] items-center gap-5 px-4 transition-colors ${
                  index === 0
                    ? "rounded-2xl bg-[#E9EBD5]"
                    : "border-b border-[#E5D9C3] hover:bg-[#F0E6D4]"
                }`}
              >
                {/* Text-symbol icon */}
                <span
                  className="flex w-10 shrink-0 items-center justify-center text-[29px] leading-none text-[#073D2B]"
                  aria-hidden="true"
                >
                  {item.icon}
                </span>

                <span className="flex-1 font-serif text-[21px] sm:text-[23px]">
                  {item.label}
                </span>

                <span
                  className="text-[29px] font-light leading-none text-[#073D2B]"
                  aria-hidden="true"
                >
                  ›
                </span>
              </Link>
            ))}
          </nav>

          {/* Bottom franchise CTA */}
          <Link
            to="/#franchise"
            onClick={() => setMenuOpen(false)}
            className={`${franchiseButton} mx-auto mt-5 min-h-[58px] w-full max-w-[520px] text-xl sm:text-2xl`}
          >
            Get Franchise
            <span className="text-2xl" aria-hidden="true">→</span>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
