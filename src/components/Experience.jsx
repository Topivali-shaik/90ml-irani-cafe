const experiences = [
  {
    icon: "☕",
    title: "Authentic Chai",
    text: "Traditional Irani chai brewed with care.",
  },
  {
    icon: "♥",
    title: "Warm Hospitality",
    text: "A place where everyone feels at home.",
  },
  {
    icon: "◉",
    title: "Timeless Taste",
    text: "Classic recipes with unforgettable flavour.",
  },
];

function Experience() {
  return (
    <section className="flex min-h-screen items-center bg-[#F3E2CC] py-24 text-[#062D27]">

      <div className="mx-auto w-[86%] max-w-[1200px]">

        {/* HEADER */}
        <div className="text-center">

          <div className="mb-5 flex items-center justify-center gap-3 text-[9px] font-bold tracking-[0.25em] text-[#D85A22]">

            <span className="h-px w-7 bg-[#D85A22]" />

            THE 90ML EXPERIENCE

            <span className="h-px w-7 bg-[#D85A22]" />

          </div>

          <h2 className="font-serif text-[42px] font-bold">
            Why 90ml?
          </h2>

          <p className="mx-auto mt-5 max-w-[500px] text-[13px] leading-[1.8] text-[#351708]">
            Because sometimes the smallest cup can hold
            the biggest memories.
          </p>

        </div>

        {/* FEATURES */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {experiences.map((item) => (

            <div
              key={item.title}
              className="rounded-[28px] border border-[#062D27]/10 bg-white/30 p-10 text-center"
            >

              <div className="mx-auto flex h-[90px] w-[90px] items-center justify-center rounded-full bg-[#062D27] text-[32px] text-[#F3E2CC]">
                {item.icon}
              </div>

              <h3 className="mt-7 font-serif text-[21px] font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-[12px] leading-[1.7] text-[#351708]/70">
                {item.text}
              </p>

            </div>

          ))}

        </div>

        {/* VISIT US */}
        <div className="mt-12 grid overflow-hidden rounded-[28px] bg-[#062D27] text-[#F3E2CC] md:grid-cols-2">

          <div className="p-10 md:p-14">

            <div className="text-[9px] font-bold tracking-[0.25em] text-[#D85A22]">
              VISIT US
            </div>

            <h3 className="mt-4 font-serif text-[32px] font-bold">
              Your Table
              <br />
              Awaits.
            </h3>

            <p className="mt-5 max-w-[380px] text-[12px] leading-[1.8] text-[#F3E2CC]/65">
              Come in for a cup of chai, stay for the
              conversation and leave with a little piece
              of Irani cafe tradition.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex rounded-full border border-[#D85A22] px-6 py-3 text-[11px] font-semibold text-[#D85A22] transition hover:bg-[#D85A22] hover:text-white"
            >
              Get Directions →
            </a>

          </div>

          {/* MAP PLACEHOLDER */}
          <div className="relative min-h-[300px] bg-[#D85A22]">

            <div className="absolute inset-8 rounded-[20px] border border-white/30">

              <div className="flex h-full items-center justify-center">

                <div className="text-center text-white">

                  <div className="text-[42px]">
                    📍
                  </div>

                  <p className="mt-3 text-[13px] font-semibold">
                    90ml Irani Cafe
                  </p>

                  <p className="mt-1 text-[10px] text-white/75">
                    Come visit us
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Experience;