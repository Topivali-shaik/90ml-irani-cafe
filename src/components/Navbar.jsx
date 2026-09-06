function Navbar() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto flex h-[90px] w-[86%] max-w-[1200px] items-center justify-between">

        {/* LOGO */}
        <a href="#home">
          <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#F3E2CC]">

            <div className="text-center leading-none">

              <div>
                <span className="font-serif text-[27px] text-[#54270D]">
                  90
                </span>

                <span className="ml-[-2px] text-[10px] font-bold text-[#D85A22]">
                  ml
                </span>
              </div>

              <div className="mt-[4px] text-[5px] tracking-[0.18em] text-[#54270D]">
                IRANI CAFE
              </div>

              <div className="mt-[3px] text-[4px] tracking-[0.12em] text-[#54270D]/70">
                EST. 2025
              </div>

            </div>

          </div>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-9 lg:flex">

          <a
            href="#home"
            className="relative text-[13px] font-medium text-[#D85A22]"
          >
            Home

            <span className="absolute -bottom-[11px] left-0 h-px w-full bg-[#D85A22]" />
          </a>

          <a
            href="#menu"
            className="text-[13px] text-[#F3E2CC] transition hover:text-[#D85A22]"
          >
            Menu
          </a>

          <a
            href="#story"
            className="text-[13px] text-[#F3E2CC] transition hover:text-[#D85A22]"
          >
            Our Story
          </a>

          <a
            href="#gallery"
            className="text-[13px] text-[#F3E2CC] transition hover:text-[#D85A22]"
          >
            Gallery
          </a>

          <a
            href="#contact"
            className="text-[13px] text-[#F3E2CC] transition hover:text-[#D85A22]"
          >
            Contact
          </a>

        </nav>

        {/* CTA */}
        <a
          href="#menu"
          className="hidden rounded-full border border-[#D85A22] px-5 py-3 text-[10px] font-semibold text-[#D85A22] transition hover:bg-[#D85A22] hover:text-white md:block"
        >
          Explore Menu <span className="ml-1">→</span>
        </a>

        {/* MOBILE MENU ICON */}
        <button
          className="text-[#F3E2CC] lg:hidden"
          aria-label="Open menu"
        >
          <span className="block h-[2px] w-6 bg-[#F3E2CC]" />
          <span className="mt-1.5 block h-[2px] w-6 bg-[#F3E2CC]" />
          <span className="mt-1.5 block h-[2px] w-6 bg-[#F3E2CC]" />
        </button>

      </div>
    </header>
  );
}

export default Navbar;