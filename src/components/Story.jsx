function Story() {
  return (
    <section
      id="story"
      className="flex min-h-screen items-center bg-[#F3E2CC] py-24 text-[#062D27]"
    >

      <div className="mx-auto grid w-[86%] max-w-[1200px] items-center gap-16 lg:grid-cols-2">

        {/* IMAGE */}
        <div className="relative">

          <div className="absolute -left-5 -top-5 h-full w-full rounded-[28px] border border-[#D85A22]" />

          <div className="relative h-[520px] overflow-hidden rounded-[28px]">

            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=90"
              alt="Cafe interior"
              className="h-full w-full object-cover"
            />

          </div>

        </div>

        {/* CONTENT */}
        <div>

          <div className="mb-5 flex items-center gap-3 text-[9px] font-bold tracking-[0.25em] text-[#D85A22]">

            <span className="h-px w-7 bg-[#D85A22]" />

            OUR STORY

          </div>

          <h2 className="font-serif text-[42px] font-bold leading-[1.08]">

            More Than
            <br />

            Just a{" "}

            <span className="text-[#D85A22]">
              Cafe.
            </span>

          </h2>

          <p className="mt-7 text-[13px] leading-[1.9] text-[#351708]">
            Irani cafes have always been more than places to
            drink chai. They are spaces where conversations
            begin, friendships grow and generations meet.
          </p>

          <p className="mt-5 text-[13px] leading-[1.9] text-[#351708]">
            At 90ml Irani Cafe, we bring that timeless feeling
            into a warm, modern space while keeping the soul
            of the traditional Irani cafe alive.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex rounded-full bg-[#062D27] px-6 py-3.5 text-[11px] font-semibold text-white transition hover:bg-[#D85A22]"
          >
            Learn More →
          </a>

        </div>

      </div>

    </section>
  );
}

export default Story;