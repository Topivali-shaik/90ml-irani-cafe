function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#062D27] text-[#F3E2CC]"
    >

      {/* Decorative circle */}
      <div className="absolute -bottom-[250px] -left-[150px] h-[520px] w-[520px] rounded-full border border-[#D85A22]/50" />

      {/* Decorative dots */}
      <div className="absolute right-[10%] top-[22%] h-3 w-3 rounded-full bg-[#D85A22]" />
      <div className="absolute right-[8%] top-[27%] h-2 w-2 rounded-full bg-[#D85A22]" />

      <div className="mx-auto flex min-h-screen w-[86%] max-w-[1200px] items-center">

        {/* LEFT */}
        <div className="relative z-20 w-full pt-20 lg:w-[52%]">

          <div className="mb-6 flex items-center gap-3 text-[10px] font-bold tracking-[0.28em] text-[#D85A22]">

            <span className="h-px w-7 bg-[#D85A22]" />

            AUTHENTIC IRANI CHAI

          </div>

          <h1 className="font-serif text-[48px] font-bold leading-[1.03] sm:text-[58px] lg:text-[60px] xl:text-[66px]">

            A Little Cup.
            <br />

            A Lot of{" "}

            <span className="text-[#D85A22]">
              Tradition.
            </span>

          </h1>

          <p className="mt-7 max-w-[470px] text-[13px] leading-[1.8] text-[#F3E2CC]/75">
            Welcome to 90ml Irani Cafe — where every cup carries
            the warmth, character and timeless charm of an
            authentic Irani café.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#menu"
              className="rounded-full bg-[#D85A22] px-6 py-3.5 text-[11px] font-semibold text-white transition hover:-translate-y-1 hover:bg-[#b94717]"
            >
              Explore Menu ☕
            </a>

            <a
              href="#story"
              className="rounded-full border border-[#F3E2CC]/50 px-6 py-3.5 text-[11px] text-[#F3E2CC] transition hover:bg-[#F3E2CC] hover:text-[#062D27]"
            >
              Our Story →
            </a>

          </div>

          {/* BRAND MARK */}
          <div className="mt-12 flex items-center gap-4">

            <div className="font-serif text-[38px] text-[#D85A22]">
              90
              <span className="text-[15px] text-[#F3E2CC]">
                ml
              </span>
            </div>

            <div className="h-10 w-px bg-[#F3E2CC]/25" />

            <div className="text-[7px] leading-[1.6] tracking-[0.2em]">
              AUTHENTIC
              <br />
              IRANI EXPERIENCE
            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="absolute right-[-100px] top-1/2 hidden h-[650px] w-[650px] -translate-y-1/2 lg:block">

          {/* Orange circle */}
          <div className="absolute left-0 top-[150px] h-[140px] w-[140px] rounded-full bg-[#D85A22]" />

          {/* Image */}
          <div className="absolute right-0 top-0 h-[540px] w-[540px] overflow-hidden rounded-full border-[7px] border-[#D85A22]">

            <img
              src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=1200&q=90"
              alt="Coffee"
              className="h-full w-full object-cover"
            />

          </div>

          {/* Decorative beans */}
          <div className="absolute right-[20px] top-[80px] text-[40px] text-[#D85A22]">
            ◐
          </div>

          <div className="absolute right-[-10px] top-[130px] text-[30px] text-[#D85A22]">
            ◐
          </div>

          <div className="absolute bottom-[70px] left-[50px] text-[35px] text-[#D85A22]">
            ◐
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;