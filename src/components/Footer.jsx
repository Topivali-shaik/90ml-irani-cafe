function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#062D27] px-6 py-20 text-[#F3E2CC]"
    >

      <div className="mx-auto max-w-[1200px]">

        <div className="grid gap-12 md:grid-cols-3">

          {/* BRAND */}
          <div>

            <div className="flex h-[75px] w-[75px] items-center justify-center rounded-full bg-[#F3E2CC]">

              <div className="text-center leading-none">

                <div>
                  <span className="font-serif text-[30px] text-[#54270D]">
                    90
                  </span>

                  <span className="text-[10px] font-bold text-[#D85A22]">
                    ml
                  </span>
                </div>

                <div className="mt-1 text-[5px] tracking-[0.18em] text-[#54270D]">
                  IRANI CAFE
                </div>

              </div>

            </div>

            <p className="mt-6 max-w-[300px] text-[12px] leading-[1.8] text-[#F3E2CC]/55">
              A little cup. A lot of tradition.
              Authentic Irani chai, timeless flavours
              and warm conversations.
            </p>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-[10px] font-bold tracking-[0.2em] text-[#D85A22]">
              QUICK LINKS
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              <a
                href="#home"
                className="text-[12px] text-[#F3E2CC]/65 hover:text-[#D85A22]"
              >
                Home
              </a>

              <a
                href="#menu"
                className="text-[12px] text-[#F3E2CC]/65 hover:text-[#D85A22]"
              >
                Menu
              </a>

              <a
                href="#story"
                className="text-[12px] text-[#F3E2CC]/65 hover:text-[#D85A22]"
              >
                Our Story
              </a>

              <a
                href="#gallery"
                className="text-[12px] text-[#F3E2CC]/65 hover:text-[#D85A22]"
              >
                Gallery
              </a>

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-[10px] font-bold tracking-[0.2em] text-[#D85A22]">
              CONTACT
            </h3>

            <div className="mt-6 flex flex-col gap-5">

              <a
                href="tel:+919000000000"
                className="flex items-center gap-4 text-[12px] text-[#F3E2CC]/65 hover:text-[#D85A22]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F3E2CC]/20">
                  ☎
                </span>

                +91 90000 00000
              </a>

              <a
                href="mailto:hello@90mliranicafe.com"
                className="flex items-center gap-4 text-[12px] text-[#F3E2CC]/65 hover:text-[#D85A22]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F3E2CC]/20">
                  ✉
                </span>

                hello@90mliranicafe.com
              </a>

              <a
                href="#"
                className="flex items-center gap-4 text-[12px] text-[#F3E2CC]/65 hover:text-[#D85A22]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F3E2CC]/20">
                  ◎
                </span>

                90mliranicafe@gmail.com
              </a>

            </div>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="mt-16 h-px bg-[#F3E2CC]/10" />

        {/* COPYRIGHT */}
        <div className="mt-7 flex flex-col justify-between gap-4 text-[10px] text-[#F3E2CC]/35 md:flex-row">

          <p>
            © 2026 90ml Irani Cafe. All rights reserved.
          </p>

          <p>
            Crafted with tradition ☕
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;